(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[30],{451:function(e,t,n){"use strict";var c=n(5),a=n.n(c),r=n(192),i=n(0),o=n(267),s=n(1);const l=Object(i.forwardRef)((({children:e,title:t="",...n},c)=>Object(s.jsxs)(o.a,{ref:c,...n,children:[Object(s.jsx)(r.a,{children:Object(s.jsx)("title",{children:t})}),e]})));l.propTypes={children:a.a.node.isRequired,title:a.a.string},t.a=l},533:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(433),a=n(429),r=n(1);function i({searchQuery:e="",...t}){return Object(r.jsxs)(c.a,{...t,children:[Object(r.jsx)(a.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(r.jsxs)(a.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(r.jsxs)("strong",{children:['"',e,'"']}),". Try checking for typos or using complete words."]})]})}},576:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(7),a=n(14),r=n(1);const i=Object(c.a)("span")((({theme:e,styleProps:t})=>{const n="light"===e.palette.mode,{color:c,variant:r}=t;return{height:22,minWidth:22,lineHeight:0,borderRadius:8,cursor:"default",alignItems:"center",whiteSpace:"nowrap",display:"inline-flex",justifyContent:"center",padding:e.spacing(0,1),color:e.palette.grey[800],fontSize:e.typography.pxToRem(12),fontFamily:e.typography.fontFamily,backgroundColor:e.palette.grey[300],fontWeight:e.typography.fontWeightBold,..."default"!==c?{..."filled"===r&&{...(t=>({color:e.palette[t].contrastText,backgroundColor:e.palette[t].main}))(c)},..."outlined"===r&&{...(t=>({color:e.palette[t].main,backgroundColor:"transparent",border:"1px solid ".concat(e.palette[t].main)}))(c)},..."ghost"===r&&{...(t=>({color:e.palette[t][n?"dark":"light"],backgroundColor:Object(a.a)(e.palette[t].main,.16)}))(c)}}:{..."outlined"===r&&{backgroundColor:"transparent",color:e.palette.text.primary,border:"1px solid ".concat(e.palette.grey[50032])},..."ghost"===r&&{color:n?e.palette.text.secondary:e.palette.common.white,backgroundColor:e.palette.grey[50016]}}}}));function o({color:e="default",variant:t="ghost",children:n,...c}){return Object(r.jsx)(i,{styleProps:{color:e,variant:t},...c,children:n})}},726:function(e,t,n){"use strict";var c=n(4),a=n(2),r=n(0),i=(n(5),n(43)),o=n(49),s=n(365),l=n(268),d=n(7),j=n(10),h=n(1);function b(e,t){const n=r.Children.toArray(e).filter(Boolean);return n.reduce(((e,c,a)=>(e.push(c),a<n.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(a)})),e)),[])}function u({values:e,base:t}){const n=Object.keys(t);if(0===n.length)return e;let c;return n.reduce(((t,n)=>(t[n]="object"===typeof e?e[n]||e[c]:e,c=n,t)),{})}const p=Object(d.a)("div",{},{name:"Stack"})((({styleProps:e,theme:t})=>{let n=Object(a.a)({display:"flex"},Object(i.b)({theme:t},e.direction,(e=>({flexDirection:e}))));if(e.spacing){const c=Object(o.a)(t),a=Object.keys(t.breakpoints.values).reduce(((t,n)=>((e.spacing[n]||e.direction[n])&&(t[n]=!0),t)),{}),r=u({values:e.direction,base:a}),s=u({values:e.spacing,base:a}),d=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,["margin".concat((a=n?r[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a]))]:Object(o.d)(c,t)}};var a};n=Object(l.a)(n,Object(i.b)({theme:t},s,d))}return n})),g=r.forwardRef((function(e,t){const n=Object(j.a)({props:e,name:"MuiStack"}),r=Object(s.a)(n),{component:i="div",direction:o="column",spacing:l=0,divider:d,children:u}=r,g=Object(c.a)(r,["component","direction","spacing","divider","children"]),O={direction:o,spacing:l};return Object(h.jsx)(p,Object(a.a)({as:i,styleProps:O,ref:t},g,{children:d?b(u,d):u}))}));t.a=g},879:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var c=n(451),a=n(0),r=n(446),i=n(36),o=n(556),s=n(734),l=n(735),d=n(736),j=n(732),h=n(733),b=n(414),u=n(726),p=n(422),g=n(429),O=n(885),m=n(151),x=n(203),f=n(576),y=n(200),v=n(533),w=n(863),k=n(731),C=n(889),S=n(267),R=n(1);function P({order:e,orderBy:t,rowCount:n,headLabel:c,numSelected:a,onRequestSort:r,onSelectAllClick:i}){return Object(R.jsx)(k.a,{children:Object(R.jsxs)(j.a,{children:[Object(R.jsx)(h.a,{padding:"checkbox",children:Object(R.jsx)(b.a,{indeterminate:a>0&&a<n,checked:n>0&&a===n,onChange:i})}),c.map((n=>{return Object(R.jsx)(h.a,{align:n.alignRight?"right":"left",sortDirection:t===n.id&&e,children:Object(R.jsxs)(C.a,{hideSortIcon:!0,active:t===n.id,direction:t===n.id?e:"asc",onClick:(c=n.id,e=>{r(e,c)}),children:[n.label,t===n.id?Object(R.jsx)(S.a,{sx:{...w.a},children:"desc"===e?"sorted descending":"sorted ascending"}):null]})},n.id);var c}))]})})}var I=n(19),N=n(666),L=n.n(N),T=n(667),W=n.n(T),A=n(668),B=n.n(A),F=n(7),q=n(24),D=n(440),E=n(890),M=n(676),z=n(827),J=n(426);const Q=Object(F.a)(D.a)((({theme:e})=>({height:96,display:"flex",justifyContent:"space-between",padding:e.spacing(0,1,0,3)}))),U=Object(F.a)(E.a)((({theme:e})=>({width:240,transition:e.transitions.create(["box-shadow","width"],{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter}),"&.Mui-focused":{width:320,boxShadow:e.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(e.palette.grey[50032]," !important")}})));function H({numSelected:e,filterName:t,onFilterName:n}){const c="light"===Object(q.a)().palette.mode;return Object(R.jsxs)(Q,{sx:{...e>0&&{color:c?"primary.main":"text.primary",bgcolor:c?"primary.lighter":"primary.dark"}},children:[e>0?Object(R.jsxs)(g.a,{component:"div",variant:"subtitle1",children:[e," selected"]}):Object(R.jsx)(U,{value:t,onChange:n,placeholder:"Search user...",startAdornment:Object(R.jsx)(M.a,{position:"start",children:Object(R.jsx)(S.a,{component:I.Icon,icon:L.a,sx:{color:"text.disabled"}})})}),e>0?Object(R.jsx)(z.a,{title:"Delete",children:Object(R.jsx)(J.a,{children:Object(R.jsx)(I.Icon,{icon:W.a})})}):Object(R.jsx)(z.a,{title:"Filter list",children:Object(R.jsx)(J.a,{children:Object(R.jsx)(I.Icon,{icon:B.a})})})]})}const G=[{id:"name",label:"Name",alignRight:!1},{id:"email",label:"Email",alignRight:!1},{id:"role",label:"Role",alignRight:!1},{id:"offices",label:"Offices",alignRight:!1},{id:"teams",label:"Teams",alignRight:!1},{id:"company",label:"Company",alignRight:!1}];function K(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function V(){const e=Object(m.c)(),{userList:t}=Object(m.d)((e=>e.superAdmin)),[n,c]=Object(a.useState)(0),[r,w]=Object(a.useState)("asc"),[k,C]=Object(a.useState)([]),[S,I]=Object(a.useState)("name"),[N,L]=Object(a.useState)(""),[T,W]=Object(a.useState)(10);Object(a.useEffect)((()=>{e(Object(x.d)())}),[e]);const A=n>0?Math.max(0,(1+n)*T-t.length):0,B=function(e,t,n){const c=e||[],a=c.map(((e,t)=>[e,t]));return a.sort(((e,n)=>{const c=t(e[0],n[0]);return 0!==c?c:e[1]-n[1]})),n?Object(i.filter)(c,(e=>-1!==e.name.toLowerCase().indexOf(n.toLowerCase()))):a.map((e=>e[0]))}(t,function(e,t){return"desc"===e?(e,n)=>K(e,n,t):(e,n)=>-K(e,n,t)}(r,S),N),F=0===B.length;return Object(R.jsxs)(o.a,{children:[Object(R.jsx)(H,{numSelected:k.length,filterName:N,onFilterName:e=>{L(e.target.value)}}),Object(R.jsx)(y.a,{children:Object(R.jsx)(s.a,{sx:{minWidth:800},children:Object(R.jsxs)(l.a,{children:[Object(R.jsx)(P,{order:r,orderBy:S,headLabel:G,rowCount:t.length,numSelected:k.length,onRequestSort:(e,t)=>{w(S===t&&"asc"===r?"desc":"asc"),I(t)},onSelectAllClick:e=>{if(e.target.checked){const e=t.map((e=>e.name));C(e)}else C([])}}),Object(R.jsxs)(d.a,{children:[B.slice(n*T,n*T+T).map((e=>{const{id:t,name:n,roles:c,email:a,offices:r,photoURL:i,teams:o,companyName:s}=e,l=-1!==k.indexOf(n);return Object(R.jsxs)(j.a,{hover:!0,tabIndex:-1,role:"checkbox",selected:l,"aria-checked":l,children:[Object(R.jsx)(h.a,{padding:"checkbox",children:Object(R.jsx)(b.a,{checked:l,onChange:e=>((e,t)=>{const n=k.indexOf(t);let c=[];-1===n?c=c.concat(k,t):0===n?c=c.concat(k.slice(1)):n===k.length-1?c=c.concat(k.slice(0,-1)):n>0&&(c=c.concat(k.slice(0,n),k.slice(n+1))),C(c)})(0,n)})}),Object(R.jsx)(h.a,{component:"th",scope:"row",padding:"none",children:Object(R.jsxs)(u.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(R.jsx)(p.a,{alt:n,src:i}),Object(R.jsx)(g.a,{variant:"subtitle2",noWrap:!0,children:n})]})}),Object(R.jsx)(h.a,{align:"left",children:a}),Object(R.jsx)(h.a,{align:"left",children:Object(R.jsx)(f.a,{variant:"filled",color:"admin"!==c?"warning":"success",children:c})}),Object(R.jsx)(h.a,{align:"left",children:r.map(((e,t)=>Object(R.jsx)(f.a,{variant:"filled",sx:{borderRadius:"50%",width:25,height:25},children:e},t)))}),Object(R.jsx)(h.a,{align:"left",children:o.map(((e,t)=>Object(R.jsx)(f.a,{sx:{backgroundColor:e.color,color:"white"},children:e.name},t)))}),Object(R.jsx)(h.a,{align:"left",children:s})]},t+1)})),A>0&&Object(R.jsx)(j.a,{style:{height:53*A},children:Object(R.jsx)(h.a,{colSpan:6})})]}),F&&Object(R.jsx)(d.a,{children:Object(R.jsx)(j.a,{children:Object(R.jsx)(h.a,{align:"center",colSpan:6,sx:{py:3},children:Object(R.jsx)(v.a,{searchQuery:N})})})})]})})}),Object(R.jsx)(O.a,{rowsPerPageOptions:[10,15,25],component:"div",count:t.length,rowsPerPage:T,page:n,onPageChange:(e,t)=>{c(t)},onRowsPerPageChange:e=>{W(parseInt(e.target.value,10)),c(0)}})]})}function X(){return Object(R.jsx)(r.a,{maxWidth:"xl",children:Object(R.jsx)(V,{})})}function Y(){return Object(R.jsx)(c.a,{title:"Thimble | All Users",children:Object(R.jsx)(X,{})})}}}]);
//# sourceMappingURL=30.030ef0aa.chunk.js.map