import {loadFont} from '@remotion/google-fonts/Nunito';
import {
	AbsoluteFill,
	Sequence,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from '../../Components/Logo';
import {Title} from '../../Components/Title';
import {Website} from './Website';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {FadeOut} from '../../Components/Animations/Fade/FadeOut';
import {Location} from './Location';
import React from 'react';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {Details} from '../../Components/Details';
import {Divider} from '../../Components/Divider';

const {fontFamily} = loadFont();

export const Intro: React.FC<{
	title: string;
	city: string;
	date: string;
	time: string;
	onlinePlatform: string;
}> = ({title, city, date, time, onlinePlatform}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const sizeDown = spring({
		frame: frame - 140,
		from: 650,
		to: 250,
		fps,
		durationInFrames,
	});

	return (
		<AbsoluteFill
			style={{
				color: 'white',
				fontFamily,
			}}
		>
			<Sequence name="Website">
				<Website url="www.zenika.com" />
			</Sequence>
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" width={sizeDown} top={60} />
			</Sequence>
			<Sequence name="Title" from={10}>
				<FadeIn durationInFrames={20}>
					<FadeOut startAt={110} durationInFrames={20}>
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
			<Sequence name="Dans les locaux" from={10}>
				<SlideTop from={200} to={525} durationInFrames={30}>
					<FadeIn durationInFrames={30}>
						<FadeOut startAt={50} durationInFrames={15}>
							<Location
								iconUrl="/mono_zenika.svg"
								text="Dans les locaux Zenika"
								location={city}
							/>
						</FadeOut>
					</FadeIn>
				</SlideTop>
			</Sequence>
			<Sequence name="Divider" from={20}>
				<FadeIn durationInFrames={20}>
					<FadeOut startAt={100} durationInFrames={15}>
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
				<SlideTop delay={100} from={1025} to={1100} durationInFrames={30}>
					<FadeOut startAt={100} durationInFrames={5}>
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
			<Sequence name="Ou en ligne">
				<FadeIn startAt={80} durationInFrames={15}>
					<FadeOut startAt={120} durationInFrames={15}>
						<Location
							iconUrl="/BestOfTz/workadventure.png"
							text="Ou en ligne sur"
							location={onlinePlatform}
							style={{
								top: 525,
							}}
						/>
					</FadeOut>
				</FadeIn>
			</Sequence>
		</AbsoluteFill>
	);
};
