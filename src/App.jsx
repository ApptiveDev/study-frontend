import './index.css';

function App() {
    return (
    <div className='container'>
        <div className='frame01'>
            <header>
                <p>SiteName</p>
                <div className='rectangle_div'>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                </div>
                
            </header>
            <div className='contents'>
                <p className="title">Hello<br/>World!!!</p>
                <div className='widget'>
                    <div className='rectangle_widget'>
                        <div className='wi-rec'>1</div>
                        <div className='wi-rec'>2</div>
                        <div className='wi-rec'>3</div>
                        <div className='wi-rec'>4</div>
                        <div className='wi-rec'>5</div>
                    </div>
                </div>

            </div>
            <nav>
                <div className='rectangle_div'>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                </div>
            </nav>

        </div>
    </div>
    );
}

export { App }