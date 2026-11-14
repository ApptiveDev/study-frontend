
import ProfileCard from './components/profile-card'


function App() {
  return (
    <main>
      <h1>우리 스터디 멤버</h1>
      <ProfileCard name="황인성" role="프론트엔드 멘토" intro="프론트엔드 스터디를 맡고 있습니다." />
      <ProfileCard name="김준우" role="프론트엔드 멘토" intro="프론트엔드 스터디를 맡고 있습니다." />
      <ProfileCard name="차민주" role="프론트엔드 멘티" hobby="배드민턴을 자주 친다." intro="프론트엔드를 공부하고 있습니다." />
    </main>
  );
}

export default App;