import type { Meta, StoryObj } from "@storybook/react";
import { AssetSummaryArcodion, AssetType } from "@/features/asset";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof AssetSummaryArcodion> = {
  title: "features/asset/component/AssetSummaryArcodion",
  component: AssetSummaryArcodion,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof AssetSummaryArcodion>;

export const Default: Story = {
  args: {
    type: AssetType.ASSETS,
    totalValue: 1000000,
    data: [
      {
        id: 1,
        name: "현금",
        value: 1000000,
        type: AssetType.ASSETS,
        memo: "월급",
      },
      {
        id: 2,
        name: "예금",
        value: 2000000,
        type: AssetType.ASSETS,
        memo: "적금",
      },
    ],
  },
};
