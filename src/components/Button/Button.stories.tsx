// stories/MyButton.stories.tsx
import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { MyButton } from './Button';

export default {
  title: 'components/MyButton',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
