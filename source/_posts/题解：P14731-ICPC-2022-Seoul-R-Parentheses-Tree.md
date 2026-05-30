---
title: '题解：P14731 [ICPC 2022 Seoul R] Parentheses Tree'
abbrlink: 26278
date: 2026-04-03 20:36:32
katex: true
top_img: /img/2026/top_img1.webp
cover: /img/2026/top_img1.webp
tags:
  - 题解
  - C++
categories: 洛谷
ai:
  - 本文讲述了如何使用 C++ 完成洛谷的 P14731 [ICPC 2022 Seoul R] Parentheses Tree，思路清晰、排版精美
---

# P14731 [ICPC 2022 Seoul R] Parentheses Tree

---

[题目传送门](https://www.luogu.com.cn/problem/P14731 "P14731 [ICPC 2022 Seoul R] Parentheses Tree")

## 前置知识

STL 中的 stack 容器提供了一众成员函数以供调用，其中较为常用的有：

* 定义
  +  头文件 $\color{green}\textbf{\<stack\>}$。
* 元素访问
  + `st.top()` 返回栈顶。
* 修改
  + `st.push()` 插入传入的参数到栈顶。
  + `st.pop()` 弹出栈顶。
* 容量
  + `st.empty()` 返回是否为空。
  + `st.size()` 返回元素数量。

部分内容来自 [栈 - OI Wiki](https://oi-wiki.org/ds/stack/ "栈 - OI Wiki")。

## 总体分析

**核心**：用栈匹配括号并在叶节点累加距离。

## 思路引导

{% note warning flat %}
**提问**
如何对左括号进行判断是否为叶节点？
{% endnote %}

{% note success flat %}
**成功**
当 $s_i$ 为 `(` 时，如果栈非空，将栈顶替换为 false，再将 true 入栈。
{% endnote %}

{% note warning flat %}
**提问**
如何将答案进行累加？
{% endnote %}

{% note success flat %}
**成功**
当 $s_i$ 为 `)` 时，如果栈顶 `(` 是叶子节点，先累加栈内元素数量，再弹出栈顶。
{% endnote %}

{% note error flat %}
**警告**
不开 long long 见祖宗。
{% endnote %}

## 核心代码

```cpp
cin>>s;
for(char c:s){
	if(c=='('){
		if(st.size()){
			st.pop();
			st.push(false);
		}//替换操作
		st.push(true);
	}else{
		if(st.top()){
			ans+=st.size()-1;
		}//累加栈内元素数量
		st.pop();//弹出栈顶
	}
}
cout<<ans;
return 0;
```
