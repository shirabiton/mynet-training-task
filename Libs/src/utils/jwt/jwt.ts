import axios, { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";
import config from "../../config";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  const { api } = config.endpoints.user;

  const response = await axios.get(`${api}/verify`, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });

  const isValid = response.data;

  if (!isValid) {
    throw {
      message: "Token verification failed",
      code: HttpStatusCode.Unauthorized,
    };
  }
  next();
};
