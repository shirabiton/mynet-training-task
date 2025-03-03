import { omit } from "lodash/fp";
import { User } from "./../types/DB/user.types";

export const filterUserData = omit<User, "password">("password");
