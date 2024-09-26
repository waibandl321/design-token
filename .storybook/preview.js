/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    // designToken: {
    //   defaultTab: "Colors", // デフォルトで表示されるタブ
    //   tabs: ["Colors", "Background Colors"], // 表示するタブ
    // },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
