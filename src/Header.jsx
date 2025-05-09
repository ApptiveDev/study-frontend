import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(props) {

  return (
    <>
  <header className="header">
        <div className="site-name">SiteName</div>
        <h2>{props.title}</h2>
          <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
      </header>
    </>
  )
}

export default Header