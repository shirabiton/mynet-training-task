// import { generateToken } from './../../../../Libs/src/utils/jwt/jwt';
import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { UserManager } from './user.manager';
import jsonwebtoken from 'jsonwebtoken';

export const UserController = {
    getAll: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getAll()),
    getUserById: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getUserById(req.params.userId)),
    getUserByEmail: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getUserByEmail(req.params.userEmail)),
    signIn: (req: Request, res: Response): Promise<void> => {
        // res.status(HttpStatusCode.Ok).json(generateToken(req.params.userId))\
        const { sign } = jsonwebtoken;
        const { userId } = req.params;
        if (!userId) {
            res.status(HttpStatusCode.BadRequest).json({ error: "User id is required" });
        }
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            res.status(HttpStatusCode.InternalServerError).json({ error: "JWT secret key not defined" }); // הוא מחזיר כבר אז למה ELSE?
        }
        else {
            const token = sign({ userId }, secretKey, { expiresIn: "1h" });

            console.log("created token", token);

            res.status(HttpStatusCode.Ok).json({ token })
        }
    }
}