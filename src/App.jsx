import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <header>
        <div className="sitename">SiteName</div>
        <div className="squarediv">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </header>
      
      <div className="contents">
        <div className="title">Hello<br/>World!!!</div>
        <div className="widgetsquarediv">
          <div className="widgetsquare">1</div>
          <div className="widgetsquare">2</div>
          <div className="widgetsquare">3</div>
          <div className="widgetsquare">4</div>
          <div className="widgetsquare">5</div>
        </div>
      </div>
      
      <nav>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </nav>
    </div>
    </>
  )
}

export default App
