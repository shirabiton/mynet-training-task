import { Router } from "express";
import { wrapController } from './../../../../Libs/src/utils/helper/wrapper';
import { UserController } from "./user.controller";

const UserRouter: Router = Router();

UserRouter.get(
    "",
    wrapController(UserController.getAll)
),
    UserRouter.get(
        "/:userId",
        wrapController(UserController.getUserById)
    ),
    UserRouter.get(
        "/email/:userEmail",
        wrapController(UserController.getUserByEmail)
    ),
    UserRouter.get(
        "/signin/:userId",
        wrapController(UserController.signIn)
    )

export default UserRouter;