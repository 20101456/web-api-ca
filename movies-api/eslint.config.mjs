import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018, 
      sourceType: "module", // Use module format
      globals: globals.node,
    },
    rules: {
      "semi": 1,
      "no-console": "off",
    },
  },
  pluginJs.configs.recommended,
];