// tests/ColorChangingButton.spec.jsx
import { test, expect } from '@playwright/experimental-ct-react';
import ColorChangingButton from './ButtonColor.jsx';

test.describe('ColorChangingButton component', () => {
  test('should change color when clicked', async ({ mount }) => {
    const component = await mount(<ColorChangingButton />);

    // Verify the initial color is blue
    await expect(component).toHaveCSS('background-color', 'rgb(0, 0, 255)'); // blue in RGB

    // Click the button to change the color
    await component.click();

    // Verify the color changes to red after click
    await expect(component).toHaveCSS('background-color', 'rgb(255, 0, 0)'); // red in RGB

    // Click again to toggle back to blue
    await component.click();

    // Verify the color changes back to blue
    await expect(component).toHaveCSS('background-color', 'rgb(0, 0, 255)'); // blue again
  });
});