import React from 'react'
import ReactDOM from 'react-dom/client'

//样式初始化在最前面
import 'reset-css';

//UI框架的样式
// import 'antd/dist/antd.css';

//global style
import "@/assets/styles/global.scss";

//组件样式
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
