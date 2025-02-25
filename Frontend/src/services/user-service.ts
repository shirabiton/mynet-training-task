import axios from "axios";
import config from "../config";
import { ROUTES_NAMES } from "../utils/globalConsts";
import { FetchedUser } from "./../../../Libs/src/types/DB/user.types";

const { api } = config.endpoints.user;

const UserService = {
  getUsers: async (): Promise<FetchedUser[]> => {
    const res = await axios.get(`${api}`);

    return res.data;
  },
  getUserById: async (id: string): Promise<FetchedUser> => {
    const res = await axios.get(`${api}/:${id}`);

    return res.data;
  },
  logIn: async (
    email: string,
    password: string,
    navigate: (
      to: string,
      options?: { replace?: boolean; state?: unknown }
    ) => void
  ): Promise<void> => {
    const res = await axios.post(
      `${api}/login`,
      { email, password },
      { withCredentials: true }
    );
    navigate(`/${ROUTES_NAMES.ITEM_LIST}`);

    return res.data;
  },
  logOut: async (): Promise<void> => {
    const res = await axios.get(`${api}/logout`, {
      withCredentials: true,
    });

    return res.data;
  },
};
export default UserService;
