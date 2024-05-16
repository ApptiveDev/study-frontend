import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ShoppingBag } from 'lucide-react';
import ProfileModel from '../models/ProfileModel';
import styles from './ProfileCard.module.css';

// eslint-disable-next-line react/prop-types
function ProfileCard({ obj }) {
  const profile = new ProfileModel(obj);
  console.log(profile);
  return (
    <div className={styles.cardContainer}>
      {profile.background
        ? (
          <img
            src={profile.background}
            alt={profile.background}
            className={styles.background}
          />
        )
        : <div className={styles.background} />}

      <div className={styles.infoContainer}>
        <img src={profile.image ? profile.image : '/src/assets/user.png'} alt={profile.name} className={styles.profileImage} />
        <div className={styles.profileInfo}>
          <div className={styles.nameJob}>
            <h3 className={styles.name}>{profile.name}</h3>
            <div className={styles.job}>
              <ShoppingBag color="black" size={16} />
              {' '}
              <div>{profile.job}</div>
            </div>
          </div>
          <div className={styles.nameJob}>{profile.id}</div>
          <p className={styles.bio}>{profile.bio}</p>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;
