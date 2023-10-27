export type CreateLiabilityRequestDTO = {
  name: string;
  amount: number;
  type: "ASSETS" | "LIABILITIES";
  memo?: string;
};

export type UpdateLiabilityRequestDTO = {
  id?: number;
  name?: string;
  amount?: number;
  type?: "ASSETS" | "LIABILITIES";
  memo?: string;
};
