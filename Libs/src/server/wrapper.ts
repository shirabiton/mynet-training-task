import { NextFunction, Request, Response } from "express";
import { AsyncRequestHandler } from "./types";

export const wrapAsyncMiddleware =
  (func: AsyncRequestHandler) =>
  (req: Request, res: Response, next: NextFunction) =>
    func(req, res, next).catch(next);
