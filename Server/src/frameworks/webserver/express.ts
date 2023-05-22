import express, { Application } from "express";
import morgan from 'morgan'
import cookieSession from 'cookie-session'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";
import authenticate from "./middleware/authenticate";
import { ConfigType } from "../../config";



export default function expressConfig(app: Application, config: ConfigType) {

    app.use(cors())
    app.use(morgan('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieSession({ signed: false, secure: true }))
    app.use(helmet({ xssFilter: true }))
    app.use(mongoSanitize())
    app.use(authenticate(config))

}