import { PrivateRouteProps } from "./utils/globalTypes";

const PrivateRouter: React.FC<PrivateRouteProps> = ({
    component: Component
}) => {
    return <Component />
}
export default PrivateRouter;