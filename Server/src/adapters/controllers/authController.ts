import { NextFunction, Request, Response } from "express"
import googleAuthentication from "../../application/use_cases/auth/googleAuthentication"
import { UserEntityType } from "../../application/entities/user"
import tempRegisterAndSendOtp from "../../application/use_cases/auth/register"
import { ERROR } from "../../frameworks/webserver/common/errors"
import optVerifyAndCreateUser from "../../application/use_cases/auth/optVerifyAndCreateUser"
import login from "../../application/use_cases/auth/login"




const authController = (
    authRepositoryInt: any, authRepositoryImpl: any, otpServiceInt: any, otpServices: any,
    authServiceInt: any, authServiceImp: any, cloudStorageServiceInt: any, s3StorageServiceImpl: any
) => {
    const repository = authRepositoryInt(authRepositoryImpl())
    const optService = otpServiceInt(otpServices())
    const authService = authServiceInt(authServiceImp())
    const cloudStorageService = cloudStorageServiceInt(s3StorageServiceImpl())

    const register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            //temp placed here
            if (req.body.confirm_password !== req.body.password) {
                throw new ERROR.PasswordMismatchError('Confirm password does not match password')
            }
            const userData: UserEntityType = req.body;
            const response = await tempRegisterAndSendOtp(userData, repository, optService, authService)

            // Send a response if needed
            res.status(200).json({ message: `User temp user registered verify otp send to ${userData.phone_number} with Verification SID: ${response.VerificationSID}`, response });
        } catch (error) {
            next(error)
        }
    }

    const passwordLogin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { phone_number, password } = req.body
            const response = await login(phone_number, password, repository, authService)
            // Store it on session object
            // req.session = {
            //     jwt: response.token,
            // };



            res.cookie('jwt', response.token, {
                httpOnly: true,
                secure: false,
                // signed: false,
                maxAge: 24 * 60 * 60 * 1000
            })


            res.status(200).json(response.existingUser);
        } catch (error) {
            next(error)
        }
    }

    const veryOtpAndRegister = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { VerificationSID, phone_number, otp } = req.body
            const response = await optVerifyAndCreateUser(VerificationSID, otp, phone_number, repository, optService, authService)


            // Store it on cookie
            res.cookie('jwt', response.token, {
                httpOnly: true,
                secure: false,
                // signed: false,
                maxAge: 24 * 60 * 60 * 1000
            })

            res.status(200).json({ user: response.newUser, message: "User Created and signed in  Successfully" })
        } catch (error) {
            next(error)
        }
    }
    const googleAuth = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.params.token
            const response = await googleAuthentication(token, repository, authService, cloudStorageService)
            // User is not registered, so further details are required
            if (response.userData.loggedIn) {

                // Store it on req cookie
                res.cookie('jwt', response.token, {
                    httpOnly: true,
                    secure: false,
                    // signed: false,
                    maxAge: 24 * 60 * 60 * 1000
                })

                const message = 'User already registered, login successful.';
                return res.status(200).json({ message, data: response.userData });
            } else {
                const message = 'Please fill in the phone number and password, and try signing in.';
                return res.status(202).json({ message, data: response.userData });
            }

        } catch (error) {
            next(error)
        }

    }

    /**
    * @desc User logout
    * @route DELETE /auth/logout
    * @access public
    */
    const logOut = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.clearCookie('jwt')

            res.status(200).json({ message: 'logout successful' })
        } catch (error) {
            next(error)
        }
    }



    return { register, googleAuth, veryOtpAndRegister, passwordLogin, logOut }
}

export default authController