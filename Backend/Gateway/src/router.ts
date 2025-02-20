import { Router } from "express";
import GatewayRouter from "./gateway/gateway.router";

const AppRouter: Router = Router();

AppRouter.use("", GatewayRouter);

export default AppRouter;
