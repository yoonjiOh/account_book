import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";

import { AssetModel, mapToAssetModel } from "@/features/asset/model";

export const getAssets = async (): Promise<AssetModel[]> => {
  const response = await axios.get("/assets").then((res) => res.data);
  return response.map(mapToAssetModel);
};

type QueryFnType = typeof getAssets;

type UseAssetsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useAssets = ({ config }: UseAssetsOptions = {}) => {
  return useQuery<AssetModel[]>({
    ...config,
    queryKey: ["assets"],
    queryFn: () => getAssets(),
  });
};
