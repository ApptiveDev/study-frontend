import { useState } from 'react'; // 추가
import './profile-card.css';


function ProfileCard({ name, role, intro = '소개가 아직 없습니다.' , interest }: ProfileCardProps) {
  const [likes, setLikes] = useState(0); // 추가

  
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>{intro}</p>
      {interest && <p>관심 분야: {interest}</p>}
      <button onClick={() => setLikes(likes + 1)}>좋아요 {likes}</button>
    </div>
  );
}

type ProfileCardProps = {
  name: string;
  role: string;
  intro?: string;
  interest?: string;
};
export default ProfileCard;