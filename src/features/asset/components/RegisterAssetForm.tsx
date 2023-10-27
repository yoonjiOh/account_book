import { useState } from "react";
import {
  BottomSheet,
  Input,
  InputButton,
  MoneyInput,
  SubmitButton,
} from "@/features/ui/components";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CategoryBottomSheetContent,
  CategoryBottomSheetTitle,
} from "@/features/asset/components";
import { MAX_ASSET_REGISTRATION_VALUE } from "@/features/asset/const";

interface IFormInput {
  assetName: string;
  assetType: string;
  assetValue: string;
  assetDescription: string;
}

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
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    setValue("assetType", categoryId);
    setBottomSheetOpen(false);
  };

  const currentAssetType = getValues("assetType");

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
            placeholder="예) 현금, 금, 빌려준 돈"
            errorInfo={
              errors.assetName && errors.assetName.type === "required"
                ? {
                    error: true,
                    errorMessage: "최소 1자를 입력해주세요",
                  }
                : errors.assetName && errors.assetName.type === "maxLength"
                ? {
                    error: true,
                    errorMessage: "최대 20자까지 입력 가능해요",
                  }
                : undefined
            }
            isDirty={!!dirtyFields.assetName}
            rules={{ required: true, maxLength: 20 }}
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
            rules={{ max: MAX_ASSET_REGISTRATION_VALUE }}
            onClickClearButton={() => {
              resetField("assetValue");
            }}
            setValue={setValue}
            isDirty={!!watch("assetValue")}
            placeholder="금액을 입력하세요"
            errorInfo={
              errors.assetValue && errors.assetValue.type === "max"
                ? {
                    error: true,
                    errorMessage: "최대 입력 금액을 초과했어요",
                  }
                : undefined
            }
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
            errorInfo={
              errors.assetDescription &&
              errors.assetDescription.type === "minLength"
                ? {
                    error: true,
                    errorMessage: "최소 2자를 입력해주세요",
                  }
                : errors.assetDescription &&
                  errors.assetDescription.type === "maxLength"
                ? {
                    error: true,
                    errorMessage: "최대 30자까지 입력 가능해요",
                  }
                : undefined
            }
            isDirty={!!dirtyFields.assetDescription}
            rules={{ minLength: 2, maxLength: 30 }}
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
        <SubmitButton label="등록하기" onClick={handleSubmit(onSubmit)} />
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
