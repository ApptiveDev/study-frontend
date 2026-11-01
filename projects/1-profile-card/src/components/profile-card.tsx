import { useState } from 'react'; 
import './profile-card.css';

type ProfileCardProps = {
  name: string;
  role: string;
  hobby?: string; 
  intro?: string;
};

function ProfileCard({ name, role, hobby = '취미를 입력하세요.', intro = '소개가 아직 없습니다.' }: ProfileCardProps) {
  const [likes, setLikes] = useState(0); 

  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>{hobby}</p>
      <p>{intro}</p>
      <button onClick={() => setLikes(likes + 1)}>좋아요 {likes}</button>
    </div>
  );
}

export default ProfileCard;