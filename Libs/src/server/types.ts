import { RequestHandler } from "express";

export type AsyncRequestHandler = (
  ...args: Parameters<RequestHandler>
) => Promise<void>;
