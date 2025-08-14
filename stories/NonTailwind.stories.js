import { expect } from 'storybook/test';

const NonTailwind = `<div class="badge">Test</div>`;

export default {
  title: 'NonTailwind',
  render: ({ ...args }) => {
    return NonTailwind;
  },
};

export const Test = {
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText('Test!')).toBeInTheDocument();
  }
};