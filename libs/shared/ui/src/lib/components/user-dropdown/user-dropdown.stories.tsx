import type { Meta, StoryObj } from '@storybook/react';
import { UserDropdown } from './user-dropdown';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof UserDropdown> = {
  component: UserDropdown,
  title: 'UserDropdown',
};
export default meta;
type Story = StoryObj<typeof UserDropdown>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to UserDropdown!/gi)).toBeTruthy();
  },
};
