import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as collectActions from '../../../redux/actions/collect'
import './index.less'

const BuyAndStoreView = (props) => {
  const dispatch = useDispatch()
  const [isCollect, setIsCollect] = useState(true)

  // 初始化操作
  useEffect(() => {
    console.log(props, 'rposp')
    console.log(isStore(), 'isStore')
    setIsCollect(isStore())
  }, [])

  function storeHandle() {
    if (props.user.token) {
      /**
       * 判断用户是否收藏
       *  1. 收藏则取消收藏
       *  2. 为收藏则收藏
       */
      if (isStore()) {
        setIsCollect(false)
        // 已收藏
        dispatch(collectActions.removeCollect(props.id))
      } else {
        console.log(props.user.token, !props.user.token, 'token')

        setIsCollect(true)
        // 未收藏
        dispatch(collectActions.setCollect(props.id))
      }
    } else {
      // 请登录
      props.history.push('/login')
    }
  }

  /**
   * 用户收藏判定
   * return boolean
   *     true:收藏
   *     false:未收藏
   */
  function isStore() {
    const collects = props.collects
    const id = props.id
    return collects.some((item) => {
      return item == id
    })
  }

  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {isCollect ? (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        ) : (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        )}
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
    </div>
  )
}

export default withRouter(BuyAndStoreView)
