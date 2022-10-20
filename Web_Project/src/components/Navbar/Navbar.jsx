import './navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/adduser'>Add User</Link>
        <Link to='/viewusers'>User Details</Link>
    </div>
  )
}
