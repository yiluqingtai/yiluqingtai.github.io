---
categories: 算法
date: 2024-05-05 22:24:54
excerpt: 本文针对力扣“两数之和”问题，解析了基于 Go 语言的哈希表优化方案。通过一次遍历并利用字典记录索引，将时间复杂度从 O(n²) 降低至 O(n)，是算法入门的经典实践。
tags:
- LeetCode
- Go
- 哈希表
title: Leetcode1-两数之和
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