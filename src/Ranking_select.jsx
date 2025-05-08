import React, { useState } from 'react';

const RankingSelector = () => {
  const [selected, setSelected] = useState('weekly');

  const handleClick = (buttonType) => {setSelected(buttonType);};

  return (
    <div className='ranking_select'>
      <button 
        className='ranking_weekly' 
        style={{ backgroundColor: selected === 'weekly' ? 'rgb(233, 233, 233)' : '#ffffff' }}
        onClick={() => handleClick('total')}
      >
        주간 조회수 순위
      </button>
      <button 
        className='ranking_total' 
        style={{ backgroundColor: selected === 'total' ? 'rgb(233, 233, 233)' : '#ffffff' }}
        onClick={() => handleClick('weekly')}
      >
        누적 조회수 순위
      </button>
    </div>
  );
};

export default RankingSelector;
