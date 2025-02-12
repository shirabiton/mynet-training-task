// import { NextFunction, Request, Response } from "express";
// import jsonwebtoken from 'jsonwebtoken';
// import { wrap } from '../helper/wrapper';
import axios from "axios";

// export const generateToken = async (userId: string) => {
//     const { sign } = jsonwebtoken;
//     const secretKey = process.env.JWT_SECRET_KEY;
//     if (!secretKey) {
//         throw new Error('jwt secret key not defined');
//     }
//     console.log("created token", sign({ userId }, secretKey, { expiresIn: '1h' }));

//     return sign({ userId }, secretKey, { expiresIn: '1h' })
// }

export const verifyToken = async () => {
    const response = await axios.get('http://localhost:3002/users/verify-token');
    return response.data;
}

//     async (req: Request, res: Response, next: NextFunction) => {
//         console.log("in verify token");

//         const token = req.cookies.token;
//         // console.log("req.cookies", req.cookies);

//         // console.log("req.headers", req.headers);

//         console.log("token", token);

//         if (!token) {
//             console.log("not token!!!!!");
//             res.status(401).json({ error: "Unauthorized: No token provided" });
//             return;
//         }

//         const secretKey = process.env.JWT_SECRET_KEY || "Jk9!$dfg28nV@1mQpz7XLw3%y6aT*F";

//         if (!secretKey) {
//             throw new Error("jwt secret key not defined");
//         }

//         try {
//             const decoded = jsonwebtoken.verify(token, secretKey) as { userId: string };
//             res.locals.user = decoded;
//             next();
//         } catch (err) {
//             // res.status(401).json({ error: "Unauthorized: Invalid token" });
//             res.status(402).json({ error: "Unauthorized: Invalid token" });
//             return;
//         }
//     },
// );
