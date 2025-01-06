"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[2392],{2876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>$,frontMatter:()=>k,metadata:()=>b,toc:()=>C});var n=r(3274),o=r(7507),s=(r(9474),r(3526)),c=r(6236),i=r(4016),l=r(5395),a=r(6280),u=r(5691),d=r(4821);const m={cardContainer:"cardContainer_wtxD",cardTitle:"cardTitle_K3B_",cardDescription:"cardDescription_Mc3n"};function f(e){let{href:t,children:r}=e;return(0,n.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",m.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:o,description:c}=e;return(0,n.jsxs)(f,{href:t,children:[(0,n.jsxs)(d.A,{as:"h2",className:(0,s.A)("text--truncate",m.cardTitle),title:o,children:[r," ",o]}),c&&(0,n.jsx)("p",{className:(0,s.A)("text--truncate",m.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const r=(0,c.Nr)(t),o=function(){const{selectMessage:e}=(0,l.W)();return t=>e(t,(0,u.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,n.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function g(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.cC)(t.docId??void 0);return(0,n.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,n.jsx)(g,{item:t});case"category":return(0,n.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,c.$S)();return(0,n.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,n.jsx)(v,{...e});const o=(0,c.d1)(t);return(0,n.jsx)("section",{className:(0,s.A)("row",r),children:o.map(((e,t)=>(0,n.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,n.jsx)(x,{item:e})},t)))})}const k={title:"Choose a category"},y=void 0,b={id:"dev-tools/quickstart",title:"Choose a category",description:"",source:"@site/docs/dev-tools/quickstart.md",sourceDirName:"dev-tools",slug:"/dev-tools/quickstart",permalink:"/dev-tools/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/dev-tools/quickstart.md",tags:[],version:"current",frontMatter:{title:"Choose a category"},sidebar:"devToolsSidebar",next:{title:"Block Explorer",permalink:"/dev-tools/basics/block-explorer"}},w={},C=[];function N(e){return(0,n.jsx)(j,{})}function $(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(N,{...e})}):N()}},5395:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(9474),o=r(88);const s=["zero","one","two","few","many","other"];function c(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},7507:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>i});var n=r(9474);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);