import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { COOKIES } from "../../../../Libs/src/server/global-consts";
import config from "../../config";
import { wrapAsyncMiddleware } from "../../server/wrapper";

export const verifyToken = wrapAsyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies[COOKIES.TOKEN];
    const { api } = config.endpoints.user;

    await axios.get(`${api}/verify`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    next();
  }
);
