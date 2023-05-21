
import twilio from 'twilio';
require('dotenv').config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const serviceID = process.env.TWILIO_serviceID;
const client = twilio(accountSid, authToken);

const otpServices = () => {
    if (!serviceID) {
        throw new Error("TWILIO_serviceID is not defined.");
    }

    const sendOTP = async (phoneNumber: string) => {
        return new Promise<any>((resolve, reject) => {
            client.verify.services(serviceID)
                .verifications.create({
                    to: phoneNumber,
                    channel: 'sms'
                })
                .then((verification: any) => {
                    console.log(verification);
                    resolve(verification.sid);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    };

    const verifyOTP = (verificationSid: string, otp: string, phone: string): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            client.verify.services(serviceID)
                .verificationChecks
                .create({
                    verificationSid: verificationSid,
                    to: phone,
                    code: otp,
                })
                .then((verificationCheck: any) => {
                    resolve(verificationCheck);
                })
                .catch((error: any) => {
                    reject(error);
                });
        });
    };

    return { sendOTP, verifyOTP };
};

type otpServices = ReturnType<typeof otpServices>;
export default otpServices;


// import { resolve } from "promise";
// import { config } from "dotenv";

// config(); // Load environment variables from .env file

// const SID = process.env.TWILIO_SID;
// const TOKEN = process.env.TWILIO_TOKEN;
// const serviceID = process.env.TWILIO_serviceID;
// let mobileNumber: string;

// const client = twilio(SID, TOKEN);

// export const sendOTP = (phoneNumber: string): Promise<any> => {
//   mobileNumber = phoneNumber;
// return new Promise<any>((resolve, reject) => {
//     client.verify
//       .services('VAdd9e3febd896f99e04ca36e38650ba6d')
//       .verifications.create({
//         to: phoneNumber,
//         channel: 'sms',
//       })
//       .then((data: any) => {
//         resolve(data);
//       })
//       .catch((error: any) => {
//         reject(error);
//       });
//   });
// };

// export const verifyOTP = (OTP: string): Promise<{ status: boolean }> => {
//   return new Promise<{ status: boolean }>((resolve, reject) => {
//     client.verify
//       .services(serviceID)
//       .verificationChecks.create({
//         to: `+${mobileNumber}`,
//         code: OTP,
//       })
//       .then((data: any) => {
//         if (data.status === "approved") {
//           resolve({ status: true });
//         } else {
//           resolve({ status: false });
//         }
//       });
//   });
// };






        // return await client.messages.create({
        //     body: `Your OTP is: ${12345}`,
        //     from: process.env.TWILIO_PHONE_NUMBER,
        //     to: '+919446655316'
        // });