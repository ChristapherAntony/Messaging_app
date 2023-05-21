import { Request, Response, Router } from "express";
import upload from "../middleware/multer";
import profileController from "../../../adapters/controllers/profileController";
import authRepositoryInt from "../../../application/repositories/authRepositoryInt";
import authRepositoryImpl from "../../database/mongodb/repositories/authRepositoryImpl";
import cloudStorageServiceInt from "../../../application/services/cloudStorageServiceInt";
import s3StorageServiceImpl from "../../services/s3StorageServiceImpl";
import utilityServiceInt from "../../../application/services/utilityServiceInt";
import utilityServiceImpl from "../../services/utilityServiceImpl";



const profileRoutes = (router: Router) => {
    const authRepository = authRepositoryInt(authRepositoryImpl())
    const cloudStorageService = cloudStorageServiceInt(s3StorageServiceImpl())
    const utilityServices = utilityServiceInt(utilityServiceImpl())
    
    const controller = profileController(authRepository, cloudStorageService, utilityServices)

    router.post('/image', upload.single('profile_image'), controller.updateProfilePictureController);

    return router;
}

export default profileRoutes;
