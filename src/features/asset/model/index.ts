import { CreateAssetRequestDTO } from "./../dto/request/index";
import { AssetType } from "@/features/asset/type";
import { AssetResponseDto } from "@/features/asset/dto/response";
import { IFormInput } from "@/features/asset/components/RegisterAssetForm";

// 비즈니스 로직에서 사용되는 AssetModel 입니다.
export interface AssetModel {
  id: number;
  name: string;
  value: number;
  type: AssetType;
  memo?: string;
}

// mapper 함수를 통해 API 응답을 AssetModel 로 변환합니다.
// 목적: API layer 와 비즈니스 로직 layer 를 분리하기 위합입니다,
// API 응답에서 비즈니스 로직에과 관계없는 수정 사항이 있을 시 비즈니스 로직에 영향을 주지 않도록 합니다.
export const mapToAssetModel = (dto: AssetResponseDto): AssetModel => {
  return {
    id: dto.id,
    name: dto.name,
    value: dto.amount,
    type: dto.type as AssetType,
    memo: dto.memo || "",
  };
};

export const mapToAssetRequetDto = (
  data: IFormInput,
): CreateAssetRequestDTO => {
  return {
    name: data.assetName,
    amount: data.assetValue,
    type: data.assetType,
    memo: data.assetMemo,
  };
};

export const mapToIformInput = (data: AssetModel): IFormInput => {
  return {
    assetName: data.name,
    assetValue: data.value,
    assetType: data.type,
    assetMemo: data.memo,
  };
};
