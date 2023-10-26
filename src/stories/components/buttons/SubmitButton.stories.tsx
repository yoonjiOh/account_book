import type { Meta, StoryObj } from "@storybook/react";
import { SubmitButton } from "@/features/ui/components";

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  render: (args) => (
    <div className="w-366">
      <SubmitButton {...args} />
    </div>
  ),
};
Default.args = {
  label: "등록하기",
  disabled: false,
  onClick: () => alert("click!"),
};
