import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Service from "../pages/Service/Service";
import CheckOut from "../pages/CheckOut";
import AddService from "../pages/AddService/AddService";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Cart from "../pages/Cart/Cart";
import ManageOrder from "../pages/ManageOrder/ManageOrder";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

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
                element:<Service/>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/checkout/:id',
                element:<PrivateRouter><CheckOut/></PrivateRouter>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
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
            },
            {
                path:'/cart',
                element:<Cart/>,
                loader: () => fetch('http://localhost:5000/serviceorder')
            },
            {
                path:'/order',
                element:<ManageOrder/>,
                loader: () => fetch('http://localhost:5000/serviceorder')
            }
        ]
    }
])