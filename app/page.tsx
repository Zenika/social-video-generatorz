'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import {Player} from '@remotion/player';
import {BotzEvent} from '../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../src/BestOfTechnozaure/Talk/BotzTalk';
import {EventDefaultProps} from '../src/DefaultProps/EventDefaultProps';
import {TalkDefaultProps} from '../src/DefaultProps/TalkDefaultProps';

const displayStyle = {
	width: 400,
	height: 400,
};

interface PreviewCardProps {
	durationInFrames: number;
	compositionWidth: number;
	compositionHeight: number;
	component: React.FC<any>;
	inputProps: object;
	title: string;
	link: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({
	durationInFrames,
	compositionWidth,
	compositionHeight,
	component,
	inputProps,
	title,
	link,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.videoPreview}>
				<Player
					autoPlay
					loop
					durationInFrames={durationInFrames}
					fps={30}
					compositionWidth={compositionWidth}
					compositionHeight={compositionHeight}
					component={component}
					inputProps={inputProps}
					style={displayStyle}
				/>
			</div>
			<div className={styles.cardContent}>
				<p>{title}</p>
				<Link className="btn btn-black" href={link}>
					Create Video
				</Link>
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<main>
			<section className={styles.center}>
				<PreviewCard
					durationInFrames={300}
					compositionWidth={1200}
					compositionHeight={1200}
					component={BotzEvent}
					inputProps={EventDefaultProps}
					title="Best of TZ - Évènement"
					link="/BotzEvent"
				/>
				<PreviewCard
					durationInFrames={150}
					compositionWidth={1200}
					compositionHeight={1200}
					component={BotzTalk}
					inputProps={TalkDefaultProps}
					title="Best of TZ - Talk"
					link="/BotzTalk"
				/>
			</section>
		</main>
	);
}
