import IconClearInputSvg from "@/assets/icons/icon-clear-input.svg";

interface InputClearButtonIconProps {
  onClick: () => void;
}

const InputClearButtonIcon: React.FC<InputClearButtonIconProps> = ({
  onClick,
}) => {
  return (
    <div
      role="button"
      className="flex items-center justify-center"
      onClick={onClick}
      aria-label="입력값을 지움"
      tabIndex={0}>
      <img src={IconClearInputSvg} alt="입력값을 삭제" />
    </div>
  );
};

export default InputClearButtonIcon;
