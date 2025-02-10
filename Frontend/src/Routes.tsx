import { lazy, Suspense } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import PrivateRouter from "./PrivateRouter";
import { ROUTES_NAMES } from "./utils/globalConsts";

const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const ItemDetailsPage = lazy(() => import("./pages/ItemDetailsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const AppRoutes: React.FC = () => {

    const routes: RouteObject[] = [{ path: `${ROUTES_NAMES.HOME}`, element: <Navigate to={ROUTES_NAMES.ITEM_LIST} /> },
    { path: `${ROUTES_NAMES.ITEM_LIST}`, element: <PrivateRouter component={ItemsPage} /> },
    { path: `${ROUTES_NAMES.ITEM_LIST}/:itemId`, element: <PrivateRouter component={ItemDetailsPage} /> },
    { path: '/*', element: <PrivateRouter component={NotFoundPage} /> }
    ]

    const routesElement = useRoutes(routes);

    return <>
        <Header />
        <Suspense fallback={<></>}>{routesElement}</Suspense>
        <Footer />
    </>;
}
export default AppRoutes;