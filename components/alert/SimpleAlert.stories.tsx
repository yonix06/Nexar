import type { Meta, StoryObj } from '@storybook/react';

import SimpleAlert from './SimpleAlert';

const meta = {
  component: SimpleAlert,
} satisfies Meta<typeof SimpleAlert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};