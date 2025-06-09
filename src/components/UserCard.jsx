import { useEffect, useState } from "react";
import styles from "./UserCard.module.css";
import { Briefcase } from "lucide-react";

const API_URL = "https://apptive-mission-frontend-7.vercel.app/api/profiles";
const AUTH_HEADER = "Wdi4n63eZ2OGLw2Rjb9UB42qdu1WUDax";

function UserCard() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${AUTH_HEADER}`,
      },
    })
      .then(async (res) => {
        // 20% 확률로 에러 발생
        if (Math.random() < 0.2) throw new Error("서버 에러가 발생했습니다.");
        if (!res.ok) throw new Error("데이터를 불러오지 못했습니다.");
        const data = await res.json();
        setProfile(data[0]);
      })
      .catch((err) => {
        if (err.message.includes("401")) {
          setError("인증에 실패했습니다. 관리자에게 문의하세요.");
        } else {
          setError(err.message);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <SkeletonCard />;
  if (error)
    return (
      <div
        className={styles.UserCard}
        style={{
          minHeight: 200,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span style={{ color: "red" }}>{error}</span>
      </div>
    );

  return (
    <div className={styles.UserCard}>
      <div className={styles.header} />
      <div className={styles.profileSection}>
        <img className={styles.avatar} src={profile.imageUrl} alt="프로필" />
        <span className={styles.statusDot} />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{profile.name}</span>
          <span className={styles.role}>
            <Briefcase size={16} style={{ marginRight: 4 }} />
            {profile.job}
          </span>
        </div>
        <div className={styles.username}>{profile.username}</div>
        <div className={styles.desc}>{profile.description}</div>
      </div>
    </div>
  );
}

// Skeleton UI 컴포넌트
function SkeletonCard() {
  return (
    <div className={styles.UserCard}>
      <div
        className={styles.header}
        style={{
          background: "linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)",
        }}
      />
      <div className={styles.profileSection}>
        <div className={styles.avatar} style={{ background: "#eee" }} />
        <span className={styles.statusDot} style={{ background: "#ccc" }} />
      </div>
      <div className={styles.infoSection}>
        <div className={styles.nameRow}>
          <div
            style={{
              width: 80,
              height: 20,
              background: "#eee",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 120,
              height: 16,
              background: "#eee",
              borderRadius: 4,
              marginLeft: 8,
            }}
          />
        </div>
        <div
          style={{
            width: 120,
            height: 16,
            background: "#eee",
            borderRadius: 4,
            margin: "8px 0",
          }}
        />
        <div
          style={{
            width: "100%",
            height: 40,
            background: "#eee",
            borderRadius: 4,
          }}
        />
      </div>
    </div>
  );
}

export default UserCard;
