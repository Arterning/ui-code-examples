import HeadNav from '@/component/headnav'
import React from 'react'
import Swiper from '@/component/swipeable'
import { useSelector } from 'react-redux'

import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import HomeHotList from './HomeHotList'
const HomePage = () => {
  const city = useSelector((state: any) => state.city)

  return (
    <>
      <HeadNav cityName={city.cityName} />
      <Swiper banners={[Banner1, Banner2, Banner3]} />
      <HomeHotList cityName={city.cityName} />
    </>
  )
}
export default HomePage
