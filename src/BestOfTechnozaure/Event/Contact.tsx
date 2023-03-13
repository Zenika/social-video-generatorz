import {AbsoluteFill, Sequence} from 'remotion';
import {Title} from '../../Components/Title';
import React from 'react';
import {SpeakerProps} from '../../Types';
import {FadeIn} from '../../Components/Animations/Fade/FadeIn';
import {Speaker} from '../../Components/Speaker/Speaker';
import {Divider} from '../../Components/Divider';
import {DoubleText} from '../../Components/DoubleText';
import {SlideTop} from '../../Components/Animations/Slide/SlideTop';

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
						top={215}
					/>
				</FadeIn>
			</Sequence>
			<Sequence name="Person to contact" from={10}>
				<Speaker
					picture={contact.picture}
					name={contact.name}
					location={contact.location}
					role={contact.role}
					style={{
						top: 350,
					}}
				/>
			</Sequence>
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
			{contact.mail && contact.phone && (
				<Sequence name="Contact informations" from={10}>
					<SlideTop from={830} to={930} durationInFrames={30}>
						<FadeIn durationInFrames={30}>
							<DoubleText firstText={contact.mail} secondText={contact.phone} />
						</FadeIn>
					</SlideTop>
				</Sequence>
			)}
		</AbsoluteFill>
	);
};
