import type { Meta, StoryObj } from "@storybook/react";
import { AssetIcon } from "@/features/ui/components/icons";

const meta: Meta<typeof AssetIcon> = {
  component: AssetIcon,
};

export default meta;
type Story = StoryObj<typeof AssetIcon>;

export const Default: Story = {};
