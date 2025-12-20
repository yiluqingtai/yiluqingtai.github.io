---
title: Leetcode9-回文数
date: 2024-05-12 17:20:30
categories: 每日一题
tags:
    - LC-简单
    - 数学
    - ★★★
excerpt: 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false。 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
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

