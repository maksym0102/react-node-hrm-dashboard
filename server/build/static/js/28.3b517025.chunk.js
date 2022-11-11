(this["webpackJsonp@thimble/hrm-system-react"]=this["webpackJsonp@thimble/hrm-system-react"]||[]).push([[28],{451:function(t,e,i){"use strict";var n=i(5),a=i.n(n),r=i(192),o=i(0),c=i(267),s=i(1);const l=Object(o.forwardRef)((({children:t,title:e="",...i},n)=>Object(s.jsxs)(c.a,{ref:n,...i,children:[Object(s.jsx)(r.a,{children:Object(s.jsx)("title",{children:e})}),t]})));l.propTypes={children:a.a.node.isRequired,title:a.a.string},e.a=l},555:function(t,e,i){"use strict";var n=i(4),a=i(2),r=i(0),o=(i(5),i(8)),c=i(268),s=i(365),l=i(401),d=i(7),p=i(10);var x=r.createContext(),b=i(366),j=i(402);function h(t){return Object(b.a)("MuiGrid",t)}const m=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=Object(j.a)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((t=>"spacing-xs-".concat(t))),...["column-reverse","column","row-reverse","row"].map((t=>"direction-xs-".concat(t))),...["nowrap","wrap-reverse","wrap"].map((t=>"wrap-xs-".concat(t))),...m.map((t=>"grid-xs-".concat(String(t)))),...m.map((t=>"grid-sm-".concat(String(t)))),...m.map((t=>"grid-md-".concat(String(t)))),...m.map((t=>"grid-lg-".concat(String(t)))),...m.map((t=>"grid-xl-".concat(String(t))))]),u=i(1);function O(t){const e=parseFloat(t);return"".concat(e).concat(String(t).replace(String(e),"")||"px")}const f=Object(d.a)("div",{},{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{container:i,direction:n,item:r,lg:o,md:s,sm:l,spacing:d,wrap:p,xl:x,xs:b,zeroMinWidth:j}=t.styleProps;return Object(c.a)(Object(a.a)({},i&&e.container,r&&e.item,j&&e.zeroMinWidth,i&&0!==d&&e["spacing-xs-".concat(String(d))],"row"!==n&&e["direction-xs-".concat(String(n))],"wrap"!==p&&e["wrap-xs-".concat(String(p))],!1!==b&&e["grid-xs-".concat(String(b))],!1!==l&&e["grid-sm-".concat(String(l))],!1!==s&&e["grid-md-".concat(String(s))],!1!==o&&e["grid-lg-".concat(String(o))],!1!==x&&e["grid-xl-".concat(String(x))]),e.root||{})}})((({styleProps:t})=>Object(a.a)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"column"===t.direction&&{flexDirection:"column",["& > .".concat(g.item)]:{maxWidth:"none"}},"column-reverse"===t.direction&&{flexDirection:"column-reverse",["& > .".concat(g.item)]:{maxWidth:"none"}},"row-reverse"===t.direction&&{flexDirection:"row-reverse"},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:t,styleProps:e}){const{container:i,spacing:n}=e;let a={};if(i&&0!==n){const e=t.spacing(n);"0px"!==e&&(a={width:"calc(100% + ".concat(O(e),")"),marginTop:"-".concat(O(e)),marginLeft:"-".concat(O(e)),["& > .".concat(g.item)]:{paddingTop:O(e),paddingLeft:O(e)}})}return a}),(({theme:t,styleProps:e})=>t.breakpoints.keys.reduce(((i,n)=>(function(t,e,i,n){const r=n[i];if(!r)return;let o={};if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else{const t="".concat(Math.round(r/n.columns*1e8)/1e6,"%");let i={};if(n.container&&n.item&&0!==n.spacing){const a=e.spacing(n.spacing);if("0px"!==a){const e="calc(".concat(t," + ").concat(O(a),")");i={flexBasis:e,maxWidth:e}}}o=Object(a.a)({flexBasis:t,flexGrow:0,maxWidth:t},i)}0===e.breakpoints.values[i]?Object.assign(t,o):t[e.breakpoints.up(i)]=o}(i,t,n,e),i)),{}))),w=r.forwardRef((function(t,e){const i=Object(p.a)({props:t,name:"MuiGrid"}),c=Object(s.a)(i),{className:d,columns:b=12,component:j="div",container:m=!1,direction:g="row",item:O=!1,lg:w=!1,md:v=!1,sm:y=!1,spacing:k=0,wrap:F="wrap",xl:A=!1,xs:S=!1,zeroMinWidth:C=!1}=c,W=Object(n.a)(c,["className","columns","component","container","direction","item","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=r.useContext(x)||b,T=Object(a.a)({},c,{columns:R,container:m,direction:g,item:O,lg:w,md:v,sm:y,spacing:k,wrap:F,xl:A,xs:S,zeroMinWidth:C}),P=(t=>{const{classes:e,container:i,direction:n,item:a,lg:r,md:o,sm:c,spacing:s,wrap:d,xl:p,xs:x,zeroMinWidth:b}=t,j={root:["root",i&&"container",a&&"item",b&&"zeroMinWidth",i&&0!==s&&"spacing-xs-".concat(String(s)),"row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==d&&"wrap-xs-".concat(String(d)),!1!==x&&"grid-xs-".concat(String(x)),!1!==c&&"grid-sm-".concat(String(c)),!1!==o&&"grid-md-".concat(String(o)),!1!==r&&"grid-lg-".concat(String(r)),!1!==p&&"grid-xl-".concat(String(p))]};return Object(l.a)(j,h,e)})(T);return B=Object(u.jsx)(f,Object(a.a)({styleProps:T,className:Object(o.a)(P.root,d),as:j,ref:e},W)),12!==R?Object(u.jsx)(x.Provider,{value:R,children:B}):B;var B}));e.a=w},556:function(t,e,i){"use strict";var n=i(2),a=i(4),r=i(0),o=(i(5),i(8)),c=i(401),s=i(7),l=i(10),d=i(433),p=i(366),x=i(402);function b(t){return Object(p.a)("MuiCard",t)}Object(x.a)("MuiCard",["root"]);var j=i(1);const h=Object(s.a)(d.a,{},{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root||{}})((()=>({overflow:"hidden"}))),m=r.forwardRef((function(t,e){const i=Object(l.a)({props:t,name:"MuiCard"}),{className:r,raised:s=!1}=i,d=Object(a.a)(i,["className","raised"]),p=Object(n.a)({},i,{raised:s}),x=(t=>{const{classes:e}=t;return Object(c.a)({root:["root"]},b,e)})(p);return Object(j.jsx)(h,Object(n.a)({className:Object(o.a)(x.root,r),elevation:s?8:void 0,ref:e,styleProps:p},d))}));e.a=m},674:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/>',width:24,height:24}},823:function(t,e){e.__esModule=!0,e.default={body:'<path fill="currentColor" d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z"/>',width:24,height:24}},877:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return ct}));var n=i(7),a=i(451),r=i(411),o=i(446),c=i(429),s=i(62),l=i(1);const d=Object(n.a)(r.a.div)((({theme:t})=>({position:"relative",backgroundColor:"#F2F3F5",[t.breakpoints.up("md")]:{top:0,left:0,width:"100%",alignItems:"center"}}))),p=Object(n.a)("div")((({theme:t})=>({zIndex:10,margin:"auto",textAlign:"center",position:"relative",paddingTop:30,paddingBottom:30,[t.breakpoints.up("md")]:{margin:"unset",textAlign:"left"}})));function x(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d,{initial:"initial",animate:"animate",variants:s.j,children:Object(l.jsx)(o.a,{sx:{backgroundColor:"#FCEEE2"},maxWidth:!1,children:Object(l.jsxs)(p,{children:[Object(l.jsx)(r.a.div,{variants:s.f,children:Object(l.jsx)(c.a,{variant:"h1",sx:{color:"#2E2836",textAlign:"center",fontFamily:"'PoppinsBlack', sans-serif"},children:"Coordinate your team, for free."})}),Object(l.jsx)(r.a.div,{variants:s.f,children:Object(l.jsxs)(c.a,{variant:"h3",sx:{py:2,color:"#2E2836",textAlign:"center",fontFamily:"'PoppinsRegular', sans-serif"},children:["Get advanced features, ",Object(l.jsx)("br",{}),"if necessary."]})})]})})})})}var b=i(555),j=i(267),h=i(19),m=i(22),g=i(674),u=i.n(g),O=i(556),f=i(435),w=i(13);const v=Object(n.a)(O.a)((({theme:t})=>({maxWidth:480,margin:"auto",display:"flex",position:"relative",alignItems:"left",justifyContent:"space-between",flexDirection:"column",padding:t.spacing(3),[t.breakpoints.up(414)]:{padding:t.spacing(5)}}))),y="'ManropeRegular', sans-serif",k="'PoppinsRegular', sans-serif";function F({card:t,index:e}){const{subscription:i,icon:n,price:a,caption:r,lists:o,labelAction:s,backColor:d}=t;return Object(l.jsxs)(v,{sx:{backgroundColor:d,boxShadow:"none",borderRadius:"40px",minHeight:"555px"},children:[Object(l.jsx)(j.a,{component:"img",alt:i,src:n,sx:{width:80,height:80,mt:3}}),Object(l.jsxs)(j.a,{sx:{display:"flex",justifyContent:"flex-start",my:1},children:[Object(l.jsx)(c.a,{variant:"subtitle1",sx:{color:"text.secondary",fontFamily:k},children:2!==e?"\u20ac":""}),0===e||1===e?Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:k},children:a}):Object(l.jsx)(c.a,{variant:"h5",children:"Tailored"}),1===e?Object(l.jsx)(c.a,{gutterBottom:!0,component:"span",variant:"subtitle2",sx:{marginLeft:"10px",alignSelf:"flex-end",fontFamily:k},children:"per user/month*"}):""]}),Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:k},children:i}),Object(l.jsx)(c.a,{variant:"body2",sx:{color:"black",textTransform:"capitalize",fontFamily:y},children:r}),Object(l.jsx)(j.a,{component:"ul",sx:{my:2,width:"100%",..."Enterprise"===i&&{marginBottom:"55px"}},children:o.map((t=>Object(l.jsxs)(j.a,{component:"li",sx:{display:"flex",typography:"body2",alignItems:"center",color:t.isAvailable?"text.primary":"text.disabled","&:not(:last-of-type)":{mb:1}},children:[Object(l.jsx)(j.a,{component:h.Icon,icon:u.a,sx:{width:20,height:20,mr:1.5}}),Object(l.jsx)(c.a,{variant:"body1",sx:{fontFamily:y},children:t.text})]},t.text)))}),Object(l.jsx)(f.a,{size:"large",variant:"contained",component:m.a,to:w.b.root,color:"warning",sx:{marginTop:"20px",backgroundColor:"#2E2836",color:"white",fontSize:"24px",paddingTop:"33px",paddingBottom:"35px",width:"180px",fontFamily:y,"&:hover":{backgroundColor:"#575058"}},children:s})]})}const A=[{subscription:"Free",icon:"/static/how-it-works/plan1.webp",price:0,caption:"For now & for ever!",lists:[{text:"Basic features",isAvailable:!0},{text:"Up to 50 users",isAvailable:!0},{text:"Slack integration",isAvailable:!0},{text:"Teams integration",isAvailable:!0}],backColor:"#F4F1FF",labelAction:"Get Started"},{subscription:"Premium",icon:"/static/how-it-works/plan2.webp",price:3.4,caption:"Everything in Free plan +",lists:[{text:"Advanced features",isAvailable:!0},{text:"Unlimited users",isAvailable:!0},{text:"Analytics dashboard",isAvailable:!0},{text:"Unlimited integrations",isAvailable:!0}],backColor:"#FFFFFF",labelAction:"Try for Free"},{subscription:"Enterprise",icon:"/static/how-it-works/plan3.webp",price:9.99,caption:"Suitable for large organizations",lists:[{text:"Dedicated Manager",isAvailable:!0},{text:"Customized contracts",isAvailable:!0}],backColor:"#FBE489",labelAction:"Contact us"}],S=Object(n.a)("div")((({theme:t})=>({minHeight:"100%",paddingTop:t.spacing(15),paddingBottom:t.spacing(10),backgroundColor:"#2E2836"}))),C=Object(n.a)("div")((({theme:t})=>({paddingTop:t.spacing(15),paddingBottom:"180px",backgroundColor:"#FCEEE2"}))),W=Object(n.a)("img")((({theme:t})=>({width:"100%",[t.breakpoints.up("lg")]:{left:0,width:"auto",height:"50px"}}))),R=[{id:1,img_src:"/static/how-it-works/hris2.webp"},{id:2,img_src:"/static/how-it-works/hris3.webp"},{id:3,img_src:"/static/how-it-works/hris4.webp"}];function T(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,{}),Object(l.jsx)(S,{children:Object(l.jsxs)(o.a,{maxWidth:"lg",sx:{marginTop:"-430px"},children:[Object(l.jsx)(b.a,{container:!0,spacing:3,children:A.map(((t,e)=>Object(l.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(F,{card:t,index:e})},t.subscription)))}),Object(l.jsxs)(j.a,{sx:{textAlign:"center",mt:"60px"},children:[Object(l.jsx)(c.a,{variant:"h4",sx:{color:"white",fontFamily:"'PoppinsRegular', sans-serif"},children:"Integrate with your HRIS tools"}),Object(l.jsx)(o.a,{maxWidth:"md",sx:{mt:7,mb:3},children:Object(l.jsx)(b.a,{container:!0,spacing:3,children:R.map((t=>Object(l.jsx)(b.a,{item:!0,sx:{color:"white"},xs:4,sm:4,md:4,children:Object(l.jsx)(W,{alt:"hero",src:t.img_src})},t.id)))})})]})]})})]})}var P=i(131),B=i(24),M=i(823),z=i.n(M);const E=Object(n.a)("div")((({theme:t})=>({padding:t.spacing(15,0)}))),I=Object(P.a)((()=>({root:{"& table>thead>tr>th:nth-child(2)":{backgroundColor:"#F4F1FF",borderTopRightRadius:"40px",borderTopLeftRadius:"40px",marginRight:"10px"},"& table>thead>tr>th:nth-child(4)":{borderTopRightRadius:"40px",borderTopLeftRadius:"40px",border:"1px solid black",borderBottom:"0px"},"& table>tbody>tr>td:nth-child(1)":{textAlign:"left",padding:"0px"},"& table>tbody>tr>td:nth-child(2)":{backgroundColor:"#F4F1FF",textAlign:"center",padding:"16px"},"& table>tbody>tr>td:nth-child(4)":{borderLeft:"1px solid black",borderRight:"1px solid black",textAlign:"center",padding:"16px"},"& table>tbody>tr:last-child>td:nth-child(2)":{backgroundColor:"#F4F1FF",borderBottomRightRadius:"40px",borderBottomLeftRadius:"40px",marginRight:"10px"},"& table>tbody>tr:last-child>td:nth-child(4)":{borderBottomRightRadius:"40px",borderBottomLeftRadius:"40px",border:"1px solid black",borderTop:"0px"}}})))(o.a),L=[{title:"Slack & Teams integration",isFree:!0,isPro:!0},{title:"Weekly reminder",isFree:!0,isPro:!0},{title:"HRIS integration",isFree:!1,isPro:!0},{title:"Custom status",isFree:!1,isPro:!0},{title:"Half-days",isFree:!1,isPro:!0},{title:"Overflow management",isFree:!1,isPro:!0},{title:"Analytics dashboard",isFree:!1,isPro:!0},{title:"Customer support",isFree:!1,isPro:!0}];function G(){const t=Object(B.a)(),e="'PoppinsLight', sans-serif",i="'PoppinsRegular', sans-serif";return Object(l.jsx)(E,{children:Object(l.jsx)(I,{maxWidth:"lg",children:Object(l.jsxs)("table",{style:{width:"100%"},cellSpacing:"0",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{width:"350px"}),Object(l.jsx)("th",{width:"350px",children:Object(l.jsxs)(j.a,{sx:{textAlign:"center",padding:"40px 10px 10px 10px",[t.breakpoints.up("md")]:{padding:"40px 10px 10px 40px",textAlign:"left"}},children:[Object(l.jsxs)(j.a,{sx:{display:"flex",justifyContent:"flex-start"},children:[Object(l.jsx)(c.a,{variant:"h5",sx:{[t.breakpoints.down("md")]:{display:"none"}},children:"\u20ac"}),Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:i,[t.breakpoints.down("md")]:{display:"none"}},children:"0"})]}),Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:i},children:"Free"}),Object(l.jsx)(f.a,{size:"large",variant:"contained",to:w.b.root,color:"warning",sx:{marginTop:"20px",backgroundColor:"#2E2836",color:"white",fontSize:"24px",paddingTop:"33px",paddingBottom:"35px",width:"180px",fontFamily:e,"&:hover":{backgroundColor:"#575058"},[t.breakpoints.down("sm")]:{paddingTop:"10px",paddingBottom:"12px",fontSize:"16px",width:"100%"}},children:"Get started"})]})}),Object(l.jsx)("th",{}),Object(l.jsx)("th",{width:"350px",children:Object(l.jsxs)(j.a,{sx:{textAlign:"center",padding:"40px 10px 10px 10px",[t.breakpoints.up("md")]:{padding:"40px 10px 10px 40px",textAlign:"left"}},children:[Object(l.jsxs)(j.a,{sx:{display:"flex",justifyContent:"flex-start"},children:[Object(l.jsx)(c.a,{variant:"h5",sx:{[t.breakpoints.down("md")]:{display:"none"}},children:"\u20ac"}),Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:i,[t.breakpoints.down("md")]:{display:"none"}},children:"3.4"}),Object(l.jsx)(c.a,{variant:"h5",sx:{textDecoration:"underline dotted",paddingTop:"10px",marginLeft:"10px",[t.breakpoints.down("md")]:{display:"none"}},children:"per user/month*"})]}),Object(l.jsx)(c.a,{variant:"h3",sx:{fontFamily:i},children:"Premium"}),Object(l.jsx)(f.a,{size:"large",variant:"contained",to:w.b.root,color:"warning",sx:{marginTop:"20px",backgroundColor:"#2E2836",color:"white",fontSize:"24px",paddingTop:"33px",paddingBottom:"35px",width:"180px",fontFamily:e,"&:hover":{backgroundColor:"#575058"},[t.breakpoints.down("sm")]:{paddingTop:"10px",paddingBottom:"12px",fontSize:"16px",width:"100%"}},children:"Try for free"})]})})]})}),Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(c.a,{variant:"h4",paragraph:!0,sx:{paddingTop:"50px"},children:"Usage"})}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"User limit"}),Object(l.jsx)("td",{children:"50"}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:"Unlimited"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Offices"}),Object(l.jsx)("td",{children:"3"}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:"Unlimited"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Teams"}),Object(l.jsx)("td",{children:"Unlimited"}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:"Unlimited"})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(c.a,{variant:"h4",paragraph:!0,sx:{paddingTop:"50px"},children:"Features"})}),Object(l.jsx)("td",{style:{position:"relative",height:"200px"},children:Object(l.jsx)(j.a,{component:"img",src:"/static/pricing/pricing1.webp",sx:{position:"absolute",left:"50%",width:"100%",maxWidth:"200px",height:"auto",transform:"translate(-50%, -50%)"}})}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{style:{position:"relative"},children:Object(l.jsx)(j.a,{component:"img",src:"/static/pricing/pricing2.webp",sx:{position:"absolute",left:"50%",width:"100%",maxWidth:"200px",height:"auto",transform:"translate(-50%, -50%)"}})})]}),L.map((t=>Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.title}),Object(l.jsx)("td",{children:t.isFree?Object(l.jsx)(j.a,{component:h.Icon,icon:u.a,sx:{width:30,height:30,mr:1.5}}):Object(l.jsx)(j.a,{component:h.Icon,icon:z.a,sx:{width:30,height:30,mr:1.5}})}),Object(l.jsx)("td",{}),Object(l.jsx)("td",{children:t.isPro?Object(l.jsx)(j.a,{component:h.Icon,icon:u.a,sx:{width:30,height:30,mr:1.5}}):Object(l.jsx)(j.a,{component:h.Icon,icon:z.a,sx:{width:30,height:30,mr:1.5}})})]},t.title)))]})]})})})}var _=i(408);const H=[{id:0,icon:"/static/pricing/platform.svg",title:"Web app",description:"Desktop and Mobile"},{id:1,icon:"/static/pricing/platform.svg",title:"Mobile app",description:"App Store",description1:"Google Play Store"},{id:2,icon:"/static/pricing/platform.svg",title:"Slack plugin",description:"Real-time status"}],U=Object(n.a)("div")((({theme:t})=>({paddingTop:t.spacing(2),backgroundColor:"#FCEEE2",[t.breakpoints.up("md")]:{paddingBottom:t.spacing(10)}}))),D=Object(n.a)(O.a)((()=>({maxWidth:"none",minHeight:240,margin:"auto",textAlign:"center",boxShadow:"none",backgroundColor:"#FCEEE2"}))),N=Object(n.a)("img")((({theme:t})=>({width:"100%",height:"auto",margin:"auto",marginBottom:t.spacing(3)}))),q=Object(n.a)("img")((()=>({width:"auto",height:20,margin:"auto"}))),J=Object(n.a)("div")((()=>({display:"flex"}))),Y=Object(n.a)("div")((()=>({minWidth:"110px",marginRight:"20px"}))),K=Object(n.a)("div")((()=>({minWidth:"165px"}))),Q="'PoppinsRegular', sans-serif",V="'PoppinsLight', sans-serif";function X(){const t=Object(B.a)(),e=Object(_.a)(t.breakpoints.up("lg"));return Object(l.jsx)(U,{children:Object(l.jsxs)(o.a,{maxWidth:"lg",children:[Object(l.jsx)(j.a,{sx:{mb:{xs:2,md:5},mt:"30px"},children:Object(l.jsx)(s.c,{variants:s.e,children:Object(l.jsx)(c.a,{variant:"h3",align:"center",sx:{fontFamily:Q},children:"For everyone, everywhere."})})}),Object(l.jsx)(b.a,{container:!0,spacing:e?4:1,children:H.map((e=>Object(l.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(l.jsx)(s.c,{variants:s.g,children:Object(l.jsxs)(D,{children:[Object(l.jsx)(N,{src:e.icon,alt:e.title}),Object(l.jsx)(c.a,{variant:"h5",paragraph:!0,sx:{textAlign:"center",fontFamily:Q,[t.breakpoints.up("md")]:{textAlign:"left",marginBottom:"5px"}},children:e.title}),1===e.id&&Object(l.jsxs)(J,{children:[Object(l.jsxs)(Y,{children:[Object(l.jsx)(q,{src:"/static/pricing/apple_icon.svg",alt:"small icon",sx:{float:"left"}}),Object(l.jsx)(c.a,{sx:{color:"text.primary",fontFamily:V,textAlign:"center",[t.breakpoints.up("md")]:{textAlign:"left"}},children:e.description})]}),Object(l.jsxs)(K,{children:[Object(l.jsx)(q,{src:"/static/pricing/google_icon.svg",alt:"small icon",sx:{float:"left"}}),Object(l.jsx)(c.a,{sx:{color:"text.primary",fontFamily:V,textAlign:"center",[t.breakpoints.up("md")]:{textAlign:"left"}},children:e.description1})]})]}),1!==e.id&&Object(l.jsx)(c.a,{sx:{color:"text.primary",fontFamily:V,textAlign:"center",[t.breakpoints.up("md")]:{textAlign:"left"}},children:e.description})]})})},e.title)))})]})})}const Z=[{icon:"/static/pricing/faq1.webp",title:"Will I pay for every employees?",description:"No, with Thimble you only get billed for what you use. You will get billed for each active user, meaning people going to an office every month (i.e. 100% remote workers can use Thimble for free). Also, you can cancel at any time."},{icon:"/static/pricing/faq2.webp",title:"Do you have a desk-booking tool?",description:"We have a space-booking system that allows employees to book their seats in the office and easily see who's around. It's faster and easier than desk-booking."},{icon:"/static/pricing/faq3.webp",title:"We need to add new users to our team. How will that be billed?",description:"We\u2019ll make a one-time, prorated charge to your credit card to cover your new team member\u2019s account for the remainder of the current billing period."},{icon:"/static/pricing/faq4.webp",title:"How long is my trial period?",description:"1 month starting on the account creation."}],$=Object(n.a)("div")((({theme:t})=>({paddingTop:t.spacing(2),[t.breakpoints.up("md")]:{paddingBottom:t.spacing(10)}}))),tt=Object(n.a)("div")((()=>({display:"flex"}))),et=Object(n.a)(O.a)((()=>({maxWidth:"100%",minHeight:240,textAlign:"left",boxShadow:"none"}))),it=Object(n.a)("img")((()=>({width:"auto",height:75,marginRight:"10px"}))),nt="'PoppinsRegular', sans-serif";function at(){const t=Object(B.a)();Object(_.a)(t.breakpoints.up("lg"));return Object(l.jsx)($,{children:Object(l.jsxs)(o.a,{maxWidth:"lg",children:[Object(l.jsx)(j.a,{sx:{mb:{xs:2,md:5},mt:"30px"},children:Object(l.jsx)(s.c,{variants:s.e,children:Object(l.jsx)(c.a,{variant:"h3",align:"left",sx:{fontFamily:nt},children:"Frequently asked"})})}),Object(l.jsx)(b.a,{container:!0,spacing:1,children:Z.map((t=>Object(l.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(l.jsx)(s.c,{variants:s.g,children:Object(l.jsxs)(tt,{children:[Object(l.jsx)(it,{src:t.icon,alt:t.title}),Object(l.jsxs)(et,{children:[Object(l.jsx)(c.a,{variant:"h5",paragraph:!0,sx:{fontFamily:nt,textAlign:"left"},children:t.title}),Object(l.jsx)(c.a,{sx:{color:"text.primary",fontFamily:"'PoppinsLight', sans-serif",textAlign:"left"},children:t.description})]})]})})},t.title)))})]})})}const rt=Object(n.a)(a.a)({height:"100%"}),ot=Object(n.a)("div")((({theme:t})=>({overflow:"hidden",position:"relative",backgroundColor:t.palette.background.default})));function ct(){return Object(l.jsxs)(rt,{title:"Thimble | Pricing",id:"move_top",children:[Object(l.jsx)(x,{}),Object(l.jsxs)(ot,{children:[Object(l.jsx)(T,{}),Object(l.jsx)(G,{}),Object(l.jsx)(X,{}),Object(l.jsx)(at,{})]})]})}}}]);
//# sourceMappingURL=28.3b517025.chunk.js.map