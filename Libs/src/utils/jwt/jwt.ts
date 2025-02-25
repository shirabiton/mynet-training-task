import axios from "axios";
import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { wrapAsyncMiddleware } from "../helper/wrapper";

export const verifyToken = wrapAsyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
    const { api } = config.endpoints.user;

    await axios.get(`${api}/verify`, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });

    next();
  }
);
