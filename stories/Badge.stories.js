import { expect } from 'storybook/test';

const Badge = `<div class="bg-red-500 rounded-lg">Test</div>`;

export default {
  title: 'Badge',
  render: ({ ...args }) => {
    return Badge;
  },
};

export const Test = {
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('Test!')).toBeInTheDocument();
  }
};