// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import UserContext from "./contexts/UserContext";
import { PrivateRouteProps } from "./utils/globalTypes";

const PrivateRouter: React.FC<PrivateRouteProps> = ({
    component: Component
}) => {
    // const { currentUser } = useContext(UserContext);
    // const token = localStorage.getItem("token");
    // const isLoggedIn = !!currentUser || token;

    return <Component />;
}
export default PrivateRouter;