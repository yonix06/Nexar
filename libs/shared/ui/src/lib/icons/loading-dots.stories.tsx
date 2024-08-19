import type { Meta, StoryObj } from '@storybook/react';
import { LoadingDots } from './loading-dots';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoadingDots> = {
  component: LoadingDots,
  title: 'LoadingDots',
};
export default meta;
type Story = StoryObj<typeof LoadingDots>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LoadingDots!/gi)).toBeTruthy();
  },
};
