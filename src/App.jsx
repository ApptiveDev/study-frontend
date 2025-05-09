import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Header from './Header'
import Footer from './Footer'

export const data = [
	{
		name: '부산광역시',
		views: 260_000_000,
		likes: 1230,
	},
	{
		name: '대구광역시',
		views: 200_000_000,
		likes: 1050,
	},
	{
		name: '제주특별자치도',
		views: 180_000_000,
		likes: 900,
	},
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <Header title="순위 상세 페이지"/>
      <div className="contents">
        <div className="select-container">
          <button className="select active">주간 조회수 순위</button>
          <button className="select">누적 조회수 순위</button>
        </div>
        <div className="ranking-container">
          {data.map((item, index) => (
            <div key={index} className="ranking-item">
              <div className="rank">{index + 1}</div>
              <img src="/rankingimage.jpg" alt="image" className="image"/>
              <div className="text-container">
                <div className="city">{item.name}</div>
                <div className="view">조회수: {item.views.toLocaleString()}</div>
              </div>
              <div className="like-container">
                <div className="like">❤️</div>
                <div className="likes">{item.likes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App;
