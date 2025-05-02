import "./listSection.css";

function List() {
  const cities = [
    {
      rank: 1,
      name: "부산광역시",
      subName: "Busan",
      likes: "2.3k",
      image: "/images/images.jpg",
    },
    {
      rank: 2,
      name: "밀양시, 경상남도",
      subName: "Miryang",
      likes: "9.5k",
      image: "/images/images.jpg",
    },
    {
      rank: 3,
      name: "거제시, 경상남도",
      subName: "Miryang",
      likes: "8.7k",
      image: "/images/images.jpg",
    },
  ];

  return (
    <div className="list-card">
      {cities.map((city) => (
        <div className="list-item" key={city.rank}>
          <div className="list-left">
            <img className="list-image" src={city.image} alt={city.name} />
            <span className="list-rank">{city.rank}</span>
            <div className="list-text">
              <span className="list-name">{city.name}</span>
              <span className="list-sub">{city.subName}</span>
            </div>
          </div>
          <div className="list-follow">
            <span className="heart-icon">
              <span className="heart-icon">❤️</span>
            </span>
            <span className="like-count">{city.likes}</span>
            <span className="chevron">{">"}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
