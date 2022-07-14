// stories/MyButton.stories.tsx
import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { MyButton } from './Text';

export default {
  title: 'components/testText',
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

export const Basic: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

Basic.args = {
  text: 'Hello World this is text',
};
