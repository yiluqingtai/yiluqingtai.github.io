---
categories: 算法
date: 2024-05-05 22:52:23
excerpt: 本文介绍 LeetCode 第 26 题“删除有序数组中的重复项”的解法。利用快慢指针技巧，在 $O(1)$ 额外空间复杂度下实现原地修改数组，高效剔除冗余元素并返回新长度，提供简洁的
  Go 语言代码实现。
tags:
- 双指针
- LeetCode
- Go
title: Leetcode26-删除有序数组中的重复项
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