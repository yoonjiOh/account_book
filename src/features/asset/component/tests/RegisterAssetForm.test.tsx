import { screen, fireEvent, waitFor, within } from "@testing-library/react";
import { AssetType, RegisterAssetForm } from "@/features/asset/";
import { setup } from "@/utils/jest";

describe("RegisterAssetForm", () => {
  it("기타 자산 등록 화면에서 필수 입력값들인 자산명, 분류, 자산가치가 셋 다 입력되지 않으면 등록하기 버튼이 비활성화됩니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetName"));
    await user.click(screen.getByTestId("button-분류"));
    await user.click(screen.getByTestId("button-assetValue"));

    screen.getByTestId("input-assetName").setAttribute("value", "현금");
    screen.getByTestId("input-분류").setAttribute("value", "자산");

    fireEvent.blur(screen.getByTestId("input-assetName"));

    waitFor(() => {
      expect(screen.getByTestId("submit-button")).toBeDisabled();
    });
  });

  it("기타 자산 수정 화면에서 필수 입력값들인 자산명, 분류, 자산가치가 셋 다 입력되지 않으면 수정하기 버튼이 비활성화됩니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );

    await user.click(screen.getByTestId("button-assetName"));
    await user.click(screen.getByTestId("button-분류"));
    await user.click(screen.getByTestId("button-assetValue"));

    screen.getByTestId("input-assetName").removeAttribute("value");

    fireEvent.blur(screen.getByTestId("input-assetName"));

    waitFor(() => {
      expect(screen.getByTestId("submit-button")).toBeDisabled();
    });
  });

  it("자산명 Placeholder는 “예) 현금, 금, 빌린 돈”입니다. ", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetName"));

    waitFor(() => {
      expect(
        screen.getByPlaceholderText("예) 현금, 금, 빌린 돈"),
      ).toBeInTheDocument();
    });
  });

  it("자산명은 필수값이며, 최소 1자, 최대 20자까지 입력이 가능합니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetName"));

    const input = screen.getByTestId("input-assetName");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.blur(input);

    waitFor(() => {
      expect(screen.getByText("최소 1자를 입력해주세요")).toBeInTheDocument();
      expect(screen.getByTestId("submit-button")).toBeDisabled();
    });

    fireEvent.change(input, { target: { value: "123456789012345678901" } });
    fireEvent.blur(input);

    waitFor(() => {
      expect(
        screen.getByText("최대 20자까지 입력 가능해요"),
      ).toBeInTheDocument();
    });
  });

  it("자산 분류 Placeholder는 “선택하세요”입니다. ", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-분류"));

    waitFor(() => {
      expect(screen.getByPlaceholderText("선택하세요")).toBeInTheDocument();
    });
  });

  it("자산분류 수정시 Placeholder는 등록된 분류입니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );

    await user.click(screen.getByTestId("button-분류"));

    waitFor(() => {
      expect(screen.getByPlaceholderText("자산")).toBeInTheDocument();
    });
  });

  it(" 해당 input 선택 시 분류를 선택할 수 있는 바텀시트가 표시되고 분류를 선택할 수 있습니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-분류"));

    waitFor(() => {
      expect(screen.getByTestId("bottom-sheet")).toBeInTheDocument();
    });
  });

  it("분류는 자산/부채 두가지 타입이 있습니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-분류"));

    waitFor(() => {
      expect(
        within(screen.getByTestId("bottom-sheet")).getAllByRole("button")
          .length,
      ).toBe(2);
      expect(
        within(screen.getByTestId("bottom-sheet")).getByText("자산"),
      ).toBeInTheDocument();
      expect(
        within(screen.getByTestId("bottom-sheet")).getByText("부채"),
      ).toBeInTheDocument();
    });
  });

  it("자산가치 입력시 Placeholder는 금액을 입력하세요 입니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetValue"));

    waitFor(() => {
      expect(
        screen.getByPlaceholderText("금액을 입력하세요"),
      ).toBeInTheDocument();
    });
  });

  it("자산가치 수정시 Placeholder는 등록된 금액입니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );

    await user.click(screen.getByTestId("button-assetValue"));

    waitFor(() => {
      expect(screen.getByPlaceholderText("1,000,000")).toBeInTheDocument();
    });
  });

  it("분류가 자산인 경우 금액을 그대로 표시됩니다.", () => {
    const onSubmit = () => {};
    setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );

    fireEvent.change(screen.getByTestId("input-assetValue"), {
      target: { value: 1000000 },
    });
    waitFor(() => {
      expect(screen.getByPlaceholderText("1,000,000")).toBeInTheDocument();
    });
  });

  it("분류가 부채인 경우 금액은 - 로 표시됩니다.", () => {
    const onSubmit = () => {};
    setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "빌린 돈",
          value: 1000000,
          type: AssetType.LIABILITIES,
          memo: "교재",
        }}
      />,
    );

    fireEvent.change(screen.getByTestId("input-assetValue"), {
      target: { value: 1000000 },
    });
    waitFor(() => {
      expect(screen.getByPlaceholderText("-1,000,000")).toBeInTheDocument();
    });
  });

  it("메모 입력시 Placeholder는 없습니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetMemo"));

    waitFor(() => {
      expect(
        screen.getByTestId("input-assetMemo").getAttribute("placeholder"),
      ).toBe(null);
    });
  });

  it("메모 수정시 Placeholder는 등록된 메모입니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm
        onSubmit={onSubmit}
        isEditMode={true}
        ref={null}
        data={{
          id: 1,
          name: "현금",
          value: 1000000,
          type: AssetType.ASSETS,
          memo: "월급",
        }}
      />,
    );

    await user.click(screen.getByTestId("input-assetMemo"));

    waitFor(() => {
      expect(screen.getByPlaceholderText("월급")).toBeInTheDocument();
    });
  });

  it("메모가 입력되지 않아도, 자산을 등록할 수 있습니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetName"));
    await user.click(screen.getByTestId("button-분류"));
    await user.click(screen.getByTestId("button-assetValue"));
    await user.click(screen.getByTestId("button-assetMemo"));

    screen.getByTestId("input-assetName").setAttribute("value", "현금");
    screen.getByTestId("input-분류").setAttribute("value", "자산");
    screen.getByTestId("input-assetValue").setAttribute("value", "1,000,000");

    fireEvent.blur(screen.getByTestId("input-assetName"));

    waitFor(() => {
      expect(screen.getByTestId("submit-button")).toBeEnabled();
    });
  });

  it("메모는 최소 3자, 최대 30자까지 입력이 가능합니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetMemo"));

    const input = screen.getByTestId("input-assetMemo");
    fireEvent.change(input, { target: { value: "메모" } });
    fireEvent.blur(input);

    waitFor(() => {
      expect(screen.getByText("최소 3자를 입력해주세요")).toBeInTheDocument();
    });

    fireEvent.change(input, {
      target: {
        value:
          "30자가 넘는 메모입니다.30자가 넘는 메모입니다.30자가 넘는 메모입니다.",
      },
    });
    fireEvent.blur(input);

    waitFor(() => {
      expect(
        screen.getByText("최대 30자까지 입력 가능해요"),
      ).toBeInTheDocument();
    });
  });

  it("자산금액이 10억을 넘어가는 경우 툴팁에는 “최대 입력 금액을 초과했어요”라는 메시지가 표시됩니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetValue"));

    const input = screen.getByTestId("input-assetValue");
    fireEvent.change(input, { target: { value: 1000000001 } });
    fireEvent.blur(input);

    waitFor(() => {
      expect(
        screen.getByText("최대 입력 금액을 초과했어요"),
      ).toBeInTheDocument();
    });
  });

  it("Input에 입력된 value가 없다면 X버튼이 표시되지 않습니다.", () => {
    const onSubmit = () => {};
    setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    waitFor(() => {
      expect(screen.queryByTestId("input-button-clear")).toBeNull();
    });
  });

  it("입력이 되는 순간 X버튼이 표시되며, 클릭 시 입력된 값이 초기화되며 X버튼은 노출되지 않습니다.", async () => {
    const onSubmit = () => {};
    const { user } = setup(
      <RegisterAssetForm onSubmit={onSubmit} isEditMode={false} ref={null} />,
    );

    await user.click(screen.getByTestId("button-assetName"));

    fireEvent.change(screen.getByTestId("input-assetName"), {
      target: { value: "현금" },
    });

    waitFor(() => {
      expect(screen.queryByTestId("input-button-clear")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId("input-button-clear"));
    waitFor(() => {
      expect(screen.queryByTestId("input-button-clear")).toBeNull();
    });
  });
});
