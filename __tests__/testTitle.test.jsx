import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../app/generate/page';

it('Get title', async () => {
	render(<Page />);

	expect(
		screen.getByText('This page is to GENERATE videos')
	).toBeInTheDocument();
});
