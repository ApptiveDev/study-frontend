import React from "react";
import { useState } from 'react';
import './Home.css';

function Main () {
    const [count, setCount] = useState(0);

    return (
        <div className="content">
            <div className="title">
                <h2 onClick ={ () => setCount(count +1)} > {count} </h2>
            </div>
            <div className="boxes-wrap-vertical">
            <div className="box">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
            </div>
        </div>
    );
}

export default Main;