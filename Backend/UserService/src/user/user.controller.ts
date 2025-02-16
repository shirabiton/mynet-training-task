import { User } from "@Libs/types/DB/user.types";
import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
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
    const email = req.body.email;
    const password = req.body.password.trim().toLowerCase();
    const userByEmail: User | null = await UserManager.getUserByEmail(email);

    if (!userByEmail) {
      res
        .status(HttpStatusCode.BadRequest)
        .json({ error: "Email does not exist" });
      return;
    }

    if (userByEmail.password !== password) {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ error: "Invalid email or password" });
      return;
    } else {
      const token = await UserManager.generateToken(userByEmail._id);

      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      res.cookie("current-user-name", userByEmail.fullName, {
        sameSite: "none",
        secure: true,
      });

      res.status(HttpStatusCode.Ok).json({ user: userByEmail });
    }
  },

  verifyToken: async (req: Request, res: Response): Promise<void> => {
    const authorizationHeader = req.headers["authorization"] || "";
    const token = authorizationHeader.startsWith("Bearer ")
      ? authorizationHeader.split(" ")[1]
      : "";
    const isTokenValid = await UserManager.verifyToken(token);
    console.log("token:::", token);
    console.log("isValidToken", isTokenValid);

    if (isTokenValid) {
      res.status(HttpStatusCode.Ok).json({ message: "Token is valid" });
    } else {
      res
        .status(HttpStatusCode.Unauthorized)
        .json({ message: "Invalid token" });
    }
  },
};
