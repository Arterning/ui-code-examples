import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/About";

import {BrowserRouter, Route, Routes} from 'react-router-dom'

//使用括号相当于自动return 比花括号更简洁
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter