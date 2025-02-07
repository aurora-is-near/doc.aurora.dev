"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[4813],{4239:(e,t,a)=>{a.d(t,{A:()=>r});a(9474);var n=a(8323),s=a(9720),i=a(3274);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(s.A,{permalink:a,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(n.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},5123:(e,t,a)=>{a.d(t,{A:()=>B});a(9474);var n=a(3526),s=a(8999),i=a(3274);function r(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var l=a(522);const o={title:"title_zhlg"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,s.e7)(),{permalink:c,title:d}=a,g=r?"h1":"h2";return(0,i.jsx)(g,{className:(0,n.A)(o.title,t),children:r?d:(0,i.jsx)(l.A,{to:c,children:d})})}var d=a(8323),g=a(8178),u=a(6261);const m={container:"container_bHeg"};function h(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,g.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:r,readingTime:l}=a,o=(0,u.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,n.A)(m.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(h,{readingTime:l})]})]});var c}var b=a(4751);const A={authorCol:"authorCol_PhGv",imageOnlyAuthorRow:"imageOnlyAuthorRow_ZFPL",imageOnlyAuthorCol:"imageOnlyAuthorCol_Sx4t"};function f(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?A.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?A.imageOnlyAuthorCol:A.authorCol),children:(0,i.jsx)(b.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(j,{}),(0,i.jsx)(f,{})]})}var T=a(8231),N=a(3017);function _(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,s.e7)();return(0,i.jsx)("div",{id:r?T.LU:void 0,className:(0,n.A)("markdown",a),children:(0,i.jsx)(N.A,{children:t})})}var w=a(9992),k=a(9637),P=a(3341);function y(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(y,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,g=!t&&o,u=a.length>0;if(!(u||g||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",w.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(P.A,{tags:a})})}),e&&(0,i.jsx)(k.A,{className:(0,n.A)("margin-top--sm",w.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":g}),children:(0,i.jsx)(P.A,{tags:a})}),g&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":u}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function B(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,n.A)(l,a),children:[(0,i.jsx)(v,{}),(0,i.jsx)(_,{children:t}),(0,i.jsx)(U,{})]})}},7026:(e,t,a)=>{a.d(t,{A:()=>r});a(9474);var n=a(8999),s=a(5123),i=a(3274);function r(e){let{items:t,component:a=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},2591:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(9474);var n=a(3526),s=a(8323),i=a(6395),r=a(9992),l=a(8402),o=a(522),c=a(7954),d=a(4239),g=a(3637),u=a(7026),m=a(6140),h=a(4963),p=a(3274);function x(e){let{tag:t}=e;const a=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:a,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:a,sidebar:n,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:a}),(0,p.jsx)(d.A,{metadata:i})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,n.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(j,{...e})]})}},6140:(e,t,a)=>{a.d(t,{A:()=>c});a(9474);var n=a(3526),s=a(6717),i=a(9992),r=a(3926),l=a(3274);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,n.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},9720:(e,t,a)=>{a.d(t,{A:()=>r});a(9474);var n=a(3526),s=a(522),i=a(3274);function r(e){const{permalink:t,title:a,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},1681:(e,t,a)=>{a.d(t,{A:()=>l});a(9474);var n=a(3526),s=a(522);const i={tag:"tag_r0gA",tagRegular:"tagRegular_xFZp",tagWithCount:"tagWithCount_RtoG"};var r=a(3274);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},3341:(e,t,a)=>{a.d(t,{A:()=>o});a(9474);var n=a(3526),s=a(8323),i=a(1681);const r={tags:"tags_h0Ok",tag:"tag_aRsb"};var l=a(3274);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},8402:(e,t,a)=>{a.d(t,{ZD:()=>r,uz:()=>l});a(9474);var n=a(8323),s=a(8178);a(3274);function i(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,n.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function r(e){const t=i();return(0,n.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}const l=()=>(0,n.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},6717:(e,t,a)=>{a.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});a(9474);var n=a(8323),s=a(9920),i=a(3274);function r(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(n.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);