import axios, { HttpStatusCode } from "axios";
import { NextFunction, Request, Response } from "express";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token || "";

  try {
    if (!token) {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ message: "Token is missing" });
    }

    const response = await axios.get("http://localhost:3002/verify", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response) {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ message: "Token verification failed" });
    }
    next();
  } catch (error) {
    console.log("hi", error);
  }
};
