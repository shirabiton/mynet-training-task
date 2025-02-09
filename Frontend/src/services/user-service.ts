import config from '../config';
import HttpClient from '../utils/middlewares/http.client';
import { User } from './../../../Libs/src/types/DB/user.types';

const { api } = config.endpoints.item;

const UserService = {
    getItems: (): Promise<User[]> => {
        return HttpClient.get(`${api}/users`);
    },
    getUserById: (id: string): Promise<User> => {
        return HttpClient.get(`${api}/users/:${id}`);
    }
}
export default UserService;