import React from 'react';

export interface SpeakerProps {
	picture: string;
	name: string;
	role?: string;
	location?: string;
	mail?: string;
	phone?: string;
}

export interface CategoryProps {
	name: string;
	icon: string;
	size?: number;
	style?: React.CSSProperties;
}

export interface IconTextProps {
	text: string;
	icon: string;
	size?: number;
	style?: React.CSSProperties;
}
