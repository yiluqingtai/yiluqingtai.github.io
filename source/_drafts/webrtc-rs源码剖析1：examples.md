---
title: webrtc-rs源码剖析1：example
tags: webrtc-rs
categories: 源码
excerpt: 分析webrtc-rs的example源码
---

从今天开始，开辟一个新的专栏，来好好分析下webrtc-rs的代码。

webrtc-rs是pion的rust实现，和pion的代码逻辑基本相同，可以看做是pion的rust语言翻译。

学习webrtc-rs源码，建议先从代码库中的examples入手，先看看webrtc-rs可以做什么。

## webrtc-rs示例

webrtc-rs库中没有examples的介绍，但我们可以在pion库中找到文档：[pion-examples](https://github.com/pion/webrtc/tree/master/examples)。文档中主要有三种例子，分别使用了Media API、DataChanel API和一些功能的杂项API。我们可以先从最简单的reflect开始学习。

reflect演示了如何使用一个PeerConnection将视频发送到webrtc-rs并将数据包发回。此示例可以轻松扩展以进行服务器端处理。

**启动示例**

具体步骤可以根据Readme文档一步一步来（[webrtc/examples/examples/reflect at master · webrtc-rs/webrtc · GitHub](https://github.com/webrtc-rs/webrtc/tree/master/examples/examples/reflect)），这里大致描述下这些步骤是在干什么：

1、 webrtc通讯首先需要通过SDP进行媒体协商，Readme中提供了一个网页，能够通过浏览器的webrtc API来获取浏览器的SDP，也就是offer。

2、我们将浏览器生成的offer输入给示例程序启动的进程，示例程序会返回给我们一个answer SDP。

3、我们将answer粘贴到网页里，点击start session，就完成了webrtc的SDP协商。接下来，我们就能看到我们摄像头和麦克风采集的音视频。

真实的webrtc信令交互会通过HTTP协议来交换SDP，这里为了方便通过手动操作来代替。网页中有上述步骤的js代码，可以看一看，浏览器的webtc api还是比较简洁的。

**代码分析**

reflect示例代码只有一个入口函数main，我们首先关注到，main函数多了个async关键词和#[tokio::main]的属性宏来修饰，这说明main函数通过tokio来驱动。tokio是rust最常用的异步运行时，想深入了解Rust异步编程的推荐看这篇文章（[async/await 异步编程 - Rust语言圣经(Rust Course)](https://course.rs/advance/async/intro.html)），想深入了解tokio的推荐看这篇文章（[Rust异步编程和tokio框架 - Rust入门秘籍](https://rust-book.junmajinlong.com/ch100/00.html)）。这里先做个简单的介绍：

#[tokio::main]属性宏由tokio运行时提供，用途是将main函数变成一个异步入口点。webrtc-rs库中大量使用了tokio异步编程来提高性能，但我们无法直接执行异步函数，需要先初始化tokio异步运行时，但这个过程比较繁琐。这个属性宏简化了异步运行时的初始化过程，有了它我们才可以直接在main函数中调用异步函数（async关键词声明的函数）。

接下来就是程序的主逻辑了：

1. 创建MediaEngine来配置支持的编码格式
2. 创建InterceptorRegistry来配置RTP/RTCP处理流水线
3. 创建PeerConnection和Local Track
4. 设置offer
5. 设置新的remote track启动时的handler，这个handler将remote track的数据通过local track发回去
6. 创建和设置answer，并打印出来

在我们手动将answer设置给浏览器后，浏览器会自动开始ICE建联和数据传输，我们的程序所依赖的webrtc-rs库帮我们处理了ICE过程和数据传输，我们只需要在peer_ connection的on_track回调函数中实现我们的reflect逻辑。

**知识点**

1. 异步编程
2. tokio
3. anyhow