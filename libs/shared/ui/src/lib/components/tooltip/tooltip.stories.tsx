import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './tooltip';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Tooltip',
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Tooltip!/gi)).toBeTruthy();
  },
};
