import React from 'react'
import './index.less'

const Star = (props) => {
  let num = props.num
  if (num > 5) {
    num = 5
  }
  /**
   * 星星的数量就是5个，有多少个亮了的
   *
   * 3
   */
  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((ele, index) => {
        const show =
          num >= ele ? (
            <i key={index} className={'icon-star light'}></i>
          ) : (
            <i key={index} className={'icon-star'}></i>
          )
        return show
      })}
    </div>
  )
}

export default Star
