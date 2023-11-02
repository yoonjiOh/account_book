import { useNavigate, useLocation } from "react-router-dom";
import {
  BackButtonIcon,
  CloseButtonIcon,
} from "@/features/ui/components/icons";

// 모든 화면의 상단에 공통적으로 있는 Navigation 컴포넌트입니다.
// App.tsx 에서만 사용합니다.
// pathname 을 사용해 각 화면에 맞는 제목과 아이콘 버튼을 표시합니다.
const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();


  // BackButtonIcon (뒤로가기) 보여주는 pathname 을 배열로 만들어서 includes 로 비교
  const renderBackButtonIcon = ["/"].includes(pathname) as boolean;

  // CloseButtonIcon (뒤로가기) 보여주는 pathname 을 배열로 만들어서 includes 로 비교
  const renderCloseButtonIcon = ["/register"].includes(pathname) as boolean;

  const title = getTitle(pathname);

  return (
    <nav className="fixed top-0 left-0 h-88 w-full bg-white">
      <div className="flex h-full w-full justify-between items-center px-16">
        {renderBackButtonIcon && (
            <BackButtonIcon onClick={() => navigate(-1)} />
          )}        <span
          className={
            "w-full text-center align-text-top text-ebony text-17 font-semibold"
          }>
          {title}
        </span>
        {renderCloseButtonIcon && (
          <CloseButtonIcon onClick={() => navigate(-1)} />
        )}
      </div>
    </nav>
  );
};

export default Navigation;


const getTitle = (pathname: string) => {
  if (pathname.includes("detail")) {
    return "상세";
  } else if (pathname.includes("edit")) {
    return `${window.document.title} 수정`;
  } else if (pathname.includes("register")) {
    return `${window.document.title} 등록`;
  } else if (pathname === "/") {
    return window.document.title;
  } else {
    return window.document.title;
  }
};
