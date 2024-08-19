import type { Meta, StoryObj } from '@storybook/react';
import { LoadingCircle } from './loading-circle';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof LoadingCircle> = {
  component: LoadingCircle,
  title: 'LoadingCircle',
};
export default meta;
type Story = StoryObj<typeof LoadingCircle>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to LoadingCircle!/gi)).toBeTruthy();
  },
};
