import{a as d,S as m,i as a}from"./assets/vendor-LK6CqzKq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="51467271-51a2ae32f63b997113462ef20",g="https://pixabay.com/api/";async function y(i){const r={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:r})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new m(".gallery a");function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${e}"
            width="360"
          />
        </a>
        <ul class="gallery-item-info">
          <li class="info-block"><h5>Likes</h5><p>${t}</p></li>
          <li class="info-block"><h5>Views</h5><p>${s}</p></li>
          <li class="info-block"><h5>Comments</h5><p>${f}</p></li>
          <li class="info-block"><h5>Downloads</h5><p>${p}</p></li>
        </ul>
      </li>`).join("");c.innerHTML=r,L.refresh()}function w(){c.innerHTML=""}function S(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const l=document.querySelector(".form"),P=l.elements["search-text"];l.addEventListener("submit",async i=>{i.preventDefault();const r=P.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}w(),S();try{const o=await y(r);if(!o.hits.length){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch{a.error({title:"Error",message:"Ups.. Something went wrong",position:"topRight"})}finally{q(),l.reset()}});
//# sourceMappingURL=index.js.map
