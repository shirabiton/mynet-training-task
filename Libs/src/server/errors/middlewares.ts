import { HttpStatusCode } from "axios";
import { ErrorRequestHandler } from "express";
import { isHttpError } from "./functions";

export const errorCatcherMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  const { message, code } = isHttpError(error)
    ? error
    : {
        message: error?.message || "Internal server error",
        code: HttpStatusCode.InternalServerError,
      };

  res.status(code).send({ code, message });
};
