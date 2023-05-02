import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 页面名称
  title: "赵文凯的博客",
  description: "毕业设计",
  // 跟地址文件夹
  srcDir: 'docs',
  // 头文件
  head: [
    // 网页图标
    ['link', { rel: "icon", href: "/assets/favicon.ico" }],
    // 全局样式
    ['link', { rel: 'stylesheet', href: '/style/index.css' }],
  ],
  themeConfig: {
    // logo图标
    logo: '/assets/favicon.ico',
    // md文件显示标题层级
    outline: [2, 3],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始', link: '/' },
      { text: '主页', link: '/home/main', activeMatch: '/home' },
      { text: '前期准备', link: '/zhunbei/main', activeMatch: '/zhunbei' },
      { text: 'markdown 语法', link: '/md/main', activeMatch: '/md' },
      { text: '关于我', link: '/aboutMe/main', activeMatch: '/aboutMe' },
    ],

    sidebar: {

      "/home": [{
        text: '主页',
        items: [
          { text: '摘要', link: '/home/main' },
          { text: '内容', link: '/home/neirong' },
        ]
      }],
      "/zhunbei": [{
        text: '准备',
        items: [
          { text: '准备之前的思考', link: '/zhunbei/main' },
          { text: 'github 准备', link: '/zhunbei/github' },
          { text: 'git 准备', link: '/zhunbei/git' },
          { text: 'node 准备', link: '/zhunbei/node' },
          { text: 'vscode 准备', link: '/zhunbei/vscode' },
          { text: 'vitepress 准备', link: '/zhunbei/vitepress' },
        ]
      }],
      '/md': [{
        text: 'md 语法',
        items: [
          { text: '语法', link: '/md/main' },
        ]
      }],
      '/aboutMe': [{
        text: '关于我',
        items: [
          { text: '我的自我介绍', link: '/aboutMe/main' },
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wenkai0124/wenkai0124.github.io' }
    ]
  }
})
