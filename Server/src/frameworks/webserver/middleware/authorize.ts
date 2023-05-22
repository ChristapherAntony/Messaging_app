import { NextFunction, Request, Response } from "express";

interface CurrentUser {
    id: string;
    roles: string[];
}

const authorize = (requiredRoles: string[]) => (req: Request, res: Response, next: NextFunction) => {

    console.log('in authorisation middle')

    const currentUser = req.currentUser as CurrentUser;
    if (!currentUser) {
        console.log('no user in auth')

        return res.status(401).json({ error: "Unauthorized: User not authenticated" });
    }
    if (!requiredRoles.some(role => currentUser.roles.includes(role))) {
        console.log('no user in auth not mathced')
        return res.status(403).json({ error: "Forbidden: User does not have required role(s)" });   
    }
    next();
};

export default authorize;
