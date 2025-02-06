import axios from 'axios';
import { User } from './../../../../Libs/src/types/DB/user.types';

export const UserRepository = {
    getAll: async (): Promise<User[]> => {
        return (await axios.get('mocks/users.json')).data.catch((err: unknown) => { throw err });
    },
    getUserById: async (id: string): Promise<User> => {
        return (await axios.get('mocks/users.json')).data.find((user: User) => user._id === id).catch((err: unknown) => { throw err });
    }
}