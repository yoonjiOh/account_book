import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";

import { AssetModel, mapToAssetModel } from "@/features/asset/model";
import { AssetType } from "../type";

const KEY_MAP = {
  [AssetType.ASSETS]: "assets",
  [AssetType.LIABILITIES]: "liabilities",
};

export const getAssets = async (type: AssetType): Promise<AssetModel[]> => {
  const url = type === AssetType.ASSETS ? "/assets" : "/liabilities";
  const response = await axios.get(url).then((res) => res.data);
  return response.map(mapToAssetModel);
};

export const getAssestQuery = (type: AssetType) => {
  return {
    queryKey: [KEY_MAP[type]],
    queryFn: () => getAssets(type),
  };
};

export const useAssets = (type: AssetType) => {
  return useQuery<AssetModel[]>({
    queryKey: [KEY_MAP[type]],
    queryFn: () => getAssets(type),
  });
};
