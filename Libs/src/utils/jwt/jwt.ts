// import { NextFunction, Request, Response } from "express";
// import jsonwebtoken from 'jsonwebtoken';
// import { wrap } from '../helper/wrapper';
import axios from "axios";
import { Request, Response, NextFunction } from "express";

// export const generateToken = async (userId: string) => {
//     const { sign } = jsonwebtoken;
//     const secretKey = process.env.JWT_SECRET_KEY;
//     if (!secretKey) {
//         throw new Error('jwt secret key not defined');
//     }
//     console.log("created token", sign({ userId }, secretKey, { expiresIn: '1h' }));

//     return sign({ userId }, secretKey, { expiresIn: '1h' })
// }

// export const verifyToken = async () => {
//     const response = await axios.get('http://localhost:3002/users/verify-token');
//     return response.data;
// }

export const notVerifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("in verify token");

  try {
    const response = await axios.get("http://localhost:3002/users/verify", {
      withCredentials: true,
      headers: { Accept: "application/json" },
    });
    console.log("response:", response);

    if (response.data) {
      return next();
    } else {
      res.status(401).json({ message: "Token verification failed" });
    }
  } catch (error) {
    res.status(401).json({ message: "Token verification failed" });
  }
};
