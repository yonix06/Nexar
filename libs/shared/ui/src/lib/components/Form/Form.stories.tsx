import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from './Form';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof FormComponent> = {
  component: FormComponent,
  title: 'FormComponent',
};
export default meta;
type Story = StoryObj<typeof FormComponent>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to FormComponent!/gi)).toBeTruthy();
  },
};
