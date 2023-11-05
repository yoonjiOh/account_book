import { queryClient } from "@/lib/react-query";
import { useMutation } from "react-query";
import { axios } from "@/lib/axios";
import { useNavigate } from "react-router-dom";
import { AssetType } from "@/features/asset/type";
import { KEY_MAP } from "@/features/asset/api";

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
    onError: (_) => {},
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type], id] });
      queryClient.invalidateQueries({ queryKey: [KEY_MAP[type]] });

      // 자산 삭제에 성공하면 이전 화면으로 이동합니다.
      navigate("/");
    },
    mutationFn: deleteAsset,
  });
};
