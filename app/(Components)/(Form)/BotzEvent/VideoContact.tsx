import React from 'react';
import {Input} from '../Input';

export const VideoContact: React.FC<{contactInputs: object}> = ({
	contactInputs,
}) => {
	return (
		<section>
			{Object.entries(contactInputs).map(([label, input], key) => (
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
