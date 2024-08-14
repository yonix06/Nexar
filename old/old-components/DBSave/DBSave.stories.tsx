import type { Meta, StoryObj } from '@storybook/react';

import { DBSave } from './DBSave';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: DBSave,
	parameters: {}
} satisfies Meta<typeof DBSave>;

export default meta;

type Story = StoryObj<typeof DBSave>;

export const Default: Story = {
	args: {},
};
