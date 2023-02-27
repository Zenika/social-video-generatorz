import {expect, test} from '@playwright/test';

test.describe('Videos', () => {
	test.beforeEach(async ({page}) => {
		await page.goto('http://localhost:3000/generate');
	});

	test('Are elements visible', async ({page}) => {
		const player = page.locator('.__remotion-player');
		await expect(player).toBeVisible();

		const monogram = page.getByTestId('test-monogram');
		await expect(player).toBeVisible();
	});

	// Take references screenshots
	test.skip('Video references', async ({page}) => {
		const player = page.locator('.__remotion-player');

		await page.screenshot({path: 'tests/video/captures/start.png'});
		await player.click();
		await page.waitForTimeout(1000);
		await page.screenshot({path: 'tests/video/captures/middle.png'});
		await page.waitForTimeout(1000);
		await page.screenshot({path: 'tests/video/captures/end.png'});
		await player.click();
	});

	test('Is monogram moving correctly', async ({page}) => {
		const player = page.locator('.__remotion-player');

		await player.click();
		await page.waitForTimeout(1000);
		expect(await page.screenshot()).toMatchSnapshot(
			'tests/video/captures/middle.png'
		);
		await player.click();
	});
});
