import type { Meta, StoryObj } from "@storybook/react";
import { SummaryHeaderSection } from "@/features/asset-summary";

const meta: Meta<typeof SummaryHeaderSection> = {
  title: "features/asset-summary/SummaryHeaderSection",
  component: SummaryHeaderSection,
};

export default meta;
type Story = StoryObj<typeof SummaryHeaderSection>;

export const Default: Story = {
  args: {
    assetTotalValue: 1000000,
  },
};
