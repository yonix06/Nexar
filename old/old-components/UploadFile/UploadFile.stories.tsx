import type { Meta, StoryObj } from '@storybook/react';

import { UploadFile } from './UploadFile';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: UploadFile,
	parameters: {}
} satisfies Meta<typeof UploadFile>;

export default meta;

type Story = StoryObj<typeof UploadFile>;

export const Default: Story = {
	args: {},
};
