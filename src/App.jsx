import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='all'>
            <header>
                <div className="sitename">SiteName</div>
                <div className="headerboxes">
                    <div className="headerbox"></div>
                    <div className="headerbox"></div>
                    <div className="headerbox"></div>
                </div>
            </header>
            <main>
                    <h1>Hello<br/>World!!!</h1>
                    <div className="widgetboxes">
                        <div className="widgetbox">1</div>
                        <div className="widgetbox">2</div>
                        <div className="widgetbox">3</div>
                        <div className="widgetbox">4</div>
                        <div className="widgetbox">5</div>
                    </div>
            </main>
            <nav>
                    <div className="navboxes">
                        <div className="navbox"></div>
                        <div className="navbox"></div>
                        <div className="navbox"></div>
                        <div className="navbox"></div>
                    </div>
            </nav>
        </div>
    </>
  )
}

export default App