import { useState } from 'react'
import './index.css'
import Header from './header'
import RankingSelector from './Ranking_select'
import Content from './Content'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='all'>
            <Header/>
            <RankingSelector/>
            <Content/>
            <Nav/>
        </div>
    </>
  )
}

export default App