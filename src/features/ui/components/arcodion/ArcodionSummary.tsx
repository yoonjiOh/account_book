interface ArcodionSummaryProps {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

/**
 *
 * 아코디언 상단 요약 컴포넌트입니다.
 * @param {ArcodionSummaryProps}
 * @returns
 */
const ArcodionSummary: React.FC<ArcodionSummaryProps> = ({
  title,
  onClick,
  children,
}) => {
  return (
    <div
      className="px-24 pt-40 pb-16 flex items-center justify-between"
      data-testid="arcodion-summary-button"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="펼치기">
      <span className="text-18 leading-26 align-middle">{title}</span>
      {children}
    </div>
  );
};

export default ArcodionSummary;
