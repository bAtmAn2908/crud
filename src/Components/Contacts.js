import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Contacts = () => {
  return (
    <div>Contacts
        <div class="container">
  <div class="row">
    <div class="col">
      <Link to="car">Car</Link>
    </div>
    <div class="col">
      <Link to="bike">Bike</Link>
    </div>
    <div class="col">
      <Link to="truck">Truck</Link>
    </div>
  </div>
</div>
<Outlet/>
    </div>
  )
}
