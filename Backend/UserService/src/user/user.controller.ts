import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import { UserManager } from './user.manager';

export const UserController = {
    getAll: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getAll()),
    getUserById: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getUserById(req.params.userId)),
    getUserByEmail: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getUserByEmail(req.params.userEmail)),
    signIn: (req: Request, res: Response): Promise<void> => {
        const { sign } = jsonwebtoken;

        const { userId } = req.params;
        if (!userId) {
            res.status(HttpStatusCode.BadRequest).json({ error: "User id is required" });
            return Promise.resolve();
        }

        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            res.status(HttpStatusCode.InternalServerError).json({ error: "JWT secret key not defined" });
            return Promise.resolve();
        }

        const token = sign({ userId }, secretKey, { expiresIn: "1h" });
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "none"
        });

        console.log("created token", token);

        res.status(HttpStatusCode.Ok).json({ success: true });

        return Promise.resolve();
    },
    verifyTokenn: async (req: Request, res: Response): Promise<void> => {
        const token = req.cookies.token;
        if (!token) {
            console.log("not token!!!!!");
            res.status(401).json({ error: "Unauthorized: No token provided" });
            return;
        }
        const secretKey = process.env.JWT_SECRET_KEY || "Jk9!$dfg28nV@1mQpz7XLw3%y6aT*F";

        if (!secretKey) {
            throw new Error("jwt secret key not defined");
        }

        try {
            const decoded = jsonwebtoken.verify(token, secretKey) as { userId: string };
            res.locals.user = decoded;
            // next();
        } catch (err) {
            // res.status(401).json({ error: "Unauthorized: Invalid token" });
            res.status(402).json({ error: "Unauthorized: Invalid token" });
            return;
        }
    }
}