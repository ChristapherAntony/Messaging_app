import { OAuth2Client, TokenPayload } from "google-auth-library";
import authRepositoryInt from "../../repositories/authRepositoryInt";
import { ERROR } from "../../../frameworks/webserver/common/errors";
import UserEntity from "../../entities/user";
import authServiceInt from "../../services/authServiceInt";
import cloudStorageServiceInt from "../../services/cloudStorageServiceInt";

const googleAuthentication = async (googleToken: any, authRepositoryInt: authRepositoryInt, authServiceInt: authServiceInt,
    cloudStorageServiceInt: cloudStorageServiceInt
) => {
    const CLIENT_ID = process.env.GOOGLEOAUTH_CLIENT_ID
    const CLIENT_SECRET = process.env.GOOGLEOAUTH_CLIENT_SECRET
    const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

    // Verify the Google token
    const ticket = await client.verifyIdToken({
        idToken: googleToken,
        audience: CLIENT_ID,
    });

    // Get the user's email from the verified token
    const { email, name, picture, email_verified } = ticket.getPayload() as TokenPayload;

    if (!email || !name || !picture || !email_verified) {
        throw new ERROR.BadRequestError('Google auth faild! User field undefined')
    }

    //if the user is already registered with this email need to write jwt and enable user login
    const existingUser = await authRepositoryInt.findUserByEmail(email)
    if (existingUser) {
        console.log('user already exists');
        const userData = {
            loggedIn: true,
            profile_name: existingUser.profile_name,
            email: existingUser.email,
            profile_image: existingUser.profile_image,
            phone_number: existingUser.phone_number
        }
        //get profile image url from s3
        userData.profile_image = await cloudStorageServiceInt.getFile(userData.profile_image.toString())
        //need to sign jwt 
        const token = authServiceInt.generateToken(existingUser._id.toString());

        return { userData, token }
    } else {
        //if user not registered we need to send the details get form google and request user to enter further details required to sign in
        const userData = {
            loggedIn: false,
            profile_name: name,
            phone_number: null,
            email: email,
            profile_image: picture,
            password: null,
            confirm_password: null
        }
        return { userData }
    }



}

export default googleAuthentication