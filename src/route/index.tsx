import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";

import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

const route = [
    {
        path: '/',
        element: <Navigate to={"/home"}/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    }
]

export default route