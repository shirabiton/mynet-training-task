import { initApp } from "../../../Libs/src/server/index";
import config from "./config";
import AppRouter from "./router";

initApp(AppRouter, config.PORT);
