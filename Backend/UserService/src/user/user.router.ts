import { Router } from "express";
import { wrapAsyncMiddleware } from "../../../../Libs/src/utils/helper/wrapper";
import { UserController } from "./user.controller";

const UserRouter = Router();

UserRouter.post("/login", wrapAsyncMiddleware(UserController.logIn));

UserRouter.get("/logout", wrapAsyncMiddleware(UserController.logOut));

UserRouter.get("/verify", wrapAsyncMiddleware(UserController.verifyToken));

UserRouter.get("", wrapAsyncMiddleware(UserController.getAll));

UserRouter.get("/:userId", wrapAsyncMiddleware(UserController.getUserById));

export default UserRouter;
