'use client';

import React, {useState} from 'react';
import styles from './styles.module.css';
import {Player} from '@remotion/player';
import {BotzEvent} from '../../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../../src/BestOfTechnozaure/Talk/BotzTalk';
import Link from 'next/link';
import Image from 'next/image';

const sampleEventData = {
	title: 'L’évenement imaginé par les Techs pour les Techs',
	city: 'lyon',
	date: '28 Novembre 2023',
	time: '17h00',
	onlinePlatform: 'workadventure',
	contact: {
		name: 'Lucas Audart',
		picture: 'https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512',
		role: 'Consultant frontend',
		location: 'lyon',
		mail: 'lucas.audart@zenika.com',
		phone: '06 57 29 32 64',
	},
	categories: [
		{
			name: 'Green IT',
			icon: '/BestOfTz/icons/GreenIT.svg',
		},
		{
			name: 'Sécurité',
			icon: '/BestOfTz/icons/Sécurité.svg',
		},
		{
			name: 'Cloud',
			icon: '/BestOfTz/icons/Cloud.svg',
		},
		{
			name: 'Craftsmanship',
			icon: '/BestOfTz/icons/Dev.svg',
		},
	],
};

const sampleTalkData = {
	title:
		'Live-coding : d’une archi 3 couches à une archi hexagonale, grâce au TDD',
	date: '09 novembre 2023',
	speaker: {
		name: 'Mickaël Alves',
		picture:
			'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
		role: 'Consultant frontend',
		location: 'lyon',
	},
};

interface TalkTemplate {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	sampleData: object;
}

const Template: Record<string, TalkTemplate> = {
	BotzEvent: {
		compositionName: 'BotzEvent',
		component: BotzEvent,
		width: 1200,
		height: 1200,
		durationInFrames: 300,
		sampleData: sampleEventData,
	},
	BotzTalk: {
		compositionName: 'BotzTalk',
		component: BotzTalk,
		width: 1200,
		height: 1200,
		durationInFrames: 150,
		sampleData: sampleTalkData,
	},
};
export default function Page({params}: {params: {videoName: string}}) {
	const currentTemplate = Template[params.videoName];
	const [data, setData] = useState(currentTemplate.sampleData);

	return (
		<main className={styles.editPage}>
			<Link className={styles.backBtn} href="/">
				<Image src="/arrow_left.svg" alt="Arrow left" width={30} height={30} />
				Home
			</Link>
			<h1>Customize and generate {params.videoName} video</h1>
			<div className={styles.editContainer}>
				<Player
					controls
					autoPlay
					loop
					durationInFrames={currentTemplate.durationInFrames}
					fps={30}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					component={currentTemplate.component}
					style={{width: 500, height: 500}}
					inputProps={data}
				/>
				<div className={styles.form}>
					<form></form>
				</div>
			</div>
		</main>
	);
}
