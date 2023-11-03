import { useState } from "react";
import { Arcodion } from "@/features/ui/components";
import { ArrowToggleIcon } from "@/features/ui/components/icons";
import { AssetSummaryItem } from "@/features/asset";
import { AssetModel } from "@/features/asset/model";
import { AssetType } from "@/features/asset/type";
import { ASSET_TYPE_NAME } from "@/features/asset/const";
import { NumericFormat } from "react-number-format";

interface AssetSummaryArcodionProps {
  type: AssetType;
  totalValue: number;
  data: AssetModel[];
}

const AssetSummaryArcodion: React.FC<AssetSummaryArcodionProps> = ({
  type,
  totalValue,
  data,
}) => {
  // 기획 보충) 자산은 펼친 상태로 시작, 부채는 접힌 상태로 시작합니다.
  const initialExpanded = type === AssetType.ASSETS ? true : false;
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Arcodion>
      <Arcodion.ArcodionSummary title={ASSET_TYPE_NAME[type]} onClick={onClick}>
        <div className="flex items-center">
          <NumericFormat
            data-testid="readonly-input-for-asset-summary"
            className="w-full outline-none text-18 leading-26 font-bold text-end"
            thousandSeparator=","
            suffix="원"
            value={totalValue}
            readOnly={true}
          />
          <div
            data-testid="arcodion-expand-button"
            className="flex items-center ml-6">
            <ArrowToggleIcon direction={isExpanded ? "up" : "down"} />
          </div>
        </div>
      </Arcodion.ArcodionSummary>

      <Arcodion.ArcodionDetail isExpanded={isExpanded}>
        {data?.map((item) => {
          return <AssetSummaryItem key={item.id} type={type} asset={item} />;
        })}
      </Arcodion.ArcodionDetail>
    </Arcodion>
  );
};

export default AssetSummaryArcodion;
