import Home from "./pages/Home.js"
import Maine from "./pages/Maine.js"
import NewHampshire from "./pages/NewHampshire.js"
import Vermont from "./pages/Vermont.js"
import Mountain from "./pages/Mountain.js"
import NewMountain from "./pages/NewMountain.js"
import ErrorPage from "./pages/ErrorPage.js"

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/maine",
        element: <Maine />,
        errorElement: <ErrorPage />
    },
    {
        path: "/newhampshire",
        element: <NewHampshire />,
        errorElement: <ErrorPage />
    },
    {
        path: "/vermont",
        element: <Vermont />,
        errorElement: <ErrorPage />
    },
    {
        path: "/new",
        element: <NewMountain />,
        errorElement: <ErrorPage />
    },
    {
        path: "/mountain/:id",
        element: <Mountain />,
        errorElement: <ErrorPage />
    }
];

export default routes