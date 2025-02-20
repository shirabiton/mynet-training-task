import { User } from "@Libs/types/DB/user.types";
import users from "../mocks/users.json";

export const UserRepository = {
  getAll: async (): Promise<User[]> => users,

  getUserById: async (id: string): Promise<User | null> =>
    users.find((user: User) => user._id === id) || null,

  getUserByEmail: async (email: string): Promise<User | null> =>
    users.find((user: User) => user.email === email) || null,
};
