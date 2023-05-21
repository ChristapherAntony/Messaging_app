export interface UserEntityType {
    profile_name: string;
    phone_number: string;
    email: string;
    profile_image: string;
    password: string;
}

class UserEntity {
    profile_name: string;
    phone_number: string;
    email: string;
    profile_image: string;
    password: string;

    constructor(profile_name: string, phone_number: string, email: string, profile_image: string, password: string) {
        this.profile_name = profile_name;
        this.phone_number = phone_number;
        this.email = email;
        this.profile_image = profile_image;
        this.password = password;
    }
}

export default UserEntity;


