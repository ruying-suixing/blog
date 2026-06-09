---
title: 在 Hexo 中复现洛谷 md
tags:
  - Hexo
  - 安知鱼美化
categories: 网站开发
abbrlink: 3935900758
date: 2026-06-07 18:31:24
---

## 前言

OIer 都知道，[洛谷](https://luogu.com.cn)中有个 [Markdown 插件](https://www.luogu.com.cn/article/70w8j2pj)，效果如下：

:::info[这是一个提示]
我是提示内容。
:::

:::::warning[我是父容器]

我是一些文字。

::::success[我是子容器 1]{open}
我是内容 1。
::::

我是一些文字。

::::success[我是子容器 2]{open}
:::error[我是子容器 3]{open}
我是内容 2。
:::
::::

我是一些文字。

:::::

源码：

```markdown
:::info[这是一个提示]
我是提示内容。
:::

:::::warning[我是父容器]

我是一些文字。

::::success[我是子容器 1]{open}
我是内容 1。
::::

我是一些文字。

::::success[我是子容器 2]{open}
:::error[我是子容器 3]{open}
我是内容 2。
:::
::::

我是一些文字。

:::::
```

还有更多……

尽管 [安知鱼主题](https://docs.anheyu.com) 自带很多 [标签外挂](https://hexo.anheyu.com/posts/d50a.html)，但仍然无法满足~~复制洛谷文章到博客~~编写习惯性的需求，于是，我**全网首发**了在 Hexo 中使用洛谷 Md 插件教程。

:::info[闲话]
由于~~不良~~习惯，我的所有 Markdown 文章编写均遵循洛谷的 [专栏全站推荐规范](https://help.luogu.com.cn/rules/academic/article-standard)、[洛谷主题库题解规范](https://help.luogu.com.cn/rules/academic/solution-standard)和[如何用 Markdown 和 LaTeX 写一篇排版整齐的题解？](https://help.luogu.com.cn/rules/academic/guide/solution)
:::

## 方法

:::align{center}
知其然，知其所以然
:::

引入 [Css](/css/custom_marked)，让可以通过 Html 的 `<div>` 或 `class=""` 使用插件，然后用 js 自定义 Hexo markdown 解析，用正则匹配把 `:::` 等进行匹配，转换为

## 实现

npm install hexo-renderer-marked@3 --save
