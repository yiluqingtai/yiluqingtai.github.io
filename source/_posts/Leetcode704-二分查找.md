---
categories: 算法
date: 2024-05-07 23:01:00
excerpt: 本文解析 LeetCode 704 二分查找算法，详细阐述闭区间实现逻辑。通过 Go 语言示例演示如何精准控制边界条件，助力掌握基础查找算法核心原理。
tags:
- 二分查找
- LeetCode
- Go
title: Leetcode704-二分查找
---

[704. 二分查找 - 力扣（LeetCode）](https://leetcode.cn/problems/binary-search/description/)

闭区间写法：最终落点为right = left - 1

```go
func search(nums []int, target int) int {
    left := 0
    right := len(nums) - 1
    for left <= right {
        mid := left + (right - left) / 2
        if nums[mid] == target {
            return mid
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
```