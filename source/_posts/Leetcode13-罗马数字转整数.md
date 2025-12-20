---
categories: 算法
date: 2024-05-12 17:36:34
excerpt: 深入解析力扣第13题“罗马数字转整数”。本文利用 Go 语言实现，通过哈希表存储映射关系，并巧妙处理“左减右加”的特殊规则，提供了一种简洁高效的字符串遍历算法实现方案。
tags:
- LeetCode
- Go
- 字符串
title: Leetcode13-罗马数字转整数
---

[13. 罗马数字转整数 - 力扣（LeetCode）](https://leetcode.cn/problems/roman-to-integer/description/)

```go
func romanToInt(s string) int {
    dict := map[byte]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    res := 0
    for k := range s {
        v := dict[s[k]]
        if k < len(s) - 1 && v < dict[s[k + 1]] {
            res -= v
        } else {
            res += v
        }
    }
    return res
}
```