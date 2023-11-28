import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../auth/components/PrivateRoute"
import PublicRoute from "../auth/components/PublicRoute"
import Home from "../../features/Home/Home"
import Login from "../../features/Login/Login"

export const appRouter = createBrowserRouter([
    {
        path: "/login",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        )
    }, 
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        )
    }, 
   
])