import React from 'react';
import {Monogram} from './LogoZenika/Monogram';
import {Composition, Folder} from 'remotion';
import {BotzTalk} from './BestOfTechnozaure/Talk/BotzTalk';
import {Intro} from './BestOfTechnozaure/Event/Intro';
import {BotzEvent} from './BestOfTechnozaure/Event/BotzEvent';
import {Tribes} from './BestOfTechnozaure/Event/Tribes';
import {Contact} from './BestOfTechnozaure/Event/Contact';

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
				<Folder name="Event">
					<Composition
						id="Intro"
						component={Intro}
						width={1200}
						height={1200}
						fps={30}
						durationInFrames={140}
						defaultProps={{
							title: 'Venez assister à des conférences techs',
							city: 'lyon',
							date: '28 Novembre 2023',
							time: '17h00',
						}}
					/>
					<Composition
						id="Categories"
						component={Tribes}
						width={1200}
						height={1200}
						fps={30}
						durationInFrames={110}
						defaultProps={{
							categories: [
								{
									name: 'Green IT',
									icon: '/BestOfTz/icons/GreenIT.svg',
								},
								{
									name: 'Sécurité',
									icon: '/BestOfTz/icons/Sécurité.svg',
								},
								{
									name: 'Cloud',
									icon: '/BestOfTz/icons/Cloud.svg',
								},
								{
									name: 'Craftsmanship',
									icon: '/BestOfTz/icons/Dev.svg',
								},
							],
						}}
					/>
					<Composition
						id="Contact"
						component={Contact}
						width={1200}
						height={1200}
						fps={30}
						durationInFrames={70}
						defaultProps={{
							contact: {
								name: 'Lucas Audart',
								picture:
									'https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512',
								role: 'Consultant frontend',
								location: 'lyon',
								mail: 'lucas.audart@zenika.com',
								phone: '06 57 29 32 64',
							},
						}}
					/>
					<Composition
						id="BotzEvent"
						component={BotzEvent}
						width={1200}
						height={1200}
						fps={30}
						durationInFrames={300}
						defaultProps={{
							title: 'L’évenement imaginé par les Techs pour les Techs',
							city: 'lyon',
							date: '28 Novembre 2023',
							time: '17h00',
							contact: {
								name: 'Lucas Audart',
								picture:
									'https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512',
								role: 'Consultant frontend',
								location: 'lyon',
								mail: 'lucas.audart@zenika.com',
								phone: '06 57 29 32 64',
							},
							categories: [
								{
									name: 'Green IT',
									icon: '/BestOfTz/icons/GreenIT.svg',
								},
								{
									name: 'Sécurité',
									icon: '/BestOfTz/icons/Sécurité.svg',
								},
								{
									name: 'Cloud',
									icon: '/BestOfTz/icons/Cloud.svg',
								},
								{
									name: 'Craftsmanship',
									icon: '/BestOfTz/icons/Dev.svg',
								},
							],
						}}
					/>
				</Folder>
				<Composition
					id="BotzTalk"
					component={BotzTalk}
					width={1200}
					height={1200}
					fps={30}
					durationInFrames={150}
					defaultProps={{
						title:
							'Live-coding : d’une archi 3 couches à une archi hexagonale, grâce au TDD',
						date: '09 novembre 2023',
						speaker: {
							name: 'Mickaël Alves',
							picture:
								'https://pbs.twimg.com/profile_images/1452247219709566977/5Xzmgun-_400x400.jpg',
							role: 'Consultant frontend',
							location: 'lyon',
						},
					}}
				/>
			</Folder>
		</>
	);
};
