import type { Meta, StoryObj } from '@storybook/react';

// 简单的本地组件测试
const SimpleButton = ({ children, ...props }: any) => (
  <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }} {...props}>
    {children}
  </button>
);

const meta: Meta<typeof SimpleButton> = {
  title: 'Test/SimpleButton',
  component: SimpleButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Test Button',
  },
};