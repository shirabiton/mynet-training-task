import { createContext } from "react";
import { UserContextType } from "../../utils/globalTypes";

export const UserContext = createContext<UserContextType>({ currentUser: null, setCurrentUser: () => { } });