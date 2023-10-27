import { Button } from "@/features/ui/components";
import { cva } from "class-variance-authority";
import cn from "@/utils/twClassMerge";

interface RoundButtonProps {
  label: string;
  colorType: "primary" | "secondary";
  onClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({
  label,
  colorType,
  onClick,
}) => {
  const buttonClasses = cn(
    RoundButton_VARIANTS({
      colorType,
    }),
  );
  return (
    <Button classNames="w-full" onClick={onClick}>
      <div className={`${buttonClasses}`}>{label}</div>
    </Button>
  );
};

export default RoundButton;

const RoundButton_VARIANTS = cva(
  "h-53 rounded-3xl flex items-center justify-center",
  {
    variants: {
      colorType: {
        primary: "bg-turbo",
        secondary: "bg-athensGray",
      },
    },
    defaultVariants: {
      colorType: "primary",
    },
  },
);
