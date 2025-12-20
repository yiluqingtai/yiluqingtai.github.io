---
categories: 算法
date: 2024-05-12 17:36:34
excerpt: 本文介绍了 LeetCode 第 13 题「罗马数字转整数」的 Go 语言高效解法。通过哈希表映射字符数值，并利用线性扫描结合相邻位比较逻辑，优雅地处理了特殊减法规则，实现了
  O(n) 时间复杂度的转换。
tags:
- Go
- LeetCode
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