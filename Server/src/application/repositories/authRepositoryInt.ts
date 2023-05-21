import authRepositoryImpl from "../../frameworks/database/mongodb/repositories/authRepositoryImpl";
import { UserEntityType } from "../entities/user";

const authRepositoryInt = (repository: authRepositoryImpl) => {

    const createUser = (userEntity: UserEntityType) => repository.createUser(userEntity)
    const createTempUser = (userEntity: UserEntityType) => repository.createTempUser(userEntity)
    const findUserByEmail = (email: string | undefined) => repository.findByEmail(email)
    const findUserByPhoneNumber = (phone: string) => repository.findByPhone(phone)
    const findUserById = (id: string) => repository.findById(id)

    const findTemp = (phone: string) => repository.findTemp(phone)

    const updateProfilePicture = (id: string, newFileName: string) => repository.updateProfilePicture(id, newFileName)


    return { createUser, findUserByEmail, findUserByPhoneNumber, findUserById, findTemp, createTempUser, updateProfilePicture }

}

type authRepositoryInt = ReturnType<typeof authRepositoryInt>;
export default authRepositoryInt;