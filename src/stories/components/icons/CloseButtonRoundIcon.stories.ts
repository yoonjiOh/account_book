import type { Meta, StoryObj } from "@storybook/react";
import { CloseButtonRoundIcon } from "@/components/icons";

const meta: Meta<typeof CloseButtonRoundIcon> = {
  component: CloseButtonRoundIcon,
};

export default meta;
type Story = StoryObj<typeof CloseButtonRoundIcon>;

export const Default: Story = {
  args: {
    onClick: () => alert("CloseButtonRoundIcon clicked!"),
  },
};
