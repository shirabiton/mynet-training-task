import { initApp } from "./../../../Libs/src/server/index";
import config from "./config";
import GatewayRouter from "./gateway/gateway.router";

initApp(GatewayRouter, config.PORT);
