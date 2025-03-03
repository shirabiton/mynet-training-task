import { sign, verify } from "jsonwebtoken";
import { flow, map, toLower, trim } from "lodash/fp";
import {
  throwBadRequestError,
  throwNotFoundError,
  throwUnauthorizedError,
} from "../../../../Libs/src/server/errors/errors-generator";
import { FetchedUser, User } from "../../../../Libs/src/types/DB/user.types";
import config from "../config";
import { filterUserData } from "./../../../../Libs/src/server/functions";
import { UserRepository } from "./user.repository";

export const UserManager = {
  getAll: async (): Promise<FetchedUser[]> =>
    map(filterUserData, await UserRepository.getAll()),

  getUserById: async (id: string): Promise<FetchedUser> => {
    const user = await UserRepository.getUserById(id);

    return user
      ? filterUserData(user)
      : throwNotFoundError("User does not exist");
  },

  getUserByEmail: async (email: string): Promise<User | null> => {
    const formattedEmail = flow(decodeURIComponent, trim, toLower)(email);

    return await UserRepository.getUserByEmail(formattedEmail);
  },

  generateToken: async (
    email: string,
    password: string
  ): Promise<{ token: string; user: FetchedUser | null }> => {
    const user: User | null = await UserManager.getUserByEmail(email);

    user ?? throwUnauthorizedError("Email does not exist");

    user!.password !== password &&
      throwUnauthorizedError("Invalid email or password");

    return {
      token: sign({ userId: user!._id }, config.SECRET_KEY, {
        expiresIn: config.TOKEN_EXPIRATION_HOURS * 3600,
      }),
      user: filterUserData(user!),
    };
  },

  verifyToken: async (token: string | undefined): Promise<void> => {
    token ?? throwBadRequestError("No token provided.");

    verify(token!, config.SECRET_KEY) ??
      throwUnauthorizedError("Invalid token");
  },
};
