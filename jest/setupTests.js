import "@testing-library/jest-dom";

import { server } from "@/test-util/mocks/server.js";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
