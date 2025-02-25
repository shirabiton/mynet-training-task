import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Router } from "express";
import { errorCatcherMiddleware } from "../utils/errors/middlewares";

export const initApp = (AppRouter: Router, port: number) => {
  const app = express();
  
  dotenv.config();

  app.use(express.json());

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(cookieParser());

  app.use(AppRouter);

  app.use(errorCatcherMiddleware);

  app.listen(port, () => {
    console.log(`Service is running on http://localhost:${port}`);
  });
};
