import { waitFor, screen } from "@testing-library/react";
import { AssetSummaryArcodion, AssetType } from "@/features/asset/";
import { setup } from "@/utils/jest";

describe("자산/부채 요약 표시", () => {
  it("자산 총합을 표시합니다.", () => {
    setup(
      <AssetSummaryArcodion
        type={AssetType.ASSETS}
        totalValue={1000000}
        data={[]}
      />,
    );
    expect(screen.getByText("자산")).toBeInTheDocument();
    expect(screen.getByTestId("readonly-input-for-asset-summary")).toHaveValue(
      "1,000,000원",
    );
  });

  it("부채 총합을 표시합니다.", () => {
    setup(
      <AssetSummaryArcodion
        type={AssetType.LIABILITIES}
        totalValue={-2990000}
        data={[]}
      />,
    );
    expect(screen.getByText("부채")).toBeInTheDocument();
    expect(screen.getByTestId("readonly-input-for-asset-summary")).toHaveValue(
      "-2,990,000원",
    );
  });

  it("우측 상단의 우측화살표 및 금액영역의 클릭을 통해 접었다 폈다를 할 수 있습니다.", async () => {
    const { user } = setup(
      <AssetSummaryArcodion
        type={AssetType.ASSETS}
        totalValue={1000000}
        data={[
          {
            id: 1,
            name: "현금",
            value: 1000000,
            type: AssetType.ASSETS,
            memo: "월급",
          },
          {
            id: 2,
            name: "예금",
            value: 2000000,
            type: AssetType.ASSETS,
            memo: "적금",
          },
        ]}
      />,
    );

    user.click(screen.getByTestId("arcodion-summary-button"));

    await waitFor(() => {
      expect(screen.getByTestId("arcodion-detail")).toBeVisible();
    });
  });
});
