import type { Meta, StoryObj } from "@storybook/react";
import { AssetSummaryArcodion } from "@/features/asset/components";

const meta: Meta<typeof AssetSummaryArcodion> = {
  title: "features/asset/AssetSummaryArcodion",
  component: AssetSummaryArcodion,
};

export default meta;
type Story = StoryObj<typeof AssetSummaryArcodion>;

export const Default: Story = {
  args: {
    type: "ASSETS",
    totalValue: 1000000,
  },
};
