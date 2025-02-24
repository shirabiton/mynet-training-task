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

  logIn: async (req: Request, res: Response): Promise<void> => {
    const { token, user } = await UserManager.generateToken(
      req.body.email,
      req.body.password
    );

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
    });

    user &&
      res.cookie("current-user-name", user.fullName, {
        sameSite: "none",
        secure: true,
      });

    res.status(HttpStatusCode.Ok).json({ user: user });
  },

  logOut: async (req: Request, res: Response): Promise<void> => {
    res.clearCookie("token");

    res.clearCookie("current-user-name");
    res
      .status(HttpStatusCode.Ok)
      .json({ message: "User logged out successfully" });
  },

  verifyToken: async (req: Request, res: Response): Promise<void> => {
    const token = req.headers["authorization"]?.split(" ")[1];

    const { isValid } = await UserManager.verifyToken(token);

    isValid
      ? res.status(HttpStatusCode.Ok).json({ message: "Token is valid" })
      : res
          .status(HttpStatusCode.Unauthorized)
          .json({ message: "Invalid token" });
  },
};
