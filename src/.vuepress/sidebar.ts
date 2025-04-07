import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/computer/": [
        {
            text: "Linux",
            prefix: "Linux/",
            children: [
                "Linux",
                "Linux命令速查",
            ],
        },
        {
            text: "云计算",
            prefix: "cloud/",
            children: [
            ],
        },
        {
            text: "VCS",
            prefix: "vcs/",
            children: [
                "git学习指南",
            ],
        },
    ]
});
