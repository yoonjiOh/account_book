export type CreateAssetRequestDTO = {
  data: {
    name: string;
    amount: number;
    type: "ASSETS" | "LIABILITIES";
    memo?: string;
  };
};
