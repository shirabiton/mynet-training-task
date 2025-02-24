import { HttpStatusCode } from "axios";

export const throwUnauthorizedError = (message: string) => {
  throw { message, code: HttpStatusCode.Unauthorized };
};

export const throwNotFoundError = (message: string) => {
  throw { message, code: HttpStatusCode.NotFound };
};
