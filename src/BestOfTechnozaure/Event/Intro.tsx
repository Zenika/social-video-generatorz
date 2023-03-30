import React from 'react';
import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from '../../Components/Logo';
import {Title} from '../../Components/Title';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {Details} from '../../Components/Details';
import {Divider} from '../../Components/Divider';
import {Footer} from '../../Components/Footer';
import {RemoteOnly} from './RemoteOnly';
import {AgencyAndRemote} from './AgencyAndRemote';

export const Intro: React.FC<{
	title: string;
	city: string;
	date: string;
	time: string;
	remoteOnly: boolean;
}> = ({title, city, date, time, remoteOnly}) => {
	const remoteOnlyDelta = remoteOnly ? 20 : 0;

	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const sizeDown = spring({
		frame: frame - (100 - remoteOnlyDelta),
		from: 650,
		to: 250,
		fps,
		durationInFrames: 30,
	});

	return (
		<AbsoluteFill>
			<Sequence name="Website">
				<Footer content="www.zenika.com" />
			</Sequence>
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" width={sizeDown} top={60} />
			</Sequence>
			<Sequence name="Title" from={10}>
				<FadeIn durationInFrames={20}>
					<FadeOut startingFrame={90 - remoteOnlyDelta} durationInFrames={20}>
						<Title
							title={title}
							style={{
								fontSize: '2.6rem',
								textTransform: 'uppercase',
								width: '80%',
								left: '50%',
								transform: 'translateX(-50%)',
							}}
							top={325}
						/>
					</FadeOut>
				</FadeIn>
			</Sequence>
			{remoteOnly ? <RemoteOnly /> : <AgencyAndRemote city={city} />}
			<Sequence name="Divider" from={10}>
				<FadeIn durationInFrames={20}>
					<FadeOut startingFrame={100 - remoteOnlyDelta} durationInFrames={15}>
						<Divider
							style={{
								top: 970,
							}}
							width="40%"
						/>
					</FadeOut>
				</FadeIn>
			</Sequence>
			<Sequence name="Details" from={20}>
				<SlideTop
					delay={80 - remoteOnlyDelta / 2}
					from={1025}
					to={1100}
					durationInFrames={30}
				>
					<FadeOut
						startingFrame={80 - remoteOnlyDelta / 2}
						durationInFrames={5}
					>
						<Details
							date={date}
							time={time}
							iconScaleFactor={1.2}
							style={{
								fontWeight: 700,
								fontSize: '2rem',
							}}
						/>
					</FadeOut>
				</SlideTop>
			</Sequence>
		</AbsoluteFill>
	);
};
