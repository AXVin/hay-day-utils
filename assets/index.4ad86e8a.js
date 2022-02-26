import{o as u,c as d,p as x,a as L,b as c,d as i,w as p,u as l,R as f,e as k,F as w,f as R,g as m,h as E,i as H,j as O,k as P}from"./vendor.983328c2.js";const V=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};V();var y=(o,s)=>{const a=o.__vccOpts||o;for(const[r,e]of s)a[r]=e;return a};const b={},v=o=>(x("data-v-66324156"),o=o(),L(),o),I={class:"greetings"},N=v(()=>c("h1",{class:"green"},"Hay Day Utilities",-1)),S=v(()=>c("h3",null," The Hay Day Utilities created by AXVin! ",-1)),A=[N,S];function C(o,s){return u(),d("div",I,A)}var W=y(b,[["render",C],["__scopeId","data-v-66324156"]]);const B={class:"wrapper"},D=m("Home"),F=m("Rarity Calculator"),T={setup(o){return R(),(s,a)=>(u(),d(w,null,[c("header",null,[c("div",B,[i(W),c("nav",null,[i(l(f),{to:"/"},{default:p(()=>[D]),_:1}),i(l(f),{to:"/rarity-calculator"},{default:p(()=>[F]),_:1})])])]),i(l(k))],64))}},q="modulepreload",h={},U="/hay-day-utils/",j=function(s,a){return!a||a.length===0?s():Promise.all(a.map(r=>{if(r=`${U}${r}`,r in h)return;h[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const n=document.createElement("link");if(n.rel=e?"stylesheet":q,e||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),e)return new Promise((g,$)=>{n.addEventListener("load",g),n.addEventListener("error",$)})})).then(()=>s())},K={};function M(o,s){return u(),d("main")}var X=y(K,[["render",M]]);const z=E({history:H("/hay-day-utils/"),routes:[{path:"/",name:"home",component:X},{path:"/rarity-calculator",name:"rarity-calculator",component:()=>j(()=>import("./RarityCalculatorView.e585dfd9.js"),["assets/RarityCalculatorView.e585dfd9.js","assets/RarityCalculatorView.fded78a2.css","assets/vendor.983328c2.js"])},{path:"/:pathMatch(.*)",redirect:"/"}]}),_=O(T);_.use(P());_.use(z);_.mount("#app");export{y as _};
