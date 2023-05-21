import { log } from "console"
import { ERROR } from "../../../frameworks/webserver/common/errors"
import UserEntity, { UserEntityType } from "../../entities/user"
import authRepositoryInt from "../../repositories/authRepositoryInt"
import otpServiceInt from "../../services/otpServiceInt"
import authServiceInt from "../../services/authServiceInt"


const tempRegisterAndSendOtp = async (
    userData: UserEntityType, authRepositoryInt: authRepositoryInt, optService: otpServiceInt,
    authServiceInt:authServiceInt
    ) => {

    const { profile_name, phone_number, email, profile_image, password } = userData

    //check the mobile number is already registered ?
    let existingUser = await authRepositoryInt.findUserByPhoneNumber(phone_number)

    if (existingUser) {
        throw new ERROR.UserExistsError(`${phone_number} is already registered`)
    }



    //save to temp database 1 minute to enter otp
    const encryptedPassword= await authServiceInt.encryptPassword(password)
    const userEntity = new UserEntity(profile_name, phone_number, email, profile_image, encryptedPassword)
    let tempUser = await authRepositoryInt.createTempUser(userEntity)


    //send otp with twilio 
    let VerificationSID = await optService.sendOtp(phone_number)

   

    // return saved temp user data 
    return { tempUser, VerificationSID }
}

export default tempRegisterAndSendOtp


