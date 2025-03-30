import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "寻己小习",
  description: "寻己小习",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
