import React, {lazy} from 'react'

import App from "@/App";

const About = lazy(() => import("@/views/About"))
const Home = lazy(() => import("@/views/Home"))

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

const route = [
    {
        path: '/',
        element: <Navigate to={"/home"}/>
    },
    {
        path: '/home',
        element: <React.Suspense fallback={<div>Loading...</div>}>
        <Home/>
    </React.Suspense>
    },
    {
        path: '/about',
        element: <React.Suspense fallback={<div>Loading...</div>}>
            <About/>
        </React.Suspense>
    }
]

export default route