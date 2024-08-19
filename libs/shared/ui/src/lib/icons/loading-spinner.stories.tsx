import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './loading-spinner';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  title: 'LoadingSpinner',
};
export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LoadingSpinner!/gi)).toBeTruthy();
  },
};
