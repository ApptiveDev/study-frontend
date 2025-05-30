import Button from '../components/Button';
import Clock from '../components/Clock';
import Heading from '../components/Heading';

const Home = () => {
  const { isDarkMode } = // TODO: ThemeContext를 사용하여 다크 모드 상태를 가져옵니다.

  return (
    // TODO: '다크 모드'와 '라이트 모드'의 배경색을 다르게 설정해주세요
    <div style={{ width: "100vw", height: "100vh", backgroundColor: ?? , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Heading />
      <Clock />
      <Button />
    </div>
  );
}

export default Home;