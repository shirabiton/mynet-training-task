/* eslint-disable @typescript-eslint/no-unused-expressions */
import { COOKIES } from "./../../../../Libs/src/server/global-consts";
import UserService from "../../services/user-service";
import { ROUTES_NAMES } from "../../utils/globalConsts";

export const toggleLogin = async (
  cookies: { [key: string]: string | undefined },
  navigate: (
    to: string,
    options?: { replace?: boolean; state?: unknown }
  ) => void
) => {
  const token = cookies[COOKIES.TOKEN];
  console.log("header component, token:", token);

  const currentUserName = cookies[COOKIES.CURRENT_USER_NAME];

  (token || (token !== "" && currentUserName !== "")) && UserService.logOut();
  navigate(ROUTES_NAMES.LOGIN);
};
