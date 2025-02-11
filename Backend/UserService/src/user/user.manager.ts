import { User } from '@Libs/types/DB/user.types';
import { UserRepository } from './user.repository';

export const UserManager = {
    getAll: async (): Promise<User[]> => { return await UserRepository.getAll(); },
    getUserById: async (id: string): Promise<User | null> => { return await UserRepository.getUserById(id); },
    getUserByEmail: async (email: string): Promise<User | null> => {
        const finalEmail = decodeURIComponent(email).trim().toLowerCase();
        return await UserRepository.getUserByEmail(finalEmail);
    }
}