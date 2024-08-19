import type { Meta, StoryObj } from '@storybook/react';
import { Google } from './google';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Google> = {
  component: Google,
  title: 'Google',
};
export default meta;
type Story = StoryObj<typeof Google>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Google!/gi)).toBeTruthy();
  },
};
