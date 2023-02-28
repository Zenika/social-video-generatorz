import React from 'react';
import {generateImage} from 'jsdom-screenshot';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from '../app/generate/page';

expect.extend({toMatchImageSnapshot});

test('Has no visual regressions', async () => {
	render(<Page />);

	const screenshot = await generateImage();
	expect(screenshot).toMatchImageSnapshot();

	expect(
		screen.getByText('This page is to GENERATE videos')
	).toBeInTheDocument();
});
