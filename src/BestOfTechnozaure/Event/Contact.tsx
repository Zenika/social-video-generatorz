import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from '../../Components/Title';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {Speaker} from '../../Components/Speaker/Speaker';
import {Divider} from '../../Components/Divider';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';
import {SpeakerProps} from '../../Types/SpeakerProps';

export const Contact: React.FC<{
	contact: SpeakerProps;
}> = ({contact}) => {
	return (
		<AbsoluteFill>
			<Sequence name="Title Contact">
				<FadeIn durationInFrames={30}>
					<Title
						title="Pour plus d'informations"
						style={{
							fontSize: '2.2rem',
							textTransform: 'uppercase',
						}}
						top={765}
					/>
				</FadeIn>
			</Sequence>
			<Sequence name="Person to contact" from={10}>
				<Speaker
					picture={contact.picture}
					name={contact.name}
					location={contact.location}
					role={contact.role}
				/>
			</Sequence>
			{(contact.mail || contact.phone) && (
				<Sequence name="Divider" from={10}>
					<FadeIn durationInFrames={30}>
						<Divider
							style={{
								top: 870,
							}}
							width="40%"
						/>
					</FadeIn>
				</Sequence>
			)}
			<Sequence name="Contact informations" from={10}>
				<SlideTop from={830} to={930} durationInFrames={30}>
					<FadeIn durationInFrames={30}>
						<AbsoluteFill
							style={{
								height: 'max-content',
								alignItems: 'center',
								fontSize: '2.8rem',
								textShadow: '0 0 15px rgba(0,0,0,0.6)',
								gap: 10,
							}}
						>
							<span
								style={{
									fontWeight: 700,
								}}
							>
								{contact.mail}
							</span>
							<span>{contact.phone}</span>
						</AbsoluteFill>
					</FadeIn>
				</SlideTop>
			</Sequence>
		</AbsoluteFill>
	);
};
