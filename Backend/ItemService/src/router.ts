import { Router } from "express";
import ItemRouter from "./item/item.router";

const AppRouter: Router = Router();

AppRouter.use("/items", ItemRouter);

export default AppRouter;