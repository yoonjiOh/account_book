import type { Meta, StoryObj } from "@storybook/react";
import { InputClearButtonIcon } from "@/features/ui/components/icons";

const meta: Meta<typeof InputClearButtonIcon> = {
  component: InputClearButtonIcon,
};

export default meta;
type Story = StoryObj<typeof InputClearButtonIcon>;

export const Default: Story = {
  args: {
    onClick: () => alert("InputClearButtonIcon clicked!"),
  },
};
