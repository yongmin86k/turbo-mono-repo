import { defineConfig } from "eslint/config";
import expoConfig from "eslint-config-expo/flat.js";
import reactNativePlugin from "eslint-plugin-react-native";
import base from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  ...base,
  expoConfig,
  {
    plugins: {
      "react-native": reactNativePlugin,
    },
    rules: {
      "react-native/no-unused-styles": "error",
      "react-native/sort-styles": [
        "error",
        "asc",
        { ignoreClassNames: false, ignoreStyleProperties: false },
      ],
    },
  },
]);
