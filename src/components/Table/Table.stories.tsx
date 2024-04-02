import { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';
import { FunctionComponent } from 'react';
import { ITag } from '../../common/types';

const meta: Meta<FunctionComponent> = {
  component: Table,
  argTypes: {
    tags: {
      description: 'Optional; for documentation purposes',
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FunctionComponent>;

export const Empty: Story = {
  render: () => <Table tags={[]} />,
};

export const WithData: Story = {
  render: () => {
    const sampleTag: ITag = {
      name: 'Test name',
      count: 10,
      is_moderator_only: false,
      is_required: false,
      has_synonyms: false,
    };

    return <Table tags={[sampleTag]} />;
  },
};
