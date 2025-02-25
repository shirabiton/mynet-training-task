import { Router } from "express";
import { wrapController } from "../../../../Libs/src/utils/helper/wrapper";
import { UserController } from "./user.controller";

const UserRouter = Router();

UserRouter.post("/login", wrapController(UserController.logIn));

UserRouter.get("/logout", wrapController(UserController.logOut));

UserRouter.get("/verify", wrapController(UserController.verifyToken));

UserRouter.get("", wrapController(UserController.getAll));

UserRouter.get("/:userId", wrapController(UserController.getUserById));

export default UserRouter;
