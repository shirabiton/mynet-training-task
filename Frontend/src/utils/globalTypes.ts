import { User } from "../../../Libs/src/types/DB/user.types";

export type PrivateRouteProps = {
    component: React.FC;
};

export type UserContextType = {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
};