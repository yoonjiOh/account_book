import { useState } from "react";
import { Arcodion } from "@/features/ui/components";
import { ArrowToggleIcon } from "@/features/ui/components/icons";
import { AssetSummaryItem } from "@/features/asset/components";
import { AssetModel } from "@/features/asset/model";
import { LiabilityModel } from "@/features/liability/model";
import { AssetType } from "@/features/asset/type";
import { ASSET_TYPE_NAME } from "@/features/asset/const";

interface AssetSummaryArcodionProps {
  type: AssetType;
  totalValue: number;
  data: AssetModel[] | LiabilityModel[];
}

const AssetSummaryArcodion: React.FC<AssetSummaryArcodionProps> = ({
  type,
  totalValue,
  data,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Arcodion>
      <Arcodion.ArcodionSummary
        title={
          type === AssetType.ASSETS
            ? ASSET_TYPE_NAME[AssetType.ASSETS]
            : ASSET_TYPE_NAME[AssetType.LIABILITIES]
        }
        value={totalValue}
        onClick={onClick}
        expandIcon={<ArrowToggleIcon direction={isExpanded ? "up" : "down"} />}
      />
      <Arcodion.ArcodionDetail isExpanded={isExpanded}>
        {data.map((item) => {
          return <AssetSummaryItem key={item.id} type={type} asset={item} />;
        })}
      </Arcodion.ArcodionDetail>
    </Arcodion>
  );
};

export default AssetSummaryArcodion;
