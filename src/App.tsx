import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Component1 from './components/Component1'
import Component2 from './components/Component2/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Ning
      <Component1/>
      <Component2/>
    </div>
  )
}

export default App
