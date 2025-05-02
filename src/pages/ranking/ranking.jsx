import "./ranking.css";
import Footer from '../../components/footer';

const Ranking = () => {
  const rankings = [
    {
      id: 1,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 2,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 3,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 4,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 5,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 6,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 7,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
    {
      id: 8,
      city: "부산광역시",
      views: 260_000_000,
      likes: 1230,
      imageUrl: "public/images/images.jpg",
    },
  ];

  const formatViews = (views) => {
    const billion = Math.floor(views / 100_000_000);
    const tenMillion = Math.floor((views % 100_000_000) / 10_000_000);
    return `조회수 ${billion}억 ${tenMillion}천만회`;
  };

  const formatLikes = (likes) => {
    return `${(likes / 1000).toFixed(1)}k`;
  };

  return (
    <div className="container">
      <div className="phone">
        <h1 className="title">순위 상세 페이지</h1>
        <div className="tab-buttons">
          <button className="tab">주간 조회수 순위</button>
          <button className="tab active">누적 조회수 순위</button>
        </div>
        <div className="chart">
          {rankings.map((item) => (
            <div key={item.id} className="rank-item">
              <span className="rank-number">{item.id}</span>
              <img className="rank-image" src={item.imageUrl} alt="City" />
              <div className="rank-info">
                <span className="city-name">{item.city}</span>
                <span className="views">{formatViews(item.views)}</span>
              </div>
              <div className="rank-like">
                <span className="heart">❤️</span>
                <span className="like-count">{formatLikes(item.likes)}</span>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Ranking;