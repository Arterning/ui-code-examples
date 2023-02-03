import React from 'react'
import './index.less'
import { NavLink } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="nav-footer">
      <ul className="clear-fix">
        <li>
          <NavLink exact to="/">
            <i className="iconfont icon-home"></i>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/lifeserver">
            <i className="iconfont icon-trophy"></i>
            生活服务
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">
            <i className="iconfont icon-shop"></i>
            商城
          </NavLink>
        </li>
        <li>
          <NavLink to="/user">
            <i className="iconfont icon-team"></i>
            我的
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default BottomNav
