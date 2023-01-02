import React, {lazy} from 'react'

import App from "@/App";
import Home from '@/views/Home';
import Login from '@/views/Login';

const About = lazy(() => import("@/views/About"))
const Ning = lazy(() => import("@/views/Ning"))
const File = lazy(() => import("@/components/Component1"))
const Default = lazy(() => import("@/components/Component2"))

import {Navigate} from 'react-router-dom'

const LazyLoad = (component:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {component}
    </React.Suspense>
)

const route = [
    {
        path: '/root',
        element: <Navigate to={"/"}/>
    },
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: "/about",
                element: LazyLoad(<About/>)
            },
            {
                path: "/ning",
                element: LazyLoad(<Ning/>)
            },
            {
                path: "/file",
                element: LazyLoad(<File/>)
            },
            {
                path: "/default",
                element: LazyLoad(<Default/>)
            }
        ]
    },
    // 嵌套路由结束
    {
        path: '/login',
        element: <Login />
    },
    {
        path: "*",
        element: <Navigate to={"/default"}/>
    }
]

export default route