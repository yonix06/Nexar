import type { Meta, StoryObj } from '@storybook/react';

import { SmtpSetup } from './SmtpSetup';

const meta = {
	// eslint-disable-next-line @typescript-eslint/quotes
	tags: ['autodocs'],
	component: SmtpSetup,
	parameters: {}
} satisfies Meta<typeof SmtpSetup>;

export default meta;

type Story = StoryObj<typeof SmtpSetup>;

export const Default: Story = {
	args: {},
};
