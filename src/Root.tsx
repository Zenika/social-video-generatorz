import React from 'react';
import {Monogram} from './LogoZenika/Monogram';
import {Composition, Folder} from 'remotion';
import {BotzTalk} from './BestOfTechnozaure/Talk/BotzTalk';
import {Intro} from './BestOfTechnozaure/Event/Intro';
import {BotzEvent} from './BestOfTechnozaure/Event/BotzEvent';

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
						},
						category: {
							name: 'CRAFTMANSHIP',
							icon: '/BestOfTz/icons/Dev.svg',
						},
					}}
				/>
				<Folder name="Event">
					<Composition
						id="Intro"
						component={Intro}
						width={1200}
						height={700}
						fps={30}
						durationInFrames={150}
						defaultProps={{
							title: 'L’évenement imaginé par les Techs pour les Techs',
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
									name: 'Craftmanship',
									icon: '/BestOfTz/icons/Dev.svg',
								},
							],
						}}
					/>
					<Composition
						id="BotzEvent"
						component={BotzEvent}
						width={1200}
						height={700}
						fps={30}
						durationInFrames={300}
						defaultProps={{
							title: 'L’évenement imaginé par les Techs pour les Techs',
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
									name: 'Craftmanship',
									icon: '/BestOfTz/icons/Dev.svg',
								},
							],
						}}
					/>
				</Folder>
			</Folder>
		</>
	);
};
