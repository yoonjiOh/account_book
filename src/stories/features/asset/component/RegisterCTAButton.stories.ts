import type { Meta, StoryObj } from "@storybook/react";
import { RegisterCTAButton } from "@/features/asset";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof RegisterCTAButton> = {
  title: "features/asset/component/RegisterCTAButton",
  component: RegisterCTAButton,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof RegisterCTAButton>;

export const Default: Story = {
  args: {
    label: "기타 자산 등록",
  },
};
