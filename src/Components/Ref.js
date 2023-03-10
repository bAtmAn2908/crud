import React, { useRef } from 'react'


export const Ref = () => {

    let colorChange=useRef()

    function ChCol(){
        colorChange.current.style.color="red";
    }
  return (
    <div ref={colorChange}>
        <button onClick={ChCol}>Dark mode</button>
    </div>
  )
}
