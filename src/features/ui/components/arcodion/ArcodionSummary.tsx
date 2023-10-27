import { NumericFormat } from "react-number-format";

interface ArcodionSummaryProps {
  title: string;
  value: number;
  expandIcon?: React.ReactNode;
  onClick?: () => void;
}

/**
 *
 * 아코디언 상단 요약 컴포넌트입니다.
 * @param {ArcodionSummaryProps}
 * @returns
 */
const ArcodionSummary: React.FC<ArcodionSummaryProps> = ({
  title,
  value,
  expandIcon,
  onClick,
}) => {
  // TODO) 내용은 asset 도메인으로 빼기
  return (
    <div
      className="px-24 pt-40 pb-16 flex items-center justify-between"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="펼치기">
      <span className="inline-block text-18 leading-26 align-middle">
        {title}
      </span>
      <div className="flex items-center">
        <NumericFormat
          className="w-full outline-none text-18 leading-26 font-bold text-end"
          thousandSeparator=","
          suffix="원"
          value={value}
          readOnly={true}
        />
        <div className="flex items-center ml-6">{expandIcon}</div>
      </div>
    </div>
  );
};

export default ArcodionSummary;
