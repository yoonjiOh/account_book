import { NumericFormat } from "react-number-format";

interface SummaryHeaderSectionProps {
  assetTotalValue: number;
}

/**
 * 기타자산 홈화면에서 등록된 자산 및 부채가 있는 경우 합계를 보여주는 컴포넌트
 * @param assetTotalValue 자산 + 부채 합계
 * @returns
 */
const SummaryHeaderSection: React.FC<SummaryHeaderSectionProps> = ({
  assetTotalValue,
}) => {
  return (
    <section className="flex flex-col bg-white text-ebony px-24 pt-25 pb-39">
      <h3 className=" text-18 leading-26 ">기타 자산</h3>
      <NumericFormat
        className="w-full outline-none text-32 leading-44 truncate font-bold"
        thousandSeparator=","
        suffix="원"
        value={assetTotalValue}
      />
    </section>
  );
};

export default SummaryHeaderSection;
