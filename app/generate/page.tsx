import styles from './styles.module.css';

export default function Page() {
  return (
    <main>
      <h1 className={styles.title}>This page is to GENERATE videos</h1>
      <span className={styles.underline}></span>
      <a className={styles.homeBtn} href="/">Home</a>
    </main>
  );
}