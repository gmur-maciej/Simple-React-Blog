import type { Meta, StoryObj } from '@storybook/react';

import PostPrevies from './postPrevies';

const meta = {
  component: PostPrevies,
} satisfies Meta<typeof PostPrevies>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      "title": "FirstPost",
      "content": "Some content"
    }
  }
};