import { defineConfig } from "minista"
import path from "path"

export default defineConfig({
  root: "",
  base: "/",
  public: "public",
  out: "dist",
  assets: {
    outDir: "assets",
    outName: "[name]",
    images: {
      outDir: "assets/images",
      outName: "[name]",
    },
    svgr: {
      svgrOptions: {},
    },
    icons: {
      srcDir: "src/assets/icons",
      outDir: "assets/images",
      outName: "[dirname]",
      svgstoreOptions: {
        cleanSymbols: ["fill", "stroke"],
      },
    },
    fonts: {
      outDir: "assets/fonts",
      outName: "[name]",
    },
    bundle: {
      outName: "bundle",
    },
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: path.resolve("src") + "/",
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/helpers" as *;`,
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
  beautify: {
    useHtml: true,
    useAssets: false,
    htmlOptions: {
      indent_size: 2,
      max_preserve_newlines: 0,
      indent_inner_html: true,
      extra_liners: [],
      inline: ["span", "strong", "b", "small", "del", "s", "code", "br", "wbr"],
    },
  },
  vite: {},
})
