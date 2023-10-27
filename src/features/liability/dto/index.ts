import { BaseAssetResponseDto } from "@/features/asset/dto";

export interface LiabilityResponseDto extends BaseAssetResponseDto {
  id: number;
  name: string;
  amount: number;
  type: "LIABILITIES";
  memo?: string;
}
