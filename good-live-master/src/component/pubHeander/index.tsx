import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'
import './index.less'

const PubHeader = (props) => {
  function backHandle() {
    /**
     * 返回上一页两种方案
     *
     * hisotry.pushState()
     */
    // props.history.go(-1)
    window.history.back()
  }

  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <ArrowLeftOutlined />
        {/* <i className="icon-chevron-left"></i> */}
      </span>
      <h1>{props.title}</h1>
    </div>
  )
}

export default PubHeader
