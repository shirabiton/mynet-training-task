import { omit } from "lodash/fp";
import { FetchedUser, User } from "./../types/DB/user.types";

export const filterUserData = (user: User): FetchedUser =>
  omit("password", user);
