import React from 'react'
import { useParams } from 'react-router-dom'
import DetailsList from './DetailList'

const Details = () => {
  const params: any = useParams()

  return (
    <div>
      <DetailsList id={params.id} />
    </div>
  )
}

export default Details
