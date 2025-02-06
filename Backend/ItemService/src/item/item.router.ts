import { Router } from "express";
import { wrapController } from '../../../../Libs/src/utils/helper/wrapper';
import { ItemController } from './item.controller';

const ItemRouter: Router = Router();

ItemRouter.get(
    "",
    wrapController(ItemController.getAll)
),
ItemRouter.get(
    "/items",
    wrapController(ItemController.getAll)
),
ItemRouter.get(
    "/items:itemId",
    wrapController(ItemController.getItemById)
)