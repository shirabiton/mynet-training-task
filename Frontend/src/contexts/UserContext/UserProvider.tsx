import { FC, ReactNode, useState } from 'react';
import { User } from '../../../../Libs/src/types/DB/user.types';
import { UserContext } from './UserContext';

const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return <UserContext.Provider value={{ currentUser: currentUser, setCurrentUser }}>
        {children}
    </UserContext.Provider>
}
export { UserProvider };