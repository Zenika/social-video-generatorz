import {AbsoluteFill} from 'remotion';
import {IconText} from '../../Components/IconText';

export const Location: React.FC<{city: string}> = ({city}) => {
	return (
		<AbsoluteFill
			style={{
				alignItems: 'center',
			}}
		>
			<IconText
				text={`Dans les locaux de Zenika @${city}`}
				icon="/mono_zenika.svg"
				style={{
					flexDirection: 'column',
					fontSize: '2.6rem',
				}}
				size={210}
			/>
		</AbsoluteFill>
	);
};
