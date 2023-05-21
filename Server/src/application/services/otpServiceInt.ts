import otpServices from "../../frameworks/services/otp-services";

const otpServiceInt = (repository: otpServices) => {


    const sendOtp = (phone: string) => repository.sendOTP(phone);

    const verifyOTP = (verificationSid: string, otp: string,phone:string) => repository.verifyOTP(verificationSid, otp,phone);

    return { sendOtp, verifyOTP }

}

type otpServiceInt = ReturnType<typeof otpServiceInt>;
export default otpServiceInt;