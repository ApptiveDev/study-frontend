import './profile-card.css';
import { useState } from 'react';

type ProfileCardProps = {
  name: string;
  role: string;
  intro?: string;
  department: string;
};
/*
컴포넌트가 외부로부터 어떤 값으 받을 수 있는지 정의한 부분
[속성]  [자료형]  [필수 여부]
name    string      필수
role    string      필수
intro   string      선택

intro? 이렇게 ?가 붙어있는데 이 표시가 있으면 intro를 전달하지 않아도 괜찮다는 거임
*/

function ProfileCard({
  name,
  role,
  intro,
  department = '소개가 아직 없습니다.',
}: ProfileCardProps) {
  const [likes, setLikes] = useState(0);
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p>학과: {department}</p>
      <p>{intro}</p>

      <button onClick={() => setLikes(likes + 1)}>좋아요 {likes}</button>
    </div>
  );
}
/*
하나의 자기소개 카드를 만드는 함수
화면을 구성하는 재사용 가능한 단위를 컴포넌트 라고 부름
return (~) 부분은 화면에 무엇을 출력할지 정의한다
typescript 파일 안에서 사용하는 jsx 문법, {name}에는 전달받은 이름이 {role}에는 역할이 표시됨
 */
export default ProfileCard;
