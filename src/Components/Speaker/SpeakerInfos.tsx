import React from 'react';

export const SpeakerInfos: React.FC<{
	name: string;
	role?: string;
	location?: string;
}> = ({name, role, location}) => {
	return (
		<div
			style={{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 10,
			}}
		>
			<span
				style={{
					fontSize: '2.8rem',
					fontWeight: '700',
					textShadow: '0 0 15px rgba(0,0,0,0.6)',
					position: 'relative',
				}}
			>
				{name}
			</span>
			<div>
				{role && (
					<span
						style={{
							fontSize: '2.8rem',
							fontWeight: '500',
							textShadow: '0 0 15px rgba(0,0,0,0.6)',
							position: 'relative',
						}}
					>
						{role}
					</span>
				)}
				{role && location && (
					<span
						style={{
							fontSize: '2.8rem',
							fontWeight: '500',
							textShadow: '0 0 15px rgba(0,0,0,0.6)',
							position: 'relative',
						}}
					>
						&nbsp;@{location}
					</span>
				)}
			</div>
		</div>
	);
};
