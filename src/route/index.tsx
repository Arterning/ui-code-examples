import React, {lazy} from 'react'

import App from "@/App";
import Home from '@/views/Home';

const About = lazy(() => import("@/views/About"))
const Ning = lazy(() => import("@/views/Ning"))

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

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
            }
        ]
    }
]

export default route