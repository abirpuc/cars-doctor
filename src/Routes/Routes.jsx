import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Service from "../pages/Service/Service";
import CheckOut from "../pages/CheckOut";

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
            }
        ]
    }
])