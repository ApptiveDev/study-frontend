function Nav(){
    return (
    <nav>
        <div className='nav_div'>
            <div className='home'>
                <img src='public\assets\home.png'/>
                <p>홈</p>
            </div>
            <div className='ranking'>
                <img src='public\assets\ranking.png'/>
                <p>랭킹</p>
            </div>
            <div className='short_form'>
                <img src='public\assets\short-form.png'/>
                <p>숏폼</p>
            </div>
            <div className='upload'>
                <img src='public\assets\upload.png'/>
                <p>업로드</p>
            </div>
        </div>
    </nav>
    );
}

export default Nav;