import { Router } from "express";
import UserRouter from "./user/user.router";

const AppRouter = Router();

AppRouter.use("", UserRouter);

export default AppRouter;
