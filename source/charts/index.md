---
title: 统计
type: "charts"
comments: false
aside: true
top_img: background-image:url(/img/top_cover/charts.svg); background-size:100%
---
<div class="author-content author-content-item album single"><div class="card-content"><div class="author-content-item-tips">小空调</div><span class="author-content-item-title">这里是我的小空调哦😯</span><div class="content-bottom"><div class="tips">为你的夏日带来清凉、冬季带来温暖。</div></div><div class="banner-button-group"></div></div><canvas id="header_canvas" width="1012" height="988" style="position: absolute; bottom: 0px;"></canvas></div>

{% tip bell, sync %}如果初次访问这个统计界面，请**按** <kbd>F5</kbd> **刷新**以{% emp 加载数据 %}。{% endtip %}

<!-- https://xiao-ze1.github.io/posts/abb90a24.html -->

<script src="https://cdn.bootcdn.net/ajax/libs/echarts/4.9.0-rc.1/echarts.min.js"></script>

<!-- 文章发布时间统计图 -->

<div id="posts-chart" data-start="2026-03" style="border-radius: 8px; height: 300px; padding: 10px; "></div>

<!-- 文章标签统计图 -->

<div id="tags-chart" data-length="100" style="border-radius: 8px; height: 300px; padding: 10px; "></div>

<!-- 文章分类统计图 -->

<div id="categories-chart" data-parent="true" style="border-radius: 8px; height: 300px; padding: 10px; "></div>
