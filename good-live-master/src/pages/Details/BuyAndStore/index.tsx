import React from 'react'
import { useSelector } from 'react-redux'

import BuyAndStoreView from '../BuyAndStoreView'
import './index.less'

const BuyAndStore = (props) => {
  const login: any = useSelector((state: any) => state.login)
  const collects = useSelector((state: any) => state.collect)
  return (
    <div className="buy-and-store">
      <BuyAndStoreView id={props.id} user={login.user} collects={collects} />
    </div>
  )
}

export default BuyAndStore
