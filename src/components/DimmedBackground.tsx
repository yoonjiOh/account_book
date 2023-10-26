interface DimmedBackgroundProps {
  onClick?: () => void;
}

const DimmedBackground: React.FC<DimmedBackgroundProps> = ({ onClick }) => {
  return (
    <div
      className="z-60 absolute left-0 top-0 h-full w-full bg-black/60"
      role="button"
      aria-label="배경 클릭"
      onClick={onClick}></div>
  );
};

export default DimmedBackground;
