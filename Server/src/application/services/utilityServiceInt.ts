import { Response } from "express";
import utilityServiceImpl, { ImageFit } from "../../frameworks/services/utilityServiceImpl";

const utilityServiceInt = (service: utilityServiceImpl) => {


    const generateFileName = (fileName: string) => service.generateFileName(fileName)

    const imageResize = (file: Express.Multer.File, height: number, width: number, fit?: ImageFit) => {
        return service.imageResize(file, height, width, fit)
    }
    const attachTokenToCookie = (cookieName: string, Token: string, res: Response) => service.attachTokenToCookie(cookieName, Token, res);
    
    return { generateFileName, imageResize, attachTokenToCookie }

}

type utilityServiceInt = ReturnType<typeof utilityServiceInt>;
export default utilityServiceInt;