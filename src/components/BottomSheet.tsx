import { DimmedBackground } from "@/components";
import { CloseButtonRoundIcon } from "@/components/icons";

interface BottomSheetProps {
  isOpen: boolean;
  header: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  header,
  children,
}) => {
  if (!isOpen) return null;
  return (
    <>
      <DimmedBackground />
      <div className="fixed w-full bottom-0 flex items-center justify-center z-50 transform transition-transform duration-300 ease-in-out">
        <div className="relative bg-white w-full p-24 rounded-t-3xl">
          <div className="flex justify-between items-center mb-2">
            <div className="text-xl font-semibold pb-16">{header}</div>
            <div className="absolute top-16 right-20">
              <CloseButtonRoundIcon onClick={onClose} />
            </div>
          </div>
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </>
  );
};

export default BottomSheet;
