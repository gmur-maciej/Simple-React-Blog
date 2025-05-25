import type { Meta, StoryObj } from '@storybook/react';

import PostPreview from './postPreview';
import MockData from './mockData';

const meta = {
  component: PostPreview,
} satisfies Meta<typeof PostPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: MockData.longPost
  }
};