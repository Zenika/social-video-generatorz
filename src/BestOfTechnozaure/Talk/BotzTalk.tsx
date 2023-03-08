import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {Background} from '../../Components/Background';
import {CategoryProps, SpeakerProps} from '../../Types';
import {Speaker} from '../../Components/Speaker/Speaker';
import {Category} from '../../Components/Category';
import {Title} from '../../Components/Title';
import {Logo} from '../../Components/Logo';
import {LogoDate} from './LogoDate';

export interface BotzTalkProps {
	title: string;
	date: string;
	speaker: SpeakerProps;
	category: CategoryProps;
}

export const BotzTalk: React.FC<BotzTalkProps> = ({
	title,
	date,
	speaker,
	category,
}) => {
	return (
		<AbsoluteFill style={{color: 'white', fontFamily: 'sans-serif'}}>
			<Background url="/BestOfTz/background_carre.png" />
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" />
			</Sequence>
			<Sequence name="Speaker" from={15}>
				<Speaker picture={speaker.picture} name={speaker.name} />
			</Sequence>
			<Sequence name="Category" from={10}>
				<Category
					name={category.name}
					icon={category.icon}
					style={{flexDirection: 'row', fontSize: '1.6rem'}}
					size={100}
				/>
			</Sequence>
			<Sequence name="Title" from={60}>
				<Title title={title} style={{fontSize: '3.4rem'}} />
			</Sequence>
			<Sequence name="Detail" from={90}>
				<LogoDate date={date} />
			</Sequence>
		</AbsoluteFill>
	);
};
