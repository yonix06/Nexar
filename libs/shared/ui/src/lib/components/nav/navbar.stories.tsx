import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './navbar';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'NavBar',
};
export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to NavBar!/gi)).toBeTruthy();
  },
};
