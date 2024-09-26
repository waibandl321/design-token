/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-design-token", // 追加
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
