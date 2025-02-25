import { FetchedUser, User } from "@Libs/types/DB/user.types";
import { sign, verify } from "jsonwebtoken";
import { toLower, trim } from "lodash";
import { omit } from "lodash/fp";
import config from "../config";
import {
  throwBadRequestError,
  throwNotFoundError,
  throwUnauthorizedError,
} from "./../../../../Libs/src/utils/errors/errors-generator";
import { UserRepository } from "./user.repository";

export const UserManager = {
  getAll: UserRepository.getAll,

  getUserById: async (id: string): Promise<FetchedUser> => {
    const user = await UserRepository.getUserById(id);

    return omit("password", user) ?? throwNotFoundError("User does not exist");
  },

  getUserByEmail: async (email: string): Promise<User | null> => {
    const formatted = toLower(trim(decodeURIComponent(email)));

    return await UserRepository.getUserByEmail(formatted);
  },

  generateToken: async (
    email: string,
    password: string
  ): Promise<{ token: string; user: FetchedUser | null }> => {
    const user = await UserManager.getUserByEmail(email);

    user ?? throwUnauthorizedError("Email does not exist");

    user!.password !== password &&
      throwUnauthorizedError("Invalid email or password");

    return {
      token: sign({ userId: user!._id }, config.SECRET_KEY!, {
        expiresIn: config.TOKEN_EXPIRATION_HOURS * 3600,
      }),
      user: omit("password", user),
    };
  },

  verifyToken: async (token: string | undefined): Promise<void> => {
    !token && throwBadRequestError("No token provided.");

    verify(token!, config.SECRET_KEY!) ??
      throwUnauthorizedError("Invalid token");
  },
};
