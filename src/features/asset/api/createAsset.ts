import { AssetModel } from "@/features/asset/model";
import { CreateAssetRequestDTO } from "@/features/asset/dto/request";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";

export const createAsset = ({
  data,
}: CreateAssetRequestDTO): Promise<AssetModel> => {
  return axios.post("/assets", data);
};

// TODO)
// optimistic update 가 되도록 구현하였습니다.
// 자산이 추가되면 자산 목록을 optimistic update 하여 UI 에 반영하려고 합니다.
export const useCreateAsset = () => {
  const navigate = useNavigate();

  return useMutation({
    onMutate: async () => {
      // 기존에 이
      await queryClient.cancelQueries({ queryKey: ["assets"] });
    },
    onError: (_, __, context: any) => {
      //   if (context?.previousComments) {
      //     queryClient.setQueryData(
      //       ["comments", discussionId],
      //       context.previousComments,
      //     );
      //   }
    },
    onSuccess: () => {
      //   queryClient.invalidateQueries(["comments", discussionId]);
      // 자산 등록에 성공하면 자산 목록 페이지로 이동합니다.
      navigate("/");
    },
    mutationFn: createAsset,
  });
};
