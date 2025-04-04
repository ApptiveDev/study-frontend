import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      <Header title={"윈도우 정품 인증"} />
      <main className="content">
        <h1>Hello<br/>World!!!</h1>
        <h2 onClick={() => setCount(count+1)}>{count}</h2> 
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
