import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "@/components";

const meta: Meta<typeof TextButton> = {
  component: TextButton,
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    label: "텍스트 버튼",
    onClick: () => alert("clicked!"),
  },
};
