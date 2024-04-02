import { Meta, StoryObj } from '@storybook/react';

import { Error } from './Error';
import { FunctionComponent } from 'react';

const meta: Meta<FunctionComponent> = {
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<FunctionComponent>;

export const ExampleError: Story = {
  render: () => <Error message="Nastąpił nieoczekiwany błąd" />,
};
