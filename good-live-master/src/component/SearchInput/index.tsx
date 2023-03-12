import React, { useState, useRef, useEffect } from 'react'
import './index.less'
import { useSelector, useDispatch } from 'react-redux'
import * as searchAction from '../../redux/actions/search'
import { useParams, withRouter } from 'react-router-dom'

const SearchInput = (props) => {
  const [keywords, setKeywords] = useState('')
  const searchKey = useRef()
  const dispatch = useDispatch()
  const params: any = useParams()
  const reduxKeywords = useSelector((state: any) => state.search)

  function keyUpHandle(e) {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        props.history?.push('/search/' + keywords)
        dispatch(searchAction.updaetSearch(keywords))
      }
    }
  }

  /**
   * 回传
   */
  useEffect(() => {
    if (params.keywords) {
      dispatch(searchAction.updaetSearch(params.keywords))
    } else {
      dispatch(searchAction.updaetSearch(''))
    }
    setKeywords(reduxKeywords.search)
  }, [reduxKeywords.search, params.keywords])

  function changeHandle(e) {
    setKeywords(e.target.value)
  }

  return (
    <input
      className="search-input"
      type="text"
      onKeyUp={keyUpHandle}
      value={keywords}
      onChange={changeHandle}
      ref={searchKey}
    />
  )
}

export default withRouter(SearchInput)
