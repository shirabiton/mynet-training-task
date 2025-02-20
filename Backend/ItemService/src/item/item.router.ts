import { Router } from "express";
import { wrapController } from "./../../../../Libs/src/utils/helper/wrapper";
import { verifyToken } from "./../../../../Libs/src/utils/jwt/jwt";
import { ItemController } from "./item.controller";

const ItemRouter = Router();

ItemRouter.get("", verifyToken, wrapController(ItemController.getAll));
ItemRouter.get(
  "/:itemId",
  verifyToken,
  wrapController(ItemController.getItemById)
);

export default ItemRouter;
