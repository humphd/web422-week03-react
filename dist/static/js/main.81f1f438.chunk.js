(this["webpackJsonpusers-example"]=this["webpackJsonpusers-example"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(10),n(2)),u=(n(11),"https://reqres.in/api");var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="".concat(u,"/users?page=").concat(e);return fetch(t).then((function(e){if(!e.ok)throw new Error("API returned status code ".concat(e.status));return e.json()})).catch((function(e){return console.warn(e),{page:1,total:1,data:[]}}))};n(12),n(13);var j=function(e){var t=e.imgUrl,n=e.name;return Object(a.jsx)("img",{src:t,alt:n,title:n,className:"profile-avatar",width:"128",height:"128"})};n(14);var f=function(e){var t=e.name,n=e.email;return Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("h2",{className:"profile-name",children:t}),Object(a.jsx)("h3",{className:"profile-email",children:Object(a.jsx)("a",{href:"mailto:".concat(n),children:t})})]})};var m=function(e){var t=e.user,n=t.id,c=t.email,r="".concat(t.first_name," ").concat(t.last_name),s=t.avatar;return Object(a.jsxs)("section",{id:"user-".concat(n),className:"profile-card",children:[Object(a.jsx)(j,{imgUrl:s,name:r}),Object(a.jsx)(f,{name:r,email:c})]})};var b=function(e){return e.users.map((function(e){return Object(a.jsx)(m,{user:e},e.id)}))};n(15);var h=function(e){var t=e.current,n=e.total,c=e.onPageChange,r=t===n?"Previous":"Next";return Object(a.jsx)("button",{className:"paging-button",onClick:function(){c(t===n?t-1:t+1)},children:r})};var d=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(1),i=Object(o.a)(s,2),u=i[0],j=i[1],f=Object(c.useState)([]),m=Object(o.a)(f,2),d=m[0],O=m[1];return Object(c.useEffect)((function(){l(u).then((function(e){r(e.total_pages),j(e.page),O(e.data)}))}),[u]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{current:u,total:n,onPageChange:function(e){return j(e)}}),Object(a.jsx)("main",{className:"profile-cards",children:Object(a.jsx)(b,{users:d})})]})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.81f1f438.chunk.js.map