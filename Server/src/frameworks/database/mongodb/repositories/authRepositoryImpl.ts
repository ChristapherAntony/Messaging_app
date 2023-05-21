import { UserEntityType } from "../../../../application/entities/user";
import TempUser from "../models/tempUser";
import User from "../models/user";

const authRepositoryImpl = () => {

    const findByEmail = async (email: string | undefined) => User.findOne({ email })

    const findByPhone = async (phone_number: string) => User.findOne({ phone_number })

    const findById = async (id: string) => User.findById(id)


    const createUser = async (userEntity: UserEntityType) => {
        const user = new User(userEntity);
        const newUser = await user.save();
        return newUser
    }

    const createTempUser = async (userEntity: UserEntityType) => {
        const filter = { email: userEntity.email }; // Use the appropriate field for deleting the existing document
        // Delete the existing document if it exists
        await TempUser.findOneAndDelete(filter);

        const user = new TempUser(userEntity);
        const newUser = await user.save();
        return newUser
    }
    const findTemp = async (phone_number: string) => {

        console.log(phone_number);

        return TempUser.findOne({ phone_number })
    }

    const updateProfilePicture = async (id: string, newFileName: string) => {
        return await User.findByIdAndUpdate(
            id,
            { profile_image: newFileName },
            { new: true }
        );
    }

    return { createUser, findByEmail, findByPhone, findById, createTempUser, findTemp ,updateProfilePicture}
}

type authRepositoryImpl = ReturnType<typeof authRepositoryImpl>;
export default authRepositoryImpl;