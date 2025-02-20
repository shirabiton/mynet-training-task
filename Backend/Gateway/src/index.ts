import { initApp } from "./../../../Libs/src/server/index";
import GatewayRouter from "./gateway/gateway.router";

const port = 3000;

initApp(GatewayRouter, port);
