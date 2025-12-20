---
categories: 算法
date: 2024-05-12 17:09:17
excerpt: 本文介绍了 LeetCode 第 69 题“x 的平方根”的闭区间二分查找解法。通过 Go 语言实现，详细展示了如何利用单调性在 O(log x)
  时间复杂度下定位最大整数平方根，是理解二分搜索边界处理的经典案例。
tags:
- 二分查找
- LeetCode
- Go
title: Leetcode69-x的平方根
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