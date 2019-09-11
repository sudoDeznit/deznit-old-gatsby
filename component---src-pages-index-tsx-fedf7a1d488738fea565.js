(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{212:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(214),i=n(222),l=n(215),c=n(218),s=[{title:"Gatsby",count:1,logoUrl:"images/logo/gatsby.svg",bgUrl:"images/main/vueBac.svg",url:"/gatsby",color:"white"},{title:"Angular",count:0,logoUrl:"images/logo/angular.svg",bgUrl:"images/main/vueBac.svg",url:"/angular",color:"white"},{title:"React",count:0,logoUrl:"images/logo/react.svg",bgUrl:"images/main/vueBac.svg",url:"/react",color:"white"}];t.default=function(){return o.a.createElement(a.a,{theme:l.a},o.a.createElement(i.a,null,o.a.createElement("div",{style:{marginBottom:"1rem"}},o.a.createElement(c.Hero,null)),o.a.createElement(c.H2,{style:{textAlign:"center",margin:"5rem"}},"Choose Your Flavour"," ",o.a.createElement("img",{style:{paddingLeft:"1rem",display:"inline",maxHeight:"2rem"},src:"images/hero/coffee.svg"})),o.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",justifyContent:"center",alignContent:"center",gridGap:"2rem"}},s.map(function(e){return o.a.createElement(c.ImageCard,{key:e.title,title:e.title,logo:e.logoUrl,number:e.count,url:e.url,bgUrl:e.bgUrl,color:e.color})}))))}},215:function(e,t,n){"use strict";n(52),n(17),n(14),n(15),n(8),n(22);var r={white:"#ffffff",primary:"#3340ff",hoverprimary:"#4753FF",default:"#27213C",success:"#40CE89",danger:"#EA143F",warning:"#FFAE00",muted:"#C0BFC0"},o={extraSmall:"320px",small:"576px",medium:"768px",large:"992px",extraLarge:"1200px"},a={sizes:o,breakpoints:{xs:"(min-width: "+o.extraSmall+")",sm:"(min-width: "+o.small+")",md:"(min-width: "+o.medium+")",lg:"(min-width: "+o.large+")",xl:"(min-width: "+o.extraLarge+")"}},i={font:{heading:'"Rubik", "sans-serif"',body:'"Rubik", "sans-serif"'},fontWeight:{heading:"400",body:"300"}},l=n(214);function c(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  * {\n  margin: 0;\n  padding: 0;\n  \n}\n  html {\n    font-size: 10px;\n    font-family: ",";\n    font-weight: ",";\n    color: ",";\n    line-height: 1.6;\n\n    @media "," {\n      font-size: 8px;\n    /* background-color: green; */\n    }\n    @media "," {\n        font-size: 8px;\n      /* background-color: green; */\n    }\n    @media "," {\n      font-size: 10px;\n      /* background-color: yellow; */\n    }\n    @media "," {\n      font-size: 10px;\n      /* background-color: pink; */\n    }\n    @media "," {\n      font-size: 12px;\n      /* background-color: red; */\n    } \n  }\n/* \n  main {\n    padding-left: 2rem;\n    padding-right: 2rem\n  } */\n\n  body{\n    font-size: 1.6rem\n  }\n\n  h1,h2,h3,h4,h5,h6 {\n      font-family: ",";\n      font-weight: ","\n  }\n\n\n"]);return c=function(){return e},e}var s=Object(l.b)(c(),i.font.body,i.fontWeight.body,r.default,a.breakpoints.xs,a.breakpoints.sm,a.breakpoints.md,a.breakpoints.lg,a.breakpoints.xl,i.font.heading,i.fontWeight.heading);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach(function(t){m(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({GlobalStyles:s,colors:r},a,{},i)},217:function(e,t,n){var r;e.exports=(r=n(221))&&r.default||r},218:function(e,t,n){"use strict";n.r(t);var r,o=n(214),a=n(215),i=n(216);!function(e){e[e.primary=0]="primary",e[e.default=1]="default",e[e.success=2]="success",e[e.warning=3]="warning",e[e.danger=4]="danger"}(r||(r={}));var l=o.c.button.withConfig({displayName:"button",componentId:"cjm5sr-0"})(["border:none;display:inline-block;width:auto;height:auto;text-transform:",";background-color:",";color:",";padding:1rem 2.4rem;border-radius:4px;letter-spacing:1.5px;transition:0.3s ease;font-family:",";font-weight:",";font-size:1.6rem;&:hover{background-color:",";box-shadow:-1px 1px 5px ",";transform:translateY(-1px);outline:0;}&:focus{outline:0;}"],function(e){return e.capital?"uppercase":"capitalize"},function(e){return e.theme.colors[""+e.color]},a.a.colors.white,a.a.font.body,a.a.fontWeight.body,function(e){return""+Object(i.b)(.1,""+e.theme.colors[""+e.color])},function(e){return""+Object(i.a)(""+e.theme.colors[""+e.color],.4)}),c=o.c.div.withConfig({displayName:"card",componentId:"sc-1i51ik7-0"})(["border:none;display:inline-block;width:auto;height:auto;background-color:",";color:",";padding:1rem 2.4rem;border-radius:4px;letter-spacing:1.5px;transition:0.3s ease;font-family:",";font-weight:",";font-size:1.6rem;box-shadow:0px 4px 16px ",";&:hover{outline:0;}&:focus{outline:0;}"],function(e){return e.color?e.theme.colors[""+e.color]:e.theme.colors.white},a.a.colors.default,a.a.font.body,a.a.fontWeight.body,function(e){return""+Object(i.a)(""+e.theme.colors.default,.2)}),s=n(0),u=n.n(s);function m(e){var t=e.bgUrl,n=e.url,r=e.title,o=e.logo,a=e.number,i=e.color;return u.a.createElement(R,{to:n},u.a.createElement(g,{bgUrl:t,color:i},u.a.createElement("div",null,a," Posts"),u.a.createElement(f,{logo:o}),u.a.createElement(d,null,u.a.createElement(S,null,r))))}var d=o.c.div.withConfig({displayName:"imageCard__Title",componentId:"sc-8cy4vx-0"})(["align-self:start;"]),f=o.c.div.withConfig({displayName:"imageCard__Logo",componentId:"sc-8cy4vx-1"})(["justify-self:flex-end;height:100px;width:100px;background-image:url(",");background-position:center center;background-size:cover;"],function(e){return e.logo}),g=o.c.div.withConfig({displayName:"imageCard__Card",componentId:"sc-8cy4vx-2"})(["border:none;display:grid;grid-template-rows:1fr minmax(0.5fr,auto);grid-template-columns:auto 1fr;width:auto;min-height:250px;background-image:url(",");background-position:center center;background-size:cover;color:",";padding:1rem 2.4rem;border-radius:8px;letter-spacing:1.5px;transition:0.3s ease;font-family:",";font-weight:",";font-size:1.6rem;box-shadow:0px 4px 16px ",";&:hover{transform:translateY(-2px) scale(1.05);outline:0;}&:focus{outline:0;}"],function(e){return e.bgUrl},function(e){return e.color?e.theme.colors[""+e.color]:e.theme.colors.white},a.a.font.body,a.a.fontWeight.body,Object(i.a)(""+a.a.colors.default,.2));function p(e){var t=e.img,n=e.url,r=e.title,o=e.excerpt,a=e.tags;return u.a.createElement(R,{to:n},u.a.createElement(x,null,u.a.createElement(y,{img:t}),u.a.createElement(h,null,u.a.createElement("div",null,u.a.createElement(F,null,r),u.a.createElement(B,null,o)),u.a.createElement(b,null,a?a.map(function(e,t){return u.a.createElement(R,{key:t,className:"text",tab:"true",to:"/page-2",color:e.color},e.tag)}):""))))}var h=o.c.div.withConfig({displayName:"postCard__Post",componentId:"sc-1uxb7f4-0"})(["padding:1rem;display:flex;flex-direction:column;justify-content:space-between;"]),b=o.c.div.withConfig({displayName:"postCard__Tags",componentId:"sc-1uxb7f4-1"})(["display:flex;flex-direction:row;justify-content:flex-start;width:100%;> *{margin-right:10px;}"]),y=o.c.div.withConfig({displayName:"postCard__Img",componentId:"sc-1uxb7f4-2"})(["border-radius:8px;justify-self:flex-start;min-height:200px;width:100%;background-image:url(",");background-position:center center;background-size:cover;background-repeat:no-repeat;"],function(e){return e.img}),x=o.c.div.withConfig({displayName:"postCard__Card",componentId:"sc-1uxb7f4-3"})(["display:grid;margin-bottom:2rem;grid-gap:1.5rem;border-radius:8px;font-family:",";font-weight:",";font-size:1.6rem;box-shadow:0px 2px 16px ",";transition:0.3s ease;&:hover{outline:0;}&:focus{outline:0;}@media screen and (min-width:767px){grid-template-columns:300px 2fr;}@media screen and (max-width:766px){grid-template-columns:repeat(1fr,2);}"],a.a.font.body,a.a.fontWeight.body,Object(i.a)(""+a.a.colors.default,.1)),w=o.c.header.withConfig({displayName:"header",componentId:"sc-6k48op-0"})(["display:grid;grid-template-columns:auto;background-color:transparent;padding:1rem 1rem;letter-spacing:1.5px;"]);var v=o.c.div.withConfig({displayName:"navbar__Nav",componentId:"sc-8k07j3-0"})(["display:grid;grid-template-columns:2fr 1fr;margin-bottom:5rem;"]),E=o.c.ul.withConfig({displayName:"navbar__Ul",componentId:"sc-8k07j3-1"})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(50px,1fr));list-style:none;align-items:end;justify-items:end;align-content:center;"]),k=o.c.li.withConfig({displayName:"navbar__Li",componentId:"sc-8k07j3-2"})(["display:inline;align-self:end;"]),C=function(){return u.a.createElement(v,null,u.a.createElement(R,{to:"/"},u.a.createElement(D,null,"DEZNIT")),u.a.createElement(E,null,u.a.createElement(k,null,u.a.createElement(R,{to:"/blog"},"Blog")),u.a.createElement(k,null,"Contact")))},j=(n(219),o.c.div.withConfig({displayName:"wrapper",componentId:"sc-1q90y3t-0"})(["max-width:",";margin-right:auto;margin-left:auto;padding:1rem;font-size:1.6rem;letter-spacing:1.4px;@media ","{max-width:",";}@media ","{max-width:",";}@media ","{max-width:",";}@media ","{max-width:",";}"],a.a.sizes.extraLarge,a.a.breakpoints.sm,a.a.sizes.small,a.a.breakpoints.md,a.a.sizes.medium,a.a.breakpoints.lg,a.a.sizes.large,a.a.breakpoints.xl,a.a.sizes.extraLarge));var O=o.c.div.withConfig({displayName:"hero__Heading",componentId:"sc-1t76qc1-0"})(["display:grid;margin-top:1rem;grid-template-columns:1fr;justify-items:center;text-align:center;"]),z=o.c.div.withConfig({displayName:"hero__HeroDiv",componentId:"sc-1t76qc1-1"})(['background-image:url("images/hero/hero.svg");height:60vh;background-position:center center;background-repeat:no-repeat;background-size:contain;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-areas:"content1 . content2" "content3 . content4";align-items:center;justify-content:space-between;']),N=o.c.div.withConfig({displayName:"hero__CardContent",componentId:"sc-1t76qc1-2"})(["display:grid;grid-template-columns:3rem 1fr;grid-gap:1rem;> h2{align-content:end;}"]),I=function(){return u.a.createElement("div",null,u.a.createElement(O,null,u.a.createElement(q,null,"Learn, Build and Share"),u.a.createElement(U,null,"All from one place"),u.a.createElement(B,{color:"muted"},"Lessons covering Angular, React, Graphql, Node and other technologies.")),u.a.createElement(z,null,u.a.createElement(c,{style:{gridArea:"content1"}},u.a.createElement(N,null,u.a.createElement(S,{color:"muted"},"1"),u.a.createElement(B,null,"Learn latest frontend and backend technologies",u.a.createElement("img",{style:{paddingLeft:"1rem",display:"inline",maxHeight:"2rem"},src:"images/hero/coffee.svg"})))),u.a.createElement(c,{style:{gridArea:"content2"}},u.a.createElement(N,null,u.a.createElement(S,{color:"muted"},"2"),u.a.createElement(B,null,"Build real life projects with the help of community"))),u.a.createElement(c,{style:{gridArea:"content3"}},u.a.createElement(N,null,u.a.createElement(S,{color:"muted"},"3"),u.a.createElement(B,null,"Share and even sell projects that you built ","",u.a.createElement(R,{color:"primary",to:"/"},"Coming Soon")))),u.a.createElement(c,{color:"primary",style:{gridArea:"content4"}},u.a.createElement(N,null,u.a.createElement(S,{color:"white"},"4"),u.a.createElement("div",null,u.a.createElement(D,{style:{display:"inline"},color:"white"},"Get Started")," ",u.a.createElement(B,{color:"white",style:{display:"inline"}}," ","- Its Free"))))))};var _=function(){return u.a.createElement(P,null)},P=o.c.div.withConfig({displayName:"footer__FooterDiv",componentId:"iqrqre-0"})([""]),H=_,q=o.c.h1.withConfig({displayName:"h1",componentId:"sc-1ceunoh-0"})(["font-size:4rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),S=o.c.h2.withConfig({displayName:"h2",componentId:"sc-1g0m6sc-0"})(["font-size:3.2rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),U=o.c.h3.withConfig({displayName:"h3",componentId:"gx0ric-0"})(["font-size:2.8rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),D=o.c.h4.withConfig({displayName:"h4",componentId:"sc-3tqfrx-0"})(["font-size:2.4rem;color:",";"],function(e){return e.color?e.theme.colors[""+e.color]:e.theme.colors.default}),F=o.c.h5.withConfig({displayName:"h5",componentId:"sc-1vbeks5-0"})(["font-size:2rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),L=o.c.h6.withConfig({displayName:"h6",componentId:"sc-8ndbr6-0"})(["font-size:1.6rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),A=o.c.small.withConfig({displayName:"small",componentId:"sc-1nqtawq-0"})(["font-size:1.2rem;color:",";"],function(e){return e.theme.colors[""+e.color]}),B=o.c.p.withConfig({displayName:"paragraph",componentId:"hgacjd-0"})(["font-size:1.6rem;color:",";margin:1rem 0;"],function(e){return e.theme.colors[""+e.color]}),W=Object(o.c)(B).withConfig({displayName:"blockquote",componentId:"sc-1rxes5f-0"})(["border-left:0.5rem solid ",";padding:2rem;background-color:",";"],function(e){return e.theme.colors[""+e.color]},function(e){return e.color?""+Object(i.a)(""+e.theme.colors[""+e.color],.05):"none"}),G=n(220),R=Object(o.c)(function(e){return u.a.createElement(G.a,e)}).withConfig({displayName:"link",componentId:"u8u6s4-0"})(["text-transform:",";color:",";text-decoration:none;padding:",";border-radius:",";border-left:",";background-color:",";font-size:",";"],function(e){return e.capital?"uppercase":"capitalize"},function(e){return e.color,e.theme.colors[""+e.color]},function(e){return e.tab?".5rem 1rem":"0"},function(e){return e.tab?"2px":"0"},function(e){return e.tab?"4px solid":"0"},function(e){return e.tab?""+Object(i.a)(""+e.theme.colors[""+e.color],.2):"none"},function(e){return e.tab?"1.2rem":"1.6rem"});n.d(t,"Button",function(){return l}),n.d(t,"Header",function(){return w}),n.d(t,"Navbar",function(){return C}),n.d(t,"Wrapper",function(){return j}),n.d(t,"Hero",function(){return I}),n.d(t,"Card",function(){return c}),n.d(t,"ImageCard",function(){return m}),n.d(t,"PostCard",function(){return p}),n.d(t,"H1",function(){return q}),n.d(t,"H2",function(){return S}),n.d(t,"H3",function(){return U}),n.d(t,"H4",function(){return D}),n.d(t,"H5",function(){return F}),n.d(t,"H6",function(){return L}),n.d(t,"Small",function(){return A}),n.d(t,"P",function(){return B}),n.d(t,"Link",function(){return R}),n.d(t,"Blockquote",function(){return W}),n.d(t,"Footer",function(){return H})},220:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(68),i=n.n(a);n.d(t,"a",function(){return i.a});n(217),n(10).default.enqueue,o.a.createContext({})},221:function(e,t,n){"use strict";n.r(t);n(52),n(17),n(14),n(15),n(8),n(22);var r=n(0),o=n.n(r),a=n(95);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},222:function(e,t,n){"use strict";var r=n(223),o=n(0),a=n.n(o),i=n(218),l=n(215);n(202);t.a=function(e){var t=e.children,n=(r.data,l.a.GlobalStyles);return a.a.createElement(a.a.Fragment,null,a.a.createElement(n,null),a.a.createElement(i.Wrapper,{theme:l.a},a.a.createElement(i.Header,null,a.a.createElement(i.Navbar,null)),a.a.createElement("main",null,t),a.a.createElement(i.Footer,null)))}},223:function(e){e.exports={data:{site:{siteMetadata:{title:"Deznit"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fedf7a1d488738fea565.js.map