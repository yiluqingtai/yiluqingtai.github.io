---
categories: 算法
date: 2024-05-12 17:20:30
excerpt: 本文介绍了 LeetCode 第 9 题“回文数”的 Go 语言实现。通过巧妙反转整数的一半，有效规避了潜在的溢出风险并提升了执行效率，是数值类算法题中的经典解法。
tags:
- LeetCode
- Go
- 回文数
title: Leetcode9-回文数
---

[9. 回文数 - 力扣（LeetCode）](https://leetcode.cn/problems/palindrome-number/description/)

解答方式挺巧妙的。

```go
func isPalindrome(x int) bool {
    if x < 0 || (x % 10 == 0 && x != 0) {
        return false
    }

    reverseNum := 0
    for x > reverseNum {
        reverseNum = reverseNum * 10 + x % 10
        x = x / 10
    }

    return reverseNum == x || reverseNum / 10 == x
}
```