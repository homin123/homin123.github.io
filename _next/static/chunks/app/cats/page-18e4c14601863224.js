(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[210],{5916:(e,t,a)=>{Promise.resolve().then(a.bind(a,1839))},1839:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(5155),n=a(2115),c=a(3759),i=a.n(c);function s(){let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{document.title="호민-고양이정보";let e=document.querySelector('meta[property="og:title"]');e&&e.setAttribute("content","호민-고양이정보");let t=document.querySelector('meta[property="og:description"]');t&&t.setAttribute("content","다양한 고양이들의 관한 정보를 볼 수 있습니다.")},[]),(0,n.useEffect)(()=>{(async function(){try{let e=await fetch("https://api.thecatapi.com/v1/breeds"),a=await e.json();t(a)}catch(e){console.error("고양이 데이터를 불러오는 중 오류 발생:",e)}})()},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:i().container,children:e.map(e=>(0,r.jsxs)("div",{className:i().catCard,children:[e.reference_image_id&&(0,r.jsx)("img",{src:"https://cdn2.thecatapi.com/images/".concat(e.reference_image_id,".jpg"),alt:e.name,className:i().catImage}),(0,r.jsx)("h2",{className:i().catName,children:e.name}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Origin:"})," ",e.origin]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Life Span:"})," ",e.life_span]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Temperament:"})," ",e.temperament]}),(0,r.jsx)("p",{children:e.description}),e.wikipedia_url&&(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Wikipedia:"})," ",(0,r.jsx)("a",{href:e.wikipedia_url,target:"_blank",rel:"noopener noreferrer",children:"Learn more"})]})]},e.id))})})}},3759:e=>{e.exports={container:"page_container__GApNS",catCard:"page_catCard__izcD3",catImage:"page_catImage__ncFKE",catName:"page_catName__95RnU"}}},e=>{var t=t=>e(e.s=t);e.O(0,[156,441,517,358],()=>t(5916)),_N_E=e.O()}]);