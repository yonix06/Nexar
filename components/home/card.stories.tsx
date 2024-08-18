import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'string',
    description: 'string',
    demo: 'any' as unknown as any,
    large: 'boolean' as unknown as any
  },
} as ComponentMeta<typeof card>;

const Template: ComponentStory<typeof card> = (args) => (
  <card {...args} />
);

export const Story = Template.bind({});
Story.args = {};
