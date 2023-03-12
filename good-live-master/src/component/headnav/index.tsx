import React, { useState } from 'react'
import { CarOutlined, DownOutlined, SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { Link } from 'react-router-dom'

import SearchInput from '../SearchInput'
import './index.less'
const HeadNav = (props) => {
  return (
    <>
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/city">
            <span>{props.cityName}</span>
          </Link>
          <DownOutlined />

          {/* <i className="icon-angle-down"></i> */}
        </div>
        <div className="home-header-right float-right">
          {/* <SearchOutlined /> */}
          <Link to="/order">
            <CarOutlined style={{ fontSize: '24px' }} />
          </Link>
          {/* <i className="iconfont icon-car"></i> */}
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            {/* <i className="icon-search"></i> */}
            {/* <input /> */}
            {/* <Input placeholder="请输入" className="input-antd" /> */}
            <SearchInput />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeadNav
