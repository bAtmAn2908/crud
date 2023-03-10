import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Filter = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get('age');
    const name = searchParams.get('name');

  return (
    <div>Filter
        {age}
        {name}
        <button onClick={()=>setSearchParams({age:40})}>Set age 40</button>
        <input type="text" onChange={(e)=>setSearchParams({name:e.target.value,age})}></input>
    </div>
  )
}
