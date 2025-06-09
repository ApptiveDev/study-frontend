import { Briefcase } from "lucide-react";
import styles from "./UserCard.module.css";
import defaultBg from "../assets/background_image.jpg";
import defaultAvatar from "../assets/Fallback_Avatar.png";

function UserCard({ profile, error }) {
  if (error)
    return (
      <div
        className={styles.UserCard}
        style={{
          minHeight: 300,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <span style={{ color: "red" }}>{error}</span>
      </div>
    );

  if (!profile) return null;

  const bgUrl = profile.background ? profile.background : defaultBg;
  const avatarUrl = profile.image ? profile.image : defaultAvatar;

  return (
    <div
      className={styles.UserCard}
      style={{ flexDirection: "column", alignItems: "stretch" }}
    >
      <div
        className={styles.header}
        style={{
          background: `no-repeat url(${bgUrl}) center/cover`,
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          padding: "0 24px",
        }}
      >
        <div className={styles.profileSection}>
          <img className={styles.avatar} src={avatarUrl} alt="프로필" />
          <span className={styles.statusDot} />
        </div>
        <div className={styles.infoSection} style={{ flex: 1, marginLeft: 24 }}>
          <div
            className={styles.nameRow}
            style={{ justifyContent: "space-between" }}
          >
            <div>
              <span className={styles.name}>{profile.name}</span>
              <div className={styles.username}>{profile.id}</div>
            </div>
            <span className={styles.role} style={{ whiteSpace: "nowrap" }}>
              <Briefcase
                size={18}
                style={{
                  marginRight: 6,
                  verticalAlign: "middle",
                }}
              />
              {profile.job}
            </span>
          </div>
          <div className={styles.desc} style={{ marginTop: 24 }}>
            {profile.bio}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
