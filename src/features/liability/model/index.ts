import { AssetType } from "@/features/asset/type";
import { LiabilityResponseDto } from "@/features/liability/dto";

// 비즈니스 로직에서 사용되는 LiabilityModel 입니다.
export interface LiabilityModel {
  id: number;
  name: string;
  value: number;
  type: AssetType.LIABILITIES;
}

// mapper 함수를 통해 API 응답을 LiabilityModel 로 변환합니다.
// 목적: API layer 와 비즈니스 로직 layer 를 분리하기 위합입니다,
// API 응답에서 비즈니스 로직에과 관계없는 수정 사항이 있을 시 비즈니스 로직에 영향을 주지 않도록 합니다.
export const mapToLiabilityModel = (
  dto: LiabilityResponseDto,
): LiabilityModel => {
  return {
    id: dto.id,
    name: dto.name,
    value: dto.amount,
    type: AssetType.LIABILITIES,
  };
};
