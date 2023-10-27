import { Title } from "@/features/ui/components";
import { RegisterAssetForm } from "@/features/asset";
import { useLocation } from "react-router-dom";
import {
  useGetAsset,
  useCreateAsset,
  useUpdateAsset,
} from "@/features/asset/api/";
import { SubmitHandler } from "react-hook-form";
import { AssetModel, mapToAssetRequetDto } from "@/features/asset/model";
import {
  CreateAssetRequestDTO,
  UpdateAssetRequestDTO,
} from "@/features/asset/dto/request";
import { IFormInput } from "@/features/asset/components/RegisterAssetForm";
import { AssetType } from "@/features/asset/type";
import {
  useCreateLiability,
  useUpdateLiability,
} from "@/features/liability/api";
import { UpdateLiabilityRequestDTO } from "@/features/liability/dto/request";
import { LiabilityModel } from "@/features/liability/model";
import { UseMutationResult } from "@tanstack/react-query";

const RegisterAsset: React.FC = () => {
  const { pathname } = useLocation();
  const isEditMode = pathname.includes("edit");
  const assetId = pathname.split("/").pop();

  // isEditMode 일 경우에만 assetId 를 통해 asset 을 조회합니다.
  const assetQuery = isEditMode && assetId ? useGetAsset(assetId) : null;
  const originalData = assetQuery?.data;

  const createAsssetMutation = useCreateAsset();
  const createLiabilityMutation = useCreateLiability();

  let updateAssetMutation: UseMutationResult<
    AssetModel,
    Error,
    { data: UpdateAssetRequestDTO; id: string },
    any
  >;
  let updateLiabilityMutaion: UseMutationResult<
    LiabilityModel,
    Error,
    { data: UpdateLiabilityRequestDTO; id: string },
    any
  >;

  if (assetId) {
    updateAssetMutation = useUpdateAsset(assetId);
    updateLiabilityMutaion = useUpdateLiability(assetId);
  }

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // 호출 전에 request dto 로 변환
    const asset: CreateAssetRequestDTO = mapToAssetRequetDto(data);
    // 기존 데이터가 자산인지 부채인지 확인하고, 다른 api 를 호출합니다.
    const isAssetType = originalData?.type === AssetType.ASSETS;

    // 수정하기 API 호출
    if (isEditMode && assetId) {
      if (isAssetType) {
        await updateAssetMutation.mutateAsync({ data: asset, id: assetId });
      } else {
        await updateLiabilityMutaion.mutateAsync({ data: asset, id: assetId });
      }
    } else {
      // 자산 등록 API 호출
      if (isAssetType) {
        await createAsssetMutation.mutateAsync(asset);
      } else {
        await createLiabilityMutation.mutateAsync(asset);
      }
    }
  };

  return (
    <section className="flex flex-col items-center w-screen h-screen pt-88">
      <div className="w-325">
        <Title title={"현금부터 실물 자산까지\n 직접 등록해 보세요"} />

        <RegisterAssetForm
          data={assetQuery?.data}
          onSubmit={onSubmit}
          isEditMode={isEditMode}
        />
      </div>
    </section>
  );
};

export default RegisterAsset;
