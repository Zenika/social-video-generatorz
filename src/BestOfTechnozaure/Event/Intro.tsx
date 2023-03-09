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

const {fontFamily} = loadFont();

export const Intro: React.FC<{title: string; city: string}> = ({
	title,
	city,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const durationInFrames = 30;
	const sizeDown = spring({
		frame: frame - 70,
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
					<FadeOut startAt={70} durationInFrames={20}>
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
			<Sequence name="Dans les locaux">
				<Location city={city} />
			</Sequence>
		</AbsoluteFill>
	);
};
