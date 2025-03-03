import { HttpStatusCode } from "axios";
import { Request, Response } from "express";
import { replace } from "lodash/fp";
import { COOKIES } from "../../../../Libs/src/server/global-consts";
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

    res.cookie(COOKIES.TOKEN, token, {
      sameSite: "none",
      secure: true,
    });

    user &&
      res.cookie(COOKIES.CURRENT_USER_NAME, user.fullName, {
        sameSite: "none",
        secure: true,
      });

    res.status(HttpStatusCode.Ok).json({ user });
  },

  logOut: async (req: Request, res: Response): Promise<void> => {
    res.clearCookie(COOKIES.TOKEN);

    res.clearCookie(COOKIES.CURRENT_USER_NAME);
    res
      .status(HttpStatusCode.Ok)
      .json({ message: "User logged out successfully" });
  },

  verifyToken: async (req: Request, res: Response): Promise<void> => {
    const token = replace("Bearer ", "", req.headers.authorization || "");
    await UserManager.verifyToken(token);

    res.status(HttpStatusCode.Ok).json("Token verified");
  },
};
