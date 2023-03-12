import React from 'react'
import DetailsHeader from '../../../component/pubHeander'
import Swiper from '@/component/swipeable'
import BuyAndStore from '../BuyAndStore'
import Tabs from '@/component/Tabs'
import Comment from '../Comment'
import './index.less'

const DetailsView = (props) => {
  const detailsData = props.detailsData
  return (
    <div>
      <DetailsHeader title={'详情页'} />
      <div>
        <Swiper banners={detailsData.imgs} />
        <Tabs>
          <div id="详情">
            <div className="detail-info">
              <h3>{detailsData.title}</h3>
              <div className="box">
                <ul>
                  <li>
                    <span>{detailsData.price} /月</span>
                    <p>租金</p>
                  </li>
                  <li>
                    <span>{detailsData.info.type}</span>
                    <p>房屋类型</p>
                  </li>
                  <li>
                    <span>{detailsData.houseType}</span>
                    <p>面积</p>
                  </li>
                </ul>
              </div>
              <div className="info">
                <div className="info-list">
                  <p>类型：{detailsData.info.type}</p>
                  <p>朝向：{detailsData.info.orientation}</p>
                </div>
                <div className="info-list">
                  <p>楼层：{detailsData.info.level}</p>
                  <p>装修：{detailsData.info.style}</p>
                </div>
                <div className="info-list">
                  <p>年代：{detailsData.info.years}</p>
                </div>
              </div>
            </div>
            <BuyAndStore id={props.id} />
          </div>
          <div id="评价">
            <Comment id={props.id} />
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default DetailsView
