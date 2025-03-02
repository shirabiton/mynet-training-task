import { find, matchesProperty } from "lodash/fp";
import { User } from "../../../../Libs/src/types/DB/user.types";
import users from "../mocks/users.json";

export const UserRepository = {
  getAll: async (): Promise<User[]> => users,

  getUserById: async (id: string): Promise<User | null> =>
    find(matchesProperty("_id", id), users) || null,

  getUserByEmail: async (email: string): Promise<User | null> =>
    find(matchesProperty("email", email), users) || null,
};
