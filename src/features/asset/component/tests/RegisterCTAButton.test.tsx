import { createMemoryHistory } from "history";
import { screen, waitFor } from "@testing-library/react";
import { RegisterCTAButton } from "@/features/asset/";
import { setup } from "@/utils/jest";

describe("RegisterCTAButton", () => {
  it("클릭 시 자산 등록 화면으로 이동합니다.", async () => {
    const history = createMemoryHistory();

    const { user } = setup(<RegisterCTAButton label="기타 자산 등록" />);
    await user.click(screen.getByRole("button"));

    waitFor(() => {
      expect(history.location.pathname).toBe("/register");
    });
  });
});
