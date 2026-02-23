import { createHashRouter } from "react-router-dom";
import Home from "../pages/HomePage";
import RegisterPage from "../pages/auth/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";
import ShoppingCart from "../pages/users/ShoppingCart";

const router = createHashRouter([
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