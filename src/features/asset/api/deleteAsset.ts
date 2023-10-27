import { queryClient } from "@/lib/react-query";
import { useMutation } from "@tanstack/react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { AssetType } from "../type";

const KEY_MAP = {
  [AssetType.ASSETS]: "assets",
  [AssetType.LIABILITIES]: "liabilities",
};

export const deleteAsset = ({
  id,
  type,
}: {
  id: string;
  type: AssetType;
}): Promise<void> => {
  const url = type === AssetType.ASSETS ? "/assets" : "/liabilities";
  return axios.delete(`${url}/${id}`);
};

export const useDeleteAsset = (id: string, type: AssetType) => {
  const navigate = useNavigate();

  return useMutation({
    onError: (_, __, context: any) => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type], id] });
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type]] });

      // 자산 삭제에 성공하면 이전 화면으로 이동합니다.
      navigate("/");
    },
    mutationFn: deleteAsset,
  });
};
