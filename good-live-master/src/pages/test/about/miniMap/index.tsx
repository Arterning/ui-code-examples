import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import './index.less'

interface MinimapProps {
  content: string // minimap展示的日志内容
  logNode: HTMLDivElement // 日志的node节点
  visible?: boolean
  setIsMinimapShow?: any
}

interface InitialData {
  initialTop?: string // 初次进入任务详情页面，渲染完成时日志节点距顶部的距离
  scale?: number // 缩放比例
  windowScrollToNav?: number // window滚动到日志上边界的距离（minimap完整显示的起始位置）
  windowScrollTotalLen?: number // window可滚动的总长度
  mapScrollLen?: number // minimap可滚动的长度
  slope?: number // minimap滚动方程的斜率
  intercept?: number // minimap滚动方程的截距
  sliderSlope?: number
  sliderIntercept?: number
  sliderHeight?: number // slider的高度
}

const MINIMAP_MARGIN = 20
const MINIMAP_TOP = 110 // minimap粘性定位时top值
const MINIMAP_WIDTH = 100
const HEADER_HEIGHT = 110
const BODY_PADDING = 100 // body设置了下padding 计算时不可忽略
const WRAPPER_PADDING = 5

const changeStyle = (
  ele: HTMLElement,
  styles: {
    [key in keyof CSSStyleDeclaration]?: string
  },
) => {
  for (const [key, val] of Object.entries(styles)) {
    ele.style[key] = val
  }
}

const MiniMap: FC<MinimapProps> = (props) => {
  const { content, logNode } = props
  const [show, setShow] = useState<boolean>(false)
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const [isScroll, setIscroll] = useState<boolean>(false)
  const minimap = useRef<HTMLDivElement>(null)
  const initialData = useRef<InitialData>({} as InitialData)
  const slider = useRef<HTMLDivElement>(null)
  const logContent = useRef<HTMLDivElement>(null)
  const mouseY = useRef<number>(0) // 记录鼠标在minimap点击坐标

  const initMap = () => {
    // window.scrollTo(0, 0)

    // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
    const logRect = logNode.getBoundingClientRect()

    // 缩放比例
    const scale = MINIMAP_WIDTH / logRect.width
    // 对日志内容进行等比例缩放
    logContent.current.classList.add('zoom-minimap')

    // 距离顶部nav的距离
    const windowScrollToNav = logRect.y - HEADER_HEIGHT
    // // 页面可以滚动的长度
    const windowScrollTotalLen =
      document.querySelector('#root').clientHeight - document.body.clientHeight
    // // minimap 隐藏的高度
    const { scrollHeight, clientHeight } = minimap.current
    const mapScrollLen = scrollHeight - clientHeight
    //  slope = 隐藏的高度 / (文档可以滚动的长度 - 距离顶部的距离)
    // minimap 和 页面滚动距离的比值   滚动的nav那段距离不需要 所以减去
    const slope = mapScrollLen / windowScrollTotalLen
    // 距离nav的距离  * 占比
    const intercept = -windowScrollToNav * slope
    // 计算出滑动到底部时，slider距离窗口上边缘的距离
    // eslint-disable-next-line prefer-const
    let bottomSliderTop = 0
    // slider的高度 = (页面的高度 - Nav的高度  ) * 缩放比例
    const sliderHeight = (window.innerHeight - HEADER_HEIGHT) * scale
    // 如果缩小的文档 有隐藏的高度
    if (mapScrollLen) {
      bottomSliderTop = minimap.current.getBoundingClientRect().height - sliderHeight
    } else {
      bottomSliderTop = (logNode.getBoundingClientRect().height + 50) * scale - sliderHeight
    }
    // 滑动缩放比例
    const sliderSlope = bottomSliderTop / windowScrollTotalLen
    //
    // nav 高度 -
    const sliderIntercept = MINIMAP_TOP
    slider.current.style.height = `${sliderHeight}px`
    initialData.current = {
      scale,
      // initialTop: `${logRect.y}px`,
      windowScrollToNav,
      windowScrollTotalLen,
      mapScrollLen,
      slope,
      intercept,
      sliderSlope,
      sliderHeight,
      sliderIntercept,
    }
    setShow(true)
    // }
  }
  const handleMinimapScroll = () => {
    const { mapScrollLen, slope, intercept } = initialData.current
    if (mapScrollLen === 0) return
    const len = (window.scrollY - 100) * slope + intercept
    minimap.current.scrollTop = len
  }
  const handleSliderScroll = () => {
    const { sliderIntercept, sliderSlope } = initialData.current
    slider.current.style.top = `${(window.pageYOffset - 100) * sliderSlope + HEADER_HEIGHT}px`
  }
  // 滚动事件回调函数
  const windowScroll = () => {
    if (logNode) {
      const logRect = logNode.getBoundingClientRect()
      if (logRect.y <= 110) {
        setIscroll(true)
        const { mapScrollLen } = initialData.current
        changeStyle(slider.current, {
          display: 'block',
          position: 'fixed',
          top: `${110}px`,
          left: `${minimap.current.getBoundingClientRect().left}px`,
        })
        changeStyle(minimap.current, {
          height: window.innerHeight - HEADER_HEIGHT + 'px',
          position: 'sticky',
          overflow: 'hidden',
          // paddingTop: '5px',
          top: '110px',
        })
        handleMinimapScroll()
        handleSliderScroll()
      } else {
        setIscroll(false)
        slider.current.style.display = 'none'
        changeStyle(minimap.current, {
          height: '',
          position: '',
          overflow: '',
          top: '',
        })
      }
    }
  }
  const handleMinimapMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    const { windowScrollToNav, scale } = initialData.current
    // console.log(windowScrollToNav, 'windowScrollToNav', scale, 'scale')
    // offsetY：当鼠标事件发生时，鼠标相对于事件源(也就是绑定事件的dom)y轴的位置
    // clientY：当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
    const { offsetY, clientY } = e.nativeEvent
    // console.log(offsetY, 'offsetY', clientY, 'clientY')
    const target = e.target as HTMLElement
    // console.log(target, 'target', e)
    // 计算点击处在原始日志的Y轴坐标(显示在屏幕中间)
    if (target.className.includes('log-content-wrapper')) {
      // const scrollY = windowScrollToNav + offsetY / scale - window.innerHeight / 2
      const scrollY = HEADER_HEIGHT + offsetY / scale - window.innerHeight / 2
      window.scrollTo(0, scrollY)
      // console.log(scrollY, 'scrollY')
    }

    // // 如果是遮罩框, 记录点击处距离屏幕上边缘Y轴坐标
    if (target.className === 'slider-controller') {
      mouseY.current = clientY
    }
  }, [])
  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    const { sliderSlope, sliderHeight, scale } = initialData.current
    const logConetnRect = logContent.current.getBoundingClientRect()
    // clientY：当鼠标事件发生时，鼠标相对于浏览器（这里说的是浏览器的有效区域）y轴的位置；
    const { clientY } = e.nativeEvent
    const innerHeight = window.innerHeight
    // 滑块最多滑动到缩小文档的最底部
    if (
      isMouseDown &&
      clientY <= innerHeight - sliderHeight + 2 &&
      clientY <= logConetnRect.height * scale + 10 + HEADER_HEIGHT - sliderHeight
    ) {
      const top = slider.current.style.top.replace(/[^\d.]/g, '')
      changeStyle(slider.current, {
        top: `${clientY}px`,
      })
      const windowOffset = (Number(top) - HEADER_HEIGHT) / sliderSlope + 100
      window.scrollTo(0, windowOffset)
      mouseY.current = clientY
    }
  }
  const handlePointerUp = useCallback(() => {
    setIsMouseDown(false)
  }, [])

  const handleSliderDown = useCallback(() => {
    setIsMouseDown(true)
  }, [])
  useEffect(() => {
    // 监听滚动事件
    window.addEventListener('scroll', windowScroll)
    // 监听鼠标抬起事件
    window.addEventListener('mouseup', handlePointerUp)
    return () => {
      window.removeEventListener('scroll', windowScroll)
      window.removeEventListener('mouseup', handlePointerUp)
    }
  }, [logNode])
  useEffect(() => {
    if (logNode && content.replace(/<pre class="console-output">|<\/pre>/g, '')) {
      initMap()
    }
  }, [content, logNode, minimap, isScroll])
  return (
    <>
      <div
        onMouseDown={handleMinimapMouseDown}
        onMouseMove={handlePointerMove}
        className={classNames('log-minimap')}
        ref={minimap}
      >
        <div
          ref={logContent}
          className="log-content-wrapper"
          dangerouslySetInnerHTML={{
            __html: content?.startsWith('<pre class="console-output">')
              ? content
              : `<pre class="console-output">${content}</pre>`,
          }}
        />
        <div
          ref={slider}
          onMouseDown={handleSliderDown}
          className={classNames('slider-controller', {
            mousedown: isMouseDown,
          })}
        />
      </div>
    </>
  )
}

export default MiniMap
