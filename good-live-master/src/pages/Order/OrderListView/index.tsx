import React from 'react'
import Item from './Item'

const OrderListView = (props) => {
  return (
    <div>
      {props.data.map((ele, index) => {
        return <Item user={props.user} key={index} data={ele}></Item>
      })}
    </div>
  )
}

export default OrderListView
