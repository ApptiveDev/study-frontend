import './index.css'; 
import Header from './components/header';
import Nav from './components/Nav';
import { useState } from 'react';

function Area({area}){
    return (
        <div className="area-box">
            <div className='left_part'>
                <div className='ranking_part'>
                    {area.ranking}
                </div>
                <div className='image_part'>
                    <img className='place_img' src={area.image} alt={area.place}></img>
                </div>
                <div className='text_part'>
                    <h4>{area.place}</h4>
                    <p>조회수 {area.views}</p>
                </div>
            </div>

            <div className='like_part'>
                <img src='public/assets/like.png' alt='like'></img>
                <p>{area.like}</p>
            </div>
        </div>
    );
}

function RankTap(){
    return(
        <div className='tab-box'>
            <button className='weekly_tab'>주간 조회수 순위</button>
            <button className='cumulative_tab'>누적 조회수 순위</button>
        </div>
    );
}

function App() {
    const [count, setCount] = useState(0);

    const area_array = [
        {
            id: 1,
            ranking:1,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 2,
            ranking:2,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 3,
            ranking:3,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 4,
            ranking:4,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 5,
            ranking:5,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 6,
            ranking:6,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 7,
            ranking:7,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 8,
            ranking:8,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 9,
            ranking:9,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
        {
            id: 10,
            ranking:10,
            image: 'public/assets/Boogie.jpg',
            place: '부산광역시',
            views: '2억 6천만회',
            like: '12.3k',
        },
    ];

    return (
    <div className='container'>
        <div className='frame01'>
            <Header title = "순위 상세 페이지"/>
            <div className='contents'>
                <div className='divide_rank'>
                    <RankTap></RankTap>
                </div>
                <div className='array-zone'>
                    <ul>
                    {area_array.map(area => (
                        <li><Area area={area} key = {area.id}/></li>
                    ))}
                    </ul>
                </div>
            </div>
            <Nav></Nav>
        </div>
    </div>
    );
}

export { App }