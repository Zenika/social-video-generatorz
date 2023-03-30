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

export const EventForm: React.FC<{
	currentTemplate: VideoTemplate;
	setLoading: (data: boolean) => void;
	setVideoUrl: (data: string) => void;
	setError: (data: string) => void;
}> = ({currentTemplate, setLoading, setVideoUrl, setError}) => {
	const [title, setTitle] = useInputChange<string>(EventDefaultProps.title);
	const [remoteOnly, setRemoteOnly] = useState<boolean>(
		EventDefaultProps.remoteOnly
	);
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
		remoteOnly: {
			data: remoteOnly,
			setData: setRemoteOnly,
			label: 'À distance uniquement',
			required: true,
		},
		title: {
			data: title,
			setData: setTitle,
			label: 'Titre',
			placeholder: EventDefaultProps.title,
			required: true,
		},
		city: {
			data: city,
			setData: setCity,
			label: 'Ville',
			placeholder: EventDefaultProps.city,
			required: true,
			hidden: remoteOnly,
		},
		date: {
			data: date,
			setData: setDate,
			label: 'Date',
			midWidth: true,
			placeholder: EventDefaultProps.date,
			required: true,
		},
		time: {
			data: time,
			setData: setTime,
			label: 'Heure',
			midWidth: true,
			placeholder: EventDefaultProps.time,
			required: true,
		},
	};

	const contactInputs = {
		name: {
			data: contactName,
			setData: setContactName,
			label: 'Nom',
			placeholder: EventDefaultProps.contact.name,
			required: true,
		},
		picture: {
			data: contactPicture,
			setData: setContactPicture,
			label: "URL de l'image",
			placeholder: EventDefaultProps.contact.picture,
			tooltipText:
				'Nous vous conseillons d\'ajouter votre photo slack (format 1/1 si possible): Il vous suffit de faire "clique droit" sur votre photo de profil, puis "copier l\'url de l\'image".',
			required: true,
		},
		role: {
			data: contactRole,
			setData: setContactRole,
			label: 'Role',
			placeholder: EventDefaultProps.contact.role,
		},
		location: {
			data: contactLocation,
			setData: setContactLocation,
			label: 'Ville',
			placeholder: EventDefaultProps.contact.location,
		},
		mail: {
			data: contactMail,
			setData: setContactMail,
			label: 'Email',
			placeholder: EventDefaultProps.contact.mail,
		},
		phone: {
			data: contactPhone,
			setData: setContactPhone,
			label: 'Téléphone',
			placeholder: EventDefaultProps.contact.phone,
		},
	};

	const data: {
		title: string;
		remoteOnly: boolean;
		city: string;
		date: string;
		time: string;
		categories: object[];
		contact: {
			name: string;
			picture: string;
			role: string;
			location: string;
			mail: string;
			phone: string;
		};
	} = {
		title,
		remoteOnly,
		city,
		date: format(date, 'dd MMMM yyyy', {locale: fr}),
		time: format(time, 'HH:mm'),
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
		setLoading(true);

		fetch('https://social-video-generatorz-server.cleverapps.io/BotzEvent', {
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => res.blob())
			.then((blob) => {
				const fileURL = URL.createObjectURL(blob);
				setVideoUrl(fileURL);
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
				setError(
					'/!\\ Une erreur est survenu ! Veuillez patienter quelques instants et essayer à nouveaux. /!\\'
				);
			});
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

			<div className={`${styles.formContainer} ${styles.arrowDown}`}>
				<div>
					<form id={currentTemplate.formId} onSubmit={handleSubmit}>
						<section>
							<p>Introduction</p>
							<InputSection InputList={introInputs} />
						</section>
						<section>
							<p>Categories</p>
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
		</div>
	);
};
