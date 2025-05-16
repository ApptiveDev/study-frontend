import React from 'react'
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

const rankingList = [
  { rank: 1, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 2, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 3, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 4, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 5, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 6, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 7, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
  { rank: 8, name: '부산광역시', views: '2억 6천만회', likes: '12.3k', img:'./public/busan.png' },
];

function App() {

  return (
   
  <div className="app-container">
    <Header />
    <div className="ranking-screen">

    <div className="view">
      <button className="active">주간 조회수 순위</button>
      <button>누적 조회수 순위</button>
    </div>
    <div className="list-container">
    <ul className="ranking-list">
      {rankingList.map(item => (
        <li key={item.rank} className="ranking-item">
          <span className="rank-number">{item.rank}</span>
          <img
              className="thumb"
              src={item.img}
              alt={`${item.name} 썸네일`}
            />
          <div className="info">
            <strong>{item.name}</strong>
            <small>조회수 {item.views}</small>
          </div>
          <div className="likes-container">
          <img
              className="icon-heart"
              src="./public/heart.svg"
          />
          <small className="likes">{item.likes}</small>
        </div>
        </li>
      ))}
    </ul>
    </div>
    </div>
    <Nav />
  </div>
  )
};

export default App
