import React, { useState, useEffect } from 'react';
import { fetchProfiles } from '../services/api';
import ProfileCard from './ProfileCard';
import styles from './Profiles.module.css';

function Profiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetchProfiles()
      .then((data) => {
        setProfiles(data);
      })
      .catch((error) => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div>
      <h1>프로필 목록</h1>
      <div className={styles.profileContainer}>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} obj={profile} />
        ))}
      </div>
    </div>

  );
}

export default Profiles;
