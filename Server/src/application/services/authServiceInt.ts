import authServiceImp from "../../frameworks/services/authService";


const authServiceInt = (service: authServiceImp) => {
  const encryptPassword = (password: string) => service.encryptPassword(password);

  const comparePassword = (password: string, hashedPassword: string) =>
    service.comparePassword(password, hashedPassword);

  const verifyPassword = (token: string) => service.verifyToken(token)

  const generateToken = (payload: string) => service.generateToken(payload);

  return {
    encryptPassword,
    comparePassword,
    verifyPassword,
    generateToken
  };
}

type authServiceInt = ReturnType<typeof authServiceInt>;
export default authServiceInt;