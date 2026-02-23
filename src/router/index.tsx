
import { createBrowserRouter } from "react-router";

import {lazy} from "react";
const Home = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy  (() => import("../pages/auth/RegisterPage"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const ShoppingCart = lazy(() => import("../pages/users/ShoppingCart"));
 
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
    },
    {
        path:"/shopping-cart",
        element:<ShoppingCart/>
    }
        ]   
    }
])

export default router;