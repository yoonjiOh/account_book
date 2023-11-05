import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { Outlet } from "react-router-dom";
import { queryClient } from "@/lib/react-query";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
