import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <header className="header">
        <div className="site-name">SiteName</div>
          <div className="boxes">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
          </div>
      </header>
      <main className="content">
        <h1>Hello<br/>World!!!</h1>
        <div className="widget-container">
          <div className="widget">
            <div className="widget-box">1</div>
            <div className="widget-box">2</div>
            <div className="widget-box">3</div>
            <div className="widget-box">4</div>
            <div className="widget-box">5</div>
          </div>
        </div>
      </main>
      <nav className="nav">
        <div className='nav-boxes'>
          <div className="nav-box"></div>
          <div className="nav-box"></div>
          <div className="nav-box"></div>
          <div className="nav-box"></div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default App
