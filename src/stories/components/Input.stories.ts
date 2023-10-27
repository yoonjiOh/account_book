import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@/features/ui/components";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "assetName",
    placeholder: "예) 현금, 금, 빌려준 돈",
    // onValidate: (value) => {
    //   if (value.length < 1) {
    //     return {
    //       error: true,
    //       errorMessage: "최소 1자를 입력해주세요.",
    //     };
    //   } else if (value.length > 20) {
    //     return {
    //       error: true,
    //       errorMessage: "최대 20자까지 입력 가능해요.",
    //     };
    //   }

    //   return {
    //     error: false,
    //     errorMessage: "",
    //   };
    // },
  },
};
