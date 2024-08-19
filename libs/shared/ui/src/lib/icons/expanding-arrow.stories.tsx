import type { Meta, StoryObj } from '@storybook/react';
import { ExpandingArrow } from './expanding-arrow';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ExpandingArrow> = {
  component: ExpandingArrow,
  title: 'ExpandingArrow',
};
export default meta;
type Story = StoryObj<typeof ExpandingArrow>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ExpandingArrow!/gi)).toBeTruthy();
  },
};
