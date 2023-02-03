import React, { useState } from 'react'
import CityHeader from '../../component/pubHeander'
import CurrentCity from './CurrentCity'
import CityList from './CityList'
import { useSelector, useDispatch } from 'react-redux'
import { initCity, changeCity } from '../../redux/actions/city'
import CityLists from './CityLists'

// useSelector 用来读取数据
// useDispatch 用来获取dispatch对象
const City = (props) => {
  // const [city,setCity] = useState("北京")
  const dispatch = useDispatch()
  const city = useSelector((state: any) => state?.city)

  function onCityEvent(city) {
    dispatch(changeCity(city))
    props.history.push('/')
  }

  return (
    <div>
      <CityHeader title={'城市选择'} />
      <CurrentCity city={city.cityName} />
      <CityList onEvent={onCityEvent} />
      <CityLists onEvent={onCityEvent} />
    </div>
  )
}

export default City
