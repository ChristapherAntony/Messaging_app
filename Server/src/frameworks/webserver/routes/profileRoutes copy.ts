import { Request, Response, Router } from "express";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import User from "../../database/mongodb/models/user";
import dotenv from 'dotenv';
import path from "path";
import sharp from "sharp";

import { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";



dotenv.config()

const aws_access_key_id = process.env.AWS_ACCESS_KEY_ID
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY
const s3_bucket_name = process.env.S3_BUCKET_NAME
const bucket_region = process.env.BUCKET_REGION

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })



const s3 = new S3Client({
    credentials: {
        accessKeyId: aws_access_key_id || '',
        secretAccessKey: aws_secret_access_key || '',
    },
    region: bucket_region
})



const profileRoutes2 = (router: Router) => {

    router.post('/image', upload.single('profile_image'), async (req: Request, res: Response) => {
        const file = req.file as Express.Multer.File;

        // Generate a UUID____________________
        const uuid = uuidv4();
        // Extract a portion of the UUID string to get a shorter identifier
        const shortId = uuid.substr(0, 6); // Extract the first 6 characters
        // Get the file extension
        const fileExtension = path.extname(file.originalname);
        // Generate the new file name
        const newFileName = `${path.basename(file.originalname, fileExtension)}_${shortId}${fileExtension}`;

        //Image resize__________________________
        const fileBuffer = await sharp(file.buffer).resize({ height: 1080, width: 1080, fit: "cover" }).toBuffer()

        const uploadParams = {
            Bucket: s3_bucket_name,
            Key: newFileName,
            Body: fileBuffer,
            ContentType: file.mimetype
        };

        const command = new PutObjectCommand(uploadParams)
        await s3.send(command);


        // Update the user's profile image URL in the database
        const userId = '646714a5bd724b12db264332'; // Assuming you have a user ID in the request object
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send('User not found');
        }

        //need to delete old image from s3 since user new image updated and going to record to his db

        const deleteParams = {
            Bucket: s3_bucket_name || '',
            Key: user.profile_image.toString()
        }
        const commandDel = new DeleteObjectCommand(deleteParams);
        await s3.send(commandDel);


        //update the onld image file name with new file name that we created in s3 
        user.profile_image = newFileName;
        await user.save();


        /////////////---get request-----////
        // const client = new S3Client(clientParams);

        const getObjectParams = {
            Bucket: s3_bucket_name || '',
            Key: user.profile_image.toString()
        }
        const commandGet = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, commandGet, { expiresIn: 3600 });
        user.profile_image = url
        console.log(user);
        res.status(200).json(user)
    });





    return router;
}

export default profileRoutes2;
