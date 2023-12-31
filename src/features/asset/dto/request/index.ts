export type CreateAssetRequestDTO = {
  name: string;
  amount: number;
  type: "ASSETS" | "LIABILITIES";
  memo?: string;
};

export type UpdateAssetRequestDTO = {
  name?: string;
  amount?: number;
  type?: "ASSETS" | "LIABILITIES";
  memo?: string;
};
