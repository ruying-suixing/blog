---
title: 统计
type: "charts"
comments: false
aside: true
top_img: background-image:url(/img/top_cover/charts.svg); background-size:100%
---

{% tip bell, sync %}如果初次访问这个统计界面，请**按** <kbd>F5</kbd> **刷新**以{% emp 加载数据 %}。{% endtip %}

<!-- https://xiao-ze1.github.io/posts/abb90a24.html -->

<script src="https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0-rc.1/echarts.min.js"></script>

<!-- 文章发布时间统计图 -->

<div id="posts-chart" data-start="2026-03" style="border-radius: 8px; height: 300px; padding: 10px; "></div>

<!-- 文章标签统计图 -->

<div id="tags-chart" data-length="100" style="border-radius: 8px; height: 300px; padding: 10px; "></div>

<!-- 文章分类统计图 -->

<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px; "></div>
