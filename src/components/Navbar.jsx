import React from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="part1"><h2 className="logo">Logo</h2></div>
      <div className='part2'>
        <ul className='navlists'>
          <li className='listitems'>Home</li>
          <li className='listitems'>Menu</li>
          <li className='listitems'>Contact</li>
          <li className='listitems'>Cart</li>
          <li className='listitems'><button className='navaction'>Login</button></li>
        </ul>
      </div>
    </div>
  )
}
