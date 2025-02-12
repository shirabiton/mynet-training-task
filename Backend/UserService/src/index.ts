import { initApp } from '../../../Libs/src/server/index';
import AppRouter from "./router";

initApp(AppRouter, Number(process.env.PORT) || 3002);