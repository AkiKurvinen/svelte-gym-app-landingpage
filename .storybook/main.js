

/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
    "@storybook/addon-styling-webpack"
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  },
  "staticDirs": ['../static/assets'],
};
export default config;