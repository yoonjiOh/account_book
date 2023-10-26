import type { Meta, StoryObj } from "@storybook/react";
import { BackButtonIcon } from "@/features/ui/components/icons";

const meta: Meta<typeof BackButtonIcon> = {
  component: BackButtonIcon,
};

export default meta;
type Story = StoryObj<typeof BackButtonIcon>;

export const Default: Story = {
  args: {
    onClick: () => alert("Back Button clicked!"),
  },
};
