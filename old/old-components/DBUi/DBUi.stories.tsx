import type { Meta, StoryObj } from '@storybook/react';

import { DBUi } from './DBUi';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: DBUi,
	parameters: {}
} satisfies Meta<typeof DBUi>;

export default meta;

type Story = StoryObj<typeof DBUi>;

export const Default: Story = {
	args: {},
};
