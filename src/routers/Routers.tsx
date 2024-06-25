import {Navigate, RouteObject} from "react-router-dom";
import Home from "../pages/Home/Home";
import React from "react";
import Admin from "../pages/Admin/Admin";
import Mall from "../pages/Mall/Mall";
import PageOne from "../pages/Other/PageOne/PageOne";
import PageTwo from "../pages/Other/PageTwo/PageTwo";
import Customer from "../pages/Customer/Customer";

/*路由表*/
export const routers: RouteObject[] = [
    {
        path: '/home',
        element: <Home/>,
    },
    {
        path: '/mall',
        element: <Mall/>,
    },
    {
        path: '/other',
        children: [
            {
                path: 'pageone',
                element: <PageOne/>
            },
            {
                path: 'pagetwo',
                element: <PageTwo/>
            }
        ]
    },
    {
        path: '/admin',
        element: <Admin/>,
    },
    {
        path: '/customer',
        element: <Customer/>,
    },
    {
        path: '/',
        element: <Navigate to='home'/>,
    }
]

