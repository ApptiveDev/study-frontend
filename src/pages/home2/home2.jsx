import styles from "./home2.module.css";

function Home2() {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <header className={styles.header}>
          <h2 className={styles.siteName}>SiteName</h2>
          <div className={styles.buttonGroup}>
            <div className={styles.button} />
            <div className={styles.button} />
            <div className={styles.button} />
          </div>
        </header>
        <div className={styles.title}>
          Hello <br /> World
        </div>
        <div className={styles.boxesWrapVertical}>
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={index} className={styles.box}>
              {num}
            </div>
          ))}
        </div>
        <footer className={styles.footer}>
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={styles.footerButton}></div>
          ))}
        </footer>
      </div>
    </div>
  );
}

export default Home2;
