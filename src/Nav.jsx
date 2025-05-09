import { useState } from 'react'
import styles from './Nav.module.css'

import HomeIcon from './assets/home.svg';
import RankingIcon from './assets/ranking.svg';
import ShortsIcon from './assets/shorts.svg';
import UploadIcon from './assets/upload.svg';

function Nav(){
    const [count, setCount] = useState(0)

    return (
        <>
          <nav className={styles.nav}>
            <div className={styles['nav-boxes']}>
                <button className={styles['button-icon']}>
                    <img src={HomeIcon} alt="home-icon" />
                    <span>홈</span>
                </button>
                <button className={styles['button-icon']}>
                    <img src={RankingIcon} alt="ranking-icon" />
                    <span>랭킹</span>
                </button>
                <button className={styles['button-icon']}>
                    <img src={ShortsIcon} alt="shorts-icon" />
                    <span>숏폼</span>
                </button>
                <button className={styles['button-icon']}>
                    <img src={UploadIcon} alt="upload-icon" />
                    <span>업로드</span>
                </button>
            </div>
          </nav>
        </>
      )
}
export default Nav