import express from "express";
import { initApp } from "../../../Libs/src/server/index";
import config from "./config";
import AppRouter from "./router";

const app = express();

initApp(app, AppRouter, config.PORT);
