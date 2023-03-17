import React from 'react';
import {Input} from '../Input';

export const VideoIntro: React.FC<{introInputs: object}> = ({introInputs}) => {
	return (
		<section>
			{Object.entries(introInputs).map(([label, input], key) => (
				<Input
					key={key}
					setValue={input.setData}
					label={label}
					value={input.data}
				/>
			))}
		</section>
	);
};
