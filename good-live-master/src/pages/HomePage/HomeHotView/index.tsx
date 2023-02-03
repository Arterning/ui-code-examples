import React from 'react'
import './index.less'

const HomeHotView = (props) => {
  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {props.data.map((element, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <img src={element.img} alt="" />
                  <span>{props.city + element.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default HomeHotView
