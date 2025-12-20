---
title: Leetcode35-搜索插入位置
date: 2024-05-06 22:55:42
categories: 每日一题
tags:
    - LC-简单
    - 二分查找
    - ★★★
excerpt: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
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

