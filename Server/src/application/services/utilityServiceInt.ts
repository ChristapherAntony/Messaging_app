import utilityServiceImpl, { ImageFit } from "../../frameworks/services/utilityServiceImpl";

const utilityServiceInt = (service: utilityServiceImpl) => {


    const generateFileName = (fileName: string) => service.generateFileName(fileName)

    const imageResize = (file: Express.Multer.File, height: number, width: number, fit?: ImageFit) => {
        return service.imageResize(file, height, width, fit)
    }

    return { generateFileName, imageResize }

}

type utilityServiceInt = ReturnType<typeof utilityServiceInt>;
export default utilityServiceInt;