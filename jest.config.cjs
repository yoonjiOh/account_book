module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/**/*.d.ts", "!src/mocks/**"],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.js"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
    // ignore antd
  ],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    // identity-obj-proxy 설치 필요
    "^.+\\.module\\.(css|sass|scss|tff|png)$": "identity-obj-proxy",
    // svg mocking
    "\\.svg$": "<rootDir>/jest/__mocks__/svg.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "@mocks/(.*)$": "<rootDir>/mocks/$1",
    "@src/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)": "<rootDir>/src/components/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleFileExtensions: [
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  resetMocks: true,
};
