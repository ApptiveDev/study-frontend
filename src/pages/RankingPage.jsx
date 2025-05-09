import React from 'react';

const weeklyData = [
  { rank: 1, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 2, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 3, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 4, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 5, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 6, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 7, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
  { rank: 8, city: '부산광역시', count: '2억 6천만회', views: '12.3k' },
];

const cumulativeData = [
  { rank: 1, city: '부산광역시', count: '5억 3천만회', views: '50k' },
  { rank: 2, city: '부산광역시', count: '5억 3천만회', views: '45k' },
  { rank: 3, city: '부산광역시', count: '5억 3천만회', views: '40k' },
  { rank: 4, city: '부산광역시', count: '5억 3천만회', views: '35k' },
  { rank: 5, city: '부산광역시', count: '5억 3천만회', views: '30k' },
  { rank: 6, city: '부산광역시', count: '5억 3천만회', views: '25k' },
  { rank: 7, city: '부산광역시', count: '5억 3천만회', views: '20k' },
  { rank: 8, city: '부산광역시', count: '5억 3천만회', views: '15k' },
];

function RankingList({ tab }) {
  const data = tab === 'weekly' ? weeklyData : cumulativeData;

  return (
    <div className="ranking-list">
      {data.map(item => (
        <div key={item.rank} className="ranking-item">
          <img src="https://via.placeholder.com/50" alt={item.city} className="city-image" />
          <div className="ranking-info">
            <h4>{item.city}</h4>
            <p>{item.count}</p>
            <div className="views-info">
              <span className="views">{item.views}</span>
              <button className="like-button">❤️</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RankingList;

