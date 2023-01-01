import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Component1 from './components/Component1'
import Component2 from './components/Component2/Component2'

import {Button} from 'antd'
import {UpCircleOutlined} from '@ant-design/icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Ning
      <Component1/>
      <Component2/>
      <Button type='primary'>Primary Button</Button>
      <UpCircleOutlined/>
    </div>
  )
}

export default App
