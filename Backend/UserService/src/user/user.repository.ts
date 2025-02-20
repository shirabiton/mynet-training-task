import { User } from "@Libs/types/DB/user.types";
import { find } from "lodash/fp";
import users from "../mocks/users.json";

export const UserRepository = {
  getAll: async (): Promise<User[]> => users,

  getUserById: async (id: string): Promise<User | null> =>
    find({ _id: id }, users) || null,

  getUserByEmail: async (email: string): Promise<User | null> =>
    find({ email }, users) || null,
};
