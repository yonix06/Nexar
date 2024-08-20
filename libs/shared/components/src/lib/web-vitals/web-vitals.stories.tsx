import type { Meta, StoryObj } from '@storybook/react';
import { WebVitals } from './web-vitals';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof WebVitals> = {
  component: WebVitals,
  title: 'WebVitals',
};
export default meta;
type Story = StoryObj<typeof WebVitals>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to WebVitals!/gi)).toBeTruthy();
  },
};
