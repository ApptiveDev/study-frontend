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

export default Area;