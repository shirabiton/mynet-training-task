import axios from "axios";
import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { throwUnauthorizedError } from "./../errors/errors-generator";

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

  !response.data && throwUnauthorizedError("Token verification failed");

  next();
};
