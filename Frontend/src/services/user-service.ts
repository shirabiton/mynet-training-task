import axios from 'axios';
import config from '../config';
import { User } from './../../../Libs/src/types/DB/user.types';

const { api } = config.endpoints.item;

const UserService = {
    getItems: async (): Promise<User[]> => {
        const res = await axios.get(`${api}`);
        return res.data;
    },
    getUserById: async (id: string): Promise<User> => {
        const res = await axios.get(`${api}/:${id}`);
        return res.data;
    }
}
export default UserService;