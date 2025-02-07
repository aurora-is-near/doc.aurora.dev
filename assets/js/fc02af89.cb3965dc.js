"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[8548],{8115:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"launch-chain/reference/whitelists-api","title":"Whitelists API","description":"|                                |                                                                               |","source":"@site/docs/launch-chain/reference/whitelists-api.md","sourceDirName":"launch-chain/reference","slug":"/launch-chain/reference/whitelists-api","permalink":"/launch-chain/reference/whitelists-api","draft":false,"unlisted":false,"editUrl":"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/launch-chain/reference/whitelists-api.md","tags":[],"version":"current","frontMatter":{"sidebar_label":"Whitelists API","title":"Whitelists API"},"sidebar":"auroraCloud","previous":{"title":"FAQs","permalink":"/launch-chain/forwarder/troubleshooting"}}');var n=s(3274),i=s(7507);const o={sidebar_label:"Whitelists API",title:"Whitelists API"},d=void 0,a={},c=[];function l(e){const r={code:"code",em:"em",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{}),(0,n.jsx)(r.th,{})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"API path"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"/chain/whitelists/"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"method"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"POST"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"required request headers"})}),(0,n.jsxs)(r.td,{children:["Content-Type: application/json ",(0,n.jsx)("br",{}),"Authorization: Bearer [",(0,n.jsx)(r.strong,{children:"ACC API Token"}),"]"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"required request params"})}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.em,{children:"op_type"}),": ",(0,n.jsx)(r.code,{children:"add_entry"})," and ",(0,n.jsx)(r.code,{children:"remove_entry"})," are supported ",(0,n.jsx)("br",{}),(0,n.jsx)(r.em,{children:"kind"}),": Type of whitelist. ",(0,n.jsx)(r.code,{children:"developer"})," or ",(0,n.jsx)(r.code,{children:"user"})," are supported. ",(0,n.jsx)("br",{})," ",(0,n.jsx)(r.em,{children:"entry"}),": EOA address to add or remove."]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"response code"})}),(0,n.jsxs)(r.td,{children:["On success: ",(0,n.jsx)(r.code,{children:"200 OK"}),(0,n.jsx)("br",{}),"On Error:",(0,n.jsx)("br",{})," - ",(0,n.jsx)(r.code,{children:"400 BadRequest"}),": if a request body is empty or could not be parsed or a number of operations is greater than RequestConfig.MaxBatchLen",(0,n.jsx)("br",{})," - ",(0,n.jsx)(r.code,{children:"401 Unauthorized"}),": if authorization header does not satisfy the [conditions](401 Conditions)",(0,n.jsx)("br",{})," - ",(0,n.jsx)(r.code,{children:"403 Forbidden"}),": if a caller is [not authorized](403 Conditions) to perform all updates in request array (i.e., partial updates are not allowed)",(0,n.jsx)("br",{})," - ",(0,n.jsx)(r.code,{children:"408 RequestTimeout"}),": with partial response, if not all responses from storage node are received before RequestConfig.TimeoutMs or ",(0,n.jsx)(r.code,{children:"Timeout"})," header in request",(0,n.jsx)("br",{})," - ",(0,n.jsx)(r.code,{children:"500 InternalServerError"}),": if fails to send an update request to the storage node, or fails to parse a response from the storage node"]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"request example"})}),(0,n.jsx)(r.td,{children:(0,n.jsxs)("pre",{lang:"shell",children:["curl --location --request POST '[API ENDPOINT]/chain/whitelists/' --header 'Authorization: Bearer [YOUR_ACC_API_KEY]' --header 'Content-Type: application/json' --data-raw '",(0,n.jsx)("br",{}),"[",(0,n.jsx)("br",{}),"  ",(0,n.jsx)(r.code,{children:'{<br/>    "op_type":"add_entry",<br/>    "kind":"developer", <br/>    "entry":"0xe93685f3bBA03016F02bD1828BaDD6195988D951"<br/>  \\}'}),(0,n.jsx)("br",{}),"]'"]})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"response example - success"})}),(0,n.jsx)(r.td,{children:(0,n.jsxs)("pre",{lang:"json",children:["[",(0,n.jsx)("br",{}),' "The entry: 0xe93685f3bBA03016F02bD1828BaDD6195988D951 has been added to the Developers whitelist successfully"',(0,n.jsx)("br",{}),"]"]})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"response examples - error"})}),(0,n.jsxs)(r.td,{children:["Response Code: 400 Bad Request ",(0,n.jsx)("pre",{lang:"json",children:(0,n.jsx)(r.code,{children:'{<br/>  "errorMessage":"engine request at index [1] is not authorized",<br/>  "error":""<br/>}'})}),"Note: not all error responses contain response body, but if response body exists it has the above format.",(0,n.jsx)("br",{})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},7507:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var t=s(9474);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);