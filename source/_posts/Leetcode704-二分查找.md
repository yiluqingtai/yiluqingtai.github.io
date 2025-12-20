---
title: Leetcode704-二分查找
date: 2024-05-07 23:01:00
categories: 每日一题
tags:
    - LC-简单
    - 二分查找
    - ★★★
excerpt: 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
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

