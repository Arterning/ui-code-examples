import React, { useEffect, useState, useRef } from 'react'
import './index.less'

const LoadMore = (props) => {
  const more: any = useRef()

  const [loadTop, setLoadTop] = useState(10000)
  // let timer = null

  // const scrollHandle = () => {
  //   const winHeight = document.documentElement.clientHeight

  //   if (more.current) {
  //     setLoadTop(more.current.getBoundingClientRect().top)
  //     // 手动实现一个防抖
  //     if (timer) {
  //       clearTimeout(timer)
  //     } else {
  //       timer = setTimeout(() => {
  //         if (winHeight > loadTop) {
  //           props.onLoadMore()
  //         }
  //       }, 100)
  //     }
  //   }
  // }
  /**
   * 浅比较
   */
  useEffect(() => {
    // getBoundingClientRect
    // 视口高度
    let timer = null
    const winHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', () => {
      if (more.current) {
        setLoadTop(more.current.getBoundingClientRect().top)
        // 手动实现一个防抖
        if (timer) {
          clearTimeout(timer)
        } else {
          timer = setTimeout(() => {
            if (winHeight > loadTop) {
              props.onLoadMore()
            }
          }, 100)
        }
      }
    })
  }, [loadTop])

  return (
    <div className="load" ref={more}>
      加载更多
    </div>
  )
}

export default LoadMore
