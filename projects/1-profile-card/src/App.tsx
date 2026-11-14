import ProfileCard from './components/profile-card';

function App() {
  return (
    <main>
      <h1>우리 스터디 멤버</h1>

      <ProfileCard
        name="황인성"
        role="프론트엔드 멘토"
        intro="프론트엔드 스터디를 맡고 있습니다."
        department="정보컴퓨터공학부"
      ></ProfileCard>
      <ProfileCard name="김준우" role="프론트엔드 멘토" department="정보컴퓨터공학부" />
      <ProfileCard
        name="김현지"
        role="프론트엔드 스터디원"
        department="인공지능전공"
        intro="인공지능과 개발에 관심이 있습니다."
      />
    </main>
  );
}

export default App;
