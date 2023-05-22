import { Request, Response, Router } from "express";
import authController from "../../../adapters/controllers/authController";
import authRepositoryInt from "../../../application/repositories/authRepositoryInt";
import authRepositoryImpl from "../../database/mongodb/repositories/authRepositoryImpl";
import multer from "multer";
import otpServiceInt from "../../../application/services/otpServiceInt";
import otpServices from "../../services/otp-services";
import authServiceInt from "../../../application/services/authServiceInt";
import authServiceImp from "../../services/authService";
import cloudStorageServiceInt from "../../../application/services/cloudStorageServiceInt";
import s3StorageServiceImpl from "../../services/s3StorageServiceImpl";
import authorize from "../middleware/authorize";
import config from "../../../config";
// Create a multer instance to handle form data
const upload = multer();

const authRouter = (router: Router) => {

    const controller = authController(
        authRepositoryInt, authRepositoryImpl, otpServiceInt, otpServices, authServiceInt, authServiceImp,
        cloudStorageServiceInt, s3StorageServiceImpl
    );

    // Route for Google authentication
    router.route('/google-auth/:token').get(controller.googleAuth);

    // Route for user registration
    router.route('/register').post(controller.register);

    router.route('/login').post(controller.passwordLogin);

    router.route('/register/otp-verification').post(controller.veryOtpAndRegister);


    // Additional route
    router.get('/',authorize([config.authRoles.user]), (req: Request, res: Response) => {

        res.send('This is the router auth');
    });

    return router;
}

export default authRouter;
