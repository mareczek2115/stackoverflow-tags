import { Meta, StoryObj } from '@storybook/react';

import { SortOptions } from './SortOptions';
import { FunctionComponent } from 'react';

const meta: Meta<FunctionComponent> = {
  component: SortOptions,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          height: '95px',
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

export const Enabled: Story = {
  render: () => <SortOptions disabled={false} />,
};

export const Disabled: Story = {
  render: () => <SortOptions disabled={true} />,
};
