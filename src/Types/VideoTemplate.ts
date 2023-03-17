import React from 'react';

export interface VideoTemplate {
	component: React.FC<any>;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	formId: string;
}
