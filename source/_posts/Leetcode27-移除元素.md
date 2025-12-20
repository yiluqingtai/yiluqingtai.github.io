---
title: Leetcode27-移除元素
date: 2024-05-06 22:46:19
categories: 每日一题
tags:
    - LC-简单
    - 数组
    - ★
excerpt: 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
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

