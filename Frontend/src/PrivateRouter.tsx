import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ROUTES_NAMES } from "./utils/globalConsts";
import { PrivateRouteProps } from "./utils/globalTypes";
import { COOKIES } from "../../Libs/src/server/global-consts";

const PrivateRouter: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const [cookies] = useCookies([COOKIES.TOKEN]);
  const token = cookies[COOKIES.TOKEN];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    token ??
      navigate(`/${ROUTES_NAMES.LOGIN}`, {
        state: { from: location.pathname },
        replace: true,
      });
  }, [token, location.pathname, navigate]);

  return token ? <Component /> : <LoginPage />;
};
export default PrivateRouter;
