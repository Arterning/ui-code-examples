import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import './index.less'
const Home = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <h1>Home</h1>
      </div>
      <div>
        {/* <Button onClick={dispatchNewPerson(person.id)}>Remove</Button> */}
        <Button type="primary">登陆</Button>
      </div>
    </>
  )
}
export default Home
