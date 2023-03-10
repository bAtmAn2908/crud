import React from 'react'

export const ReuseComp = (props) => {
  return (
    <div>
        
        <tr >
                        <td>{props.data.id}</td>
                        <td>{props.data.type}</td>
                      </tr>

    </div>
  )
}
