(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{8075:function(e,t,l){Promise.resolve().then(l.bind(l,5698))},5698:function(e,t,l){"use strict";l.d(t,{default:function(){return o}});var s=l(7437),r=l(2265);function a(){return(0,s.jsx)("section",{className:"flex w-[100vw] h-[100vh] justify-center items-center",children:(0,s.jsx)("div",{className:"w-full mx-auto h-full flex flex-col bg-[url('https://i.pinimg.com/originals/f5/27/0a/f5270acbc4b98112fcd520d2eea023de.gif')] bg-center bg-cover bg-no-repeat"})})}var n=l(6235);let d=e=>{let t=new Date(e);return(0,n.WU)(t,"MMM d, yyyy h:mm a")},i=async e=>{try{let t=await fetch("".concat("https://api.blooming-brands.com/wp-json/wp/v2","/posts?_embed&per_page=6&page=").concat(e));if(!t.ok)throw Error("HTTP error! status: ".concat(t.status));return await t.json()}catch(e){return console.error(e),[]}},c=e=>{let{image:t,date:l,CardTitle:r,CardDescription:a,CardAuthor:n}=e,i=d(l),c=n&&n.name?n.name:"Unknown Author";return(0,s.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-[33%]",children:(0,s.jsxs)("div",{className:"flex flex-col h-full mb-10 bg-white dark:bg-dark-2 rounded-lg shadow-md overflow-hidden",children:[(0,s.jsx)("div",{className:"mb-8 overflow-hidden rounded",children:(0,s.jsx)("img",{src:t,alt:"",className:"w-full h-64 object-cover",loading:"lazy"})}),(0,s.jsxs)("div",{className:"flex flex-col flex-1 p-4",children:[(0,s.jsx)("a",{href:"/#",className:"mb-4 text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl",dangerouslySetInnerHTML:{__html:r}}),(0,s.jsxs)("span",{className:"mb-4 text-lg font-medium text-gray-700 dark:text-gray-300",children:["Post Author: ",c]}),l&&(0,s.jsxs)("span",{className:"w-[63%] mb-5 text-black",children:["Published: ",i]}),(0,s.jsx)("p",{className:"text-base text-body-color dark:text-dark-6 flex-1",children:(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:a}})})]})]})})};var o=()=>{let[e,t]=(0,r.useState)([]),[l,n]=(0,r.useState)(!1),[d,o]=(0,r.useState)(!1),[x,u]=(0,r.useState)(1),[m,h]=(0,r.useState)(!0),f=(0,r.useRef)(null);(0,r.useEffect)(()=>{(async()=>{n(!0);let e=await i(x);t(t=>[...t,...e]),n(!1),e.length<6&&h(!1)})()},[x]);let p=(0,r.useCallback)(e=>{!d&&(f.current&&f.current.disconnect(),f.current=new IntersectionObserver(e=>{e[0].isIntersecting&&m&&(o(!0),u(e=>e+1))}),e&&f.current.observe(e))},[d,m]);if((0,r.useEffect)(()=>{d&&(async()=>{await new Promise(e=>setTimeout(e,2e3));let e=await i(x);t(t=>[...t,...e]),o(!1),e.length<6&&h(!1)})()},[d,x]),l&&1===x)return(0,s.jsx)(a,{});if(0===e.length&&!l)return(0,s.jsx)("div",{className:"w-full min-h-[80vh] mx-auto text-center py-24 flex flex-col justify-center items-center text-emerald-500 pt-[160px]",children:(0,s.jsx)("p",{className:"text-3xl font-light w-1/2 mx-auto",children:"We're so sorry there are no published posts at the moment, please check again later...."})});let v=e.length%2==1?e.slice(0,-1):e;return(0,s.jsx)("section",{className:"w-[100vw] bg-white pb-10 pt-20 dark:bg-dark lg:pb-200 lg:pt-[160px]",children:(0,s.jsxs)("div",{className:"container mx-auto",children:[(0,s.jsx)("div",{className:"-mx-4 flex flex-wrap",children:(0,s.jsx)("div",{className:"w-full px-4",children:(0,s.jsxs)("div",{className:"mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20",children:[(0,s.jsx)("span",{className:"mb-2 block text-lg font-semibold text-primary",children:"Our Latest News"}),(0,s.jsx)("h2",{className:"mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]",children:"Recent Posts"}),(0,s.jsx)("p",{className:"text-base text-body-color dark:text-dark-6",children:"Stay in touch with the latest trends, news, events, and offers ..."})]})})}),(0,s.jsx)("div",{className:"w-full flex flex-wrap justify-start gap-y-8",children:v.map((e,t)=>{var l,r,a,n,d,i,o,x,u,m;return t===v.length-1?(0,s.jsx)("div",{ref:p,children:(0,s.jsx)(c,{date:e.date,CardTitle:e.title.rendered,CardDescription:e.excerpt.rendered,CardAuthor:null===(r=e._embedded)||void 0===r?void 0:null===(l=r.author)||void 0===l?void 0:l[0],image:(null===(d=e._embedded)||void 0===d?void 0:null===(n=d["wp:featuredmedia"])||void 0===n?void 0:null===(a=n[0])||void 0===a?void 0:a.source_url)||"https://placehold.co/600x400"})},e.id):(0,s.jsx)(c,{date:e.date,CardTitle:e.title.rendered,CardDescription:e.excerpt.rendered,CardAuthor:null===(o=e._embedded)||void 0===o?void 0:null===(i=o.author)||void 0===i?void 0:i[0],image:(null===(m=e._embedded)||void 0===m?void 0:null===(u=m["wp:featuredmedia"])||void 0===u?void 0:null===(x=u[0])||void 0===x?void 0:x.source_url)||"https://placehold.co/600x400"},e.id)})}),d&&(0,s.jsx)("div",{className:"w-full text-center mt-8",children:(0,s.jsx)("p",{children:"Loading more posts..."})})]})})}}},function(e){e.O(0,[235,971,23,744],function(){return e(e.s=8075)}),_N_E=e.O()}]);