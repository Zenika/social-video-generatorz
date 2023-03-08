import {CategoryProps} from '../../Types';
import {loadFont} from '@remotion/google-fonts/Nunito';
import {AbsoluteFill, Sequence} from 'remotion';
import {Logo} from '../../Components/Logo';
import {Title} from '../../Components/Title';
import {Website} from './Website';
import {Categories} from './Categories';

const {fontFamily} = loadFont();

export const Intro: React.FC<{title: string; categories: CategoryProps[]}> = ({
	title,
	categories,
}) => {
	return (
		<AbsoluteFill
			style={{
				color: 'white',
				fontFamily,
			}}
		>
			<Sequence name="Website">
				<Website url="www.zenika.com" />
			</Sequence>
			<Sequence name="Logo">
				<Logo src="/BestOfTz/BOTZ_LOGO.png" width={450} top={60} />
			</Sequence>
			<Sequence name="Title" from={10}>
				<Title title={title} style={{fontSize: '2.8rem'}} top={260} />
			</Sequence>
			<Sequence name="Categories" from={20}>
				<Categories categories={categories} />
			</Sequence>
		</AbsoluteFill>
	);
};
