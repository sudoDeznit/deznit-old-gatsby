(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return s}),t.d(a,"default",function(){return l});t(14),t(15),t(8),t(22),t(18),t(0);var n=t(71);var s={path:"/angular/angular-infinite-scroll",date:"06-09-2019",author:"Anoop",title:"Infinite Virtual Scrolling In Angular",thumbnail:"images/blog/angular/angular01.svg",featureImg:"images/blog/angular/angular01.png",des:"We will use Angular CDK to implement a infinite virtual scroll.",tags:[{tag:"Angular",color:"danger"},{tag:"Virtual Scrolling",color:"success"}],category:"angular"},c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.mdx)("div",a)}},m=c("Blockquote"),o=c("P"),p=c("H4"),i=c("A"),d=c("Img"),r={_frontmatter:s},b="wrapper";function l(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,["components"]);return Object(n.mdx)(b,Object.assign({},r,t,{components:a,mdxType:"MDXLayout"}),Object(n.mdx)(m,{color:"default",mdxType:"Blockquote"},"In this post we will see what is virtual scroll, its importance and then we will implement it using Angular CDK."),Object(n.mdx)(o,{mdxType:"P"},"So to start with let's understand what exactly is virtual scroll. So let's say you have thousands of values in a list and with virtual scroll you can load just the values thats visible inside the viewport (on screen), i.e suppose only 10 elements fits inside the viewport then only 10 will be loaded to the DOM and as you scroll down new elements will be loaded and old ones that are not in viewport will be removed from DOM."),Object(n.mdx)(p,{mdxType:"H4"}," Getting Started 🚀"),Object(n.mdx)(o,{mdxType:"P"},"We will need to install Angular CDK and import the ScrollingModule from it."),Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"SHELL"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"shell-session"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-shell-session"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell-session"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token command"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token sh important"}),"$")," ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token bash language-bash"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"npm")," ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token function"}),"install")," @angular/cdk"))))),Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"app.module.ts"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"ts"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-ts"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ... other imports"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," ScrollingModule ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@angular/cdk/scrolling'"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// for making http req."),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," HttpClientModule ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@angular/common/http'"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n\n@",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"NgModule"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\nimports",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n    ScrollingModule",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    HttpClientModule\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")))),Object(n.mdx)(o,{mdxType:"P"},"For dummy data to display in the list we will use"," ",Object(n.mdx)(i,{color:"default",href:"https://jsonplaceholder.typicode.com/",target:"_blank",mdxType:"A"},"JSONPlaceholder"),". And to fetch the data we will make a simple service, I am fetching the comments here you can go through the docs for other data, or you can use your own data."),Object(n.mdx)(o,{mdxType:"P"},Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"placeholder.service.ts"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"ts"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-ts"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Injectable ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@angular/core"'),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," HttpClient ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@angular/common/http"'),"\n\n@",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"Injectable"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  providedIn",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"root"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"PlaceholderService")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"constructor"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"private")," http",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),":")," HttpClient"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"getPlaceholder"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"start",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),",")," limit"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"return")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"http",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"get"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token template-string"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token string"}),"https://jsonplaceholder.typicode.com/comments?_start="),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"start",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token string"}),"&_limit="),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"${"),"limit",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token interpolation-punctuation punctuation"}),"}")),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token template-punctuation string"}),"`")),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"/*\nWe will get 500 comments in following format.\n[\n    {\n        body: string,\n        email: string,\n        name: string,\n        id: number,\n        postId: number\n    }\n    //.....\n]\n\n*/"))))),Object(n.mdx)(o,{mdxType:"P"},"Now we can use the data in our component for this example we will use the app.component."),Object(n.mdx)(o,{mdxType:"P"},Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"app.component.ts"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"ts"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-ts"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," Component",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," OnInit ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"@angular/core"'),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"import")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{")," PlaceholderService ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"from")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./services/placeholder.service"'),"\n\n@",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"Component"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  selector",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"app-root"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  templateUrl",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./app.component.html"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  styleUrls",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),'"./app.component.scss"'),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"export")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"class")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"AppComponent")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"implements")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token class-name"}),"OnInit")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"constructor"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token keyword"}),"private")," placeholderService",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),":")," PlaceholderService"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n  items",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"any"),"\n\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"ngOnInit"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"placeholderService\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"getPlaceholder"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"start",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"limit",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"subscribe"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token parameter"}),"data")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=>")," ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token builtin"}),"console"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"log"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"data",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n        ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"this"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),"items ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," data\n      ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))))),Object(n.mdx)(p,{mdxType:"H4"},"Finally The Good Part 😀"),Object(n.mdx)(o,{mdxType:"P"},"Now we can loop over the data and display it in our viewport. cdk-virtual-scroll-viewport is our viewport wrapper, and the data visible inside this viewort at any point will only be loaded to DOM. *cdkVirtualFor is similar to *ngFor that we use to loop over the data. The itemSize property must be set and it's value is the height of element inside the wrapper , here in this case we will be setting our card height to 100px. To add some animation we can use the ",Object(n.mdx)(i,{color:"default",href:"https://www.npmjs.com/package/animate.css?activeTab=versions",target:"_blank",mdxType:"A"}," Animate.css ")," package."),Object(n.mdx)(o,{mdxType:"P"},Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"app.component.html"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"html"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-html"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"cdk-virtual-scroll-viewport")," ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"itemSize"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"100",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"*cdkVirtualFor"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"let item of items; let i = index",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"="),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"animated fadeInUp card",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    {{ i }}. {{ item.name }}\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"cdk-virtual-scroll-viewport"),Object(n.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),Object(n.mdx)("div",{className:"gatsby-code-title code-title"},"app.component.scss"),Object(n.mdx)("div",{className:"gatsby-highlight","data-language":"scss"},Object(n.mdx)("pre",Object.assign({parentName:"div"},{className:"language-scss"}),Object(n.mdx)("code",Object.assign({parentName:"pre"},{className:"language-scss"}),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token selector"}),"cdk-virtual-scroll-viewport "),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"margin"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 5rem",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"height"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 90vh",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// setting height of viewport is really important for virtual scroll to work"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token selector"}),".card "),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"background-color"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," white",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"display"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," flex",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"align-items"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," center",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"height"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 100px",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"padding"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 10px",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"margin"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 20px",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"font-size"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 1.5rem",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token property"}),"border-radius"),Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":")," 4px",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n  ",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(n.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),Object(n.mdx)(m,{color:"warning",mdxType:"Blockquote"},"Please note that setting height of the viewport is really important for this to work.")),Object(n.mdx)(p,{mdxType:"H4"},"Results 🎉"),Object(n.mdx)(o,{mdxType:"P"},"As you can see in the video below only 12 elements are loaded at a time on to the DOM in this case and as we scroll down new elements are loaded and the old ones which arfe not in the viewport are removed."),Object(n.mdx)(d,{src:"/gifs/angular/001-01.gif",mdxType:"Img"}))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-posts-angular-30-09-2019-virtual-scroll-index-mdx-3c3b2fe6d4bb2b2e7030.js.map