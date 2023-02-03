import { logData, logData2, logData3 } from '@/pages/constant'
import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.less'
import MiniMap from './miniMap'
const About = () => {
  const [logDataa, setLogData] = useState<any>()
  const logRef = useRef<any>(null)
  const handleClick = () => {
    // console.log(logRef)
  }
  useEffect(() => {
    setTimeout(() => setLogData(logData2), 10)
  }, [])
  return (
    <>
      <div>
        <div
          style={{
            position: 'sticky',
            width: '100%',
            top: '0',
            zIndex: '1000',
            backgroundColor: '#CCC',
          }}
        >
          <ul style={{ height: '40px', color: '#fff' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/haha">haha</Link>
            </li>
          </ul>
          {/* <hr /> */}
          <h1 style={{ height: '20px' }}>About</h1>
          <div
            style={{
              height: '50px',
              fontSize: '18px',
              color: 'red',
              backgroundColor: 'skyBlue',
              textAlign: 'center',
            }}
          >
            nav<div style={{ height: '15px' }}>1</div>
          </div>
        </div>
        {/* <Button onClick={handleClick}>打印</Button>
        <Button>1</Button> */}
        <div id="about-box" style={{ maxWidth: '1400px' }}>
          <div className="about" dangerouslySetInnerHTML={{ __html: logDataa }} ref={logRef}></div>
          <MiniMap content={logDataa} logNode={logRef.current} />
          {/* <div style={{ padding: '5px 5px 15px', width: '110px', backgroundColor: '#eee' }}>
            <div
              className="log-content-wrapper"
              style={{ transform: 'scale(0.1)' }}
              dangerouslySetInnerHTML={{ __html: logDataa }}
            ></div>
          </div> */}
        </div>
      </div>
    </>
  )
}
export default About
