import { RenderOptions, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

export const setup = (
  jsx: Parameters<typeof render>[0],
  options?: RenderOptions,
) => {
  return {
    user: userEvent.setup(),
    ...renderWithProvider(jsx, options),
  };
};

export const renderWithProvider = (
  ui: ReactElement,
  option?: RenderOptions,
) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>, option);
};
