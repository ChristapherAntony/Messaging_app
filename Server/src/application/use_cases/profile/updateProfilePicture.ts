import { ERROR } from "../../../frameworks/webserver/common/errors";
import authRepositoryInt from "../../repositories/authRepositoryInt";
import cloudStorageServiceInt from "../../services/cloudStorageServiceInt";
import utilityServiceInt from "../../services/utilityServiceInt";

const updateProfilePicture = async (
    file: Express.Multer.File, authRepository: authRepositoryInt, utilityServices: utilityServiceInt,
    cloudStorageService: cloudStorageServiceInt
) => {

    // 0. get user details by id
    const user = await authRepository.findUserById('64689213b9d16a74ce08efeb');
    if (!user) throw new ERROR.NotFoundError('Requested user not exists !');


    // 1. Generate the new file name for saving to avoid file name conflict
    const newFileName = await utilityServices.generateFileName(file.originalname);


    // 2. Image resize to fit into the profile requirement
    const resizedFile = await utilityServices.imageResize(file, 1080, 1080);


    // 3. upload the file to the cloud storage
    await cloudStorageService.uploadFile(newFileName, file.mimetype, resizedFile);


    // 4. delete old image from cloud storage
    await cloudStorageService.removeFile(user.profile_image.toString());


    // 5. Update the user's profile image URL in the database
    const newUser = await authRepository.updateProfilePicture('64689213b9d16a74ce08efeb', newFileName);
    if (!newUser) throw new ERROR.NotFoundError('Failed to update user!');

    // 6. Return the new user with image URL from S3
    newUser.profile_image = await cloudStorageService.getFile(newFileName)

    return { newUser }

}
export default updateProfilePicture