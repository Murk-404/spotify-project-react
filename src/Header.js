import React from 'react'
import './App.css';
import logo from './images/spotimation_new.png';

export default function Header() {
  return (
    <header>
      <img className="logo" src={ logo } alt="logo" width="15%"/>
      <ul className="nav_links">
        <li><a href="http://localhost:3000/#">Services</a></li>
        <li><a href="http://localhost:3000/#">Projects</a></li>
        <li><a href="http://localhost:3000/#">About</a></li>
      </ul>
      <a className="cta" href="#"><button>Contact</button></a>
    </header>
  )
}
