import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link href="https://zenika.com/">
				<Image src="/logo_z.svg" alt="Logo Zenika" width={170} height={50} />
			</Link>
			<h1>Social Video Generatorz</h1>
			<Link
				href="https://github.com/Zenika/social-video-generatorz"
				className={styles.rightLink}
			>
				<Image src="/github.svg" alt="Logo Github" width={50} height={55} />
			</Link>
		</header>
	);
};
