import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ConfigType } from "../../../config";

declare global {
    namespace Express {
        interface Request {
            currentUser?: CurrentUser;
        }
    }
}
interface CurrentUser {
    id: string;
}

const authenticate = (config: ConfigType) => (req: Request, res: Response, next: NextFunction): void => {

    if (!req.cookies['jwt']) {
        return next();
    }
    try {
        const payload = jwt.verify(req.cookies['jwt'], config.JWT_SECRET) as CurrentUser;
        console.log(payload,'pay load')
        req.currentUser = payload;
    } catch (error) { }
    next();
};

export default authenticate;
