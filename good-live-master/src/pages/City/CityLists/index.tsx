import React, { useState, useEffect } from 'react'
import CitySelect from 'react-city-select'
import cityData from '../../../data/city'
import api from '../../../api'
import './index.less'

const CityLists = (props) => {
  const [citysData, setCitysData] = useState(cityData)

  function handleSelectCity(cityData) {
    props.onEvent(cityData.name)
  }

  useEffect(() => {
    api.getCityLists().then((res: any) => {
      if (res?.status === 200) {
        setCitysData(res.data.result.citylist)
      }
    })
  }, [])

  return (
    <div className="citylists">
      <h3>城市列表</h3>
      <CitySelect
        data={citysData}
        // 传入回调
        onSelectItem={handleSelectCity}
      ></CitySelect>
    </div>
  )
}

export default CityLists
