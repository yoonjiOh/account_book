import { LiabilityModel } from "@/features/liability/model";
import { CreateLiabilityRequestDTO } from "@/features/liability/dto/request";
import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";

export const createLiability = (
  data: CreateLiabilityRequestDTO,
): Promise<LiabilityModel> => {
  return axios.post("/liabilities", data);
};

export const useCreateLiability = () => {
  const navigate = useNavigate();

  return useMutation({
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["liabilities"] });
    },
    onError: (_, __, context: any) => {},
    onSuccess: () => {
      //   부채 등록에 성공하면 홈화면으로 이동합니다.
      navigate("/");
    },
    mutationFn: createLiability,
  });
};
