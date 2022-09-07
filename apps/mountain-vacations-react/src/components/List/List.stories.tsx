import { Story, Meta } from '@storybook/react';
import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: Story = (args) => {
  return <List>{args.children}</List>;
};

export const ListStory = Template.bind({});
ListStory.storyName = 'List';
ListStory.args = {
  children: 'List',
};
