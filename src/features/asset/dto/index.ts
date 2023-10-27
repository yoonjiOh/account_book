export interface BaseAssetResponseDto {
  id: number;
  name: string;
  amount: number;
  type: "ASSETS" | "LIABILITIES";
  memo?: string;
}

export interface AssetResponseDto extends BaseAssetResponseDto {
  id: number;
  name: string;
  amount: number;
  type: "ASSETS";
  memo?: string;
}
