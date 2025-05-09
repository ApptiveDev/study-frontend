import { useState } from 'react'

import {data} from './data/rankingData'
import RankingCard from './RankingCard';

function formatLike(number){
    return (number/1000).toFixed(1)
}

function formatView(number){
    const billion = Math.floor(number / 100000000); 
    const million10 = Math.floor((number % 100000000) / 10000000); 
    if (billion>0 && million10>0)
        return `${billion}억 ${million10}천만`;
    else if(billion>0)
        return `${billion}억`;
    return `${million10}천만`
}

function RankingList({className}){
    data.sort((a,b)=>b.views-a.views);//내림차순 정렬
    return (
        <main className={className}>
          {data.map((item, index) => {
            const key = `data-${index}-${item.name}`;
            return (
              <RankingCard
                key={key}
                order={index + 1}
                name={item.name}
                likes={formatLike(item.likes)}
                views={formatView(item.views)}
              />
            );
          })}
        </main>
      );
}
export default RankingList