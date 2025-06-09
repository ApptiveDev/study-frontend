import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <header>
        <h1
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          프로필 목록
        </h1>
      </header>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "flex-start",
          maxWidth: "1000px",
          gap: "20px",
          margin: "0 auto",
        }}
      >
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  );
}

export default App;
