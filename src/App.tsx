import { QueryClientProvider } from "@tanstack/react-query";

import { Outlet } from "react-router-dom";
import { queryClient } from "@/lib/react-query";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
};

export default App;