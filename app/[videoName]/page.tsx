'use client';

import React, {useState} from 'react';
import styles from './styles.module.css';
import {BotzEvent} from '../../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../../src/BestOfTechnozaure/Talk/BotzTalk';
import Link from 'next/link';
import Image from 'next/image';
import {EventDefaultProps} from '../../src/DefaultProps/EventDefaultProps';
import {TalkDefaultProps} from '../../src/DefaultProps/TalkDefaultProps';
import {EventForm} from '../../src/Components/Website/Form/EventForm';
import {VideoTemplate} from '../../src/Types/VideoTemplate';

const Template: Record<string, VideoTemplate> = {
	BotzEvent: {
		compositionName: 'BotzEvent',
		component: BotzEvent,
		width: 1200,
		height: 1200,
		durationInFrames: 300,
		sampleData: EventDefaultProps,
	},
	BotzTalk: {
		compositionName: 'BotzTalk',
		component: BotzTalk,
		width: 1200,
		height: 1200,
		durationInFrames: 150,
		sampleData: TalkDefaultProps,
	},
};
export default function Page({params}: {params: {videoName: string}}) {
	const currentTemplate = Template[params.videoName];
	const [data] = useState(currentTemplate.sampleData);

	return (
		<main className={styles.editPage}>
			<Link className={styles.backBtn} href="/">
				<Image src="/arrow_left.svg" alt="Arrow left" width={30} height={30} />
				Home
			</Link>
			<h1>Customize and generate {params.videoName} video</h1>
			{params.videoName === 'BotzEvent' && (
				<EventForm defaultData={data} currentTemplate={currentTemplate} />
			)}
		</main>
	);
}
