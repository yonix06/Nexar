import type { Meta, StoryObj } from '@storybook/react';
import { SignInModal } from './sign-in-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SignInModal> = {
  component: SignInModal,
  title: 'SignInModal',
};
export default meta;
type Story = StoryObj<typeof SignInModal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to SignInModal!/gi)).toBeTruthy();
  },
};
