import DimmedBackground from "./DimmedBackground";

interface AlertPopupProps {
  title: string;
  subtitle: string;
  buttons: React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}

const AlertPopup: React.FC<AlertPopupProps> = ({
  title,
  subtitle,
  buttons,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;
  return (
    <>
      <DimmedBackground onClick={onClose} />
      <div className="rounded-3xl bg-white w-311 h-200 p-15 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="text-20 leading-28 text-ebony w-full text-center pt-20">
          {title}
        </div>
        <div className="text-16 leading-24 text-ebony w-full text-center pt-20">
          {subtitle}
        </div>
        <div className="w-full flex gap-8 pt-20">
          {buttons.map((button, index) => (
            <div key={index} className="w-full">
              {button}
            </div>
          ))}
        </div>
      </div>
      <span className="absolute bottom-[35%] left-[45%] text-14 leading-20 text-white underline underline-offset-8 decoration-1">
        취소
      </span>
    </>
  );
};

export default AlertPopup;
