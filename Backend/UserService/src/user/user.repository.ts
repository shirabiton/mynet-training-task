import { User } from "@Libs/types/DB/user.types";
import fs from "fs";
import jsonwebtoken from "jsonwebtoken";

export const UserRepository = {
  getAll: async (): Promise<User[]> => {
    console.log("in get all");
    const data = fs.readFileSync("./src/mocks/users.json", "utf8");
    const parsedData = JSON.parse(data);
    return parsedData.data;
  },

  getUserById: async (id: string): Promise<User | null> => {
    const items = (await UserRepository.getAll()) || [];
    return items.find((user: User) => user._id === id) || null;
  },

  getUserByEmail: async (email: string): Promise<User | null> => {
    const items = (await UserRepository.getAll()) || [];
    return items.find((user: User) => user.email === email) || null;
  },

  verifyToken: async (token: string): Promise<boolean> => {
    console.log("yay in verify token repo");
    const { verify } = jsonwebtoken;
    console.log("verify token in repository");
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      console.error("JWT secret key not defined.");
      return false;
    }
    try {
      const decoded = verify(token, secretKey) as { userId: string };
      return !!decoded?.userId;
    } catch (error) {
      return false;
    }
  },
};
