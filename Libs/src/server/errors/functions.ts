import { HttpStatusCode } from "axios";
import { includes, isObject, isString, toString, values } from "lodash/fp";
import { HttpError } from "./types";

export const isHttpError = (error: unknown): error is HttpError =>
  isObject(error) &&
  "code" in error &&
  includes(toString(error.code), values(HttpStatusCode)) &&
  "message" in error &&
  isString(error.message);
