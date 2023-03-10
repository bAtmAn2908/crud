import React from 'react'
import { ReuseComp } from './ReuseComp';

export const MapFunc = () => {

    const arr = [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5007", type: "Powdered Sugar" },
        { id: "5006", type: "Chocolate with Sprinkles" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" }
    ];

   
  return (
    <div>
        
        <h1>TABLE</h1>
        <table>
        <tr>
                                <th>ID </th>
                                <th>type</th>
                            </tr>
        {
                    arr.map((country,i) =>
                    <><ReuseComp data={country}/>
                    </>
                    )
        }

</table>
    </div>
  )
}
