import React, { memo } from 'react'

const Search = ({onChange}) => {
  return (
    <input type="text" placeholder='Search Users' onChange={(e)=> onChange(e.target.value)} />
  )
}

export default memo(Search);