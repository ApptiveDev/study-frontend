import { useState } from 'react'
import './index.css'
import Header from './header'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='all'>
            <Header/>
            <Content/>
        </div>
    </>
  )
}

export default App