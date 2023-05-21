import s3StorageServiceImpl from "../../frameworks/services/s3StorageServiceImpl";

const cloudStorageServiceInt = (service: s3StorageServiceImpl) => {

    const uploadFile = async (fileKey: string, contentType: string, fileBuffer: Buffer) => {
        return service.uploadFile(fileKey, contentType, fileBuffer)
    }

    const getFile = async (fileKey: string) => service.getFile(fileKey)

    const removeFile = async (fileKey: string) =>service.removeFile(fileKey)

    return { uploadFile, getFile, removeFile }

}

type cloudStorageServiceInt = ReturnType<typeof cloudStorageServiceInt>;
export default cloudStorageServiceInt;