---
categories: 算法
date: 2024-05-06 22:46:19
excerpt: 本文介绍 LeetCode 第 27 题“移除元素”的解法，采用快慢指针策略，通过一次遍历原地修改数组以剔除目标元素，并提供简洁的高性能 Go 语言实现。
tags:
- LeetCode
- Go
- 双指针
title: Leetcode27-移除元素
---

[27. 移除元素 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-element/)

和26题差不多，快慢指针。

```go
func removeElement(nums []int, val int) int {
    i := 0
    for j := range nums {
        if nums[j] == val {
            continue
        }
        nums[i] = nums[j]
        i++
    }
    return i
}
```