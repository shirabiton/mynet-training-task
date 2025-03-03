import { AsyncRequestHandler } from "./types";

export const wrapAsyncMiddleware =
  (func: AsyncRequestHandler): AsyncRequestHandler =>
  (req, res, next) =>
    func(req, res, next).catch(next);
