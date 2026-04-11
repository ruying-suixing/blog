// 适配uapis.cn API的来访者欢迎卡片JS（完美适配简写省份：浙江 / 江苏 / 河南）
window.IP_CONFIG = {
    BLOG_LOCATION: {
        lng: 121.4, // 博主经度
        lat: 29.9,  // 博主纬度
    },
    CACHE_DURATION: 1000 * 60 * 60, // 缓存1小时
    HOME_PAGE_ONLY: true, // 是否只在首页显示
};

// 添加样式
const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        #welcome-info {
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 212px;
            padding: 10px;
            margin-top: 5px;
            border-radius: 12px;
            background-color: var(--anzhiyu-background);
            outline: 1px solid var(--anzhiyu-card-border);
        }
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 3px solid var(--anzhiyu-main);
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .ip-address {
            filter: blur(5px);
            transition: filter 0.3s ease;
        }
        .ip-address:hover {
            filter: blur(0);
        }
        .error-message {
            color: #ff6565;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .error-message p,
        .permission-dialog p {
            margin: 0;
        }
        .error-icon {
            font-size: 3rem;
        }
        #retry-button {
            margin: 0 5px;
            color: var(--anzhiyu-main);
            transition: transform 0.3s ease;
            cursor: pointer;
        }
        #retry-button:hover {
            transform: rotate(180deg);
        }
    `;
    document.head.appendChild(style);
};

// 获取欢迎信息元素
const getWelcomeInfoElement = () => document.querySelector('#welcome-info');

// 显示加载动画
const showLoadingSpinner = () => {
    const welcomeInfoElement = getWelcomeInfoElement();
    if (!welcomeInfoElement) return;
    welcomeInfoElement.innerHTML = '<div class="loading-spinner"></div>';
};

// 显示错误信息
const showErrorMessage = (message = '抱歉，无法获取信息') => {
    const welcomeInfoElement = getWelcomeInfoElement();
    if (!welcomeInfoElement) return;
    
    welcomeInfoElement.innerHTML = `
        <div class="error-message">
            <div class="error-icon">😕</div>
            <p>${message}</p>
            <p>请<i id="retry-button" class="fa-solid fa-arrows-rotate"></i>重试或检查网络连接</p>
        </div>
    `;
    document.getElementById('retry-button').addEventListener('click', fetchIpInfo);
};

// 缓存相关
const IP_CACHE_KEY = 'ip_info_cache';
const getIpInfoFromCache = () => {
    const cached = localStorage.getItem(IP_CACHE_KEY);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > IP_CONFIG.CACHE_DURATION) {
        localStorage.removeItem(IP_CACHE_KEY);
        return null;
    }
    return data;
};

const setIpInfoCache = (data) => {
    localStorage.setItem(IP_CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
    }));
};

// 计算距离
const calculateDistance = (lng, lat) => {
    const R = 6371; // 地球半径(km)
    const rad = Math.PI / 180;
    const dLat = (lat - IP_CONFIG.BLOG_LOCATION.lat) * rad;
    const dLon = (lng - IP_CONFIG.BLOG_LOCATION.lng) * rad;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(IP_CONFIG.BLOG_LOCATION.lat * rad) * Math.cos(lat * rad) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

// 格式化IP显示
const formatIpDisplay = (ip) => {
    if (!ip) return "未知IP";
    return ip.includes(":") ? "IPv6地址" : ip;
};

// 格式化位置
const formatLocation = (region) => {
    if (!region) return '神秘地区';
    return region.replace(/\s+/g, " ");
};

// 时段问候
const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 11) return "早上好🌤️，一日之计在于晨";
    if (hour < 13) return "中午好☀️，记得午休喔~";
    if (hour < 17) return "下午好🕞，饮茶先啦！";
    if (hour < 19) return "即将下班🚶‍♂️，记得按时吃饭~";
    return "晚上好🌙，夜生活嗨起来！";
};

// ====================== 终极修复：适配 浙江、江苏 这种简写 ======================
const getGreeting = (region) => {
    if (!region) return "带我去你的城市逛逛吧！";

    const parts = region.trim().split(/\s+/).filter(Boolean);
    const province = parts[1] || ""; // 浙江
    const city = parts[2] || "";     // 宁波

    // 城市匹配
    if (city === "南京") return "六朝古都，风华依旧";
    if (city === "苏州") return "上有天堂，下有苏杭";
    if (city === "杭州") return "东风渐绿西湖柳，雁已还人未南归";
    if (city === "郑州") return "豫州之域，天地之中";
    if (city === "洛阳") return "洛阳城里见秋风，欲作家书意万重";
    if (city === "开封") return "包公那叫一个铁面无私，严惩贪官污吏";
    if (city === "宁波") return "海上丝路的起点，和我一个城市。";

    // 省份匹配（简写版）
    if (province === "北京") return "北京欢迎你~~~";
    if (province === "天津") return "讲段相声吧";
    if (province === "河北") return "山势巍巍成壁垒，天下雄关";
    if (province === "山西") return "展开坐具长三尺，已占山河五百余";
    if (province === "内蒙古") return "天苍苍，野茫茫，风吹草低见牛羊";
    if (province === "辽宁") return "我想吃烤鸡架！";
    if (province === "吉林") return "状元阁就是东北烧烤之王";
    if (province === "黑龙江") return "很喜欢哈尔滨大剧院";
    if (province === "上海") return "众所周知，中国只有两个城市";
    if (province === "江苏") return "散装是必须要散装的";
    if (province === "浙江") return "望海楼明照曙霞，闲塘十里尽梅花";
    if (province === "河南") return "可否带我品尝河南烩面啦？";

    return "欢迎来到我的博客！";
};
// ==============================================================================

// 生成欢迎信息
const generateWelcomeMessage = (region, dist, ipDisplay) => {
    const location = formatLocation(region);
    const timeGreet = getTimeGreeting();
    const cityGreet = getGreeting(region);
    
    return `
        欢迎来自 <b>${location}</b> 的小友💖<br>
        你当前距博主约 <b>${dist}</b> 公里！<br>
        你的IP地址：<b class="ip-address">${ipDisplay}</b><br>
        ${timeGreet}<br>
        Tip：<b>${cityGreet}🍂</b>
    `;
};

// 显示欢迎信息
const showWelcome = (data) => {
    if (!data || !data.ip) return showErrorMessage();
    
    const welcomeInfo = getWelcomeInfoElement();
    if (!welcomeInfo) return;
    
    const dist = calculateDistance(data.longitude, data.latitude);
    const ipDisplay = formatIpDisplay(data.ip);
    
    welcomeInfo.style.display = 'block';
    welcomeInfo.style.height = 'auto';
    welcomeInfo.innerHTML = generateWelcomeMessage(data.region, dist, ipDisplay);
};

// 从uapis.cn获取IP信息
const fetchIpData = async () => {
    const response = await fetch('https://uapis.cn/api/v1/network/myip?source=commercial');
    if (!response.ok) throw new Error('API请求失败');
    const result = await response.json();
    return result;
};

// 获取IP信息主函数
const fetchIpInfo = async () => {
    showLoadingSpinner();
    
    const cachedData = getIpInfoFromCache();
    if (cachedData) {
        showWelcome(cachedData);
        return;
    }
    
    try {
        const data = await fetchIpData();
        setIpInfoCache(data);
        showWelcome(data);
    } catch (error) {
        console.error('获取IP信息失败:', error);
        showErrorMessage('获取IP信息失败，请重试');
    }
};

// 判断是否首页
const isHomePage = () => {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
};

// 插入组件
const insertAnnouncementComponent = () => {
    const announcementCards = document.querySelectorAll('.card-widget.card-announcement');
    if (!announcementCards.length) return;
    
    if (IP_CONFIG.HOME_PAGE_ONLY && !isHomePage()) {
        announcementCards.forEach(card => card.remove());
        return;
    }
    
    if (!document.querySelector('#welcome-info')) return;
    fetchIpInfo();
};

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    addStyles();
    insertAnnouncementComponent();
    document.addEventListener('pjax:complete', insertAnnouncementComponent);
});