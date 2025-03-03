import { HttpStatusCode } from "axios";
import { includes, isObject, isString, values } from "lodash/fp";
import { HttpError } from "./types";

export const isHttpError = (error: unknown): error is HttpError =>
  isObject(error) &&
  "code" in error &&
  includes(error.code, values(HttpStatusCode)) &&
  "message" in error &&
  isString(error.message);
