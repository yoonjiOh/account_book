module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:storybook/recommended",
    "react-app",
    "react-app/jest",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {
    react: {version: "18.2"},
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    "import/order": [
      "error",
      {
        groups: [
          "type",
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@hooks/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@pages/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@components/*",
            group: "internal",
            position: "after",
          },
        ],

        pathGroupsExcludedImportTypes: ["@tanstack*"],
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
