import { Router } from "express";
import { wrapController } from './../../../../Libs/src/utils/helper/wrapper';
import { ItemController } from './item.controller';

const ItemRouter: Router = Router();

ItemRouter.get(
    "",
    wrapController(ItemController.getAll)
),
    ItemRouter.get(
        "/:itemId",
        wrapController(ItemController.getItemById)
    )

export default ItemRouter;