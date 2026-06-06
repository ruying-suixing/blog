---
title: 题解：AT_joi2024_yo1c_b 桁 (Digit)
katex: true
top_img: /img/2026/top_img1.webp
cover: /img/2026/top_img1.webp
tags:
  - 题解
  - C++
categories: 洛谷
ai:
  - 本文讲述了如何使用 C++ 完成洛谷的 AT_joi2024_yo1c_b 桁 (Digit)，思路清晰、排版精美
abbrlink: 54375
date: 2026-03-30 19:21:06
---

# AT_joi2024_yo1c_b 桁 (Digit)题解

[**安利一下自己的博客**](http://ruying-suixing.github.io/ "博客")

[题目传送门](https://www.luogu.com.cn/problem/AT_joi2024_yo1c_b "题目传送门")

## 题目大意

给出 $a,b$，求 $a+b$ 的位数。

## 思路引导

:::warning[提问]
如何统计 $a+b$ 的位数？
:::

:::success[成功]
我们将 $a+b$ 转化为字符串~~函数大法好~~，输出 $a+b$ 的长度即可。
:::
## 核心代码

```cpp
#include<bits/stdc++.h>
using namespace std;
int a,b;
int main() {
	cin>>a>>b;
	cout<<to_string(a+b).size();//需使用洛谷IDE中C++14 (GCC 9)及以上版本，蓝C++会CE
	return 0;
}
//By _ruyingsuixing_(UID:1620655)
```
