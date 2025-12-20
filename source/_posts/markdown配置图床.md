---
categories: Markdown
date: 2024-05-04 16:24:10
excerpt: 本文介绍了如何通过 Typora、PicGo 与 SM.MS 快速搭建 Markdown 自动化图床环境。涵盖了从 API Token 获取到上传服务配置的全过程，旨在解决
  Markdown 写作中的图片存储与跨平台迁移难题。
tags:
- Typora
- PicGo
- 图床
title: Markdown配置图床
---

## 工具

typora+picgo+sm.ms

- typora：markdown编辑器
- picgo：图片上传服务
- sm.ms：图床

图床也可以使用阿里云、GitHub等，但我使用Github没折腾成功（可能是token的问题）。sm.ms使用比较方便。

## 步骤

1. 下载PicGo；
2. 注册[sm.ms](https://sm.ms/home/)，获取API Token；
3. 设置图床

<img src="https://s2.loli.net/2024/05/05/bZUWG7B8v5MYP42.png" alt="" style="zoom:50%;" />

4. typora配置上传服务

<img src="https://s2.loli.net/2024/05/05/bpVWenM9gxkGYKq.png" alt="" style="zoom:50%;" />

5. 在typora粘贴图片时，右键图片，点击上传图片，就可以将图片上传到图床上了。

## 参考文献

[【PicGO 】打造免费、快速、稳定的私人图床 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/107909783)