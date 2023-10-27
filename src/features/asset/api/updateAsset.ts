import { AssetModel } from "@/features/asset/model";
import { UpdateAssetRequestDTO } from "@/features/asset/dto/request";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { AssetType } from "../type";

const KEY_MAP = {
  [AssetType.ASSETS]: "asset",
  [AssetType.LIABILITIES]: "liability",
};

export const updateAsset = ({
  data,
  id,
}: {
  data: UpdateAssetRequestDTO;
  id: string;
}): Promise<AssetModel> => {
  const url = data.type === AssetType.ASSETS ? "/assets" : "/liabilities";
  return axios.patch(`${url}/${id}`, data);
};

export const useUpdateAsset = (id: string, type: AssetType) => {
  const navigate = useNavigate();

  return useMutation({
    onMutate: async () => {
      // 기존에 있던 해당 자산을 가져오는 query 를 취소합니다.
      await queryClient.cancelQueries({ queryKey: [KEY_MAP[type], id] });
    },
    onError: (_, __, context: any) => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type], id] });
      // 자산 수정에 성공하면 자산 상세 페이지로 이동합니다.

      navigate(`/detail/${type}/${id}`);
    },
    mutationFn: updateAsset,
  });
};
