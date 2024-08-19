import type { Meta, StoryObj } from '@storybook/react';
import { ComponentGrid } from './component-grid';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ComponentGrid> = {
  component: ComponentGrid,
  title: 'ComponentGrid',
};
export default meta;
type Story = StoryObj<typeof ComponentGrid>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ComponentGrid!/gi)).toBeTruthy();
  },
};
