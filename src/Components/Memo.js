import React, { useState } from 'react'

export const Memo = () => {
    const [count, setcount] = useState(0);
    const [item, setitem] = useState(1)

   
  return (
    <div>Mez<br></br>
        <button onClick={()=>setcount(count+1)}>Add Count</button>
        <button onClick={()=>setitem(item*2)}>Double Item</button>
        <h1>Count : {count}</h1>
        <h1>Item : {item}</h1>
    </div>
    
  )
}
