import type { Meta, StoryObj } from '@storybook/react';

import { DbConnect } from './DbConnect';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: DbConnect,
	parameters: {}
} satisfies Meta<typeof DbConnect>;

export default meta;

type Story = StoryObj<typeof DbConnect>;

export const Default: Story = {
	args: {},
};
