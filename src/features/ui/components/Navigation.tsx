import { useNavigate } from "react-router-dom";
import {
  BackButtonIcon,
  CloseButtonIcon,
} from "@/features/ui/components/icons";

// 모든 화면의 상단에 공통적으로 있는 Navigation 컴포넌트입니다.
interface NavigationProps {
  title?: string;
  goBack?: boolean;
  close?: boolean;
}
const Navigation: React.FC<NavigationProps> = ({ title, goBack, close }) => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 h-88 w-full bg-white">
      <div className="flex h-full w-full justify-between items-center px-16">
        {goBack && <BackButtonIcon onClick={() => navigate(-1)} />}
        <span
          className={
            "w-full text-center align-text-top text-ebony text-17 font-semibold"
          }>
          {title}
        </span>
        {close && <CloseButtonIcon onClick={() => navigate(-1)} />}
      </div>
    </nav>
  );
};

export default Navigation;
