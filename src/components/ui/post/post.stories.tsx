import type { Meta, StoryObj } from '@storybook/react';

import Post from './post';
import MockData from './MockData';

const meta = {
  component: Post,
} satisfies Meta<typeof Post>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: MockData.longPost
  }
};