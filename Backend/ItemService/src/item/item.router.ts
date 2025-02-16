import { Router } from "express";
import { wrap } from "./../../../../Libs/src/utils/helper/wrapper";
import { verifyToken } from "./../../../../Libs/src/utils/jwt/jwt";
import { ItemController } from "./item.controller";

const ItemRouter: Router = Router();

ItemRouter.get("", verifyToken, wrap(ItemController.getAll));
ItemRouter.get("/:itemId", verifyToken, wrap(ItemController.getItemById));

export default ItemRouter;
