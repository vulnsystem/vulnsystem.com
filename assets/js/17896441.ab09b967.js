(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{701:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(724),i=a(717);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(r.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(r.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},l.a.createElement(i.a,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(18),o=a(734),d=a(715);function m(e){var t=e.siteTitle,a=e.versionLabel;return l.a.createElement(i.a,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function u(e){var t=e.siteTitle,a=e.versionLabel;return l.a.createElement(i.a,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:l.a.createElement("strong",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function v(e){var t=e.versionLabel,a=e.to,n=e.onClick;return l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:l.a.createElement("strong",null,l.a.createElement(r.a,{to:a,onClick:n},l.a.createElement(i.a,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}var h=function(){var e=Object(c.default)().siteConfig.title,t=Object(o.useActivePlugin)({failfast:!0}).pluginId,a=Object(d.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(o.useActiveVersion)(t),r=Object(o.useDocVersionSuggestions)(t),i=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var h,g=null!=i?i:(h=s).docs.find((function(e){return e.id===h.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},l.a.createElement("div",null,"current"===n.name?l.a.createElement(m,{siteTitle:e,versionLabel:n.label}):l.a.createElement(u,{siteTitle:e,versionLabel:n.label})),l.a.createElement("div",{className:"margin-top--md"},l.a.createElement(v,{versionLabel:s.label,to:g.path,onClick:function(){return a(s.name)}})))},g=a(740),b=a(165),p=a.n(b);function E(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return l.a.createElement(i.a,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:l.a.createElement("time",{dateTime:new Date(1e3*t).toISOString(),className:p.a.lastUpdatedDate},a)}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return l.a.createElement(i.a,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:l.a.createElement("strong",null,t)}}," by {user}")}function w(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,n=e.lastUpdatedBy;return l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,l.a.createElement(i.a,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?l.a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:n?l.a.createElement(f,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)))}var N=a(774),L=a(813),_=a(708),k=a(166),T=a.n(k),U=a(8),y=function(e){var t=e.label;if(!U.a.canUseDOM)return null;var a=Object(n.useState)(!1),r=a[0],i=a[1],s=function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventLabel:t,eventValue:e}),i(!0)};return l.a.createElement("div",{className:"docsRating"},r?"Thanks for letting us know!":l.a.createElement(l.a.Fragment,null,"Is this page useful?",l.a.createElement("svg",{className:"i_thumbsup",alt:"Like",onClick:function(){return s(1)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},l.a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",onClick:function(){return s(0)},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76"},l.a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"}))))};t.default=function(e){var t,a=e.content,n=a.metadata,r=a.frontMatter,i=r.image,c=r.keywords,d=r.hide_title,m=r.hide_table_of_contents,u=n.description,v=n.title,b=n.editUrl,p=n.lastUpdatedAt,E=n.formattedLastUpdatedAt,f=n.lastUpdatedBy,k=n.unversionedId,U=Object(o.useActivePlugin)({failfast:!0}).pluginId,A=Object(o.useVersions)(U),O=Object(o.useActiveVersion)(U),C=A.length>1&&!O.isLast;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{title:v,description:u,keywords:c,image:i}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(_.a)("col",(t={},t[T.a.docItemCol]=!m,t))},l.a.createElement(h,null),l.a.createElement("div",{className:T.a.docItemContainer},l.a.createElement("article",null,C&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",O.label)),!d&&l.a.createElement("header",null,l.a.createElement("h1",{className:T.a.docTitle},v)),l.a.createElement("div",{className:"markdown"},l.a.createElement(a,null))),l.a.createElement(y,{label:k}),(b||p||f)&&l.a.createElement("div",{className:"docMetadata margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},b&&l.a.createElement(L.a,{editUrl:b})),p&&l.a.createElement(w,{lastUpdatedAt:p,formattedLastUpdatedAt:E}))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:n})))),!m&&a.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(N.a,{toc:a.toc}))))}},774:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(708);var i=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,s=!1,c=document.getElementsByClassName(e);l<c.length&&!s;){var o=c[l],d=o.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===m&&(r&&r.classList.remove(t),o.classList.add(t),i(o),s=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},s=a(77),c=a.n(s),o="table-of-contents__link";function d(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(d,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(c.a.tableOfContents,"thin-scrollbar")},l.a.createElement(d,{toc:t}))}},813:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),l=a.n(n),r=a(717),i=a(4),s=a(10),c=a(708),o=a(94),d=a.n(o),m=function(e){var t=e.className,a=Object(s.a)(e,["className"]);return l.a.createElement("svg",Object(i.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(d.a.iconEdit,t),"aria-label":"Edit page"},a),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(m,null),l.a.createElement(r.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);