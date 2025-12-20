---
title: Leetcode13-罗马数字转整数
date: 2024-05-12 17:36:34
tags:
    - LC-简单
    - 哈希表
    - 数学
    - 字符串
    - ★★★
excerpt: 罗马数字转整数。
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

