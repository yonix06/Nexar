import type { Meta, StoryObj } from '@storybook/react';

import { ColorSchemeToggle } from './ColorSchemeToggle';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: ColorSchemeToggle,
	parameters: {}
} satisfies Meta<typeof ColorSchemeToggle>;

export default meta;

type Story = StoryObj<typeof ColorSchemeToggle>;

export const Default: Story = {
	args: {},
};
