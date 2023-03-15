'use client';

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
