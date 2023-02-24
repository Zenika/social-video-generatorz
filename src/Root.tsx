import React from 'react';
import {Monogram} from './LogoZenika/Monogram';
import {Composition, Folder} from 'remotion';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Folder name="Technozaure">
				<Composition
					id="Monogram"
					component={Monogram}
					durationInFrames={60}
					fps={30}
					width={1280}
					height={720}
				/>
			</Folder>
		</>
	);
};
