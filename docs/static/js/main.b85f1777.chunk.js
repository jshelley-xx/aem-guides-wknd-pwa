(this["webpackJsonpaem-guides-wknd-pwa"]=this["webpackJsonpaem-guides-wknd-pwa"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n.n(i),a=n(25),l=n.n(a),c=(n(34),n(8)),o=(n(35),"https://publish-p25404-e44704-cmstg.adobeaemcloud.com/"),s={primary:"#202020",accent:"#FFEB00",background:"#202020",surface:"#202020",error:"#B00020",text:"#fff",onSurface:"#000000",disabled:"rgb(255, 69, 58)",placeholder:"rgb(255, 69, 58)",backdrop:"rgb(255, 69, 58)",notification:"rgb(255, 69, 58)"},d=n(11),u=n(3),j=n(28),p=n(29);function v(e){return!!e&&(e.startsWith("http")?e:"".concat(o).concat(e))}var b=n(1);function h(e){var t=e.title,n=e.imgSrc,i=e.subtitle,r=e.height,a=e.link,l=void 0===a?"/":a,o=n?s.background:s.text,d={container:{width:"100vw",height:r||"auto",textDecoration:"none",display:"flex",flexDirection:"column"},link:{flex:1,textDecoration:"none",padding:"20px"},title:{fontSize:"30px",color:o,fontWeight:"bold",textTransform:"uppercase",margin:0},subtitle:{fontSize:"16px",color:o,fontWeight:"bold",textTransform:"uppercase",margin:0},imgBG:{flex:1,background:n?"url(".concat(v(n),")"):"transparent",padding:l?0:"20px",display:"flex",backgroundSize:"cover"},titleSkeleton:{height:"2.5rem",width:"85%",boxShadow:"0 0 5px rgb(0 0 0 / 50%)"}};r||(d.container.flex=1);var u=function(){return Object(b.jsxs)(b.Fragment,{children:[!t&&Object(b.jsx)("div",{style:d.titleSkeleton,className:"loading-skeleton"}),t&&Object(b.jsx)("h2",{style:d.title,children:t}),i&&Object(b.jsx)("h4",{style:d.subtitle,children:i})]})};return Object(b.jsx)("div",{style:d.container,className:n?"":"loading-skeleton",children:Object(b.jsx)("div",{style:d.imgBG,children:l?Object(b.jsx)(c.b,{to:l,style:d.link,children:u()}):u()})})}var m=n(17),x=n(27);function g(e,t){var n=Object(i.useState)(null),r=Object(m.a)(n,2),a=r[0],l=r[1],c=Object(i.useState)(null),s=Object(m.a)(c,2),d=s[0],u=s[1];return Object(i.useEffect)((function(){var n=new x.AEMHeadless({serviceURL:o,endpoint:"graphql/execute.json"});(e?n.runQuery.bind(n):n.runPersistedQuery.bind(n+"?"+new Date))(e||t).then((function(e){var t=e.data,n=e.errors;n&&u(function(e){return e.map((function(e){return e.message})).join(",")}(n)),t&&l(t)})).catch((function(e){u(e)}))}),[e,t]),{data:a,errorMessage:d}}function f(){return Object(b.jsx)("div",{children:"Error Screen"})}function O(e){return e?e.adventureList.items.map((function(e,t){return Object(b.jsx)(h,{link:"/detail?_path=".concat(e._path),title:"Featured Adventure",subtitle:e.adventureTitle,imgSrc:e.adventurePrimaryImage._path||!1},t)})):Object(b.jsx)(h,{})}function y(){var e,t,n,i,r=!1,a=!1,l=!1,c=g(null,"wknd/native-app-home"),o=c.data,s=c.errorMessage;return s?Object(b.jsx)(f,{error:s}):((null===o||void 0===o||null===(e=o.appByPath)||void 0===e?void 0:e.item)&&(r=o.appByPath.item),(null===(t=r)||void 0===t?void 0:t.appTitle)&&(a=r.appTitle),(null===(n=r)||void 0===n||null===(i=n.appHeroImage)||void 0===i?void 0:i._path)&&(l=r.appHeroImage._path),Object(b.jsxs)("div",{style:k.container,children:[Object(b.jsx)(h,{title:a,imgSrc:l,link:"/adventures"}),O(o)]}))}var k={container:{flex:1,display:"flex",flexDirection:"column"}};function S(e){var t=e.imgSrc,n=e.title;return Object(b.jsx)("div",{style:w.imageContainer,className:"loading-skeleton",children:t&&Object(b.jsx)("img",{src:v(t),style:w.image,alt:n})})}var w={imageContainer:{position:"relative",paddingTop:"55%",overflow:"hidden"},image:{width:"100%",maxWidth:"100%",position:"absolute",top:0,right:0,bottom:0,left:0,objectFit:"cover"}};function T(e){var t,n=e._path,i=e.title,r=e.description,a=e.imgSrc;return Object(b.jsx)("div",{style:_.container,children:Object(b.jsxs)(c.b,{to:"/detail?_path=".concat(n),style:_.link,children:[Object(b.jsx)(S,{imgSrc:a,title:i}),Object(b.jsx)("h5",{style:_.title,children:i}),r&&Object(b.jsx)("div",{dangerouslySetInnerHTML:(t=r,{__html:t})})]})})}var _={container:{flex:1},link:{textDecoration:"none",color:s.text},title:{textTransform:"uppercase",marginTop:".5rem"},description:{margin:0}};function D(e){return!!e&&Object(b.jsx)("div",{style:C.list,children:e.map((function(e,t){var n,i,r=e._path,a=(null===e||void 0===e?void 0:e.adventureTitle)||!1,l=(null===e||void 0===e||null===(n=e.adventureDescription)||void 0===n?void 0:n.html)||!1,c=(null===e||void 0===e||null===(i=e.adventurePrimaryImage)||void 0===i?void 0:i._path)||!1;return Object(b.jsx)(T,{_path:r,title:a,description:l,imgSrc:c},t)}))})}function B(){var e,t=!1,n=g(null,"wknd/native-app-adventures"),i=n.data,r=n.errorMessage;return r?Object(b.jsx)(f,{error:r}):((null===i||void 0===i||null===(e=i.adventureList)||void 0===e?void 0:e.items)&&(t=i.adventureList.items),Object(b.jsxs)("div",{style:C.container,children:[Object(b.jsx)(h,{imgSrc:"/content/dam/wknd/en/adventures/cycling-southern-utah/AdobeStock_221043703.jpg",title:"WKND Adventures",height:"100px"}),Object(b.jsx)("h2",{style:C.title,children:"Our Adventures"}),D(t)]}))}var C={container:{flex:1,display:"flex",flexDirection:"column",marginBottom:"6rem"},title:{padding:"1rem 1rem 0",margin:0,textTransform:"uppercase"},list:{padding:"1rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"}};function I(){var e,t,n,i,r,a,l,c,o=new URLSearchParams(Object(u.f)().search).get("_path"),s=g(null,"".concat("wknd/native-app-adventure%3bapath=").concat(o)),d=s.data,j=s.errorMessage;if(j)return Object(b.jsx)(f,{error:j});var p,v=(null===d||void 0===d||null===(e=d.adventureByPath)||void 0===e||null===(t=e.item)||void 0===t?void 0:t.adventureTitle)||!1,h=(null===d||void 0===d||null===(n=d.adventureByPath)||void 0===n||null===(i=n.item)||void 0===i||null===(r=i.adventureDescription)||void 0===r?void 0:r.html)||!1,m=(null===d||void 0===d||null===(a=d.adventureByPath)||void 0===a||null===(l=a.item)||void 0===l||null===(c=l.adventurePrimaryImage)||void 0===c?void 0:c._path)||!1;return Object(b.jsxs)("div",{style:P.container,children:[!v&&Object(b.jsx)("div",{className:"loading-skeleton",style:P.titleSkeleton}),v&&Object(b.jsx)("h1",{style:P.title,children:v}),Object(b.jsx)(S,{imgSrc:m,alt:v}),h&&Object(b.jsx)("div",{style:P.description,dangerouslySetInnerHTML:(p=h,{__html:p})})]})}var P={container:{flex:1,marginBottom:"6rem"},title:{padding:"1rem",fontSize:"1.5rem",textTransform:"uppercase",maxWidth:"100%",margin:0},description:{padding:"1rem"},titleSkeleton:{height:"2.5rem",width:"85%",margin:"1rem"}};function F(){var e=Object(u.f)();console.log("location",e);var t="/"===e.pathname,n="/adventures"===e.pathname;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:L.tabsContainer,children:Object(b.jsxs)("nav",{style:L.tabs,children:[Object(b.jsxs)(c.b,{to:"/",style:Object(d.a)(Object(d.a)({},L.tab),{},{color:t?s.accent:s.text}),children:[Object(b.jsx)(j.a,{size:"2rem"}),Object(b.jsx)("strong",{children:"Home"})]}),Object(b.jsxs)(c.b,{to:"/adventures",style:Object(d.a)(Object(d.a)({},L.tab),{},{color:n?s.accent:s.text}),children:[Object(b.jsx)(p.a,{size:"2rem"}),Object(b.jsx)("strong",{children:"Adventures"})]})]})}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/adventures",children:Object(b.jsx)(B,{})}),Object(b.jsx)(u.a,{path:"/detail",children:Object(b.jsx)(I,{})}),Object(b.jsx)(u.a,{path:"/",children:Object(b.jsx)(y,{})})]})]})}var L={tabsContainer:{position:"fixed",bottom:0,right:0,left:0,padding:"0 20px",zIndex:10,backgroundColor:s.background,height:"6rem"},tabs:{display:"flex",flexDirection:"row",listStyle:"none",margin:0,padding:0,alignItems:"center",justifyContent:"space-between"},tab:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",color:s.text,flex:1,padding:"20px",textDecoration:"none"}};function M(){return Object(b.jsx)("div",{style:z.container,children:Object(b.jsx)(c.a,{children:Object(b.jsx)(F,{})})})}var z={container:{display:"flex",flex:1,minHeight:"100vh",width:"100vw",position:"relative",flexDirection:"column",backgroundColor:s.background,paddingTop:"10px",color:s.text}},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,l=t.getTTFB;n(e),i(e),r(e),a(e),l(e)}))};l.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(M,{})}),document.getElementById("root")),H()}},[[59,1,2]]]);
//# sourceMappingURL=main.b85f1777.chunk.js.map