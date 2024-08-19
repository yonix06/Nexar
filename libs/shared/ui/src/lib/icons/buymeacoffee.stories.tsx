import type { Meta, StoryObj } from '@storybook/react';
import { BuyMeACoffee } from './buymeacoffee';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof BuyMeACoffee> = {
  component: BuyMeACoffee,
  title: 'BuyMeACoffee',
};
export default meta;
type Story = StoryObj<typeof BuyMeACoffee>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to BuyMeACoffee!/gi)).toBeTruthy();
  },
};
