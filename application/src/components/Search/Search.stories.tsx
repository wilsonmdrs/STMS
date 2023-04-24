import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "./";

const meta: Meta<typeof Search> = {
  title: "Search",
  component: Search,
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "Type to search a tag",
  },
};
