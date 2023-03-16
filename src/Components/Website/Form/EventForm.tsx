import React, {useEffect, useState} from 'react';
import {Player} from '@remotion/player';
import {VideoTemplate} from '../../../Types/VideoTemplate';
import {useInputChange} from '../../hooks/onInputChanges';
import {CategoriesList} from '../../../DefaultProps/CategoriesList';
import {Checkbox} from './Checkbox';
import {Input} from './Input';

export const EventForm: React.FC<{
	defaultData: object;
	currentTemplate: VideoTemplate;
}> = ({defaultData, currentTemplate}) => {
	const [title, setTitle] = useInputChange<string>(
		'L’évenement imaginé par les Techs pour les Techs'
	);
	const [city, setCity] = useInputChange<string>('lyon');
	const [date, setDate] = useInputChange<string>('28 Novembre 2023');
	const [time, setTime] = useInputChange<string>('17h00');
	const [onlinePlatform, setOnlinePlatform] =
		useInputChange<string>('workadventure');
	const [contactName, setContactName] = useInputChange<string>('Lucas Audart');
	const [contactPicture, setContactPicture] = useInputChange<string>(
		'https://ca.slack-edge.com/T02ARLB3P-U02H7C4H6PJ-eb62023feb1e-512'
	);
	const [contactRole, setContactRole] = useInputChange<string>(
		'Consultant frontend'
	);
	const [contactLocation, setContactLocation] = useInputChange<string>('lyon');
	const [contactMail, setContactMail] = useInputChange<string>(
		'lucas.audart@zenika.com'
	);
	const [contactPhone, setContactPhone] =
		useInputChange<string>('06 57 29 32 64');

	const [categoriesId, setCategoriesId] = useState<Array<string>>([
		'greenit',
		'securite',
		'cloud',
		'craft',
	]);

	const [categoriesData, setCategoriesData] = useState<Array<object>>([
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
	]);

	const handleAddCategory = (newCategory: string): void => {
		if (categoriesId.length < 4) {
			const formatedCategory = newCategory.replace(' ', '').toLowerCase();
			setCategoriesId([...categoriesId, formatedCategory]);
		}
	};

	const handleRemoveCategory = (oldCategory: string): void => {
		setCategoriesId(
			categoriesId.filter((category) => category !== oldCategory)
		);
	};

	const getCategoriesData = (): void => {
		const categoriesContent: object[] = [];
		categoriesId.forEach((categoryName) => {
			categoriesContent.push(CategoriesList[categoryName]);
		});
		setCategoriesData(categoriesContent);
	};

	const introInputs = {
		title: {
			data: title,
			setData: setTitle,
		},
		city: {
			data: city,
			setData: setCity,
		},
		date: {
			data: date,
			setData: setDate,
		},
		time: {
			data: time,
			setData: setTime,
		},
		onlinePlatform: {
			data: onlinePlatform,
			setData: setOnlinePlatform,
		},
	};

	const contactInputs = {
		name: {
			data: contactName,
			setData: setContactName,
		},
		picture: {
			data: contactPicture,
			setData: setContactPicture,
		},
		role: {
			data: contactRole,
			setData: setContactRole,
		},
		location: {
			data: contactLocation,
			setData: setContactLocation,
		},
		mail: {
			data: contactMail,
			setData: setContactMail,
		},
		phone: {
			data: contactPhone,
			setData: setContactPhone,
		},
	};

	const data = {
		title,
		city,
		date,
		time,
		onlinePlatform,
		categories: categoriesData,
		contact: {
			name: contactName,
			picture: contactPicture,
			role: contactRole,
			location: contactLocation,
			mail: contactMail,
			phone: contactPhone,
		},
	};

	useEffect(() => {
		getCategoriesData();
	}, [categoriesId]);

	return (
		<>
			<div>
				<Player
					controls
					autoPlay
					loop
					durationInFrames={currentTemplate.durationInFrames}
					fps={30}
					compositionWidth={currentTemplate.width}
					compositionHeight={currentTemplate.height}
					component={currentTemplate.component}
					style={{width: 500, height: 500}}
					inputProps={data}
				/>
			</div>

			<form>
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
				<section>
					{Object.entries(CategoriesList).map(
						([categoryName, categoryData], key) => (
							<Checkbox
								key={key}
								label={categoryData.name}
								categoryId={categoryName}
								addCategory={handleAddCategory}
								removeCategory={handleRemoveCategory}
								defaultCheck={Boolean(
									categoriesId.find((category) => category === categoryName)
								)}
							/>
						)
					)}
				</section>
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
			</form>
		</>
	);
};
