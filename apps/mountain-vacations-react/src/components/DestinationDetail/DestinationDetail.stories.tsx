import { Story, Meta } from '@storybook/react';
import { DestinationDetail } from './DestinationDetail';

export default {
  title: 'Components/DestinationDetail',
  component: DestinationDetail,
} as Meta;

const Template: Story = (args) => {
  return <DestinationDetail>{args.children}</DestinationDetail>;
};

export const DestinationDetailStory = Template.bind({});
DestinationDetailStory.storyName = 'DestinationDetail';
DestinationDetailStory.args = {
  children: 'DestinationDetail',
};
