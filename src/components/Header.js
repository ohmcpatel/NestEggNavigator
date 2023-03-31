import React from 'react'
import logo from "../Assets/Logo/logo-transparent-png.png"
import "./Header.css"

export default function Header() {
  return (
    <div className='header'>
        <img className="logo" src={logo} alt="Logo" />
        <ul className='button-links'>
            <h1 className='top-buttons'>Blog</h1>
            <h1 className='top-buttons'>About</h1>
        </ul>

    </div>  
  )
}
