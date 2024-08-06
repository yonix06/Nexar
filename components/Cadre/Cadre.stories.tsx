import type { Meta, StoryObj } from "@storybook/react"
import { Cadre } from "./Cadre"

const meta: Meta<typeof Cadre> = {
  title: "Cadre",
  component: Cadre,
  args: {
    intent: "primary",
    underline: false,
    children: "Cadre",
    size: "lg",
  },
  argTypes: {
    intent: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Cadre>

export const Default: Story = {
  render: (args) => <Cadre {...args} />,
}

export default meta
