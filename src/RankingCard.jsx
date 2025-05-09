import { useState } from 'react'
import LocalImg from './assets/local.jpg'
import LikeIcon from './assets/likes.png'

import styles from './Ranking.module.css'
function RankingCard({ order, name, views, likes }){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <span>{order}</span>
                    <img src={LocalImg} alt="img"></img>
                    <div className={styles["local-view"]}>
                        <div className={styles.local}>{name}</div>
                        <div className={styles.view}>조회수 {views}회</div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={LikeIcon} alt="likes" />
                    <span>{likes}k</span>
                </div>
            </div>
            <hr/>
        </>
    )
}
export default RankingCard