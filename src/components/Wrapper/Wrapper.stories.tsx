import { Meta, StoryObj } from '@storybook/react';

import { Wrapper } from './Wrapper';
import { FunctionComponent } from 'react';
import { ITag } from '../../common/types';

const meta: Meta<FunctionComponent> = {
  component: Wrapper,
  argTypes: {
    docs: {
      description: 'Optional; for documentation purposes',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FunctionComponent>;

export const Loading: Story = {
  render: () => <Wrapper docs={true} />,
};

export const DataLoaded: Story = {
  render: () => {
    const sampleTags: Array<ITag> = [
      {
        name: 'Test name',
        count: 10,
        is_moderator_only: false,
        is_required: false,
        has_synonyms: false,
      },
      {
        name: 'Test name 2',
        count: 15,
        is_moderator_only: false,
        is_required: false,
        has_synonyms: false,
      },
    ];
    return <Wrapper docs={true} tags={sampleTags} />;
  },
};
