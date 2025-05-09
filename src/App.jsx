import { useState } from 'react'
import './App.css'

import Section from './Section'
import Nav from './Nav'
import RankingList from './RankingList'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="app-container">
        <div className="title">순위 상세 페이지</div>
        <Section className="section"/>
        <RankingList className="rank-list"/>
        <Nav className="nav"/>
      </div>
    </>
  )
}

export default App
