import { Application, Request, Response, Router } from 'express';
import userRouter from './userRouter';
import authRouter from './authRouter';
import profileRoutes from './profileRoutes';

export const routes = (app: Application, router: Router) => {

  app.use('/api/v1/auth', authRouter(router));
  app.use('/api/v1/user', userRouter(router));
  app.use('/api/v1/profile',profileRoutes(router))
  
};

export default routes