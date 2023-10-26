interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  classNames?: string;
  label?: string;
}

// Button 컴포넌트의 Base 컴포넌트입니다.
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  classNames,
  label,
}) => {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      className={classNames}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
