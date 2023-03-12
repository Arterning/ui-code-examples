import React, { useState } from 'react'
import './index.less'

/**
 * tabs视图结构
 *
 * 使用结构：
 * <Tabs>
 *     <Tab lable="详情">
 *         <div>
 *             <h3>详情信息</h3>
 *         </div>
 *     </Tab>
 *     <Tab label="评价">
 *         <div>评价信息</div>
 *     </Tab>
 * </Tabs
 *
 *
 * 渲染结构：
 * <ul>
 *    <li>详情</li>
 *    <li>评价</li>
 * </ul>
 * <div>详情信息</div>
 * <div>评价信息</div>
 *
 */

const Tabs = (props: any) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  function tabClickHandle(index) {
    setCurrentIndex(index)
  }

  function titleClass(index) {
    return index === currentIndex ? 'Tab_title active' : 'Tab_title'
  }

  return (
    <div>
      <ul className="Tab_title_wrap">
        {React.Children.map(props.children, (element, index) => {
          return (
            <li onClick={() => tabClickHandle(index)} className={titleClass(index)} key={index}>
              {element.props.id}
            </li>
          )
        })}
      </ul>
      <div>
        {React.Children.map(props.children, (element, index) => {
          return <div>{currentIndex === index ? element.props.children : ''}</div>
        })}
      </div>
    </div>
  )
}

export default Tabs
