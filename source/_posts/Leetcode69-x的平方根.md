---
title: Leetcode69-x的平方根
date: 2024-05-12 17:09:17
categories: 每日一题
tags:
    - LC-简单
    - 二分查找
    - ★★★
excerpt: 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
---

[69. x 的平方根 - 力扣（LeetCode）](https://leetcode.cn/problems/sqrtx/)

二分查找闭区间写法

```go
func mySqrt(x int) int {
    left, right, res := 0, x, -1
    for left <= right {
        mid := left + (right - left) / 2
        if mid * mid <= x {
            res = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return res
}
```

