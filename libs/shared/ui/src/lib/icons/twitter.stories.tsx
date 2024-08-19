import type { Meta, StoryObj } from '@storybook/react';
import { Twitter } from './twitter';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Twitter> = {
  component: Twitter,
  title: 'Twitter',
};
export default meta;
type Story = StoryObj<typeof Twitter>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Twitter!/gi)).toBeTruthy();
  },
};
