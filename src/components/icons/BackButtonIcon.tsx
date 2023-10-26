import IconBackSVG from "@/assets/icons/icon-back.svg";

interface BackButtonIconProps {
  onClick: () => void;
}

const BackButtonIcon: React.FC<BackButtonIconProps> = ({ onClick }) => {
  return (
    <div
      className="flex items-center justify-center"
      role="button"
      onClick={onClick}
      aria-label="이전 페이지로 이동"
      tabIndex={0}>
      <img src={IconBackSVG} alt="이전 페이지로 이동" />
    </div>
  );
};

export default BackButtonIcon;
