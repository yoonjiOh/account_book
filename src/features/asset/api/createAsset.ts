import { AssetModel } from "@/features/asset/model";
import { CreateAssetRequestDTO } from "@/features/asset/dto/request";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { AssetType } from "../type";

export const createAsset = ({
  data,
}: {
  data: CreateAssetRequestDTO;
}): Promise<AssetModel> => {
  const url = data.type === AssetType.ASSETS ? "/assets" : "/liabilities";
  return axios.post(url, data);
};

export const useCreateAsset = () => {
  const navigate = useNavigate();

  return useMutation({
    onMutate: async () => {},
    onError: (_) => {},
    onSuccess: () => {
      // 자산 등록에 성공하면 자산 목록 페이지로 이동합니다.
      navigate("/");
    },
    mutationFn: createAsset,
  });
};
