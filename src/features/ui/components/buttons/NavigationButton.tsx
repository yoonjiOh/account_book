import { useNavigate } from "react-router-dom";
import { Button } from "@/features/ui/components";

interface NavigationButtonProps {
  path: string;
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  path,
  children,
}) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(path);
  return <Button onClick={handleClick}>{children}</Button>;
};

export default NavigationButton;
