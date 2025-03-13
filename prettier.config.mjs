/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],

  overrides: [
    // prettier-plugin-astro
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],

  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "<TYPES>^(node:)",
    "<TYPES>^astro/",
    "<TYPES>",
    "<TYPES>^[./]",
    "",
    "<BUILTIN_MODULES>",
    "",
    "^astro($|[:/])",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/layouts/(.*)$",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
};

export default config;
