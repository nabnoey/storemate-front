import { createBrowserRouter } from "react-router";

// import Home from "../pages/HomePage";
// import CartPage from "../pages/CartPage"
// import RegisterPage from "../pages/auth/RegisterPage";
// import MainLayout from "../layouts/MainLayout";
// import LoginPage from "../pages/auth/LoginPage";
// import ForgotPassword from "../pages/auth/ForgotPassword";
// import Profile from "../pages/users/Profile"
// import ResetPassword from "../pages/auth/ResetPassword";


import {lazy} from "react";
const Home = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy  (() => import("../pages/auth/RegisterPage"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[


        {
            path:"/",
            element:<Home/>


        },
         {
    path:"/register",
    element:<RegisterPage/>
    },
    {
        path:"/login",
        element:<LoginPage/>
    }
        ]   
    }
])

export default router;