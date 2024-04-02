import { FunctionComponent } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PaginationControl } from './PaginationControl';

const meta: Meta<FunctionComponent> = {
  component: PaginationControl,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FunctionComponent>;

export const Enabled: Story = {
  render: () => <PaginationControl disabled={false} />,
};

export const Disabled: Story = {
  render: () => <PaginationControl disabled={true} />,
};
