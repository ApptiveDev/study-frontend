import { useState } from 'react'
import './index.css';
function App() {
  return (
   
    <div className='screen'>

        <header className='header'>
          <h1 className='logo'>SiteName</h1>
          <div className='header-container'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
          </div>
        </header>

        <main className='contents'>
          <h2 className='text'>Hello<br />World!!!</h2>
          <div className='widget-container'>
            <div className='widget'><h2 className='text'>1</h2></div>
            <div className='widget'><h2 className='text'>2</h2></div>
            <div className='widget'><h2 className='text'>3</h2></div>
            <div className='widget'><h2 className='text'>4</h2></div>
            <div className='widget'><h2 className='text'>5</h2></div>
          </div>
        </main>

      <nav className='navigation'>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
      </nav>
    </div>
  )
}

export default App
