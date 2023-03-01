import React, {ComponentType, useContext} from 'react';
import * as REMOTION from 'remotion';
import {Internals} from 'remotion';
import {generateImage} from 'jsdom-screenshot';
import {toMatchImageSnapshot} from 'jest-image-snapshot';
import {render} from '@testing-library/react';

import {Monogram} from '../src/LogoZenika/Monogram';

expect.extend({toMatchImageSnapshot});

jest.mock('remotion', () => ({
	__esModule: true,
	...jest.requireActual('remotion'),
}));

const useCFMock = jest.spyOn(REMOTION, 'useCurrentFrame');
const useVCMock = jest.spyOn(REMOTION, 'useVideoConfig');
useVCMock.mockImplementation(() => {
	return {
		height: 500,
		width: 900,
		fps: 30,
		durationInFrames: 60,
		id: 'markup',
		nonce: 0,
		defaultProps: undefined,
		folderName: 'Test',
		parentFolderName: null,
	};
});
useCFMock.mockImplementation(() => 30);

const Wrapper: React.FC<{
	children: React.ReactNode;
}> = ({children}) => {
	const compositions = useContext(Internals.CompositionManager);
	return (
		<Internals.CanUseRemotionHooksProvider>
			<Internals.RemotionRoot>
				<Internals.CompositionManager.Provider
					// eslint-disable-next-line react/jsx-no-constructed-context-values
					value={{
						...compositions,
						compositions: [
							{
								height: 1080,
								width: 1080,
								fps: 30,
								durationInFrames: 30,
								id: 'markup',
								nonce: 0,
								component: React.lazy(() =>
									Promise.resolve({
										default: (() => null) as ComponentType<unknown>,
									})
								),
								defaultProps: undefined,
								folderName: null,
								parentFolderName: null,
							},
						],
						currentComposition: 'markup',
					}}
				>
					{children}
				</Internals.CompositionManager.Provider>
			</Internals.RemotionRoot>
		</Internals.CanUseRemotionHooksProvider>
	);
};
test('Has no visual regressions', async () => {
	render(
		<Wrapper>
			<Monogram />
		</Wrapper>
	);

	const screenshot = await generateImage();
	expect(screenshot).toMatchImageSnapshot();
});
