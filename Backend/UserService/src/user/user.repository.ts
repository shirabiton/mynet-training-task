import { User } from "@Libs/types/DB/user.types";
import fs from "fs";

export const UserRepository = {
  getAll: async (): Promise<User[]> => {
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
};
