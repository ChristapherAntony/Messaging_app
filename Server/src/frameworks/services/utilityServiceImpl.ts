
import { v4 as uuidv4 } from 'uuid';

import path from "path";
import sharp from "sharp";
import { Response } from 'express';
import config from '../../config';

export enum ImageFit {
    Cover = 'cover',
    Contain = 'contain',
    Fill = 'fill',
    Inside = 'inside',
    Outside = 'outside'
}
const utilityServiceImpl = () => {

    const generateFileName = async (fileName: string) => {

        // Generate a UUID
        const uuid = uuidv4();
        // Extract a portion of the UUID string to get a shorter identifier
        const shortId = uuid.substr(0, 6); // Extract the first 6 characters
        // Get the file extension
        const fileExtension = path.extname(fileName);

        // Generate the new file name
        return `${path.basename(fileName, fileExtension)}_${shortId}${fileExtension}`;
    }

    const imageResize = async (file: Express.Multer.File, height: number, width: number, fit: ImageFit = ImageFit.Cover) => {
        return await sharp(file.buffer).resize({ height: height, width: width, fit: fit }).toBuffer()
    }

    const attachTokenToCookie = async (cookieName: string, Token: string, res: Response) => {
        res.cookie(cookieName, Token, {
            httpOnly: true,
            secure: config.nodeEnvironment === 'production',
            // signed: false,
            maxAge: 24 * 60 * 60 * 1000
        })

        return
    }


    return { generateFileName, imageResize, attachTokenToCookie }
}


type utilityServiceImpl = ReturnType<typeof utilityServiceImpl>;
export default utilityServiceImpl;