import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/SignUpLogin/Login";
import Signup from "../pages/SignUpLogin/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
]);

export default router