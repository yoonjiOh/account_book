import NavigationButton from "@/features/ui/components/buttons/NavigationButton";
import { ArrowRightBlueIcon } from "@/features/ui/components/icons";

interface MemoCTAButtonProps {
  id: string;
}
const MemoCTAButton: React.FC<MemoCTAButtonProps> = ({ id }) => (
  <NavigationButton path={`/register/edit/${id}`}>
    <div className="flex items-center gap-6">
      <span className="text-16 leading-20 text-azureRadiance">입력하기</span>
      <ArrowRightBlueIcon />
    </div>
  </NavigationButton>
);

export default MemoCTAButton;
