if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>l(s,r),a={module:{uri:r},exports:o,require:u};e[r]=Promise.all(i.map((s=>a[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/browser-bbd6b509.js",revision:null},{url:"assets/browser-legacy-d6874cc7.js",revision:null},{url:"assets/Chat-2241b252.css",revision:null},{url:"assets/Chat-e229a3db.js",revision:null},{url:"assets/Chat-legacy-da17d354.js",revision:null},{url:"assets/en-78a43b85.js",revision:null},{url:"assets/en-legacy-f8b38192.js",revision:null},{url:"assets/Home-0535b87a.css",revision:null},{url:"assets/Home-c5cbe057.js",revision:null},{url:"assets/Home-legacy-7d050b40.js",revision:null},{url:"assets/index-53b813b5.css",revision:null},{url:"assets/index-8fcf0c3d.js",revision:null},{url:"assets/index-legacy-c669afa8.js",revision:null},{url:"assets/polyfills-legacy-43352ef2.js",revision:null},{url:"assets/usePeek-162624c3.js",revision:null},{url:"assets/usePeek-legacy-8660f37a.js",revision:null},{url:"assets/zh-a1ef74d3.js",revision:null},{url:"assets/zh-legacy-c7327f7c.js",revision:null},{url:"index.html",revision:"ff2b3bbbfab5110f65ac5b1ac9559d82"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.ico",revision:"8c803fd2efb0497fe2a71f66705b494f"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"apple-touch-icon.png",revision:"0c4dfde33326fccb8b1c41894c6d867e"},{url:"pwa-192x192.png",revision:"f893f1f2aa57d31a7d04aed55b395bfb"},{url:"pwa-512x512.png",revision:"6fd6ac2461c4270adef5d71798c591f5"},{url:"manifest.webmanifest",revision:"e25952d58f77f3d48ecd986f2e29b494"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
