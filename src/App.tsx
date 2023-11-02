import { QueryClientProvider } from "@tanstack/react-query";

import { Navigation } from "@/features/ui/components";
import { Outlet } from "react-router-dom";
import { queryClient } from "@/lib/react-query";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Outlet 을 사용하여 상위 Navigation 컴포넌트를 레이아웃화 합니다. */}
      <Navigation />
      <Outlet />
    </QueryClientProvider>
  );
};

export default App;