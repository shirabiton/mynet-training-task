import { initApp } from "./../../../Libs/src/server/index";
import router from "./gateway/gateway.router";

const port = 3000;

initApp(router, port);
