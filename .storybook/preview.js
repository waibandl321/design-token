/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    designToken: {
      defaultTab: "Colors", // デフォルトで表示されるタブ
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
