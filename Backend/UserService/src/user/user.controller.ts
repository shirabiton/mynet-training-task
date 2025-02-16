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
    console.log("in user controller sign in");

    const email = req.body.email;
    const password = req.body.password.trim().toLowerCase();
    const userByEmail: User | null = await UserManager.getUserByEmail(email);

    if (!userByEmail) {
      throw new Error("Email does not exist");
    }

    if (userByEmail.password !== password) {
      throw new Error("Invalid email or password");
    } else {
      const token = await UserManager.generateToken(userByEmail._id);

      console.log("token created", token);


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
