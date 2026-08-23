// @ts-check

import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      cssVariable: "--font-lora",
      fallbacks: ["serif"],
      name: "Lora",
      options: {
        variants: [
          {
            display: "swap",
            src: ["./src/assets/fonts/Lora-VariableFont_wght.ttf"],
            style: "normal",
            weight: "400 700",
          },
          {
            display: "swap",
            src: ["./src/assets/fonts/Lora-Italic-VariableFont_wght.ttf"],
            style: "italic",
            weight: "400 700",
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt-br"],
  },
  integrations: [mdx(), sitemap()],
  site: "https://example.com",
});
