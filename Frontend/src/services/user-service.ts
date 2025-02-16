import axios from "axios";
import config from "../config";
import { User } from "./../../../Libs/src/types/DB/user.types";

const { api } = config.endpoints.user;

const UserService = {
  getUsers: async (): Promise<User[]> => {
    const res = await axios.get(`${api}`);
    return res.data;
  },
  getUserById: async (id: string): Promise<User> => {
    const res = await axios.get(`${api}/:${id}`);
    return res.data;
  },
  signIn: async (email: string, password: string): Promise<void> => {
    console.log("in front sign in", email, password);

    const res = await axios.post(
      `${api}/signin`,
      { email, password },
      { withCredentials: true }
    );
    return res.data;
  },
};
export default UserService;
