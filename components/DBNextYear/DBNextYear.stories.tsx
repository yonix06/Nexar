import type { Meta, StoryObj } from '@storybook/react';

import { DBNextYear } from './DBNextYear';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: DBNextYear,
	parameters: {}
} satisfies Meta<typeof DBNextYear>;

export default meta;

type Story = StoryObj<typeof DBNextYear>;

export const Default: Story = {
	args: {},
};
