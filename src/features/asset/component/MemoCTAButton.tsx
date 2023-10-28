import NavigationButton from "@/features/ui/components/buttons/NavigationButton";
import { ArrowRightBlueIcon } from "@/features/ui/components/icons";
import { AssetType } from "../type";

interface MemoCTAButtonProps {
  id: string;
  type: AssetType;
}
const MemoCTAButton: React.FC<MemoCTAButtonProps> = ({ id, type }) => (
  <NavigationButton path={`/register/edit/${id}?type=${type}`}>
    <div data-testid="memo-cta-button" className="flex items-center gap-6">
      <span className="text-16 leading-20 text-azureRadiance">입력하기</span>
      <ArrowRightBlueIcon />
    </div>
  </NavigationButton>
);

export default MemoCTAButton;
