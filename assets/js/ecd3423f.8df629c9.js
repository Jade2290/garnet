"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6761],{1829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={id:"overview",sidebar_label:"Overview",title:"Overview"},r="Extensibility",a={id:"extensions/overview",title:"Overview",description:"Garnet offers several ways to extend its core functionality:",source:"@site/docs/extensions/overview.md",sourceDirName:"extensions",slug:"/extensions/overview",permalink:"/garnet/docs/extensions/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/extensions/overview.md",tags:[],version:"current",frontMatter:{id:"overview",sidebar_label:"Overview",title:"Overview"},sidebar:"garnetDocSidebar",previous:{title:"Garnet-specific Commands",permalink:"/garnet/docs/commands/garnet-specific-commands"},next:{title:"Raw Strings",permalink:"/garnet/docs/extensions/raw-strings"}},l={},c=[{value:"Custom Raw String Command",id:"custom-raw-string-command",level:2},{value:"Custom Object Command",id:"custom-object-command",level:2},{value:"Custom Transaction",id:"custom-transaction",level:2},{value:"Custom Procedure",id:"custom-procedure",level:2},{value:"Module",id:"module",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"extensibility",children:"Extensibility"})}),"\n",(0,s.jsx)(n.p,{children:"Garnet offers several ways to extend its core functionality:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Custom Raw String Command"}),"\n",(0,s.jsx)(n.li,{children:"Custom Object Command"}),"\n",(0,s.jsx)(n.li,{children:"Custom Transaction"}),"\n",(0,s.jsx)(n.li,{children:"Custom Procedure"}),"\n",(0,s.jsx)(n.li,{children:"Module"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The below section describes those ways and the appropriate scenario to use them."}),"\n",(0,s.jsx)(n.h2,{id:"custom-raw-string-command",children:"Custom Raw String Command"}),"\n",(0,s.jsx)(n.p,{children:"This is used to operate on a single key with raw string values. The records are stored in the main store."}),"\n",(0,s.jsxs)(n.p,{children:["Details available ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/raw-strings",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"custom-object-command",children:"Custom Object Command"}),"\n",(0,s.jsx)(n.p,{children:"This command operates on a single key as well, but on the object store.\nThis is used to expose commands that perform operations on custom data types."}),"\n",(0,s.jsxs)(n.p,{children:["Details available ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/objects",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"custom-transaction",children:"Custom Transaction"}),"\n",(0,s.jsx)(n.p,{children:"Custom transactions allow operating on multiple commands within a single block of execution in a transactional manner.\nThis ensures atomicity during execution of the whole block."}),"\n",(0,s.jsxs)(n.p,{children:["Details available ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/transactions",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"custom-procedure",children:"Custom Procedure"}),"\n",(0,s.jsx)(n.p,{children:"This allows to invoke multiple commands within a single block as well. However, the commands are executed in a non-transactional manner as if they were individually issued by a client."}),"\n",(0,s.jsxs)(n.p,{children:["Details available ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/procedure",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"module",children:"Module"}),"\n",(0,s.jsx)(n.p,{children:"A module offers a way to package all related extension commands, procedures and transactions into a single binary to be loaded into Garnet."}),"\n",(0,s.jsxs)(n.p,{children:["Details available ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/module",children:"here"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);