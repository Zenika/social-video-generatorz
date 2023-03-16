import React, {useEffect, useState} from 'react';
import {Player} from '@remotion/player';
import {VideoTemplate} from '../../../Types/VideoTemplate';
import {useInputChange} from '../../hooks/onInputChanges';
import {CategoriesList} from '../../../DefaultProps/CategoriesList';
import {Checkbox} from './Checkbox';
import {Input} from './Input';
import {EventDefaultProps} from '../../../DefaultProps/EventDefaultProps';

export const EventForm: React.FC<{
	currentTemplate: VideoTemplate;
}> = ({currentTemplate}) => {
	const [title, setTitle] = useInputChange<string>(EventDefaultProps.title);
	const [city, setCity] = useInputChange<string>(EventDefaultProps.city);
	const [date, setDate] = useInputChange<string>(EventDefaultProps.date);
	const [time, setTime] = useInputChange<string>(EventDefaultProps.time);
	const [onlinePlatform, setOnlinePlatform] = useInputChange<string>(
		EventDefaultProps.onlinePlatform
	);
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

	const [categoriesId, setCategoriesId] = useState<Array<string>>([
		'greenit',
		'securite',
		'cloud',
		'craft',
	]);

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
