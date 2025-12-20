---
categories: 算法
date: 2024-05-06 22:55:42
excerpt: 本文针对力扣第 35 题“搜索插入位置”提供了基于 Go 语言的二分查找实现。重点分析了二分算法在处理边界条件时的细节逻辑，展示了如何在 O(log
  n) 时间复杂度下精准确定目标值的插入位置。
tags:
- 二分查找
- LeetCode
- Go
title: Leetcode35-搜索插入位置
---

[35. 搜索插入位置 - 力扣（LeetCode）](https://leetcode.cn/problems/search-insert-position/description/)

二分查找的题目需要专门训练下，细节是魔鬼。

```go
func searchInsert(nums []int, target int) int {
    n := len(nums)
    left, right := 0, n - 1
    ans := n
    for left <= right {
        mid := (right - left) / 2 + left
        if target <= nums[mid] {
            ans = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return ans
}
```