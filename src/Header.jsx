import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function Header(props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
        <div className="titletext">{props.title}</div>
    </header>
    </>
  )
}

export default Header;
