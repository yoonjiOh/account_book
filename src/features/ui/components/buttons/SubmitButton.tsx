import { Button } from "@/features/ui/components";
import { cva } from "class-variance-authority";
import cn from "@/utils/twClassMerge";

interface SubmitButtonProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

// 등록하기 버튼입니다.
const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  label,
  disabled,
}) => {
  const buttonClasses = cn(
    BUTTON_VARIANTS({
      type: disabled ? "disabled" : "default",
    }),
  );
  return (
    <Button onClick={onClick} classNames={"w-full"} dataTestId="submit-button">
      <div className={`${buttonClasses}`}>
        <label className="font-medium text-18 leading-26">{label}</label>
      </div>
    </Button>
  );
};

export default SubmitButton;

const BUTTON_VARIANTS = cva(
  "flex items-center justify-center h-60 px-12 py-2 rounded-[30px]",
  {
    variants: {
      type: {
        default: "bg-turbo text-ebony",
        disabled: "bg-turbo/20 text-bombay",
      },
    },
    defaultVariants: {
      type: "default",
    },
  },
);
