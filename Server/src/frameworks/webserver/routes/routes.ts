import { Application, Request, Response, Router } from 'express';
import userRouter from './userRouter';
import authRouter from './authRouter';
import profileRoutes from './profileRoutes';
import authorize from '../middleware/authorize';
import config from '../../../config';

export const routes = (app: Application, router: Router) => {

  app.use('/api/v1/auth', authRouter(router));
  app.use('/api/v1/user', userRouter(router));
  app.use('/api/v1/profile', authorize([config.authRoles.user]), profileRoutes(router))

};

export default routes