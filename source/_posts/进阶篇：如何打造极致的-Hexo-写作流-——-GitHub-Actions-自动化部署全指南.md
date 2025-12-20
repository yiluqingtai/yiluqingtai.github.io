---
categories: 技术教程
date: 2025-12-20 13:35:00
excerpt: 本文详细介绍了如何利用 GitHub Actions 实现 Hexo 博客的自动化部署，解决传统手动发布流程的痛点，实现“只管写 Markdown，其余交给云端”的极致写作体验。
tags:
- Hexo
- GitHub Actions
- 自动化部署
title: 进阶篇：如何打造极致的 Hexo 写作流 —— GitHub Actions 自动化部署全指南
toc: true
---

### 1. 为什么要搞自动化？

传统的 Hexo 发布流程是这样的：

1. 本地写 Markdown。
2. 运行 `hexo clean`。
3. 运行 `hexo g`。
4. 运行 `hexo d`。

**痛点很明显：** 如果换了电脑，你得重新配 Node.js 环境；如果你在公司想改个错别字，没环境就改不了；如果你想在手机上写，那基本无望。

**极致写作流的目标：**

**你只管写 Markdown 提交到 GitHub，剩下的编译、生成、发布，全部由 GitHub 的云端服务器（Actions）自动完成。**

---

### 2. 核心思路

我们将 GitHub 仓库分为两部分（或两个分支）：

- **源码（Source）：** 存放你的整个 Hexo 项目文件夹（Markdown 原稿、主题、配置文件）。
- **部署（Deployment）：** 存放生成的 HTML 静态页面。

**自动化流程：**

当你推送源码到 GitHub -> 触发 GitHub Actions -> Actions 自动启动一个 Linux 虚拟机 -> 安装 Node.js -> 执行 `hexo g -d` -> 自动更新你的博客。

---

### 3. 第一步：配置 SSH Key（解决“权限”问题）

因为是 GitHub 的云端服务器帮你发布博客，它需要有权限往你的仓库写东西。

1. **生成一对新的 SSH Key**（在本地终端执行）：
    
    ```bash
    ssh-keygen -t rsa -b 4096 -C "你的邮箱" -f github-deploy-key
    
    ```
    
    你会得到两个文件：`github-deploy-key`（私钥）和 `github-deploy-key.pub`（公钥）。
    
2. **配置公钥：**
    
    打开 GitHub 博客仓库 -> `Settings` -> `Deploy keys` -> `Add deploy key`。
    
    - **Title:** 写 `Hexo_Deploy_Pub`
    - **Key:** 把 `.pub` 文件的内容全部贴进去。
    - **重要：** 勾选 `Allow write access`（允许写入权限）。
3. **配置私钥：**
    
    回到仓库 -> `Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`。
    
    - **Name:** `HEXO_DEPLOY_PRI`
    - **Secret:** 把不带后缀的那个私钥文件内容全部贴进去。

---

### 4. 第二步：编写自动化脚本 (Workflow)

在你的 Hexo 根目录下，创建文件夹 `.github/workflows/`（注意前面有个点），并在里面新建一个文件 `autodeploy.yml`。

将以下内容贴进去：

```yaml
name: Hexo Auto Deploy

on:
  push:
    branches:
      - source  # 只有当推送的分支是 source 时才触发。你可以根据你的源码分支名修改

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout source
      uses: actions/checkout@v3
      with:
        submodules: true # 如果你的主题是 git clone 来的，这行很重要

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '20' # 指定 Node 版本

    - name: Install dependencies
      run: |
        npm install -g hexo-cli
        npm install

    - name: Setup SSH
      env:
        ACTION_DEPLOY_KEY: ${{ secrets.HEXO_DEPLOY_PRI }}
      run: |
        mkdir -p ~/.ssh/
        echo "$ACTION_DEPLOY_KEY" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        ssh-keyscan github.com >> ~/.ssh/known_hosts

    - name: Deploy
      run: |
        git config --global user.name "你的用户名"
        git config --global user.email "你的邮箱"
        hexo clean
        hexo generate
        hexo deploy

```

---

### 5. 第三步：修改站点配置文件

确保你的根目录 `_config.yml` 里的 `deploy` 部分使用的是 **SSH 地址**而不是 HTTPS 地址：

```yaml
deploy:
  type: git
  repo: git@github.com:你的用户名/你的用户名.github.io.git
  branch: main  # 部署的目标分支

```

---

### 6. 极致体验：现在你可以怎么写博客？

配置完成后，你的开发流程变成了：

1. **本地/在线创作：**
    - 你可以在本地用 Typora 写。
    - 你甚至可以直接在 GitHub 网页上，进入 `source/_posts` 新建一个 `.md` 文件直接写。
2. **一键提交：**
    
    ```bash
    git add .
    git commit -m "新增文章：我的自动化之路"
    git push origin source
    
    ```
    
3. **云端接管：**打开 GitHub 的 `Actions` 选项卡，你会看到一个绿色的转圈。1 分钟后，Actions 跑完，你的新文章就自动出现在博客上了。

---

### 7. 再进阶：图片怎么搞最丝滑？ (Typora + PicGo)

为了让“极致写作流”名副其实，图片处理不能拖后腿。

- **配置图床：** 下载 **PicGo** 客户端，配置 GitHub 作为一个仓库图床。
- **配合 Typora：** 在 Typora 设置中开启“上传图片”功能。
- **效果：** 你在写 Markdown 时，直接把本地图片或截图往 Typora 里一粘，图片自动上传 GitHub，Markdown 里自动生成链接。
- **结果：** 整个 Markdown 文件只有纯文字，没有任何本地路径依赖。这意味着你可以**在任何设备打开这个文件，图片都能正常显示。**

---

### 结语

通过 **GitHub Actions + SSH Keys + Typora/PicGo**，你已经构建了一套准工业级的自动化发布系统。

你不再需要关心 Node.js 环境，不再需要记冗长的 Hexo 命令。你唯一要做的，就是打开编辑器，记录你的思想。这才是独立博客最理想的状态——**让工具隐身，让创作回归。**

---

💡 避坑小贴士：

- **node_modules 记得忽略：** 确保 `.gitignore` 里有 `node_modules`，不要把这个几万个文件的文件夹推送到 GitHub，Actions 会自己安装。
- **私钥保护：** 绝对不要把私钥明文写在 `.yml` 文件里，必须通过 `Secrets` 调用。
- **主题文件：** 如果你的主题是下载的，请确保主题文件夹里的 `.git` 文件夹被删除了，否则 Actions 无法读取主题内容。