import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // add more generic rule sets here.
  ...eslintPluginAstro.configs.recommended,

  {
    rules: {
      // override/add rules settings here.
    },
  },
]);
