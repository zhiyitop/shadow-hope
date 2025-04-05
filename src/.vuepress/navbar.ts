import { navbar } from "vuepress-theme-hope";

export default navbar([

  {
    text: "执一",
    link: "/home/home"
  },

  {
    text: "计算机",
    children: ["/zh/basic/markdown.md", "/zh/basic/vuepress.md"],
  },

  {
    text: "V2 文档",
    link: "https://theme-hope.vuejs.press/zh/",
  },

]);
