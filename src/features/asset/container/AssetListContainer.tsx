import { AssetSummaryArcodion } from "@/features/asset";
import { AssetType } from "@/features/asset/type";
import { useAssets } from "@/features/asset/api";
import { AssetModel } from "../model";

const AssetListContainer: React.FC = () => {
  const getAssetsQuery = useAssets(AssetType.ASSETS);

  const assetTotalValue = getAssetsQuery.data?.reduce(
    (acc, cur) => acc + cur.value,
    0,
  ) as number;

  return (
    <AssetSummaryArcodion
      type={AssetType.ASSETS}
      totalValue={assetTotalValue}
      data={getAssetsQuery?.data as AssetModel[]}
    />
  );
};

export default AssetListContainer;
