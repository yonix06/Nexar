import type { Meta, StoryObj } from '@storybook/react';
import { SignInModalCallback } from './sign-in-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignInModalCallback> = {
  component: SignInModalCallback,
  title: 'SignInModalCallback',
};
export default meta;
type Story = StoryObj<typeof SignInModalCallback>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignInModalCallback!/gi)).toBeTruthy();
  },
};
