(this["webpackJsonpdiaries-web"]=this["webpackJsonpdiaries-web"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(6),r=n.n(o),i=(n(15),n.p+"static/media/logo.6ce24c58.svg");n(16);function l(e,t,n,c){var s;c&&(s=JSON.stringify(c));var a=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);a.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");a.open(e,o),a.setRequestHeader("Content-Type","application/json"),r&&(a.setRequestHeader("HTTP_X_REQUSTED_WITH","XMLHttpRequest"),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",r)),a.onload=function(){n(a.response,a.status)},a.onerror=function(e){n({message:"The request was an error",status:400}),console.log(e)},a.send(s)}function u(e){var t=e.className?e.className:"btn btn-primary btn-sm",n=e.post,s=e.action,a=e.didPerformAction,o=n.likes?n.likes:0,r=s.display?s.display:"Action",i="like"===s.type?"".concat(o," ").concat(r):r,u=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)};return Object(c.jsx)("button",{className:t,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/posts/action/",n,{id:e,action:t})}(n.id,s.type,u)},children:i})}var d=n(8),j=n(2);function b(e){var t=e.post,n=Object(s.useState)(e.post?e.post:null),a=Object(j.a)(n,2),o=a[0],r=a[1],i=e.className?e.className:"col-10 mx-auto col-md-6",l=window.location.pathname.match(Object(d.a)(/([0-9]+)/,{postid:1})),b=l?l.groups.postid:-1,p="".concat(t.id)==="".concat(b),f=function(e,t){200===t&&r(e)};return Object(c.jsxs)("div",{className:i,children:[Object(c.jsxs)("p",{children:[t.id,"- ",t.content]}),o&&Object(c.jsxs)("div",{className:"btn btn-group",children:[Object(c.jsx)(u,{post:o,didPerformAction:f,action:{type:"like",display:"Like"}}),Object(c.jsx)(u,{post:o,didPerformAction:f,action:{type:"unlike",display:"Unlike"}}),!0===p?null:Object(c.jsx)("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"See More"})]})]})}var p=n(9),f=n(5);function m(e){var t=a.a.createRef(),n=e.didPost,s=function(e,t){201===t?n(e):(console.log(e),alert("An error occured, please try again later"))};return Object(c.jsx)("div",{className:e.className,children:Object(c.jsx)("div",{className:"col-12 mb-3",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;l("POST","/posts/create/",s,{content:n}),t.current.value=""},children:[Object(c.jsx)("textarea",{className:"form-control",name:"post",required:!0,ref:t}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Post"})]})})})}function O(e){var t=Object(s.useState)([]),n=Object(j.a)(t,2),a=n[0],o=n[1],r=Object(s.useState)([]),i=Object(j.a)(r,2),u=i[0],d=i[1],p=Object(s.useState)(!1),m=Object(j.a)(p,2),O=m[0],h=m[1];return Object(s.useEffect)((function(){var t=Object(f.a)(e.newPosts.concat(a));t.length!==u.length&&d(t)}),[e.newPosts,u,a]),Object(s.useEffect)((function(){if(!1===O){!function(e,t){var n="/posts/";e&&(n="/posts/?username=".concat(e)),l("GET",n,t)}(e.username,(function(e,t){200===t?(o(e),h(!0)):alert("There was an error")}))}}),[a,O,h,e.username]),u.map((function(e,t){return Object(c.jsx)(b,{post:e,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))}))}function h(e){var t=Object(s.useState)([]),n=Object(j.a)(t,2),a=n[0],o=n[1],r="false"!==e.canPost;return Object(c.jsxs)("div",{className:e.className,children:[!0===r&&Object(c.jsx)(m,{didPost:function(e){var t=Object(f.a)(a);t.unshift(e),o(t)},className:"col-12 mb-3"}),Object(c.jsx)(O,Object(p.a)({newPosts:a},e))]})}function v(e){var t=e.postId,n=Object(s.useState)(!1),a=Object(j.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(null),u=Object(j.a)(i,2),d=u[0],p=u[1],f=function(e,t){200===t?p(e):alert("There was an error, canot find your post")};return Object(s.useEffect)((function(){!1===o&&(!function(e,t){l("GET","/posts/".concat(e,"/"),t)}(t,f),r(!0))}),[t,o,r]),null===d?null:Object(c.jsx)(b,{post:d,className:e.className})}var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(h,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))},N=document.getElementById("root");N&&r.a.render(Object(c.jsx)(g,{}),N);var y=a.a.createElement,k=document.getElementById("diaries");k&&r.a.render(y(h,k.dataset),k),document.querySelectorAll(".diaries-detail").forEach((function(e){r.a.render(y(v,e.dataset),e)})),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.887df6d8.chunk.js.map