import { AssetSummaryArcodion } from "@/features/asset";
import { AssetType } from "@/features/asset/type";
import { useAssets } from "@/features/asset/api";
import { AssetModel } from "../model";

const LiabilityListContainer: React.FC = () => {
  const getLiabilityQuery = useAssets(AssetType.LIABILITIES);

  const liabilityTotalValue = getLiabilityQuery.data?.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;

  return (
    <AssetSummaryArcodion
      type={AssetType.LIABILITIES}
      totalValue={liabilityTotalValue}
      data={getLiabilityQuery?.data as AssetModel[]}
    />
  );
};

export default LiabilityListContainer;
