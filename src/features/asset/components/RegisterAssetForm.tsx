import { useState } from "react";
import {
  BottomSheet,
  Input,
  InputButton,
  MoneyInput,
  SubmitButton,
} from "@/features/ui/components";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  CategoryBottomSheetContent,
  CategoryBottomSheetTitle,
} from "@/features/asset/components";
import { MAX_ASSET_REGISTRATION_VALUE } from "@/features/asset/const";

export interface IFormInput {
  assetName: string;
  assetType: string;
  assetValue: number;
  assetDescription?: string;
}

/**
 * validator yup 을 선택해 입력폼 검증을 하였습니다.
 * 선택 이유
 * 1) yup 은 react-hook-form 의 resolver 로 사용할 수 있습니다.
 * 2) yup 은 schema 를 통해 검증할 필드를 선택할 수 있습니다.
 * 3) 검증 에러메세지를 커스텀할 수 있는데, yup 을 사용하지 않고도 할 수 있지만 yup 을 사용하면 코드가 더 간결해집니다.
 */
const schema = yup.object().shape({
  assetName: yup
    .string()
    .max(20, "최대 20자까지 입력 가능해요")
    .required("최소 1자를 입력해주세요"),
  assetType: yup.string().required("필수 선택해 주세요"),
  assetValue: yup
    .number()
    .max(MAX_ASSET_REGISTRATION_VALUE, "최대 입력 금액을 초과했어요")
    .required("자산 가치를 입력해 주세요"),
  assetDescription: yup
    .string()
    .min(2, "최소 2자를 입력해주세요")
    .max(30, "최대 30자까지 입력 가능해요"),
});

const RegisterAssetForm: React.FC = () => {
  const {
    register,
    resetField,
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
    formState: { errors, dirtyFields },
  } = useForm<IFormInput>({
    mode: "onBlur", // 요구사항: 입력폼의 검증은 blur 되는 시점에 동작하도록
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    setValue("assetType", categoryId);
    setBottomSheetOpen(false);
  };

  const currentAssetType = getValues("assetType");
  // 필수값(자산명, 분류, 자산가치)들이 다 등록되었을 경우에만 SubmitButton 을 활성화
  const isSubmitable = true;

  return (
    <>
      <form className="mt-26" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full border border-lightGray rounded-3xl">
          {/* 자산명을 Input 컴포넌트에 입력 */}
          <Input
            type="text"
            label="assetName"
            name="자산명"
            register={register}
            onClickClearButton={() => resetField("assetName")}
            placeholder="예) 현금, 금, 빌린 돈"
            errorMessage={errors.assetName && errors.assetName.message}
            isDirty={!!dirtyFields.assetName}
          />

          <Divider />

          {/* 자산분류를 BottomSheet 를 열어 선택 */}
          <InputButton
            label="분류"
            inputValue={ASSET_CATEGORY_MAP[currentAssetType]}
            placeholder="선택하세요"
            onClick={() => setBottomSheetOpen(true)}
          />

          <Divider />

          {/* 자산가치를 입력 */}
          <MoneyInput
            label="assetValue"
            name="자산가치"
            control={control}
            onClickClearButton={() => {
              resetField("assetValue");
            }}
            setValue={setValue}
            isDirty={!!watch("assetValue")}
            placeholder="금액을 입력하세요"
            errorMessage={errors.assetValue && errors.assetValue.message}
          />

          <Divider />

          {/* 메모를 Input 컴포넌트에 입력 */}
          <Input
            type="text"
            label="assetDescription"
            name="메모"
            register={register}
            onClickClearButton={() => resetField("assetDescription")}
            placeholder="메모를 입력하세요"
            errorMessage={
              errors.assetDescription && errors.assetDescription.message
            }
            isDirty={!!dirtyFields.assetDescription}
          />
        </div>

        <BottomSheet
          isOpen={bottomSheetOpen}
          onClose={() => setBottomSheetOpen(false)}
          header={<CategoryBottomSheetTitle />}
          children={
            <>
              {options.map((option) => (
                <CategoryBottomSheetContent
                  key={option.id}
                  assetCategory={option}
                  checked={watch("assetType") === option.id}
                  onClick={() => handleSelectCategory(option.id)}
                />
              ))}
            </>
          }
        />
      </form>
      <div className="fixed w-full bottom-0 left-0 px-16">
        <SubmitButton
          label="등록하기"
          disabled={!isSubmitable}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </>
  );
};

export default RegisterAssetForm;

const Divider = () => (
  <div className="w-full px-19">
    <div className="border-b border-lightGray" />
  </div>
);

const options = [
  {
    id: "ASSETS",
    name: "자산",
  },
  {
    id: "LIABILITIES",
    name: "부채",
  },
];

const ASSET_CATEGORY_MAP: { [key: string]: string } = {
  ASSETS: "자산",
  LIABILITIES: "부채",
};
