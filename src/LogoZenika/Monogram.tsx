import {
	AbsoluteFill,
	Easing,
	Img,
	interpolate,
	Sequence,
	staticFile,
	useCurrentFrame,
} from 'remotion';

export const Monogram = () => {
	const frame = useCurrentFrame();

	const translate = interpolate(frame, [0, 20, 40, 60], [-500, 0, 0, 500], {
		easing: Easing.bezier(0.68, -0.55, 0.27, 1.55),
	});

	return (
		<Sequence name="Monogram">
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'black',
					fontSize: 100,
					color: 'white',
				}}
			>
				<div
					style={{
						transform: `translateY(${translate}px)`,
					}}
				>
					<Img
						width={200}
						height={200}
						src={staticFile('/mono_zenika.svg')}
						alt="Monogramme Zenika"
					/>
				</div>
			</AbsoluteFill>
		</Sequence>
	);
};
