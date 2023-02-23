import styles from './styles.module.css';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1 className={styles.title}>This page is to GENERATE videos</h1>
      <span className={styles.underline}></span>
      <Link className={styles.homeBtn} href="/">Home</Link>
    </main>
  );
}