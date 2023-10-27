export interface AssetResponseDto {
  id: number;
  name: string;
  amount: number;
  type: "ASSETS" | "LIABILITIES";
  memo?: string;
}
