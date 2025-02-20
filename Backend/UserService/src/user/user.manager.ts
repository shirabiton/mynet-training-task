import { User } from "@Libs/types/DB/user.types";
import { HttpStatusCode } from "axios";
import jsonwebtoken from "jsonwebtoken";
import { UserRepository } from "./user.repository";

export const UserManager = {
  getAll: async (): Promise<User[]> => await UserRepository.getAll(),

  getUserById: async (id: string): Promise<User | null> =>
    await UserRepository.getUserById(id),

  getUserByEmail: async (email: string): Promise<User | null> => {
    const finalEmail = decodeURIComponent(email).trim().toLowerCase();
    
    return await UserRepository.getUserByEmail(finalEmail);
  },

  generateToken: async (
    email: string,
    password: string
  ): Promise<{ token: string; user: User | null }> => {
    const userByEmail: User | null = await UserManager.getUserByEmail(email);

    if (!userByEmail) {
      throw {
        message: "Email does not exist",
        code: HttpStatusCode.Unauthorized,
      };
    }

    const finalPassword = password.trim().toLowerCase();

    if (userByEmail.password !== finalPassword) {
      throw {
        message: "Invalid email or password",
        code: HttpStatusCode.Unauthorized,
      };
    }

    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
      throw {
        message: "JWT secret key is not defined",
        code: HttpStatusCode.Unauthorized,
      };
    }

    const { sign } = jsonwebtoken;

    return {
      token: sign({ userId: userByEmail._id }, secretKey, { expiresIn: "1h" }),
      user: userByEmail,
    };
  },

  verifyToken: async (
    token: string | undefined
  ): Promise<{ isValid: boolean }> => {
    const { verify } = jsonwebtoken;

    if (!token) {
      throw {
        message: "No token provided.",
        code: HttpStatusCode.Unauthorized,
      };
    }

    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      throw {
        message: "JWT secret key is missing in environment variables",
        code: HttpStatusCode.Unauthorized,
      };
    }

    const decoded = verify(token, secretKey) as { userId: string };
    if (!decoded || !decoded.userId) {
      throw {
        message: "Invalid token",
        code: HttpStatusCode.Unauthorized,
      };
    }

    return { isValid: true };
  },
};
