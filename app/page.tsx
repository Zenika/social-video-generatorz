import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<Image
					priority
					className={styles.logo}
					src="/next.svg"
					alt="Next.js Logo"
					width={180}
					height={37}
				/>
				<div className={styles.thirteen}>
					<Image priority src="/thirteen.svg" alt="13" width={40} height={31} />
				</div>
			</div>

			<Link className={styles.generateBtn} href="/generate">
				Generate
			</Link>
		</main>
	);
}
