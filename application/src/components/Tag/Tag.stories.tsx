import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./";
import MoodIcon from "@mui/icons-material/Mood";

const meta: Meta<typeof Tag> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tag",
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "Facebook",
    onDelete: () => alert("Delete Tag"),
    onEdit: () => alert("Edit Tag"),
  },
};

export const WithEmoticon: Story = {
  args: {
    label: <MoodIcon sx={{ color: "#fff" }} />,
    onDelete: () => alert("Delete Tag"),
    onEdit: () => alert("Edit Tag"),
  },
};
