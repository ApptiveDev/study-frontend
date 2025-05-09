import { useState } from 'react'
import styles from './Section.module.css'

function Section({className}){
    return (
        <>
          <section className={className}>
            <div className={styles.tab}>
                <button className={styles['tab-week']}>주간 조회수 순위</button>
                <button className={styles['tab-total']}>누적 조회수 순위</button>
            </div>
          </section>
        </>
      )
}
export default Section