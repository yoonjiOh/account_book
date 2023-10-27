import { SummaryHeaderSection } from "@/features/asset";
import { useAssets } from "../api";
import { AssetType } from "../type";

/* SummaryHeaderSection 컴포넌트를 사용해 자산 합계 (자산 + 부채)를 보여줍니다. */
const TotalAssetSummaryContainer: React.FC = () => {
  const getAssetsQuery = useAssets(AssetType.ASSETS);
  const getLiabilitiesQuery = useAssets(AssetType.LIABILITIES);

  const assetTotalValue = getAssetsQuery.data?.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;
  const liabilityTotalValue = getLiabilitiesQuery.data?.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;
  const totalValue = (assetTotalValue + liabilityTotalValue) as number;
  return <SummaryHeaderSection assetTotalValue={totalValue} />;
};

export default TotalAssetSummaryContainer;
