import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@/components";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
