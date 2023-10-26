import React, { HTMLProps, useCallback, useState } from "react";
import { Tooltip } from "@/components";
import { InputClearButtonIcon } from "@/components/icons";

interface InputProps extends HTMLProps<HTMLInputElement> {
  id: string;
  label: string;
  onValidate?: (value: string) => { error: boolean; errorMessage: string };
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  placeholder,
  onValidate,
}) => {
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (onValidate) {
        const validationResult = onValidate(e.target.value);
        setError(validationResult.error);
        setErrorMessage(validationResult.errorMessage);

        // error 가 없다면 blur 한 상태에서 focused 를 false 로 변경합니다.
        if (!validationResult.error) {
          setFocused(false);
        }
      }
    },
    [onValidate],
  );

  const clearInput = () => {
    setInputValue("");
    setFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className={`relative bg-white px-19 pt-17 pb-18 h-80 rounded-3xl ${
        focused && "border-2 border-ebony"
      }`}>
      <div className="relative">
        <label
          htmlFor={id}
          className={`block text-12 align-text-top leading-18 font-medium ${
            error ? "text-coralRed" : "text-black"
          } mb-2`}>
          {label}
        </label>
        <input
          id={id}
          className="w-full outline-none text-20 leading-28 text-ebony placeholder:text-20 placeholder:text-lightGray placeholder:leading-28"
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          aria-invalid={error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {inputValue.length > 0 && focused && (
          <div className="absolute top-15 right-0">
            <InputClearButtonIcon onClick={clearInput} />
          </div>
        )}
      </div>
      {error && <Tooltip message={errorMessage} />}
    </div>
  );
};

export default Input;
