import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Router } from "express";
import { errorCatcherMiddleware } from "../server/errors/middlewares";
import { CORS_OPTIONS } from "./consts";

export const initApp = (AppRouter: Router, port: number) => {
  const app = express();

  dotenv.config();

  app.use(express.json());

  app.use(cors(CORS_OPTIONS));

  app.use(cookieParser());

  app.use(AppRouter);

  app.use(errorCatcherMiddleware);

  app.listen(port, () => {
    console.log(`Service is running on http://localhost:${port}`);
  });
};
