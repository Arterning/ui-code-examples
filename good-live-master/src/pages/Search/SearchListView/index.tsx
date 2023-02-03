import React from 'react'
import Item from './Item'

const SearchListView = (props) => {
  return (
    <div>
      {props.search.map((ele, index) => {
        return <Item data={ele} key={index} />
      })}
    </div>
  )
}

export default SearchListView
