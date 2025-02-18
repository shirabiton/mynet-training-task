import express from "express";
import { initApp } from "../../../Libs/src/server/index";
import AppRouter from "./router";

const app = express();

initApp(Number(process.env.PORT || 3002), app, AppRouter);
