if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const f=e=>a(e,c),r={module:{uri:c},exports:t,require:f};s[c]=Promise.all(n.map((e=>r[e]||f(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/FP_1.png",revision:"e7bba71c85aadcaf3b2e966459664d20"},{url:"/FP_2.png",revision:"d81595863f2f093b0bee01fc8eaa1e7e"},{url:"/FP_3.png",revision:"7aa297d16b878149b925450d9e4a515f"},{url:"/_next/app-build-manifest.json",revision:"7a15aa793839757cdc01fe2ad3225ca5"},{url:"/_next/static/chunks/164f4fb6.87b12e03d5864681.js",revision:"87b12e03d5864681"},{url:"/_next/static/chunks/173-a584ddbdf4d5a4c7.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/4bd1b696-9c4a272d84378f22.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/517-2e6e64047133ac2f.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/7.4c636504ad8660c4.js",revision:"4c636504ad8660c4"},{url:"/_next/static/chunks/756.efbdadc1912ecac4.js",revision:"efbdadc1912ecac4"},{url:"/_next/static/chunks/839.e04a294a99747924.js",revision:"e04a294a99747924"},{url:"/_next/static/chunks/867-7bd7804d74fc2939.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/970-11d318023ab697f7.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/ad2866b8.f1442ee25fd052ff.js",revision:"f1442ee25fd052ff"},{url:"/_next/static/chunks/app/_not-found/page-13392be8fea745d5.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/aboutMe/page-0f9179aa5ed24c63.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/contact/page-d42535a7b363db7a.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/cv/page-498601ad34996eef.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/details_annexx/page-24f57460f1e8cb6f.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/details_french_population/page-bf71ae6db010c444.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/details_stally/page-8bcdc2b81467d9c2.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/details_super_data/page-8521f8cc4967c028.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/hery/page-21c925760e8ea998.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/introAngular_details/page-8a9743c3a47e1c55.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/kybalion_details/page-a456396bac731a4b.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/layout-4d2ffe4e4ef3f2a4.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/lgae_details/page-2c7bc397b8a8eafa.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/mmb_details/page-f2d01a3d5dbf61c6.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/ovl_details/page-85d1e57a2d04f69b.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/packages/page-1ee047bdca9a3f9d.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/page-0a5274d759342d0d.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/portofolio_detail/page-877cc3e6652b2bbf.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/app/projects/page-3a0a08b244e06aa9.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/b645e135.aeacdde5a41eefa8.js",revision:"aeacdde5a41eefa8"},{url:"/_next/static/chunks/bc98253f.63ca06ab087b2181.js",revision:"63ca06ab087b2181"},{url:"/_next/static/chunks/framework-c76864a09627f16c.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/main-5663513be39f6f88.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/main-app-f7aa24c5986278bc.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b646c8714b2449c1.js",revision:"f8q1fe4ZQMK9imDASnsxu"},{url:"/_next/static/css/c3e55ae0f7b082fc.css",revision:"c3e55ae0f7b082fc"},{url:"/_next/static/f8q1fe4ZQMK9imDASnsxu/_buildManifest.js",revision:"1782a20be012c7040c936ca1863eba68"},{url:"/_next/static/f8q1fe4ZQMK9imDASnsxu/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/favicon.ico",revision:"ff46beeef8b93501ae6dda64b19cb052"},{url:"/hery.png",revision:"315e7cfec65ac0f1139112be2f105230"},{url:"/hery_r.jpg",revision:"5035c479d65b2d5fae789de957ecab17"},{url:"/kybalion.png",revision:"b55750096114f3560862df68d4df68a4"},{url:"/lgae.jpg",revision:"a802c9e499b7a2e7f8d3b7dcda4f5e72"},{url:"/logo.png",revision:"fb39986e98a89fcb79cae3a400f127c5"},{url:"/logo_big.png",revision:"6f1f0770855a76c092eccfcd720318f8"},{url:"/logo_fp.png",revision:"e102800ba172430138d84f6250f4a1a3"},{url:"/logo_stally.png",revision:"4ca374af0da41d0f37908919b996df57"},{url:"/manifest.json",revision:"8923c80f8f2b72314da8fb5d0097fa99"},{url:"/mmb1.png",revision:"6fe41a38ce03f5f7d1a0fc9097dc1544"},{url:"/mmb2.png",revision:"13ad7bd70f4fbf80f7ce5cc02e26555c"},{url:"/mmb_logo.png",revision:"a4ea532e1be59625485ce045a7efd6d3"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/ovl1.png",revision:"6bf7d7c35e6c493ca9daac085f13866b"},{url:"/ovl2.png",revision:"66f0a8153eec16087cc2a7e34723d94a"},{url:"/ovl_logo.png",revision:"9c3b47af934a5e83bade213e647a255a"},{url:"/packages.png",revision:"4bd1464db49e3de31e3b0c70d0021800"},{url:"/portofolio.png",revision:"8c67043470bfd592abaef967439c1750"},{url:"/robots.png",revision:"cb720370d918ed385435c5e5a64b7b32"},{url:"/super_data.png",revision:"3084a4aea395c48748b12ae35a3aae34"},{url:"/test.png",revision:"1ab0d071f0db1c03aa4d2f5970efbf51"},{url:"/test2.png",revision:"45f875c291f026b07db50ffbc8b45e2c"},{url:"/test3.png",revision:"61cb346a1ed49cca4ee1ecf0b7928129"},{url:"/test4.png",revision:"97b45687d724ca65b8e3c5b39b8911b9"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
