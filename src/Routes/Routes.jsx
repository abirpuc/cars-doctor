import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";

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
            }
        ]
    }
])