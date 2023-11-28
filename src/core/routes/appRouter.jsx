import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../auth/components/PrivateRoute"
import PublicRoute from "../auth/components/PublicRoute"
import Home from "../../features/Home/Home"
import Login from "../../features/Login/Login"

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        )
    }, 
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    }, 
])