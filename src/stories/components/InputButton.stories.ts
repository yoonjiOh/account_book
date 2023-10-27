import type { Meta, StoryObj } from "@storybook/react";
import { InputButton } from "@/features/ui/components";

const meta: Meta<typeof InputButton> = {
  component: InputButton,
};

export default meta;
type Story = StoryObj<typeof InputButton>;

export const Default: Story = {
  args: {
    label: "분류",
    inputValue: "test",
    placeholder: "선택하세요",
    onClick: () => alert("clicked!"),
  },
};
