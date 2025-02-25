import { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import { httpError } from "./../../../../libs/src/utils/errors/types";

export const errorCatcherMiddleware = (
  error: httpError | string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, code } =
    typeof error === "string"
      ? {
          message: error,
          code: HttpStatusCode.InternalServerError,
        }
      : error;

  res.status(code).send({ code, message });
  next();
};
