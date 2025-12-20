---
title: Leetcode1-两数之和
date: 2024-05-05 22:24:54
categories: 每日一题
tags:
    - LC-简单
    - 数组
    - ★
excerpt: 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
---

[1. 两数之和 - 力扣（LeetCode）](https://leetcode.cn/problems/two-sum/description/)

哈希表的应用，比较简单。

```go
func twoSum(nums []int, target int) []int {
    dict := make(map[int]int)
    for i, num := range nums {
        other := target - num
        j, ok := dict[other]
        if ok {
            return []int{i, j}
        }
        dict[num] = i
    }
    return []int{-1, -1}
}
```

