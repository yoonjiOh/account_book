import { Button } from "@/features/ui/components";

interface ITextButtonProps {
  label: string;
  onClick: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span className="text-ebony/[56%] text-16 text-align-top leading-24 underline underline-offset-8 decoration-1">
        {label}
      </span>
    </Button>
  );
};
export default TextButton;
