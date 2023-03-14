'use client';

import Link from 'next/link';
import styles from './page.module.css';
import {Player} from '@remotion/player';
import {BotzEvent} from '../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../src/BestOfTechnozaure/Talk/BotzTalk';

const EventDefaultProps = {
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

const TalkDefaultProps = {
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

const displayStyle = {
	width: 400,
	height: 400,
};

export default function Home() {
	return (
		<main>
			<section className={styles.center}>
				<div className={styles.card}>
					<div className={styles.videoPreview}>
						<Player
							autoPlay
							loop
							durationInFrames={300}
							fps={30}
							compositionWidth={1200}
							compositionHeight={1200}
							component={BotzEvent}
							inputProps={EventDefaultProps}
							style={displayStyle}
						/>
					</div>
					<div className={styles.cardContent}>
						<p>Best of TZ - Évènement</p>
						<Link className="btn btn-black" href="/BotzEvent">
							Create Video
						</Link>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.videoPreview}>
						<Player
							autoPlay
							loop
							durationInFrames={150}
							fps={30}
							compositionWidth={1200}
							compositionHeight={1200}
							component={BotzTalk}
							inputProps={TalkDefaultProps}
							style={displayStyle}
						/>
					</div>
					<div className={styles.cardContent}>
						<p>Best of TZ - Talk</p>
						<Link className="btn btn-black" href="/BotzTalk">
							Create Video
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
