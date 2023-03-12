import { CaretUpOutlined, UserOutlined } from '@ant-design/icons'
import React from 'react'
import './index.less'

const UserInfo = (props) => {
  return (
    <div className="userinfo-container">
      <p>
        {/* <i className="icon-user"></i> */}
        <UserOutlined />
        <span>{props.user.nick}</span>
      </p>
      <p>
        {/* <i className="icon-map-marker"></i> */}
        <CaretUpOutlined />
        <span>{props.city.cityName}</span>
      </p>
    </div>
  )
}

export default UserInfo
