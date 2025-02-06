import { User } from './../../../../Libs/src/types/DB/user.types';
import { UserRepository } from './user.repository';

export const UserManager = {
    getAll: async (): Promise<User[]> => { return await UserRepository.getAll(); },
    getUserById: async (id: string): Promise<User> => { return await UserRepository.getUserById(id); }
}