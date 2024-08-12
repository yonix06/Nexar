import React from "react";
import {themes} from "@storybook/theming";
import type { Preview } from "@storybook/react"
import "../styles/tailwind.css"
import "../styles/nextui.css"
import { withThemeByClassName } from "@storybook/addon-themes";


const preview: Preview = {
  parameters: {
    actions: { fn: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [withThemeByClassName({
      themes: {
          // nameOfTheme: 'classNameForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
  })],

  tags: ['autodocs']
}

export default preview
