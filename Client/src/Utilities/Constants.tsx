export const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;



// urls
export const GOOGLE_AUTH = (token: string) => `/auth/google-auth/${token}`
export const REGISTER = `/auth/register`;
export const OTP_VERIFY = `/auth/register/otp-verification`;
export const LOGIN = `/auth/login`;

export const PROFILE_IMAGE_UPLOAD = `/profile/image`;
