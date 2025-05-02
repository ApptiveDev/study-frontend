import "./videoSection.css";

function PopularVideos() {
  const videos = [
    {
      id: 1,
      image: "/images/images.jpg",
      title: "맛집 어쩌고저쩌고 123위",
      likes: 12,
      views: "조회수 3억 8천만회",
    },
    {
      id: 2,
      image: "/images/images.jpg",
      title: "맛집 어쩌고저쩌고 123위",
      likes: 12,
      views: "조회수 3억 8천만회",
    },
  ];

  return (
    <div className="video-section">
      <div className="video-header">
        <div className="video-title">주간 인기 영상</div>
        <div className="video-date">8/13 14:00</div>
      </div>

      <div className="video-categories">
        <button className="category-button">행사</button>
        <button className="category-button">정책</button>
        <button className="category-button">관광</button>
        <button className="category-button">이슈</button>
      </div>

      <div className="video-list">
        {videos.map((video) => (
          <div className="video-card" key={video.id}>
            <div
              className="video-image-container"
              style={{ backgroundImage: `url(${video.image})` }}
            >
              <div className="video-info">
                <div className="video-likes">
                  <span className="heart-icon">❤️</span>
                  <span>{video.likes}</span>
                </div>
                <div className="video-title-text">{video.title}</div>
                <div className="video-views">{video.views}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularVideos;
