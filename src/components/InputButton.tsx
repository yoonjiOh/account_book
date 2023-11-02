import React, { useState } from "react";
import { ArrowBottomIcon } from "@/components/icons";

interface InputButtonProps {
  id: string;
  label: string;
  inputValue?: string;
  placeholder: string;
  onClick: () => void;
}

const InputButton: React.FC<InputButtonProps> = ({
  id,
  label,
  inputValue,
  placeholder,
  onClick,
}) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const handleClick = () => {
    onClick();
    setFocused(true);
  };

  return (
    <div
      className={`relative bg-white px-19 pt-17 pb-18 h-80 rounded-3xl ${
        focused && "border-2 border-ebony cursor-pointer"
      }`}
      role="button"
      aria-label="자산 분류 보기"
      tabIndex={0}
      onClick={handleClick}>
      <div className="relative h-full">
        {inputValue === "" && !focused ? (
          <label className="inline-block flex items-center text-20 h-full leading-28 align-middle font-medium text-left text-lightGray">
            {label}
          </label>
        ) : (
          <>
            <label
              htmlFor={id}
              className={
                "block text-12 align-text-top leading-18 font-medium text-black mb-2"
              }>
              {label}
            </label>
            <input
              readOnly
              id={id}
              className="w-full outline-none text-20 leading-28 text-ebony placeholder:text-20 placeholder:text-lightGray placeholder:leading-28 cursor-pointer"
              type="text"
              value={inputValue}
              onFocus={handleFocus}
              placeholder={placeholder}
            />
          </>
        )}
        <div className="absolute top-20 right-0">
          <ArrowBottomIcon />
        </div>
      </div>
    </div>
  );
};

export default InputButton;