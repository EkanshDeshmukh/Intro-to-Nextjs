import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>This is {params.productId} page</h1>
    </div>
  )
}

export default page