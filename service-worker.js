if(!self.define){let e,i={};const a=(a,o)=>(a=new URL(a+".js",o).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const f=e=>a(e,r),b={module:{uri:r},exports:d,require:f};i[r]=Promise.all(o.map((e=>b[e]||f(e)))).then((e=>(n(...e),d)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/10/19/my-first-blog/index.html",revision:"e28a057d563c2b5bbb602b3f1bfda31d"},{url:"2022/10/19/my-first-blog/my-first-blog-1.png",revision:"bdc0c6de0e528d3d47968753beacb33e"},{url:"2022/10/19/my-first-blog/my-first-blog-2.png",revision:"54422c9b4ae40f2f6150550e581cafa8"},{url:"2022/10/19/my-first-blog/my-first-blog-3.png",revision:"0c4423d0cff9b910aa6dad8ac79e989f"},{url:"2022/10/19/my-first-blog/my-first-blog-4.png",revision:"7ecf931ef91394165e3296590e98f090"},{url:"2022/10/19/my-first-blog/my-first-blog-5.png",revision:"642fdfc21fdaeef1b143376c6b2445d9"},{url:"2022/10/19/my-first-blog/my-first-blog-6.png",revision:"944d4d224e54cb201c7276ff6f70fc70"},{url:"2022/10/19/my-first-blog/my-first-blog-7.png",revision:"134e7f7b7bce0d760f96e291863b1ff4"},{url:"2022/10/20/blog的图片显示/index.html",revision:"45b6b7f7c9910d68878737b852358cae"},{url:"2022/10/20/blog的图片显示/md-img-1.png",revision:"69975c72cd1e2d6909782ccaadcc0abf"},{url:"2022/10/21/neovim快速配置/index.html",revision:"02cb6985519a094a8556d67755a244fb"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-1.png",revision:"a4a30ad83993b8c66f1a8285418d3a9f"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-10.png",revision:"fefd2d02c9bfedf00d1ea910651d4c4d"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-11.png",revision:"73d533fbd489703c1d3eadd97a02bd23"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-12.png",revision:"ba318b04bd78ef4e7f6052bc2e0e6ecb"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-13.png",revision:"49d8def5c3fdd79d9b3d4ff5f33ffb5e"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-14.png",revision:"5e7b18c4de795cfdfa9618273cc282b0"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-16.png",revision:"c252bb4bf3dcebef840ef87755b477b5"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-17.png",revision:"18fdb4ebdc8919455a7084d572889146"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-18.png",revision:"79ec858ddde9cd832dcc39783ac9a985"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-19.png",revision:"e70206bef81544a121a62e05fc71fef4"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-2.png",revision:"1bf35921608b2a9fa73b943e10015a52"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-21.png",revision:"4f25da1e44a275e91d12e5f9100c41a8"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-3.png",revision:"4d2ac58620966eca18bb28cf6779a9ce"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-4.png",revision:"91f1d30d2369db30f490df6a228fc7e6"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-5.png",revision:"2395aa696cc3aa684700197fcacead23"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-6.png",revision:"a3e951b900e9d189b725a336c76d0f86"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-7.png",revision:"45029ee84cc4a8ba6abfc02b4a4d9e59"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-8.png",revision:"812f1661a6375d4e55b3ced329a7c5e8"},{url:"2022/10/21/neovim快速配置/nvim-peizhi-9.png",revision:"391f84f0cfbdafb09593528cecf9b668"},{url:"about/index.html",revision:"cbc7de9103adb75bb8814c23c67c634c"},{url:"archives/2022/10/index.html",revision:"debe2ac9776e1c49e0501ff7c404a722"},{url:"archives/2022/index.html",revision:"c4d1b7992f635428c0db178c1499411e"},{url:"archives/index.html",revision:"2d6b3463acb1651507cb8c217deaa4eb"},{url:"categories/blog教程/index.html",revision:"bbb6e222e10be18e02574ca93b72ec99"},{url:"categories/index.html",revision:"ebe3470b4834aa498a34d11b8ed3cd88"},{url:"categories/小技巧/index.html",revision:"103cecaeac03c8ec2131ac13a51da219"},{url:"categories/编程入门/index.html",revision:"e13dd17111f79944ef405bfcd824b1bb"},{url:"css/index.css",revision:"35afe8730882e6dbff4eb740add9b012"},{url:"css/jiazai.css",revision:"53dfd79d6ff05fea34672d64986c4cf9"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fonts/iconfont.ttf",revision:"a80573277f10f28666620c84a8929d3f"},{url:"fonts/iconfont.woff",revision:"096921790ae4b6cb0474481a532e048f"},{url:"fonts/iconfont.woff2",revision:"ab5b0d28ae601c4257fdd6d3d8325a5b"},{url:"gallery/anime/index.html",revision:"158e1f66ff48c95eea39d975e97a2975"},{url:"gallery/index.html",revision:"bf9feca23f8c2e6d611131f5c6d84acc"},{url:"gallery/ohmygirl/index.html",revision:"ed44540034ddba4e083310090ad16002"},{url:"gallery/pingjietu/index.html",revision:"adf722a387f48289c7d37d87112e7984"},{url:"gallery/wallpaper/index.html",revision:"2ed395516f4cf141bd49caf4483df127"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"71fdceb1e30691d59c259829b8b0d20d"},{url:"js/jiazai.js",revision:"7874813fcb09086fbd846adf11df3cc0"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"0bfb93abfe064226de9e534fe7b1ec06"},{url:"movies/index.html",revision:"ad15bbbb48383077e093d35633980c23"},{url:"music/index.html",revision:"62d14cab774f04c83ff2afdb5225cc7b"},{url:"photo/1661256734073_7DB0_.jpg",revision:"c416e7cf2e2fe52fcfd5b80bbc9d8184"},{url:"photo/1661257025114_Ue9PX.jpg",revision:"1a0989795122df6c60b2d0eeba0ae4b3"},{url:"photo/5805540bf8358639cfbbf42e92abab4914df2411.jpg",revision:"08252b143debc5a4e91ffb8483a39be5"},{url:"photo/82da98d8d2cb4c57863d46ba43aca34e.png",revision:"9700d16518d86af33583b9a5cef912c6"},{url:"photo/about1.jpg",revision:"6027e5a8faf0f802716dde4f53b39ac1"},{url:"photo/e83085bdecbaba1cc4f33235876d3146_r.jpg",revision:"fdbaadf711aa8260ff8e757e3c57a961"},{url:"photo/myFerrari - Ferrari F8 Spider - aLaDy9F.pdf - Adobe Acrobat Pro DC (64-bit).jpg",revision:"24f4ab61e79901ef61e844de18357a91"},{url:"photo/rgb spiderman.png",revision:"7e94ba5c4ee9f81fa84047caaf00e85d"},{url:"photo/top.png",revision:"8040cd655d0580515a58e27b9cefa801"},{url:"photo/touxiang.jpg",revision:"55c53a4847dd4f066dd70b460e433135"},{url:"photo/v2-9991b9ce42342dbb4bf45651cc617b51_r.jpg",revision:"fc90e064cde82cad49986b3b531d7b40"},{url:"photo/wallhaven-0qzml5.jpg",revision:"fc84e54236a80a12881ada98dd4e9019"},{url:"photo/wallhaven-0w2z36.png",revision:"6a1f5f2f1d01617dd8607fe06330bc19"},{url:"photo/wallhaven-282rwm.jpg",revision:"9e96461697c8704176aa0fa4c42402cd"},{url:"photo/wallhaven-2kgqmm.jpg",revision:"50e985435cb2268df8b9faab7a761921"},{url:"photo/wallhaven-4xy5go.jpg",revision:"d4f324c58d1e0aaa517345acf6a9bda8"},{url:"photo/wallhaven-4yyv8k.jpg",revision:"eaff0bf34645f711087601b748449f32"},{url:"photo/wallhaven-573227.jpg",revision:"459867ac1f0c142510bf7f060ccaf296"},{url:"photo/wallhaven-8oj2mj.jpg",revision:"2685b908c63d75fc444ed3e149447d7d"},{url:"photo/wallhaven-95582k.jpg",revision:"300e0d2beeb204ed84166f1dca330e90"},{url:"photo/wallhaven-g716ol.jpg",revision:"5711232e740d6c594285774fde6f3a66"},{url:"photo/wallhaven-n6evgw.png",revision:"8a1a424abae4c33856be0f99ab26a643"},{url:"photo/wallhaven-nrp2km.jpg",revision:"1e4edf842c7f10e1e83c1a5f54e5cd9a"},{url:"photo/wallhaven-q2o275.jpg",revision:"e58126ffa4efd43b82e21a1207951f36"},{url:"photo/wallhaven-x86j5l.jpg",revision:"f9158bab074532c99c8bfb5f8b061861"},{url:"photo/wallhaven-x89xgd.jpg",revision:"a3ccffda9f69f72842c8984a097dfd2f"},{url:"photo/wallhaven-z892ly.jpg",revision:"a6bfb391a95be33a3b467b24380c46bd"},{url:"photo/wallhaven.jpg",revision:"cb4f586b4cbe424f54882faa9c673663"},{url:"photo/wechat.jpg",revision:"5b65038bf3e22f7bd5f46c1b06c2ac50"},{url:"photo/weixintubiao.jpg",revision:"ab9a6da06330a94b42855b6d266231e1"},{url:"photo/wenzhang1.jpg",revision:"1e0db69f55682088d92ab2bc3af5ec2a"},{url:"photo/wenzhang13.jpg",revision:"bcd4a9fa77d5babfda65a7681183a1a9"},{url:"photo/wenzhang2.jpg",revision:"3783844dfa62e193e184d2181f074850"},{url:"photo/wenzhang3.jpg",revision:"a252c9f9d41f79257f5ca9db6b28e3b5"},{url:"photo/wenzhang4.jpg",revision:"198dc8b98bddb939b3c6bcf5f95ae07e"},{url:"photo/wenzhang5.jpg",revision:"a6b5a8cc412d06c19f0454abf26e090c"},{url:"photo/wenzhang6.jpg",revision:"afd4d799d5905336cd473d73ccd29bd1"},{url:"photo/wenzhang7.jpg",revision:"8fb7d10986b67a1dcba885f50a5de3a9"},{url:"photo/wenzhang8.png",revision:"618e5064b807c1a4b9143abd68c3cd9a"},{url:"photo/wyy2.png",revision:"343503e1cf4ec1e9e1e41434a75ac366"},{url:"photo/wyy6.png",revision:"587566733433643c389493e45d139239"},{url:"photo/wyy7.png",revision:"fbe328c7e7bf3d8321b7b5839304c224"},{url:"photo/zhifubao.jpg",revision:"3a9ee29edf5896f4df39b5a01f8a4d8b"},{url:"tags/blog/index.html",revision:"b54966544b410242467c2ae2c82fa1b7"},{url:"tags/index.html",revision:"d1879885be77087485951182db0373c5"},{url:"tags/neovim/index.html",revision:"6d71a6fa39ad00a95be48f3d08babd9b"}],{})}));
//# sourceMappingURL=service-worker.js.map
