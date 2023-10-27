import { useState } from "react";
import { Controller } from "react-hook-form";
import { InputClearButtonIcon } from "@/features/ui/components/icons";
import { Tooltip } from "@/features/ui/components";
import { NumericFormat } from "react-number-format";

interface MoneyInputProps {
  label: string;
  name: string;
  placeholder: string;
  isDirty: boolean;
  control: any;
  setValue: any;
  errorMessage?: string;
  onClickClearButton: () => void;
}

// MoneyInput 컴포넌트는 useForm 의 control 과 setValue 를 인자로 받아 사용합니다.
// 입력하는 숫자를 실시간으로 원화로 변환하기 위해 사용자가 입력할 때마다 리렌더링하게 하기 위해
// Controller 를 사용하였습니다.
// UI 에 보여지는 값은 원화로 변환된 값이고, 실제 값은 원화로 변환되지 않은 Number 입니다.
const MoneyInput: React.FC<MoneyInputProps> = ({
  isDirty,
  label,
  name,
  placeholder,
  setValue,
  control,
  errorMessage,
  onClickClearButton,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`relative bg-white pl-19 pr-40 pt-17 pb-18 h-80 rounded-3xl ${
        focused && "border-2 border-ebony"
      } cursor-pointer`}
      role="button"
      aria-label="자산명 입력"
      tabIndex={0}
      onClick={() => setFocused(true)}>
      <div>
        {!isDirty && !focused ? (
          <label
            htmlFor={label}
            className="inline-block flex items-center text-20 h-full leading-28 align-middle font-medium text-left text-lightGray">
            {name}
          </label>
        ) : (
          <>
            <label
              htmlFor={label}
              className={`block text-12 align-text-top leading-18 font-medium ${
                errorMessage ? "text-coralRed" : "text-black"
              } mb-2`}>
              {name}
            </label>
            <Controller
              name="assetValue"
              control={control}
              render={({ field: { value, ref, onChange, ...rest } }) => {
                return (
                  <NumericFormat
                    className="w-full outline-none"
                    thousandSeparator=","
                    suffix="원"
                    getInputRef={ref}
                    value={isDirty ? value : ""}
                    onValueChange={(values) => {
                      setValue(label, values.floatValue);
                    }}
                    placeholder={placeholder}
                    aria-invalid={!!errorMessage}
                    aria-describedby={
                      errorMessage ? `${label}-error` : undefined
                    }
                    {...rest}
                  />
                );
              }}
            />
            {isDirty && (
              <div className="absolute top-30 right-19">
                <InputClearButtonIcon onClick={onClickClearButton} />
              </div>
            )}

            {errorMessage && <Tooltip message={errorMessage} />}
          </>
        )}
      </div>
    </div>
  );
};

export default MoneyInput;