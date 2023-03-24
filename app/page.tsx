'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import {Player} from '@remotion/player';
import {BotzEvent} from '../src/BestOfTechnozaure/Event/BotzEvent';
import {BotzTalk} from '../src/BestOfTechnozaure/Talk/BotzTalk';
import {EventDefaultProps} from '../src/DefaultProps/EventDefaultProps';
import {TalkDefaultProps} from '../src/DefaultProps/TalkDefaultProps';

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
					style={{width: 400, height: 400}}
				/>
			</div>
			<div className={styles.cardContent}>
				<h3>{title}</h3>
				<Link className="btn btn-black" href={link}>
					Créer la Video
				</Link>
			</div>
		</div>
	);
};

export default function Home() {
	return (
		<main className={styles.home}>
			<div className={styles.introduction}>
				<p>
					Bienvenue sur Social Video Generatorz ! Cet outil est fait pour vous
					aider à éditer et à générer rapidement des vidéos pour vos
					communications. Le projet ne contient, pour l'instant, que des
					templates pour les annonces des Best Of Technozaure.
				</p>
				<p>
					Si vous souhaitez ajouter de nouveaux temlpates, vous pouvez nous
					contacter sur Slack dans le groupe #project-social-video-generator, ou
					contribuer directement sur Github.
				</p>
				<p>
					Vous trouverez, juste après les templates des vidéos pré-faites, vous
					n'avez qu'a cliquer sur "Créer la vidéo" pour changer les paramètres.
					Enfin, vous pourrez télécharger la vidéo une fois configurée !
				</p>
			</div>
			<section className={styles.previewContanier}>
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
