import { HttpStatusCode } from "axios";
import { curry } from "lodash/fp";

const throwError = curry((code: HttpStatusCode, message: string) => {
  throw { message, code };
});

export const throwUnauthorizedError = throwError(HttpStatusCode.Unauthorized);

export const throwNotFoundError = throwError(HttpStatusCode.NotFound);

export const throwBadRequestError = throwError(HttpStatusCode.BadRequest);

export const throwInternalServerError = throwError(
  HttpStatusCode.InternalServerError
);
