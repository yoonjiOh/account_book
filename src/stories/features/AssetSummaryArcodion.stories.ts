import type { Meta, StoryObj } from "@storybook/react";
import { AssetSummaryArcodion } from "@/features/asset-summary";

const meta: Meta<typeof AssetSummaryArcodion> = {
  title: "features/asset-summary/AssetSummaryArcodion",
  component: AssetSummaryArcodion,
};

export default meta;
type Story = StoryObj<typeof AssetSummaryArcodion>;

export const Default: Story = {
  args: {
    assetTotalValue: 1000000,
  },
};
