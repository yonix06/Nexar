import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  args: {

  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link {...args} />
);

export const Story = Template.bind({});
Story.args = {};
