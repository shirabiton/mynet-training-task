import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";
import { UserManager } from "./user.manager";

export const UserController = {
  getAll: async (req: Request, res: Response): Promise<void> => {
    res.status(HttpStatusCode.Ok).json(await UserManager.getAll());
  },

  getUserById: async (req: Request, res: Response): Promise<void> => {
    res
      .status(HttpStatusCode.Ok)
      .json(await UserManager.getUserById(req.params.userId));
  },

  getUserByEmail: async (req: Request, res: Response): Promise<void> => {
    res
      .status(HttpStatusCode.Ok)
      .json(await UserManager.getUserByEmail(req.params.userEmail));
  },

  signIn: async (req: Request, res: Response): Promise<void> => {
    const { sign } = jsonwebtoken;
    const { userId } = req.params;
    if (!userId) {
      res
        .status(HttpStatusCode.BadRequest)
        .json({ error: "User id is required" });
      return;
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      res
        .status(HttpStatusCode.InternalServerError)
        .json({ error: "JWT secret key is not defined" });
      return;
    }

    const token = sign({ userId }, secretKey);
    // const token = sign({ userId }, secretKey, { expiresIn: "1h" });
    console.log("before cookies");

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      // domain: "localhost",
    });

    console.log("created token", token);
    console.log("Cookies in request:", req.cookies);
    res.status(HttpStatusCode.Ok).json({ success: true });
  },

  verifyToken: async (req: Request, res: Response): Promise<void> => {
    console.log("yay in verify token");
    console.log("Cookies in request:", req.cookies);
    const token = req.cookies.token;
    console.log("token from cookies", token);
    res.status(HttpStatusCode.Ok).json(await UserManager.verifyToken(token));
  },
};
