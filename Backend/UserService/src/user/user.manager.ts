import { User } from "@Libs/types/DB/user.types";
import jsonwebtoken from "jsonwebtoken";
import {
  throwNotFoundError,
  throwUnauthorizedError,
} from "./../../../../Libs/src/utils/errors/errors-generator";
import { UserRepository } from "./user.repository";

export const UserManager = {
  getAll: UserRepository.getAll,

  getUserById: async (id: string): Promise<User> => {
    const user = await UserRepository.getUserById(id);
    
    return user ?? throwNotFoundError("User does not exist");
  },

  getUserByEmail: async (email: string): Promise<User | null> => {
    const finalEmail = decodeURIComponent(email).trim().toLowerCase();

    return await UserRepository.getUserByEmail(finalEmail);
  },

  generateToken: async (
    email: string,
    password: string
  ): Promise<{ token: string; user: User | null }> => {
    const userByEmail: User | null = await UserManager.getUserByEmail(email);

    userByEmail ?? throwUnauthorizedError("Email does not exist");

    const finalPassword = password.trim().toLowerCase();

    userByEmail!.password !== finalPassword &&
      throwUnauthorizedError("Invalid email or password");

    const secretKey = process.env.JWT_SECRET_KEY;

    !secretKey && throwUnauthorizedError("JWT secret key is not defined");

    const { sign } = jsonwebtoken;

    return {
      token: sign({ userId: userByEmail!._id }, secretKey!, {
        expiresIn: "1h",
      }),
      user: userByEmail,
    };
  },

  verifyToken: async (
    token: string | undefined
  ): Promise<{ isValid: boolean }> => {
    !token && throwUnauthorizedError("No token provided.");

    const secretKey = process.env.JWT_SECRET_KEY;
    !secretKey &&
      throwUnauthorizedError(
        "JWT secret key is missing in environment variables"
      );

    const { verify } = jsonwebtoken;

    const decoded = verify(token!, secretKey!) as { userId: string };
    (!decoded || !decoded.userId) && throwUnauthorizedError("Invalid token");

    return { isValid: true };
  },
};
