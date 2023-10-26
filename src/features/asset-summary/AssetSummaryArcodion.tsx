import { useState } from "react";
import { Arcodion } from "@/components";
import { ArrowToggleIcon } from "@/components/icons";
import { AssetSummaryItem } from "@/features/asset-summary";

interface AssetSummaryArcodionProps {
  type: "ASSETS" | "LIABILITIES";
  totalValue: number;
}

const AssetSummaryArcodion: React.FC<AssetSummaryArcodionProps> = ({
  type,
  totalValue,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Arcodion>
      <Arcodion.ArcodionSummary
        title={type === "ASSETS" ? "자산" : "부채"}
        value={totalValue}
        onClick={onClick}
        expandIcon={<ArrowToggleIcon direction={isExpanded ? "up" : "down"} />}
      />
      <Arcodion.ArcodionDetail isExpanded={isExpanded}>
        <AssetSummaryItem type={type} assetName="현금" assetValue={10000} />
        <AssetSummaryItem
          type={type}
          assetName="골드바"
          assetValue={25000000}
        />
      </Arcodion.ArcodionDetail>
    </Arcodion>
  );
};

export default AssetSummaryArcodion;
