import config from "../../../config";
import { ERROR } from "../../../frameworks/webserver/common/errors";
import authRepositoryInt from "../../repositories/authRepositoryInt";
import authServiceInt from "../../services/authServiceInt";


const login = async (phone_number: string, password: string, authRepositoryInt: authRepositoryInt, authServiceInt: authServiceInt) => {
    
    // find user with phone number
    const existingUser = await authRepositoryInt.findUserByPhoneNumber(phone_number)
    if (!existingUser) {
        throw new ERROR.NotFoundError('Invalid Phone number! user not found')
    }


    //compare password
    const isLoggedIn =await authServiceInt.comparePassword(password, existingUser.password)
    
    if(!isLoggedIn){
        throw new ERROR.PasswordMismatchError('Invalid password !')
    }
    
    //sign jwt
    const payload = {
        userId: existingUser._id.toString(),
        roles: [config.authRoles.user]
    }
    const token = authServiceInt.generateToken(payload);

    return {existingUser,token}

}
export default login