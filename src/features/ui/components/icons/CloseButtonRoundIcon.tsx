import IconCloseRoundSvg from "@/assets/icons/icon-close-round.svg";

interface CloseButtonRoundIconProps {
  onClick: () => void;
}

const CloseButtonRoundIcon: React.FC<CloseButtonRoundIconProps> = ({
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-center"
      role="button"
      onClick={onClick}
      aria-label="창 닫기"
      tabIndex={0}>
      <img src={IconCloseRoundSvg} alt="창 닫기" />
    </div>
  );
};

export default CloseButtonRoundIcon;