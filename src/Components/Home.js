import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Home = () => {
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location)

  return (
    <div>Home 
      <br></br>
      {/* <button onClick={()=>navigate('/about')}>Go to Users</button>
      <button onClick={()=>navigate('/filter')}>Go to Filter</button> */}
    </div>
  )
}
