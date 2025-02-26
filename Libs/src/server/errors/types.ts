import { HttpStatusCode } from "axios";

export type HttpError = {
  message: string;
  code: HttpStatusCode;
};
