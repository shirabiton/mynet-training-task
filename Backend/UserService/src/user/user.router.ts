import { Router } from "express";
import { wrap } from "./../../../../Libs/src/utils/helper/wrapper";
import { UserController } from "./user.controller";

const UserRouter: Router = Router();

UserRouter.post("/signin", wrap(UserController.signIn));
UserRouter.get("/logout", wrap(UserController.logOut));
UserRouter.get("/verify", wrap(UserController.verifyToken));
UserRouter.get("", wrap(UserController.getAll));
UserRouter.get("/:userId", wrap(UserController.getUserById));
UserRouter.get("/email/:userEmail", wrap(UserController.getUserByEmail));

export default UserRouter;
