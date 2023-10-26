import type { Meta, StoryObj } from "@storybook/react";
import { CloseButtonIcon } from "@/features/ui/components/icons";

const meta: Meta<typeof CloseButtonIcon> = {
  component: CloseButtonIcon,
};

export default meta;
type Story = StoryObj<typeof CloseButtonIcon>;

export const Default: Story = {
  args: {
    onClick: () => alert("Close Button clicked!"),
  },
};
