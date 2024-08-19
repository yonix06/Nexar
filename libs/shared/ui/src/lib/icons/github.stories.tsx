import type { Meta, StoryObj } from '@storybook/react';
import { Github } from './github';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Github> = {
  component: Github,
  title: 'Github',
};
export default meta;
type Story = StoryObj<typeof Github>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Github!/gi)).toBeTruthy();
  },
};
