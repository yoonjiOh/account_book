import { BackButtonIcon, CloseButtonIcon } from "@/components/icons";

// 모든 화면의 상단에 공통적으로 있는 Navigation 컴포넌트입니다.
// App.tsx 에서만 사용합니다.
// pathname 을 사용해 각 화면에 맞는 제목과 아이콘 버튼을 표시합니다.
const Navigation: React.FC = () => {
  const onClick = () => {
    console.log("onClick");
  };
  return (
    <nav className="fixed top-0 left-0 h-88 w-full bg-white">
      <div className="flex h-full w-full justify-between items-center px-16">
        <BackButtonIcon onClick={onClick} />
        <span
          className={
            "text-center align-text-top text-ebony text-17 font-semibold"
          }>
          {window.document.title}
        </span>
        <CloseButtonIcon onClick={onClick} />
      </div>
    </nav>
  );
};

export default Navigation;
