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
import {InputSection} from '../Inputs/InputSection';
import {VideoCategories} from './VideoCategories';
import {format} from 'date-fns';
import fr from 'date-fns/locale/fr';
import styles from '../styles.module.css';
import inputStyles from '../Inputs/styles.module.css';

export const EventForm: React.FC<{
	currentTemplate: VideoTemplate;
}> = ({currentTemplate}) => {
	const [title, setTitle] = useInputChange<string>(EventDefaultProps.title);
	const [city, setCity] = useInputChange<string>(EventDefaultProps.city);
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState(new Date());
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
			label: 'Titre',
		},
		city: {
			data: city,
			setData: setCity,
			label: 'Ville',
		},
		date: {
			data: date,
			setData: setDate,
			label: 'Date',
		},
		time: {
			data: time,
			setData: setTime,
			label: 'Heure',
		},
	};

	const contactInputs = {
		name: {
			data: contactName,
			setData: setContactName,
			label: 'Nom',
		},
		picture: {
			data: contactPicture,
			setData: setContactPicture,
			label: 'Photo',
		},
		role: {
			data: contactRole,
			setData: setContactRole,
			label: 'Role',
		},
		location: {
			data: contactLocation,
			setData: setContactLocation,
			label: 'Ville',
		},
		mail: {
			data: contactMail,
			setData: setContactMail,
			label: 'Email',
		},
		phone: {
			data: contactPhone,
			setData: setContactPhone,
			label: 'Téléphone',
		},
	};

	const data = {
		title,
		city,
		date: format(date, 'dd MMMM yyyy', {locale: fr}),
		time: format(time, 'HH:MM'),
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

	const handleSubmit: React.FormEventHandler = (event) => {
		event.preventDefault();
		console.log('Hello there');
	};

	return (
		<div className={styles.VideoFormContainer}>
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

			<div className={`${styles.formContainer} ${inputStyles.eventForm}`}>
				<form id={currentTemplate.formId} onSubmit={handleSubmit}>
					<section>
						<p>Categories</p>
						<InputSection InputList={introInputs} />
					</section>
					<section>
						<p>Introduction</p>
						<VideoCategories
							categoriesId={categoriesId}
							addCategory={handleAddCategory}
							removeCategory={handleRemoveCategory}
						/>
					</section>
					<section>
						<p>Contact</p>
						<InputSection InputList={contactInputs} />
					</section>
				</form>
			</div>
		</div>
	);
};
