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

// export const notVerifyToken = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log("in verify token");
//   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

//   try {
//     const response = await axios.get("http://localhost:3000/user-service/verify", { withCredentials: true });
//     console.log("response:", response);

//     if (response.data) {
//       return next();
//     } else {
//       res.status(401).json({ message: "Token verification failed" });
//     }
//   } catch (error) {
//     res.status(401).json({ message: "Token verification failed" });
//   }
// };

// import { verifyToken } from "./../../../../Libs/src/utils/jwt/jwt";

import jsonwebtoken from "jsonwebtoken";

export const verifyToken = (token: string) => {
  console.log("🔍 Verifying token...");

  if (!token) {
    console.log("🚨 No token provided!");
    return false;
  }

  try {
    const secretKey = process.env.JWT_SECRET_KEY || "Jk9!$dfg28nV@1mQpz7XLw3%y6aT*F";
    if (!secretKey) {
      console.error("🚨 JWT secret key is missing in environment variables!");
      return false;
    }

    // אימות הטוקן
    const decoded = jsonwebtoken.verify(token, secretKey) as { userId: string };

    if (!decoded || !decoded.userId) {
      console.log("🚨 Invalid token!");
      return false;
    }

    console.log("✅ Token verified! User ID:", decoded.userId);
    return decoded; // מחזירים את המידע על המשתמש
  } catch (error) {
    console.error("🚨 Token verification failed:", error);
    return false;
  }
};

export const notVerifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("🔍 Checking token...");
  
  try {
    // const token = req.headers.authorization?.split(" ")[1]||"";  // שולף את הטוקן מה-header כ-Bearer token
    // קבלת הטוקן מהקוקי או מה-Headers
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log("token :)", token);

    if (!token) {
      console.log("🚨 Token is missing!");
      // throw new Error("");
      res.status(401).json({ message: "Token is missing" });
    }

    // בדיקת הטוקן
    const user = verifyToken(token);
    if (!user) {
      console.log("🚨 Token verification failed!");
      // throw new Error("");
      res.status(401).json({ message: "Token verification failed" });
    }

    // אם הכל תקין, נעבור לשלב הבא
    next();  
  } catch (error) {
    console.error("🚨 Token verification error:", error);
    // throw new Error("");

    res.status(401).json({ message: "Token verification failed" });
  }
};
