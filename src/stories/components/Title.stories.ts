import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "@/features/ui/components";

const meta: Meta<typeof Title> = {
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: "현금부터 실물 자산까지\n 직접 등록해 보세요",
  },
};