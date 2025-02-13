import { Router } from "express";
import { wrap } from "./../../../../Libs/src/utils/helper/wrapper";
import { notVerifyToken } from "./../../../../Libs/src/utils/jwt/jwt";
import { ItemController } from "./item.controller";

const ItemRouter: Router = Router();

ItemRouter.get("", notVerifyToken, wrap(ItemController.getAll)),
  ItemRouter.get("/:itemId", notVerifyToken, wrap(ItemController.getItemById));

export default ItemRouter;
