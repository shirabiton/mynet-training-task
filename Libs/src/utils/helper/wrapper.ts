import { NextFunction, Request, Response } from "express";

export const wrapController = (func: (req: Request, res: Response, next?: NextFunction) => Promise<void>) =>
    (req: Request, res: Response, next: NextFunction): void => {
        func(req, res, next).catch(next);
    }