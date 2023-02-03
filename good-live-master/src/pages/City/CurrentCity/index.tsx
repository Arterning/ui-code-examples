import React from 'react'
import './index.less'

const CurrentCity = (props) => {
  return (
    <div className="current-city">
      <h2>当前城市：{props.city}</h2>
    </div>
  )
}

export default CurrentCity
