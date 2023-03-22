'use client';

import React, {useState} from 'react';
import styles from './styles.module.css';
import {BotzEvent} from '../../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../../src/BestOfTechnozaure/Talk/BotzTalk';
import Link from 'next/link';
import Image from 'next/image';
import {EventForm} from '../(Components)/(Form)/BotzEvent/EventForm';
import {VideoTemplate} from '../../src/Types/VideoTemplate';
import {TalkForm} from '../(Components)/(Form)/TalkForm';
import {Loader} from '../(Components)/Loader';

const Template: Record<string, VideoTemplate> = {
	BotzEvent: {
		compositionName: 'BotzEvent',
		component: BotzEvent,
		width: 1200,
		height: 1200,
		durationInFrames: 300,
		formId: 'eventForm',
	},
	BotzTalk: {
		compositionName: 'BotzTalk',
		component: BotzTalk,
		width: 1200,
		height: 1200,
		durationInFrames: 150,
		formId: 'talkForm',
	},
};
export default function Page({params}: {params: {videoName: string}}) {
	const currentTemplate = Template[params.videoName];
	const [isLoading, setLoading] = useState<boolean>(false);
	const [videoUrl, setVideoUrl] = useState<string>();
	const [error, setError] = useState<string>();

	return (
		<main className={styles.editPage}>
			<Link className={styles.backBtn} href="/">
				<Image src="/arrow_left.svg" alt="Arrow left" width={30} height={30} />
			</Link>
			<h1>Customize and generate {params.videoName} video</h1>
			{params.videoName === 'BotzEvent' && (
				<EventForm
					currentTemplate={currentTemplate}
					setLoading={setLoading}
					setVideoUrl={setVideoUrl}
					setError={setError}
				/>
			)}
			{params.videoName === 'BotzTalk' && (
				<TalkForm
					currentTemplate={currentTemplate}
					setLoading={setLoading}
					setVideoUrl={setVideoUrl}
					setError={setError}
				/>
			)}

			<div className={styles.generateBtnContainer}>
				<input
					disabled={isLoading}
					type="submit"
					form={currentTemplate.formId}
					className={`btn ${isLoading ? styles.disabled : ''}`}
					value="Générer la vidéo"
				/>
				{isLoading && (
					<span className="btn">
						Loading <Loader />
					</span>
				)}
				{!isLoading && videoUrl && (
					<a href={videoUrl} className="btn" target="_blank">
						Télécharger
					</a>
				)}
			</div>
			{error && <p className={styles.error}>{error}</p>}
		</main>
	);
}
