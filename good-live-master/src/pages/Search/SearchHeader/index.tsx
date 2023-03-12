import React from 'react'
import './index.less'
import SearchInput from '../../../component/SearchInput'
import { ArrowLeftOutlined, DownOutlined } from '@ant-design/icons'

const SearchHeader = () => {
  function backHandle() {
    window.history.back()
  }

  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={backHandle}>
        {/* <i className="icon-chevron-left"></i> */}
        <ArrowLeftOutlined />
      </span>
      <div className="input-container">
        {/* <i className="icon-search"></i> */}
        <SearchInput />
      </div>
    </div>
  )
}

export default SearchHeader
