import IconCheckSvg from "@/assets/icons/icon-check.svg";
import { cva } from "class-variance-authority";
import cn from "@/utils/twClassMerge";

interface CategoryBottomSheetContentProps {
  onClick: () => void;
  assetCategory: {
    id: string;
    name: string;
  };
  checked: boolean;
}

const CategoryBottomSheetContent: React.FC<CategoryBottomSheetContentProps> = ({
  onClick,
  assetCategory,
  checked,
}) => {
  const contentClasses = cn(
    CONTENT_VARIANTS({
      type: checked ? "checked" : "default",
    }),
  );
  return (
    <div
      className={`${contentClasses}`}
      role="button"
      aria-label="등록할 자산 카테고리"
      tabIndex={0}
      onClick={onClick}>
      <span>{assetCategory.name}</span>
      {checked && <img src={IconCheckSvg} alt="체크됨" />}
    </div>
  );
};

export default CategoryBottomSheetContent;

const CONTENT_VARIANTS = cva(
  "flex justify-between py-16 border-b border-regentGray/20",
  {
    variants: {
      type: {
        default: "text-ebony/56",
        checked: "text-black",
      },
    },
    defaultVariants: {
      type: "default",
    },
  },
);
