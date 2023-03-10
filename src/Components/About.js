import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/About.css';

export const About = () => {
  return (
    <div class="card">
    <div class="card-header">
      Users 
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
      <Link to="/users/prajesh">Prajesh</Link>
      </li>
      <li class="list-group-item">
      <Link to="/users/rakun">Rakun</Link>
      </li>
      
      <li class="list-group-item">

      </li>
    </ul>
  </div>
  )
}
