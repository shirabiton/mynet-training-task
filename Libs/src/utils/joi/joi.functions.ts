import { ObjectSchema } from "joi";
import { assign } from "lodash/fp";
import { wrapAsyncMiddleware } from "./../../server/wrapper";

export const validateRequest = (schema: ObjectSchema) =>
  wrapAsyncMiddleware(async (req, res, next) => {
    const validated = await schema
      .unknown(true)
      .validateAsync(req, { abortEarly: false });
    assign(req, validated);
    next();
  });
