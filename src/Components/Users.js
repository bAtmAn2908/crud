import React from 'react'
import { useParams } from 'react-router-dom'

export const Users = () => {
    const params = useParams();
    const {name} = params;
  return (
    <div>
        {name}
    </div>
  )
}
