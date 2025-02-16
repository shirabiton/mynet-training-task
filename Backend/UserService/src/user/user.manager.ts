import { User } from "@Libs/types/DB/user.types";
import { UserRepository } from "./user.repository";
import jsonwebtoken from "jsonwebtoken";

export const UserManager = {
  getAll: async (): Promise<User[]> => {
    return await UserRepository.getAll();
  },

  getUserById: async (id: string): Promise<User | null> => {
    return await UserRepository.getUserById(id);
  },

  getUserByEmail: async (email: string): Promise<User | null> => {
    const finalEmail = decodeURIComponent(email).trim().toLowerCase();
    return await UserRepository.getUserByEmail(finalEmail);
  },

  generateToken: async (userId: string): Promise<string> => {
    const { sign } = jsonwebtoken;
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      throw new Error("JWT secret key is not defined");
    }
    // sign({ userId }, secretKey, { expiresIn: "1h" });
    return sign({ userId }, secretKey);
  },

  verifyToken: async (token: string): Promise<boolean> => {
    const { verify } = jsonwebtoken;

    if (!token) {
      console.log("No token provided.");
      return false;
    }
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      console.error("JWT secret key is missing in environment variables");
      return false;
    }
    const decoded = verify(token, secretKey) as { userId: string };
    if (!decoded || !decoded.userId) {
      console.log("Invalid token");
      return false;
    }
    return true;
  },
};
