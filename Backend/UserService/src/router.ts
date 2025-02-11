import { Router } from "express";
import UserRouter from "./user/user.router";

const AppRouter: Router = Router();

AppRouter.use("/users", UserRouter);

export default AppRouter;