import { Request, Response, Router } from "express";


const userRouter = (router: Router) => {

    router.get('/', (req: Request, res: Response) => {
        res.send('This is the router home🏡🏡🏡🏡 page');
    });
    


    
    return router
}

export default userRouter;