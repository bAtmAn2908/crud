import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" >Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* <li class="nav-item">
        <Link class="nav-link active" to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/about">Users</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/filter">Filter</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/contacts">Contacts</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/login">Login</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/api">API</Link>
        </li> */}
        <li class="nav-item">
        <Link class="nav-link active" to="/reguser">Register User</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/viewuser">View User</Link>
        </li>


        {/* <li class="nav-item">
        <Link class="nav-link active" to="/users/prajesh">Prajesh</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" to="/users/rakun">Rakun</Link>
        </li> */}

      </ul>
    </div>
  </div>
</nav>
    // <div>Navbar
    //      <Link to="/about">About</Link>
    //   <Link to="/">Home</Link>
    // </div>
  )
}
