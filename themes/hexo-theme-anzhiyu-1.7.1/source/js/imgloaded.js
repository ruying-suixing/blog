// 🔥 稳定版：首页渐进式头图加载（安知雨主题 100% 可用）
class ProgressiveLoad {
  constructor(smallSrc, largeSrc) {
    this.smallSrc = smallSrc;
    this.largeSrc = largeSrc;
    this.container = null;
    this.initTpl();
  }

  initScrollListener() {
    const update = () => {
      const val = Math.min(window.scrollY / window.innerHeight, 0.5);
      this.container.style.setProperty("--process", val);
    };
    window.addEventListener("scroll", update);
    update();
  }

  initTpl() {
    this.container = document.createElement('div');
    this.smallStage = document.createElement('div');
    this.largeStage = document.createElement('div');
    this.smallImg = new Image();
    this.largeImg = new Image();

    this.container.className = 'pl-container';
    this.smallStage.className = 'pl-img pl-blur';
    this.largeStage.className = 'pl-img';

    this.container.append(this.smallStage, this.largeStage);
    this.container.style.setProperty("--process", 0);
  }

  progressiveLoad() {
    this.smallImg.onload = () => {
      this.smallStage.classList.add('pl-visible');
      this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    };
    this.largeImg.onload = () => {
      this.largeStage.classList.add('pl-visible');
      this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
      this.initScrollListener();
    };
    this.smallImg.src = this.smallSrc;
    this.largeImg.src = this.largeSrc;
  }
}

// 配置
const ldconfig = {
  light: {
    smallSrc: '/img/2026/383235.webp',
    largeSrc: '/img/2026/383235.webp',
    mobileSmallSrc: '/img/2026/383235.webp',
    mobileLargeSrc: '/img/2026/383235.webp',
  },
  dark: {
    smallSrc: '/img/2026/dojm2h.webp',
    largeSrc: '/img/2026/dojm2h.webp',
    mobileSmallSrc: '/img/2026/dojm2h.webp',
    mobileLargeSrc: '/img/2026/dojm2h.webp',
  },
};

// 获取主题
const getCurrentTheme = () => {
  return document.documentElement.getAttribute('data-theme') || 'light';
};

// 🔥 统一、稳定、延迟执行（解决时有时无）
function startLoad() {
  setTimeout(() => {
    document.querySelectorAll('.pl-container').forEach(el => el.remove());
    if (location.pathname !== '/') return;

    const target = document.getElementById('page-header');
    if (!target || !target.classList.contains('full_page')) return;

    const isMobile = window.matchMedia('(max-width:767px)').matches;
    const cfg = ldconfig[getCurrentTheme()];
    
    const loader = new ProgressiveLoad(
      isMobile ? cfg.mobileSmallSrc : cfg.smallSrc,
      isMobile ? cfg.mobileLargeSrc : cfg.largeSrc
    );
    
    target.insertBefore(loader.container, target.firstChild);
    loader.progressiveLoad();
  }, 120); // 🔥 关键：延迟 120ms 保证 DOM 完全渲染
}

// 主题切换监听（避免重复定义）
if (!window.themeObserverLoaded) {
  window.themeObserverLoaded = true;
  const themeObserver = new MutationObserver(startLoad);
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

// 页面加载 + PJAX 统一调用
document.addEventListener('DOMContentLoaded', startLoad);
document.addEventListener('pjax:complete', startLoad);