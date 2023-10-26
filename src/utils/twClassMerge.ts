import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// 해당 함수는 tailwindcss의 class를 합치는 함수입니다.
// 예를 들어, classNameMerge("text-red-500", "text-2xl")을 하면
// "text-red-500 text-2xl"을 반환합니다.
// 사용 목적은 class 중복 제거, class 조건부 추가 등이 있습니다.
const cn = (...inputs: (string | undefined)[]): string => {
  const mergedClasses = twMerge(clsx(...inputs));
  return mergedClasses;
};

export default cn;
