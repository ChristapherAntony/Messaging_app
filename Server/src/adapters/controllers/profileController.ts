import { NextFunction, Request, Response } from "express"
import authRepositoryInt from "../../application/repositories/authRepositoryInt";
import cloudStorageServiceInt from "../../application/services/cloudStorageServiceInt";
import utilityServiceInt from "../../application/services/utilityServiceInt";
import updateProfilePicture from "../../application/use_cases/profile/updateProfilePicture";
import { ERROR } from "../../frameworks/webserver/common/errors";

const profileController = (authRepository: authRepositoryInt, cloudStorageService: cloudStorageServiceInt,
    utilityServices: utilityServiceInt
) => {
    const updateProfilePictureController = async (req: Request, res: Response, next: NextFunction) => {
        try {

            const file = req.file
            if (!file) throw new ERROR.BadRequestError('file required ')

            const {newUser} = await updateProfilePicture(file, authRepository, utilityServices, cloudStorageService)
      
    
            res.status(200).json({ message: 'Profile picture updated', newUser });
        } catch (error) {
            console.error('Error:', error);
            next(error);
        }

    } 

    return { updateProfilePictureController }
}

export default profileController