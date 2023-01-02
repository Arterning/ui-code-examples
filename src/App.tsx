import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Component1 from './components/Component1'
import Component2 from './components/Component2/Component2'

import {Button} from 'antd'
import {UpCircleOutlined} from '@ant-design/icons'

import {useRoutes, Link} from 'react-router-dom'
import route from '@/route/index'

function App() {
  const [count, setCount] = useState(0)

  const outlet = useRoutes(route)

  return (
    <div className="App">
      APP Component |

      <Link to={"/home"}>Home</Link> |
      
      <Link to={"/about"}>About</Link> |
      
      {outlet}
    </div>
  )
}

export default App
