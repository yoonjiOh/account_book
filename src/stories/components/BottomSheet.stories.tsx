import type { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "@/features/ui/components";
import {
  CategoryBottomSheetTitle,
  CategoryBottomSheetContent,
} from "@/features/asset";

const options = [
  {
    id: "자산_ID",
    name: "자산",
    checked: true,
  },
  {
    id: "부채_ID",
    name: "부채",
    checked: false,
  },
];

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: (args) => (
    <div className="w-screen h-screen">
      <BottomSheet {...args} />
    </div>
  ),
};
Default.args = {
  isOpen: true,
  header: <CategoryBottomSheetTitle />,
  children: (
    <>
      {options.map((option) => (
        <CategoryBottomSheetContent
          key={option.id}
          assetCategory={option}
          checked={option.checked}
          onClick={() => alert("click!")}
        />
      ))}
    </>
  ),
  onClose: () => alert("click!"),
};
