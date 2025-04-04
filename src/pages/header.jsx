import React from "react";
import './Home.css';

function Header (props) {
    return (
        <header className="header">
            <span className="site-name">{props.title}</span>
            <div className="button-group">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
            </div>
        </header>
    );
};

export default Header;