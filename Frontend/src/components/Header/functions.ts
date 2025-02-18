/* eslint-disable @typescript-eslint/no-unused-expressions */
import UserService from "../../services/user-service";
import { ROUTES_NAMES } from "../../utils/globalConsts";

export const toggleLogin = async (
  cookies: { [key: string]: string | undefined },
  navigate: (
    to: string,
    options?: { replace?: boolean; state?: unknown }
  ) => void
) => {
  const token = cookies["token"];
  const currentUserName = cookies["current-user-name"];

  (token || (currentUserName && token !== "" && currentUserName !== "")) &&
    UserService.logOut();
  navigate(ROUTES_NAMES.LOGIN);
};
