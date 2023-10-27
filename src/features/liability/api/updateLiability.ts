import { LiabilityModel } from "@/features/liability/model";
import { UpdateLiabilityRequestDTO } from "@/features/liability/dto/request";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";

export const updateLiability = ({
  data,
  id,
}: {
  data: UpdateLiabilityRequestDTO;
  id: string;
}): Promise<LiabilityModel> => {
  return axios.patch(`/liabilities/${id}`, data);
};

export const useUpdateLiability = (id: string) => {
  const navigate = useNavigate();

  return useMutation({
    onMutate: async () => {
      // 기존에 있던 해당 부채를 가져오는 query 를 취소합니다.
      await queryClient.cancelQueries({ queryKey: ["liability", id] });
    },
    onError: (_, __, context: any) => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["liability", id] });
      // 부채 수정에 성공하면 홈화면으로 이동합니다.
      navigate(`/detail/${id}`);
    },
    mutationFn: updateLiability,
  });
};
