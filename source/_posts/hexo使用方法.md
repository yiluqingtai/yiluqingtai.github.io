---
title: Hexo使用方法
date: 2024-05-04 16:08:34
tags: Hexo
categories: 教程
excerpt: hexo使用方法记录
---

## 创建hexo仓库

```Go
npm install hexo-cli -g // 安装hexo
hexo -v // 查看hexo的版本
hexo init // 初始化hexo仓库
```

## 新建博客和本地预览

```Go
hexo c // 清理当前缓存文件
hexo g // 生成html文件
hexo s // 本地部署
```

## 自定义部署

修改_config.yml

```Go
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: git@github.com:yiluqingtai/yiluqingtai.github.io.git
  branch: master
```

部署

```Go
hexo d // 自定义部署
```


> 当前仓库在pc的hexo文件夹上

## 基本操作

### 写作

创建新文章或页面

```
$ hexo new [layout] <title>
```

#### 布局

Hexo 有三种默认布局（layout）：post、page 和 draft。在创建这三种不同类型的文件时，它们将会被保存到不同的路径。

| 布局    | 路径             | 作用                                                         |
| :------ | :--------------- | ------------------------------------------------------------ |
| `post`  | `source/_posts`  | 博客或文章，用于展示和发布博客内容，通常包含标题、正文、日期和标签等信息，并按照日期归档和排序。 |
| `page`  | `source`         | 静态页面，用于展示不经常变动的内容，如关于页面、联系页面等。 |
| `draft` | `source/_drafts` | 用于标记未完成或未发布的文章或页面的特殊状态。当你正在编写一篇文章或页面时，你可以将其标记为草稿，以便稍后完成和发布。 |

####  发布草稿

可通过 `publish` 命令将草稿移动到 `source/_posts` 文件夹，该命令的使用方式与 `new` 十分类似，您也可在命令中指定 `layout` 来指定布局。

```
$ hexo publish [layout] <title>
```

草稿默认不会显示在页面中，您可在执行时加上 `--draft` 参数，或是在 `_config.yml` 中把 `render_drafts` 参数设为 `true` 来预览草稿。

## 参考文献

[Hexo搭建个人博客-并部署到Github上托管(Windows)](https://zhuanlan.zhihu.com/p/137476045)