import { Button } from "@/components";

interface ITextButtonProps {
  label: string;
  onClick: () => void;
}

const TextButton: React.FC<ITextButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick} classNames={"w-full"}>
      <span className="text-ebony/[56%] text-16 text-align-top leading-24 underline underline-offset-8 decoration-2">
        {label}
      </span>
    </Button>
  );
};
export default TextButton;
