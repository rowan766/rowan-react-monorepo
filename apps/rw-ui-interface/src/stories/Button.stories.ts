import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Button } from '@rw/ui';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'RW/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
  args: { onClick: () => console.log('clicked') },

};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    children: 'Button',
  },
};