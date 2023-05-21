
import { v4 as uuidv4 } from 'uuid';

import path from "path";
import sharp from "sharp";

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


    return { generateFileName, imageResize }
}


type utilityServiceImpl = ReturnType<typeof utilityServiceImpl>;
export default utilityServiceImpl;