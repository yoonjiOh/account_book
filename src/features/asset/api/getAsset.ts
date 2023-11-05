import { useQuery } from "react-query";

import { axios } from "@/lib/axios";

import { AssetModel, mapToAssetModel } from "@/features/asset/model";
import { AssetType } from "../type";

const KEY_MAP = {
  [AssetType.ASSETS]: "asset",
  [AssetType.LIABILITIES]: "liability",
};

export const getAsset = async (
  id: string,
  type: AssetType,
): Promise<AssetModel> => {
  const isAsset = type === AssetType.ASSETS;
  const typePath = isAsset ? "assets" : "liabilities";

  const response = await axios
    .get(`/${typePath}/${id}`)
    .then((res) => res.data);

  return mapToAssetModel(response);
};

export const getAssetQuery = (id: string, type: AssetType) => {
  return {
    queryKey: [KEY_MAP[type], id],
    queryFn: () => getAsset(id, type),
  };
};

export const useGetAsset = (id: string, type: AssetType) => {
  return useQuery<AssetModel>({
    queryKey: [KEY_MAP[type], id],
    queryFn: () => getAsset(id, type),
  });
};
