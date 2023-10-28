import { QueryClientProvider } from "@tanstack/react-query";
import { RenderOptions, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";

export const setup = (
  jsx: Parameters<typeof render>[0],
  options?: RenderOptions,
) => {
  return {
    user: userEvent.setup(),
    ...renderWithProvider(jsx, options),
  };
};

const queryClient = new QueryClient();

export const renderWithProvider = (
  ui: ReactElement,
  option?: RenderOptions,
) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>,
    option,
  );
};
