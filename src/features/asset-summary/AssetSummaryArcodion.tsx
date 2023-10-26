import { useState } from "react";
import { Arcodion } from "@/components";
import { ArrowToggleIcon } from "@/components/icons";
import { AssetSummaryItem } from "@/features/asset-summary";

const AssetSummaryArcodion: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Arcodion>
      <Arcodion.ArcodionSummary
        title="자산"
        value={10000}
        onClick={onClick}
        expandIcon={<ArrowToggleIcon direction={isExpanded ? "up" : "down"} />}
      />
      <Arcodion.ArcodionDetail isExpanded={isExpanded}>
        <AssetSummaryItem type="ASSETS" assetName="현금" assetValue={10000} />
        <AssetSummaryItem
          type="ASSETS"
          assetName="골드바"
          assetValue={25000000}
        />
      </Arcodion.ArcodionDetail>
    </Arcodion>
  );
};

export default AssetSummaryArcodion;
