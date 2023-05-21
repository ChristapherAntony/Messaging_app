import { ERROR } from "../../../frameworks/webserver/common/errors"
import UserEntity from "../../entities/user"
import authRepositoryInt from "../../repositories/authRepositoryInt"
import authServiceInt from "../../services/authServiceInt"
import otpServiceInt from "../../services/otpServiceInt"

const optVerifyAndCreateUser = async (
    VerificationSID: string, otp: string, phone_number: string,
    authRepositoryInt: authRepositoryInt, optService: otpServiceInt, authServiceInt: authServiceInt
) => {
    // 1 need to check and get the temp user 
    const existingTempUser = await authRepositoryInt.findTemp(phone_number)


    // 3 reject if fail
    if (!existingTempUser ) {
        throw new ERROR.OTPExpiredError('Otp Expired! Try again...')
    }
    // 2 verify the otp
    const verificationCheck = await optService.verifyOTP(VerificationSID, otp, phone_number)

    if (!verificationCheck.valid) {
        throw new ERROR.InvalidInputError('Invalid OTP...')
    }

    // 4 save user
    const { profile_name, email, profile_image, password } = existingTempUser
    const userEntity = new UserEntity(profile_name, phone_number, email, profile_image, password)
    const newUser = await authRepositoryInt.createUser(userEntity)


    // 5 sign in and send jwt

    const token = authServiceInt.generateToken(newUser._id.toString());




    return { newUser, token }
}

export default optVerifyAndCreateUser