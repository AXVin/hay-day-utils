import{o as u,c as _,p as x,a as L,b as i,d as k,e as a,w as p,u as l,R as f,f as R,F as w,g as E,h as m,i as O,j as P,k as b,l as H}from"./vendor.1a091adf.js";const I=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}};I();var y=(n,t)=>{const c=n.__vccOpts||n;for(const[r,e]of t)c[r]=e;return c};const N={},v=n=>(x("data-v-66324156"),n=n(),L(),n),S={class:"greetings"},V=v(()=>i("h1",{class:"green"},"Hay Day Utilities",-1)),A=v(()=>i("h3",null," The Hay Day Utilities created by AXVin! ",-1)),W=[V,A];function C(n,t){return u(),_("div",S,W)}var T=y(N,[["render",C],["__scopeId","data-v-66324156"]]);const B={class:"wrapper"},D=m("Home"),F=m("Rarity Calculator"),q={setup(n){let t=E();return k(()=>{t.push({name:"rarity-calculator"})}),(c,r)=>(u(),_(w,null,[i("header",null,[i("div",B,[a(T),i("nav",null,[a(l(f),{to:"/"},{default:p(()=>[D]),_:1}),a(l(f),{to:"/rarity-calculator"},{default:p(()=>[F]),_:1})])])]),a(l(R))],64))}},U="modulepreload",h={},j="/",K=function(t,c){return!c||c.length===0?t():Promise.all(c.map(r=>{if(r=`${j}${r}`,r in h)return;h[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":U,e||(s.as="script",s.crossOrigin=""),s.href=r,document.head.appendChild(s),e)return new Promise((g,$)=>{s.addEventListener("load",g),s.addEventListener("error",$)})})).then(()=>t())},M={};function X(n,t){return null}var z=y(M,[["render",X]]);const G={setup(n){return(t,c)=>(u(),_("main",null,[a(z)]))}},J=O({history:P("/"),routes:[{path:"/",name:"home",component:G},{path:"/rarity-calculator",name:"rarity-calculator",component:()=>K(()=>import("./RarityCalculatorView.92144c30.js"),["assets/RarityCalculatorView.92144c30.js","assets/RarityCalculatorView.96f40f79.css","assets/vendor.1a091adf.js"])}]}),d=b(q);d.use(H());d.use(J);d.mount("#app");
