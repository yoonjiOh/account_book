import type { Meta, StoryObj } from "@storybook/react";
import { SummaryHeaderSection } from "@/features/asset";

const meta: Meta<typeof SummaryHeaderSection> = {
  title: "features/asset/SummaryHeaderSection",
  component: SummaryHeaderSection,
};

export default meta;
type Story = StoryObj<typeof SummaryHeaderSection>;

export const Default: Story = {
  args: {
    assetTotalValue: 1000000,
  },
};
