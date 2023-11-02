import { Navigation } from "@/components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      {/* Outlet 을 사용하여 상위 Navigation 컴포넌트를 레이아웃화 합니다. */}
      <Navigation />
      <Outlet />
    </>
  );
};

export default Root;