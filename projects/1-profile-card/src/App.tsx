import ProfileCard from './components/profile-card';

function App() {
  return (
    <main>
      <h1>우리 스터디 멤버</h1>
      <ProfileCard name="황인성" role="프론트엔드 멘토" intro="프론트엔드 스터디를 맡고 있습니다." color="yellow"/>
      <ProfileCard name="김준우" role="프론트엔드 멘토" color="blue" />
      <ProfileCard name="강소현" role="프론트엔드 멘티" intro="프론트엔드 스터디를 하고 있습니다" interest="컴퓨터 그래픽" color="green"/>
    </main>
  );
}

export default App;
