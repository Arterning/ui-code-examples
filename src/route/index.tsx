import React, {lazy} from 'react'

import App from "@/App";

const About = lazy(() => import("@/views/About"))
const Home = lazy(() => import("@/views/Home"))

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

const LazyLoad = (component:JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {component}
    </React.Suspense>
)

const route = [
    {
        path: '/',
        element: <Navigate to={"/home"}/>
    },
    {
        path: '/home',
        element: LazyLoad(<Home/>)
    },
    {
        path: '/about',
        element: LazyLoad(<About/>)
    }
]

export default route