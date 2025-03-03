import { Router } from "express";
import { wrapAsyncMiddleware } from "../../../../Libs/src/server/wrapper";
import { validateRequest } from "./../../../../Libs/src/utils/joi/joi.functions";
import { UserController } from "./user.controller";
import { userSchema } from "./user.validator";

const UserRouter = Router();

UserRouter.post(
  "/login",
  validateRequest(userSchema),
  wrapAsyncMiddleware(UserController.logIn)
);

UserRouter.get("/logout", wrapAsyncMiddleware(UserController.logOut));

UserRouter.get("/verify", wrapAsyncMiddleware(UserController.verifyToken));

UserRouter.get("", wrapAsyncMiddleware(UserController.getAll));

UserRouter.get("/:userId", wrapAsyncMiddleware(UserController.getUserById));

export default UserRouter;
