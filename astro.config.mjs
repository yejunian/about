// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://yejunian.github.io",
  base: "/about",
  trailingSlash: "always",

  integrations: [icon()],
});
