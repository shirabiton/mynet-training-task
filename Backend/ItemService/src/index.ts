import { initApp } from "../../../Libs/src/server/index";
import AppRouter from "./router";
import express from "express";

const app = express();

initApp(Number(process.env.PORT) | 3001, app, AppRouter);
