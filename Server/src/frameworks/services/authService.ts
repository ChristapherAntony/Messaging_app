import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config, { ConfigType } from '../../config';



const authServiceImp = () => {
    const encryptPassword = async (password: string) => {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        return password
    }

    const comparePassword = (password: string, hashedPassword: string) => {
        return bcrypt.compare(password, hashedPassword)
    }

    const generateToken = (payload: any) => {
        const token = jwt.sign(payload, config.JWT_SECRET || '123', {
            expiresIn: "1d",
        });
        return token
    }

    const verifyToken = (token: string) => {
        return jwt.verify(token, config.JWT_SECRET || '123')
    }

    return {
        encryptPassword,
        comparePassword,
        generateToken,
        verifyToken
    }
}


type authServiceImp = ReturnType<typeof authServiceImp>;
export default authServiceImp;