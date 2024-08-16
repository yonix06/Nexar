import type { Meta, StoryObj } from '@storybook/react';

import { EditFile } from './EditFile';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: EditFile,
	parameters: {}
} satisfies Meta<typeof EditFile>;

export default meta;

type Story = StoryObj<typeof EditFile>;

export const Default: Story = {
	args: {},
};
