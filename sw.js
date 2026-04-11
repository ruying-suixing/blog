/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5c8aae7aa0100fa5ef509d8335e93eab"],["/about/index.html","9df41a26edd4d8107020cbd9d8112901"],["/air-conditioner/index.html","d2f353bdb8d847b46a4eab3bb1406f23"],["/album/index.html","1555ae76da4502e4a72326c09f307e63"],["/album/svgDesign/index.html","985a2cfee6f15aa9087e78798b421aef"],["/album/wordScenery/index.html","aa693eda0c3ddfd6ddae40e5ae938d70"],["/anzhiyu/random.js","0be7ce61bf5de3aacd748241a341b9c4"],["/archives/2026/03/index.html","60b51dcc31eb3fbc53d98025e0519658"],["/archives/2026/04/index.html","0068287dd6fab10f1d632949b542046c"],["/archives/2026/index.html","37d0b12981772d5a192e1d56273db9aa"],["/archives/2026/page/2/index.html","7cb97cf18341f96360aa2b0a0e9e1579"],["/archives/index.html","cffffd6e60d6c23dd1ebbc9b42019fa5"],["/archives/page/2/index.html","317865d0bbc8bddb9f6ced4746885b96"],["/article/18290/index.html","e4173db5ae8a21cd343547a811acf7e2"],["/article/23436/index.html","e600b37efb3d1b5c25488d35d1eced27"],["/article/2472048401/index.html","33d5a3a01860067a32fa1e0939ce253d"],["/article/26278/index.html","2b2b3f66c82f5cbcdd2bdaf20b3f4e69"],["/article/2780309151/index.html","bcb1e87951dbea6c3e5bb32ee4da3869"],["/article/29704/index.html","29ed4aa525e787a2838df7c72421cbfe"],["/article/38845/index.html","7c8d23475ed6969a70dfec64e8bf86cf"],["/article/46209/index.html","a837527542d08e27ef4fe41444cf3b64"],["/article/47960/index.html","04a0c90e9fb532244edc0ed362e4fc71"],["/article/54375/index.html","b319a1efa3cc927ba04c7929bb706f6a"],["/article/74562/index.html","b28fde7385c6c47b8cf81610b7a1fcf9"],["/article/74829/index.html","6884c7a9703694772601cf3ffb12fcd5"],["/categories/index.html","a50fca8f44f7854ab7aa09ced289997a"],["/categories/信息学奥赛/index.html","d2d4de601fbb8550c00c1d794d8fecfc"],["/categories/其他/index.html","652a7403bfb333dd2789c7b52d1152e6"],["/categories/洛谷/index.html","211554e13c819cd278f266f79c765bb3"],["/categories/生活/index.html","b20b0034be1a94df1a9dee6ff39c946e"],["/categories/网站开发/index.html","aaefe142106b235ee362ff60f2c836f1"],["/charts/index.html","b705d387b3e7fa3f63cc3e4f6d285ac4"],["/css/bounce.css","630b5b7029c645ec853d5beebc27434c"],["/css/center-circle.css","59de47666ed9d71afacb3c335935bfb9"],["/css/custom.css","167f3e00d272aa7c9c0f37f8285b3b3a"],["/css/essay-style.css","fa42926a106265e968314299b2eff0d3"],["/css/font.css","87c2bbb2359f45506e0cc90ae59dfa1f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","09467dca06184739ec966ef7622c08c5"],["/css/post-ui.css","b78f97462847b5303cccebdd8460e6c5"],["/css/todolist.css","937fa249c480f442d075c168dda850d2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","a317b84adb3cf63dcce5bd67352ed8ce"],["/go.html","497ac9d34ed3d1dedd13c6831ae4aaed"],["/img/2026/2780309151/1-2.png","6d9161e3a35d33cbdd0e78d0ebd328db"],["/img/2026/2780309151/1.png","3d4804c522d81883ca91b10e09bd74a2"],["/img/2026/2780309151/10.png","37c7999f52443e3c3b959473bba06d5a"],["/img/2026/2780309151/11.png","a6d0af33dbb31f1d4ed97c9504bc2546"],["/img/2026/2780309151/12.png","1442b33152282553f745dc726c991836"],["/img/2026/2780309151/13.png","100056c61b61baa62e69f01a6b7d737b"],["/img/2026/2780309151/14.png","dc4173751d9ed161b06c1ffd07904d05"],["/img/2026/2780309151/15.png","438d485cc1fe558afa9cf19587ce8eab"],["/img/2026/2780309151/16.png","b621a497e7d202d055cda70c9ba224ea"],["/img/2026/2780309151/2-2.png","7c1e2022e598705a81487ea9a776dd48"],["/img/2026/2780309151/2.png","11e813c7cf0f2ba8e1e979856e50f4b7"],["/img/2026/2780309151/3.png","1452705031c35a13d317a84e2e953ab5"],["/img/2026/2780309151/4.png","5825919cdbf6386caebc8e50251af867"],["/img/2026/2780309151/5.png","0dd58ea61f17d1451c04d12f070ff4b9"],["/img/2026/2780309151/6.png","81b85824050c4983c1e0fce628aeb9fc"],["/img/2026/2780309151/7.png","e1bba3650e6c5bf7115f991238416d48"],["/img/2026/2780309151/8.png","f197de6b6042f39160f64877e579a409"],["/img/2026/2780309151/9.png","e570928a6751a6f4bcfcf8d105a25af9"],["/img/2026/375ee11c13ac145bd191f25662d141e4_snapshot_t0.jpg","8f9e4642b39477ad5f69c72250227f23"],["/img/2026/46209/1.png","bea2165dd9bad67a25aba8269035938e"],["/img/2026/46209/10.png","5b9921ac7c0cf44aa8b7cbc55fcaf72a"],["/img/2026/46209/11.png","6cd604dae6c277cc72e3c5890b28bfa7"],["/img/2026/46209/12.png","887d41e0f920699de5134e02f271b329"],["/img/2026/46209/13.png","1e5a349d4e50104e549ef80f7266aa50"],["/img/2026/46209/14.png","ccb48d39cb7b244428f0bf7a2ae5c6ae"],["/img/2026/46209/15.png","f5a25d4077a694298deaf8d7d64eece3"],["/img/2026/46209/16.png","726bd94a018ea12196f03ea285994b7c"],["/img/2026/46209/1772543455802.png","6251bea346412632c1ba0be51b86a1e2"],["/img/2026/46209/1772543739991.png","2fbce2775c7d996916dab60741cd91fa"],["/img/2026/46209/1772544011699.png","b2f421a56cc0617fc3b901b41c3447d4"],["/img/2026/46209/1772544061049.png","9aa2d99548b426706b81d9603a20ba01"],["/img/2026/46209/1772544263971.png","1a14b1b60e9cc7706987957748424be9"],["/img/2026/46209/1772544842834.png","255434a4e65bc85807f10352988aaaca"],["/img/2026/46209/1772799139439.png","c53270f91ef3449991516f7f09d8debe"],["/img/2026/46209/1772799325113.png","17fd81de5cdfdfb40e518f02dd740aa7"],["/img/2026/46209/1772799416776.png","1ccc26409c9bc36bc9408b421a20f81a"],["/img/2026/46209/1772799481598.png","9aa2d99548b426706b81d9603a20ba01"],["/img/2026/46209/1772799512014.png","b7e8ca861fc1417fe0a7ee1a2d82e082"],["/img/2026/46209/1772800180929.png","2189fea7d376ae430c8e81ad40d9bce9"],["/img/2026/46209/1772800250280.png","3270f5d3139c46d109ff37c91d158733"],["/img/2026/46209/1772801108491.png","f5b96c0fc60bd44df3e5144dbd9ce5e3"],["/img/2026/46209/1772801400356.png","255434a4e65bc85807f10352988aaaca"],["/img/2026/46209/1772801545579.png","d99c8c2eec14707820981d79e2912874"],["/img/2026/46209/1772802324633.png","b27bb98e3f7ec2ed19cca26ac5a2f789"],["/img/2026/46209/1772802412422.png","f62eb867798bb853ebd432d5e810955b"],["/img/2026/46209/1772802648682.png","ff888ee005dbc01eb9d5b3dcd15b89d6"],["/img/2026/46209/1772804243558.png","a2dfb365d2393d1e93e5e4a8dfa5cc9c"],["/img/2026/46209/1772804929713.png","135815bf57b14ab09658f0df99a8060f"],["/img/2026/46209/1772804934072.png","323c6985f9edd029cbc0f987607c886f"],["/img/2026/46209/1772805054433.png","bf3950142cef88c979d498b28f4912ae"],["/img/2026/46209/1772805840872.png","72c398f1ad471bbb1bf543073946cb11"],["/img/2026/46209/1772848750931.png","99f536c675eeb3edbf33653622584fac"],["/img/2026/46209/1772851053998.png","4869db8f33dc594f4b90d114ef2c386d"],["/img/2026/46209/1772851718121.png","0cba162a297875d328a04acc6369bc80"],["/img/2026/46209/1772851759034.png","e73216a4214049eeab9218a1cdeb7a25"],["/img/2026/46209/2.png","3e6d283e6701f71eea19e7d42ac88de9"],["/img/2026/46209/3.png","41e2b6021a5788c1a8039a9a967c4071"],["/img/2026/46209/4.png","0d3598d2edb24f5352645dfda3a351d3"],["/img/2026/46209/5.png","df6405fb0e140ffac68b13d5df5b0497"],["/img/2026/46209/6.png","3e10e2cda6e0a59dd1bdfe49673e8427"],["/img/2026/46209/7.png","cacba6ab2303b2c00dee8e903b27abb0"],["/img/2026/46209/8.png","0ab786044204abf48a0b2c08a73ec607"],["/img/2026/46209/9.png","dd82ee23cd2584f7568f31a309c45d61"],["/img/2026/qingming.png","fd4eb3f41125f8b0bcc8b25a311fc2b8"],["/img/2026/qingming2.png","20f362a8af5493e9c65a09dc5a5511e0"],["/img/2026/zhuye.png","ed60138fedef8d4d78ee24cfa2090007"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/map-dark.png","88da3a1aceb4f35d5c7c60e0af9ea0d7"],["/img/map-light.png","167164e817f1f1e435d1663c9bb2b615"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/top_cover/Cpp-logo.png","0599f14b05668de6bef8e461d8fdd97e"],["/img/top_cover/Cpp-logo2.png","c64dc99d9ac736b5a59b51775f04b933"],["/img/top_cover/ENFJ.png","5915fcc6b208403b59d34713a91827f4"],["/img/top_cover/ENFJ.svg","6a83118c0aeaa7a274889c4aaa97f86c"],["/img/top_cover/about.svg","89461a3edf20a24f8802dc97ea235673"],["/img/top_cover/air-conditioner.svg","95a0fca399b237c93b77b56aa9e509de"],["/img/top_cover/album.svg","064c8b462089f2b27c5ca06b88bbe2f2"],["/img/top_cover/album3.jpg","9b695cd85121b8440194dc47a7409478"],["/img/top_cover/categories.svg","c86753ec4047aab3a702ae02df9d7e1f"],["/img/top_cover/charts.svg","1ace6e3928a72ddb4e6e48baebce8c89"],["/img/top_cover/essay.svg","9657a7c1c6f78acf18c7db121b7d1b81"],["/img/top_cover/link.svg","a5425017adfbc9f887963efb2b27c1b4"],["/img/top_cover/news.svg","e1186dac03a1f326eb3c8e13ac75dddb"],["/img/top_cover/tags.svg","28f0c9b485970c0d29d37d74d4f40fc0"],["/img/top_cover/todolist.svg","ca974251d6e273bf72052011a5890a3b"],["/index.html","aeeffce029d3c41542d494a4583cdb8f"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","33ce3d9b7eed400960fb97822f783bad"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","3c3778e52283ff632ef647771542b8e0"],["/js/countdown.js","4b01735b1cc32a153221bb6fdc0d817d"],["/js/footer-animal.js","a8c75aa147cb20161a2f9131620c89a2"],["/js/fps.js","eca2361d5b3b296ffc35a25dacf89621"],["/js/imgloaded.js","8bff23db9829efdce06e3c576675d791"],["/js/main.js","775afb27496b0d93ecd55b735b43503c"],["/js/search/algolia.js","a0d8483428d391aa18becd526845895f"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","3ef842d173ae63215e157c56e7d0a4c3"],["/js/welcome.js","547326a09f12642be7a8419342b6b8eb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","7eec2964543c2d84bf27dcb2dbd95274"],["/music/index.html","f9d2e497c9e790bdfc17ebe7d511f6ac"],["/news/index.html","e8ef00b3b9fd59a0d45e03905e41e2fd"],["/page/2/index.html","410b116904775350b967c80ac043b2ec"],["/sw-register.js","9e6214121511b20e0dc769bcb38c2bed"],["/tags/C/index.html","2d08892eb40a8846ed017610fc4d0a0c"],["/tags/Hexo-美化/index.html","93ce8ed7e0eff8e57bf25f149059a113"],["/tags/index.html","2da5b43f59fb5ba50b25b6c002c4fa71"],["/tags/公告/index.html","803608709ee030cab1b6849f047857a3"],["/tags/安知鱼美化/index.html","18a73efba47fac072c630db16c541cba"],["/tags/比赛/index.html","baa5311d3c94bb88452c5b5e0267cc9c"],["/tags/美文/index.html","03b43cfbde0a09dc87af4cacd89fe2e8"],["/tags/题解/index.html","78924b2ff99a56c3d53cbe3f43726271"],["/todolist/index.html","b1e806f8d150c559dfe5a60de6377614"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.some.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.some-else.org"});





/* eslint-enable */
