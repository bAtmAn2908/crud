import React from 'react'
import { Child2 } from './Child2'
import { ChildFp } from './ChildFp'

export const FuncProp = () => {

    function getData()
    {
      alert("Data aa gaya")
    }
  return (
    <div>
        <ChildFp data = {getData}/>
        <Child2 data2 = {getData}/>
    </div>
  )
}
