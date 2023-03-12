import React, { useState } from 'react'
import { loadImageAsync } from '@/utils/loadImgAsync'

import './index.less'
import DefaultImg from '@/static/img/11.png'
import { Link } from 'react-router-dom'
const Item = (props) => {
  const [currentImg, setCurrentImg] = useState(DefaultImg)
  const data = props.data
  loadImageAsync(data.img)
    .then((res) => {
      setCurrentImg(res)
    })
    .catch((error) => {
      console.log(error)
    })
  return (
    <div className="list-item">
      <Link to={`/details/${data.id}`}>
        <img src={currentImg} alt="" />
        <div className="mask">
          <div className="left">
            <p>{data.title}</p>
            <p>{data.houseType}</p>
          </div>
          <div className="right">
            <div className="btn">{data.rentType}</div>
            <p dangerouslySetInnerHTML={{ __html: data.price + '元/月' }}></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item
