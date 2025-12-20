---
title: Leetcode26-删除有序数组中的重复项
date: 2024-05-05 22:52:23
categories: 每日一题
tags:
    - LC-简单
    - 数组
    - ★
excerpt: 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
---

[26. 删除有序数组中的重复项 - 力扣（LeetCode）](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

快慢指针。

```go
func removeDuplicates(nums []int) int {
    slow, fast := 0,0
    for fast < len(nums) {
        if nums[fast] != nums[slow] {
            slow ++
            nums[slow] = nums[fast]
        }
        fast++
    }
    return slow + 1
}
```

