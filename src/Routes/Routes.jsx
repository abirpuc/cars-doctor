import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Service from "../pages/Service/Service";
import CheckOut from "../pages/CheckOut";
import AddService from "../pages/AddService/AddService";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";

export const Routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:'/service',
                element:<Service/>
            },
            {
                path:'/checkout',
                element:<CheckOut/>
            },
            {
                path:'/addnewservice',
                element:<AddService/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/singup',
                element:<SingUp/>
            }
        ]
    }
])