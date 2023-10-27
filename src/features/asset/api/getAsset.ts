import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";

import { AssetModel, mapToAssetModel } from "@/features/asset/model";

export const getAsset = async (id: string): Promise<AssetModel> => {
  const response = await axios.get(`/assets/${id}`).then((res) => res.data);
  return mapToAssetModel(response);
};

export const getAssetQuery = (id: string) => ({
  queryKey: ["asset", id],
  queryFn: () => getAsset(id),
});

export const useGetAsset = (id: string) => {
  return useQuery<AssetModel>({
    queryKey: ["asset", id],
    queryFn: () => getAsset(id),
  });
};
