import { AssetModel } from "@/features/asset/model";
import { UpdateAssetRequestDTO } from "@/features/asset/dto/request";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { AssetType } from "@/features/asset/type";
import { KEY_MAP } from "@/features/asset/api";

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
    onError: (_, __, context: any) => {
      // 쿼리를 취소하고, 이전 상태로 되돌립니다.
      if (context?.previousAsset) {
        queryClient.setQueryData([KEY_MAP[type], id], context.previousAsset);
      }

      // 에러를 던져서 useMutation 에서 에러를 처리하도록 합니다.
      throw new Error("자산 수정에 실패했습니다.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type], id] });
      // 자산 수정에 성공하면 자산 상세 페이지로 이동합니다.
      navigate(`/detail/${type}/${id}`);
    },
    mutationFn: updateAsset,
  });
};
