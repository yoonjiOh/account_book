import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@/features/ui/components";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
