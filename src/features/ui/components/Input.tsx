import { useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { Tooltip } from "@/features/ui/components";
import { InputClearButtonIcon } from "@/features/ui/components/icons";
import { IFormInput } from "@/features/asset/components/RegisterAssetForm";

interface InputProps {
  type: "text";
  label: Path<IFormInput>;
  name: string;
  placeholder: string;
  isDirty: boolean;
  errorMessage?: string;
  register: UseFormRegister<IFormInput>;
  onClickClearButton: () => void;
}

// Input 컴포넌트는 useForm 의 register 를 인자로 받아 사용합니다.
// rerender 를 줄이기 위해 state 가 아닌 ref 를 사용하는 react-hook-form 을 사용하였습니다.
const Input: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  register,
  onClickClearButton,
  errorMessage,
  isDirty,
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
          <>
            <label
              htmlFor={label}
              className="inline-block flex items-center text-20 h-full leading-28 align-middle font-medium text-left text-lightGray">
              {name}
            </label>
          </>
        ) : (
          <>
            <label
              htmlFor={label}
              className={`block text-12 align-text-top leading-18 font-medium ${
                errorMessage ? "text-coralRed" : "text-black"
              } mb-2`}>
              {name}
            </label>
            <input
              className="w-full outline-none text-20 leading-28 text-ebony placeholder:text-20 placeholder:text-lightGray placeholder:leading-28 truncate"
              type={type}
              {...register(label)}
              onFocus={() => setFocused(true)}
              placeholder={placeholder}
              aria-invalid={!!errorMessage}
              aria-describedby={errorMessage ? `${label}-error` : undefined}
            />
            {isDirty && focused && (
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

export default Input;
