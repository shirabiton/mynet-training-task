import { Router } from "express";
import { wrapAsyncMiddleware } from "../../../../Libs/src/utils/helper/wrapper";
import { verifyToken } from "../../../../Libs/src/utils/jwt/jwt";
import { ItemController } from "./item.controller";

const ItemRouter = Router();

ItemRouter.get("", verifyToken, wrapAsyncMiddleware(ItemController.getAll));

ItemRouter.get(
  "/:itemId",
  verifyToken,
  wrapAsyncMiddleware(ItemController.getItemById)
);

export default ItemRouter;
