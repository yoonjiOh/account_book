import IconBackSvg from "@/assets/icons/icon-back.svg";
import { Button } from "@/features/ui/components";

interface BackButtonIconProps {
  onClick: () => void;
}

const BackButtonIcon: React.FC<BackButtonIconProps> = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <img src={IconBackSvg} alt="이전 페이지로 이동" />
    </Button>
  );
};

export default BackButtonIcon;
