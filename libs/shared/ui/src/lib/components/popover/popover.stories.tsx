import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './popover';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: 'Popover',
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Popover!/gi)).toBeTruthy();
  },
};
