import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<header
					style={{
						position: 'relative',
						boxShadow: '0 2px 5px rgb(0 0 0 / 20%)',
						padding: '20px 40px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						color: 'white',
						zIndex: 5,
					}}
				>
					<Link href="https://zenika.com/">
						<Image
							src="/logo_z.svg"
							alt="Logo Zenika"
							width={170}
							height={50}
						/>
					</Link>
					<h1>Social Video Generatorz</h1>
					<Link
						href="https://github.com/Zenika/social-video-generatorz"
						style={{marginLeft: 120}}
					>
						<Image src="/github.svg" alt="Logo Github" width={50} height={55} />
					</Link>
				</header>
				{children}
			</body>
		</html>
	);
}
