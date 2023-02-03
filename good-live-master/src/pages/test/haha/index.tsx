import React from 'react'
import { Link } from 'react-router-dom'

const Haha = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/about/haha/todolist">todolist</Link>
          </li>
        </ul>
        <hr />
        <h1>haha</h1>
      </div>
    </>
  )
}
export default Haha
