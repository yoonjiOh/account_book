import type { Meta, StoryObj } from "@storybook/react";
import { AssetType, RegisterAssetForm } from "@/features/asset";
import { withRouter } from "storybook-addon-react-router-v6";

const meta: Meta<typeof RegisterAssetForm> = {
  title: "features/asset/component/RegisterAssetForm",
  component: RegisterAssetForm,
  decorators: [withRouter],
};

export default meta;
type Story = StoryObj<typeof RegisterAssetForm>;

export const RegisterNew: Story = {
  args: {
    isEditMode: false,
    onSubmit: () => alert("submit"),
    ref: null,
  },
};

export const Edit: Story = {
  args: {
    data: {
      id: 15,
      name: "현금",
      value: 200000,
      type: AssetType.ASSETS,
      memo: "월급",
    },
    isEditMode: true,
    onSubmit: () => alert("submit"),
    ref: null,
  },
};
