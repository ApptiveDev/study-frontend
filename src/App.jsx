import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const url = "https://apptive-mission-frontend-7.vercel.app/api/profiles";
const token = "Wdi4n63eZ2OGLw2RJb9UB42qdu1WUDax";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const option = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(url, option)
      .then(async (res) => {
        if (!res.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
        const data = await res.json();
        setProfiles(data);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "120px",
        }}
      >
        프로필 목록
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1300px",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        {loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <UserCard key={i} loading />
          ))}
        {error &&
          !loading &&
          Array.from({ length: 10 }).map((_, i) => (
            <UserCard key={i} error={error} />
          ))}
        {!loading &&
          !error &&
          profiles
            .slice(0, 10)
            .map((profile) => <UserCard key={profile.id} profile={profile} />)}
      </div>
    </div>
  );
}

export default App;
