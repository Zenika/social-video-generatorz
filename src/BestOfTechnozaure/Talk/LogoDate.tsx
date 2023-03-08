import {
	AbsoluteFill,
	Img,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Lottie} from '@remotion/lottie';
import React from 'react';
import {useLottie} from '../../Components/hooks/useLotttie';

export const LogoDate: React.FC<{date: string}> = ({date}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const illustrationDate = useLottie('lf20_ak90tqhe');

	const durationInFrames = 40;
	const drop = spring({frame, from: -20, to: 0, fps, durationInFrames});
	const opacity = spring({frame, from: 0, to: 1, fps, durationInFrames});

	if (!illustrationDate) {
		return null;
	}

	return (
		<AbsoluteFill>
			<hr
				style={{
					position: 'absolute',
					width: '5px',
					height: '100px',
					border: 'none',
					background: 'white',
					left: '50%',
					bottom: '30px',
					transform: 'translateX(-50%)',
					opacity,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					width: '100%',
					display: 'grid',
					gridTemplateColumns: `repeat(2, 1fr)`,
					padding: '0 70px',
					gridGap: '60px',
					bottom: 0,
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						paddingRight: '50px',
						position: 'relative',
						bottom: drop,
						opacity,
					}}
				>
					<Img src={staticFile('/logo_z.svg')} width={330} />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
					}}
				>
					<Lottie
						style={{
							width: '180px',
							filter: 'none',
						}}
						playbackRate={1.5}
						animationData={illustrationDate}
					/>
					<span
						style={{
							position: 'relative',
							fontSize: '2rem',
							transform: 'translateX(-10px)',
							bottom: drop,
							opacity,
						}}
					>
						{date}
					</span>
				</div>
			</div>
		</AbsoluteFill>
	);
};
