import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  hostname: "https://mister-hope.github.io",

  author: {
    name: "执一",
    url: "https://mister-hope.com",
  },

  logo: "/avatar.svg",

  repo: "https://github.com/zhiyitop/shadow-hope",

  docsDir: "src",

  navbar,

  sidebar,

  footer: "默认页脚",
  displayFooter: false,

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },



  // 插件
  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    slimsearch: {
      // ...
    },

    icon: {
      prefix: "fa6-solid:",
    },
  },
});
