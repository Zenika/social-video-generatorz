'use client';

import styles from './styles.module.css';
import Link from 'next/link';
import {Player} from '@remotion/player';
import {Monogram} from '@/src/LogoZenika/Monogram';

export default function Page() {
	return (
		<main className={styles.generate}>
			<h1>This page is to GENERATE videos</h1>
			<Player
				controls
				// autoPlay
				loop
				durationInFrames={60}
				fps={30}
				compositionWidth={900}
				compositionHeight={500}
				component={Monogram}
			/>
			<Link className="btn" href="/">
				Home
			</Link>
		</main>
	);
}
