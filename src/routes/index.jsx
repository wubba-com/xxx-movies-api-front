import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/auth";
import { ProtectedRoute } from "./ProtectedRoute";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import RootPage from "../pages/RootPage"
import ErrorPage from "../pages/ErrorPage"
import AdminPageRootContent from "../pages/AdminPageRootContent"
import AdminPageContentById from "../pages/AdminPageContentById";
import AdminPageCreateContent from "../pages/AdminPageCreateContent";

const Routes = () => {
    const { token } = useAuth();

    // Route configurations go here
    const routesForPublic = [
        {
            path: "/",
            element: <RootPage />,
            errorElement: <ErrorPage />
        },
    ];

    const routesForNotAuthenticatedOnly = [
        {
            path: "/login",
            element: <Login />,
        },
    ];


    const routesForAuthenticatedOnly = [
        {
            path: "/admin",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "",
                    element: <AdminPageRootContent title={"Контент"} />,
                },
                {
                    path: "content",
                    element: <AdminPageRootContent title={"Контент"} />,
                },
                {
                    path: "content/create",
                    element: <AdminPageCreateContent title={"Контент"} />,
                },
                {
                    path: 'content/:id',
                    element: <AdminPageContentById title={"Контент"} />
                }
            ],
        },

        {
            path: "/logout",
            element: <Logout />,
        },
    ];

    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]
    );

    return <RouterProvider router={router} />;
};


export default Routes;


