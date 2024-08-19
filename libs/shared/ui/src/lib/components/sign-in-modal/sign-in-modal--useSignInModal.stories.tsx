import type { Meta, StoryObj } from '@storybook/react';
import { useSignInModal } from './sign-in-modal';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof useSignInModal> = {
  component: useSignInModal,
  title: 'useSignInModal',
};
export default meta;
type Story = StoryObj<typeof useSignInModal>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to useSignInModal!/gi)).toBeTruthy();
  },
};
