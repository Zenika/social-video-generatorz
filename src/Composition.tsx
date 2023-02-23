import {AbsoluteFill, Img, staticFile} from 'remotion';

export const MyComposition = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black',
			}}
		>
			<Img
				width={200}
				height={200}
				src={staticFile('/mono_zenika.svg')}
				alt="Monogramme Zenika"
			/>
		</AbsoluteFill>
	);
};
