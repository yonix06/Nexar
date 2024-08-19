import type { Meta, StoryObj } from '@storybook/react';
import { CountingNumbers } from './counting-numbers';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CountingNumbers> = {
  component: CountingNumbers,
  title: 'CountingNumbers',
};
export default meta;
type Story = StoryObj<typeof CountingNumbers>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CountingNumbers!/gi)).toBeTruthy();
  },
};
