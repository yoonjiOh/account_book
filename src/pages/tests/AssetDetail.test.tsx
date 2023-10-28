import { screen, waitFor } from "@testing-library/react";
import { setup } from "@/utils/jest";
import AssetDetail from "../AssetDetail";
import { createMemoryHistory } from "history";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
    type: "ASSETS",
  }),
}));

describe("AssetDetail page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const { user } = setup(<AssetDetail />);

  it("상세 화면에서는 타이틀이 상세 입니다.", async () => {
    waitFor(() => {
      expect(screen.getByText("상세")).toBeInTheDocument();
    });
  });

  it("상세 화면에서는 입력했던 자산명이 표시됩니다.", async () => {
    waitFor(() => {
      expect(screen.getByText("TEST_ASSET")).toBeInTheDocument();
    });
  });

  it("상세 화면에서는 입력한 분류가 표시됩니다.", async () => {
    waitFor(() => {
      expect(screen.getByText("자산")).toBeInTheDocument();
    });
  });

  it("상세 화면에서는 입력한 자산가치가 표시됩니다.", async () => {
    waitFor(() => {
      expect(screen.getByText("10,000")).toBeInTheDocument();
    });
  });

  it("상세 화면에서는 입력한 메모가 표시됩니다.", async () => {
    waitFor(() => {
      expect(screen.getByText("TEST_MEMO")).toBeInTheDocument();
    });
  });

  it("해당 텍스트버튼 클릭 시 삭제 컨펌 팝업이 표시됩니다.", async () => {
    waitFor(async () => {
      const button = screen.getByText("삭제하기");

      await user.click(button);

      const deleteConfirmPopup =
        screen.getByText("삭제한 자산은 복구할 수 없어요");
      expect(deleteConfirmPopup).toBeInTheDocument();
    });
  });

  it("수정하기 클릭 시 자산 수정 화면으로 이동합니다.", async () => {
    const history = createMemoryHistory();

    waitFor(async () => {
      const button = screen.getByText("수정하기");

      await user.click(button);

      expect(history.location.pathname).toBe("/register/edit/1&type=ASSETS");
    });
  });
});
