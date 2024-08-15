import type { Meta, StoryObj } from '@storybook/react';

import { Trace } from './Trace';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: Trace,
	parameters: {}
} satisfies Meta<typeof Trace>;

export default meta;

type Story = StoryObj<typeof Trace>;

export const Default: Story = {
	args: {},
};
