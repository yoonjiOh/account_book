import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { QueryConfig } from "@/lib/react-query";
import {
  LiabilityModel,
  mapToLiabilityModel,
} from "@/features/liability/model";

export const getLiabilities = async (): Promise<LiabilityModel[]> => {
  const response = await axios.get("/liabilities").then((res) => res.data);
  return response.map(mapToLiabilityModel);
};

type QueryFnType = typeof getLiabilities;

type UseLiabilitiesOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const getLiabilitiesQuery = () => ({
  queryKey: ["liabilities"],
  queryFn: () => getLiabilities(),
});

export const useLiabilities = ({ config }: UseLiabilitiesOptions = {}) => {
  return useQuery<LiabilityModel[]>({
    ...config,
    queryKey: ["liabilities"],
    queryFn: () => getLiabilities(),
  });
};
