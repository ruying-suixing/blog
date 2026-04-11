// 首页头图加载优化（支持浅色/深色模式自动切换+滚动渐变）
/**
 * @description 实现medium的渐进加载背景效果 + 明暗主题独立图片配置
 */
// 定义ProgressiveLoad类
class ProgressiveLoad {
  constructor(smallSrc, largeSrc) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
    this.initScrollListener();
    this.initTpl();
  }
  // 这里的1是滚动全程渐变 改为0.3就是前30%渐变后固定前30%产生的渐变效果
  initScrollListener() {
    window.addEventListener("scroll", (() => {
      var e = Math.min(window.scrollY / window.innerHeight, 1);
      this.container.style.setProperty("--process", e);
    }));
  }
  /**
   * @description 生成ui模板
   */
  initTpl() {
    this.container = document.createElement('div');
    this.smallStage = document.createElement('div');
    this.largeStage = document.createElement('div');
    this.video = document.createElement('div');
    this.smallImg = new Image();
    this.largeImg = new Image();
    this.container.className = 'pl-container';
    this.container.style.setProperty("--process", 0);
    this.smallStage.className = 'pl-img pl-blur';
    this.largeStage.className = 'pl-img';
    this.video.className = 'pl-video';
    this.container.appendChild(this.smallStage);
    this.container.appendChild(this.largeStage);
    this.container.appendChild(this.video);
    this.smallImg.onload = this._onSmallLoaded.bind(this);
    this.largeImg.onload = this._onLargeLoaded.bind(this);
  }

  /**
   * @description 加载背景
   */
  progressiveLoad() {
    this.smallImg.src = this.smallSrc;
    this.largeImg.src = this.largeSrc;
  }
  /**
   * @description 大图加载完成
   */
  _onLargeLoaded() {
    this.largeStage.classList.add('pl-visible');
    this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
  }
  /**
   * @description 小图加载完成
   */
  _onSmallLoaded() {
    this.smallStage.classList.add('pl-visible');
    this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
  }
}

const executeLoad = (config, target) => {
  console.log('执行渐进背景替换');
  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const loader = new ProgressiveLoad(
    isMobile ? config.mobileSmallSrc : config.smallSrc,
    isMobile ? config.mobileLargeSrc : config.largeSrc
  );
  // 和背景图颜色保持一致，防止高斯模糊后差异较大
  if (target.children[0]) {
    target.insertBefore(loader.container, target.children[0]);
  }
  loader.progressiveLoad();
};

// 浅色/深色模式独立图片配置（来自代码1）
const ldconfig = {
  light: {
    smallSrc: '/img/2026/383235.webp', //浅色模式 小图链接
    largeSrc: '/img/2026/383235.webp', //浅色模式 大图链接
    mobileSmallSrc: '/img/2026/383235.webp', //手机端浅色小图链接
    mobileLargeSrc: '/img/2026/383235.webp', //手机端浅色大图链接
    enableRoutes: ['/'],
  },
  dark: {
    smallSrc: '/img/2026/dojm2h.webp', //深色模式 小图链接
    largeSrc: '/img/2026/dojm2h.webp', //深色模式 大图链接
    mobileSmallSrc: '/img/2026/dojm2h.webp', //手机端深色模式小图链接
    mobileLargeSrc: '/img/2026/dojm2h.webp', //手机端深色大图链接
    enableRoutes: ['/'],
  },
};

// 获取当前主题
const getCurrentTheme = () => {
  return document.documentElement.getAttribute('data-theme');
};

// 主题切换监听
const onThemeChange = () => {
  const currentTheme = getCurrentTheme();
  const config = ldconfig[currentTheme];
  initProgressiveLoad(config);
};

// 初始化主题监听
let initTheme = getCurrentTheme();
let initConfig = ldconfig[initTheme];
initProgressiveLoad(initConfig);

// 监听主题变化（data-theme 属性变更）
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.attributeName === "data-theme" && location.pathname === '/') {
      onThemeChange();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-theme"]
});

function initProgressiveLoad(config) {
  // 每次加载前先清除已有的元素
  const container = document.querySelector('.pl-container');
  if (container) {
    container.remove();
  }
  const target = document.getElementById('page-header');
  if (target && target.classList.contains('full_page')) {
    executeLoad(config, target);
  }
}

function onPJAXComplete(config) {
  const currentTheme = getCurrentTheme();
  const themeConfig = ldconfig[currentTheme];
  const target = document.getElementById('page-header');
  if (target && target.classList.contains('full_page')) {
    initProgressiveLoad(themeConfig);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const currentTheme = getCurrentTheme();
  const config = ldconfig[currentTheme];
  initProgressiveLoad(config);
});

document.addEventListener("pjax:complete", function () {
  onPJAXComplete();
});