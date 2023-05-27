import express, { Application, Router } from "express";
import mongoose from 'mongoose';

import connection from './frameworks/database/mongodb/connection';
import expressConfig from "./frameworks/webserver/express";
import { routes } from "./frameworks/webserver/routes/routes";
import config, { ConfigType } from "./config";
import serverConfig from "./frameworks/webserver/server";
import errorHandlingMiddleware from "./frameworks/webserver/middleware/errorHandlingMiddleware";

const app: Application = express();
const router: Router = express.Router()
// app.set('trust proxy', true);  //https 
expressConfig(app, config);

routes(app, router);

connection(mongoose, config).connectToMongo();

app.use(errorHandlingMiddleware);

serverConfig(app, config).startServer();
