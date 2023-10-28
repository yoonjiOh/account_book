import type { Meta, StoryObj } from "@storybook/react";
import { AssetSummaryItem, AssetType } from "@/features/asset";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof AssetSummaryItem> = {
  title: "features/asset/component/AssetSummaryItem",
  component: AssetSummaryItem,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof AssetSummaryItem>;

export const AssetItem: Story = {
  args: {
    type: AssetType.ASSETS,
    asset: {
      id: 1,
      name: "현금",
      value: 1000000,
      type: AssetType.ASSETS,
      memo: "월급",
    },
  },
};

export const LiabilityItem: Story = {
  args: {
    type: AssetType.LIABILITIES,
    asset: {
      id: 1,
      name: "빌린 돈",
      value: -1000000,
      type: AssetType.LIABILITIES,
      memo: "친구에게 빌린 돈 2/21",
    },
  },
};
