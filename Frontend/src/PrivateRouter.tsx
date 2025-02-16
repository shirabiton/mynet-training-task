import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "./utils/globalConsts";
import { PrivateRouteProps } from "./utils/globalTypes";

const PrivateRouter: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate(`/${ROUTES_NAMES.LOGIN}`, {
        state: { from: location.pathname },
        replace: true,
      });
    }
  }, [token, location, navigate]);

  return <Component />;
};
export default PrivateRouter;
