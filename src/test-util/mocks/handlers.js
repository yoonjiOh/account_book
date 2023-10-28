import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("http://localhost:8080/assets/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        name: "TEST_ASSET",
        amount: 10000,
        type: "ASSETS",
        memo: "TEST_MEMO",
      }),
    );
  }),
];
