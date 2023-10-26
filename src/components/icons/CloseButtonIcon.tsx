import IconCloseSVG from "@/assets/icons/icon-close.svg";

interface CloseButtonIconProps {
  onClick: () => void;
}

const CloseButtonIcon: React.FC<CloseButtonIconProps> = ({ onClick }) => {
  return (
    <div
      role="button"
      className="flex items-center justify-center"
      onClick={onClick}
      aria-label="이전 페이지로 이동"
      tabIndex={0}>
      <img src={IconCloseSVG} alt="이전 페이지로 이동" />
    </div>
  );
};

export default CloseButtonIcon;
