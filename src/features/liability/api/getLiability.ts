import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";

import {
  LiabilityModel,
  mapToLiabilityModel,
} from "@/features/liability/model";

export const getLiability = async (id: number): Promise<LiabilityModel> => {
  const response = await axios.get(`/liability/${id}`).then((res) => res.data);
  return mapToLiabilityModel(response);
};

export const getLiabilityQuery = (id: number) => ({
  queryKey: ["liability", id],
  queryFn: () => getLiability(id),
});

export const useLiability = (id: number) => {
  return useQuery<LiabilityModel>({
    queryKey: ["liability"],
    queryFn: () => getLiability(id),
  });
};
