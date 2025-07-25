import { defineConfig } from "eslint/config";
import expoPlugin from "eslint-plugin-expo";
import expoConfig from "eslint-config-expo/flat.js";
import base from "./base.js";

/**
 * A custom ESLint configuration for libraries that use React.
 *
 * @type {import("eslint").Linter.Config[]} */
export default defineConfig([
  ...base,
  expoConfig,
  {
    ignores: ["dist/*"],
  },
  {
    plugins: {
      expo: expoPlugin,
    },
  },
]);
