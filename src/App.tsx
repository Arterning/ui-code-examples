import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Component1 from './components/Component1'
import Component2 from './components/Component2/Component2'

import {Button} from 'antd'
import {UpCircleOutlined} from '@ant-design/icons'

import {Outlet, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      APP

      <Link to={"/home"}>Home</Link>
      
      <Link to={"/about"}>About</Link>
      {/**
       * 占位符组件 类似于窗口 用于展示组件 类似于vue的router-view
       */}
      <Outlet></Outlet>
    </div>
  )
}

export default App
