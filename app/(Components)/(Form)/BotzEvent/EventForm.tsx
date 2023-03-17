'use client';

import React, {useEffect, useState} from 'react';
import {Player} from '@remotion/player';
import {VideoTemplate} from '../../../../src/Types/VideoTemplate';
import {useInputChange} from '../../../../src/Components/hooks/onInputChanges';
import {CategoriesList} from '../../../../src/DefaultProps/CategoriesList';
import {
	EventDefaultCategories,
	EventDefaultProps,
} from '../../../../src/DefaultProps/EventDefaultProps';
import {VideoIntro} from './VideoIntro';
import {VideoCategories} from './VideoCategories';
import {VideoContact} from './VideoContact';

export const EventForm: React.FC<{
	currentTemplate: VideoTemplate;
}> = ({currentTemplate}) => {
	const [title, setTitle] = useInputChange<string>(EventDefaultProps.title);
	const [city, setCity] = useInputChange<string>(EventDefaultProps.city);
	const [date, setDate] = useInputChange<string>(EventDefaultProps.date);
	const [time, setTime] = useInputChange<string>(EventDefaultProps.time);
	const [contactName, setContactName] = useInputChange<string>(
		EventDefaultProps.contact.name
	);
	const [contactPicture, setContactPicture] = useInputChange<string>(
		EventDefaultProps.contact.picture
	);
	const [contactRole, setContactRole] = useInputChange<string>(
		EventDefaultProps.contact.role
	);
	const [contactLocation, setContactLocation] = useInputChange<string>(
		EventDefaultProps.contact.location
	);
	const [contactMail, setContactMail] = useInputChange<string>(
		EventDefaultProps.contact.mail
	);
	const [contactPhone, setContactPhone] = useInputChange<string>(
		EventDefaultProps.contact.phone
	);

	const [categoriesId, setCategoriesId] = useState<Array<string>>(
		EventDefaultCategories
	);

	const [categoriesData, setCategoriesData] = useState<Array<object>>(
		EventDefaultProps.categories
	);

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
				<VideoIntro introInputs={introInputs} />
				<VideoCategories
					categoriesId={categoriesId}
					addCategory={handleAddCategory}
					removeCategory={handleRemoveCategory}
				/>
				<VideoContact contactInputs={contactInputs} />
			</form>
		</>
	);
};
