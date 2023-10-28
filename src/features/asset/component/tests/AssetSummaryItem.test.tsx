import { screen } from "@testing-library/react";
import { AssetSummaryItem, AssetType } from "@/features/asset/";
import { setup } from "@/utils/jest";

describe("AssetSummaryItem", () => {
  it("자산의 각 항목은 이름과 금액을 표시합니다.", () => {
    setup(
      <AssetSummaryItem
        type={AssetType.ASSETS}
        asset={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );
    expect(screen.getByText("현금")).toBeInTheDocument();
    expect(screen.getByTestId("readonly-input-for-asset-summary")).toHaveValue(
      "1,000,000원",
    );
  });

  it("부채 각 항목은 이름과 금액을 표시합니다.", () => {
    setup(
      <AssetSummaryItem
        type={AssetType.LIABILITIES}
        asset={{
          id: 2,
          name: "빌린 돈",
          value: -200000,
          type: AssetType.LIABILITIES,
          memo: "친구에게 2월 21일에 빌림",
        }}
      />,
    );
    expect(screen.getByText("빌린 돈")).toBeInTheDocument();
    expect(screen.getByTestId("readonly-input-for-asset-summary")).toHaveValue(
      "-200,000원",
    );
  });
});
