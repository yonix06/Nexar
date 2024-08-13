import type { StorybookConfig } from '@storybook/nextjs';
import { dirname, join } from "path";

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../components/**/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  "addons": [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-designs",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("storybook-dark-mode"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },

  "staticDirs": [
    "../public"
  ],

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}