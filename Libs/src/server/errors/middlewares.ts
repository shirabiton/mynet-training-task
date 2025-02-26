import { ErrorRequestHandler } from "express";
import { throwInternalServerError } from "./errors-generator";
import { isHttpError } from "./functions";

export const errorCatcherMiddleware: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  const { message, code } = isHttpError(error)
    ? error
    : throwInternalServerError(error.message || "Internal server error");

  res.status(code).send({ code, message });
};
