(this["webpackJsonpdiaries-web"]=this["webpackJsonpdiaries-web"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),o=n(4),r=n.n(o),i=(n(16),n.p+"static/media/logo.6ce24c58.svg");n(17);function l(e,t,n,c){var s;c&&(s=JSON.stringify(c));var a=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);a.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var s=n[c].trim();if(s.substring(0,e.length+1)===e+"="){t=decodeURIComponent(s.substring(e.length+1));break}}return t}("csrftoken");a.open(e,o),a.setRequestHeader("Content-Type","application/json"),r&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",r)),a.onload=function(){403===a.status&&("Authentication credentials were not provided."===a.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(a.response,a.status)},a.onerror=function(e){n({message:"The request was an error"},400)},a.send(s)}function u(e,t){var n="/posts/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),l("GET",n,e)}function j(e,t,n){var c="/posts/";e&&(c="/posts/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),l("GET",c,t)}function d(e){var t=e.className?e.className:"btn btn-primary btn-sm",n=e.post,s=e.action,a=e.didPerformAction,o=n.likes?n.likes:0,r=s.display?s.display:"Action",i="like"===s.type?"".concat(o," ").concat(r):r,u=function(e,t){console.log(e,t),200!==t&&201!==t||!a||a(e,t)};return Object(c.jsx)("button",{className:t,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/posts/action/",n,{id:e,action:t})}(n.id,s.type,u)},children:i})}var b=n(10),f=n(2);function O(e){var t=e.username;return Object(c.jsx)("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)},children:e.children})}function m(e){var t=e.user,n=e.includeFullName,s=e.hideLink,a=!0===n?"".concat(t.first_name," ").concat(t.last_name):null;return!0===s?"".concat(t.first_name," ").concat(t.last_name," @").concat(t.username):Object(c.jsx)(O,{children:a})}function p(e){var t=e.user,n=e.hideLink,s=Object(c.jsx)("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white",children:t.first_name[0]});return!0===n?s:Object(c.jsx)(O,{username:t.first_name,children:s})}var h=n(9),x=n.n(h);function v(e){return Object(c.jsx)("span",{className:e.className,children:x()(e.children).format("0a")})}function g(e){var t=e.user,n=e.didFollowToggle,s=e.profileLoading,a=t&&t.is_following?"Unfollow":"Follow";a=s?"Loading...":a;return t?Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{user:t,hideLink:!0}),Object(c.jsx)("p",{children:Object(c.jsx)(m,{user:t,includeFullName:!0,hideLink:!0})}),Object(c.jsxs)("p",{children:[Object(c.jsx)(v,{children:t.follower_count})," ",1===t.follower_count?"Follower":"Followers"]}),Object(c.jsxs)("p",{children:[Object(c.jsx)(v,{children:t.following_count})," Following"]}),Object(c.jsx)("p",{children:t.location}),Object(c.jsx)("p",{children:t.bio}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),n&&!s&&n(a)},children:a})]}):null}function w(e){var t=e.username,n=Object(s.useState)(!1),a=Object(f.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(null),u=Object(f.a)(i,2),j=u[0],d=u[1],b=Object(s.useState)(!1),O=Object(f.a)(b,2),m=O[0],p=O[1],h=function(e,t){200===t&&d(e)};Object(s.useEffect)((function(){!1===o&&(!function(e,t){l("GET","/profiles/".concat(e,"/"),t)}(t,h),r(!0))}),[t,o,r]);return!1===o?"Loading...":j?Object(c.jsx)(g,{user:j,didFollowToggle:function(e){!function(e,t,n){var c={action:"".concat(t&&t).toLowerCase()};l("POST","/profiles/".concat(e,"/follow"),n,c)}(t,e,(function(e,t){console.log(e,t),200===t&&d(e),p(!1)})),p(!0)},profileLoading:m}):null}function N(e){var t=e.post,n=Object(s.useState)(e.post?e.post:null),a=Object(f.a)(n,2),o=a[0],r=a[1],i=e.className?e.className:"col-10 mx-auto col-md-6",l=window.location.pathname.match(Object(b.a)(/([0-9]+)/,{postid:1})),u=l?l.groups.postid:-1,j="".concat(t.id)==="".concat(u),O=function(e,t){200===t&&r(e)};return Object(c.jsx)("div",{className:i,children:Object(c.jsxs)("div",{className:"d-flex",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)(p,{user:t.user})}),Object(c.jsxs)("div",{className:"col-11",children:[Object(c.jsx)(m,{user:t.usre}),Object(c.jsx)("h5",{children:t.user.first_name+" "+t.user.last_name}),Object(c.jsx)("p",{children:t.content}),o&&Object(c.jsxs)("div",{className:"btn btn-group px-0",children:[Object(c.jsx)(d,{post:o,didPerformAction:O,action:{type:"like",display:"Like"}}),Object(c.jsx)(d,{post:o,didPerformAction:O,action:{type:"unlike",display:"Unlike"}}),!0===j?null:Object(c.jsx)("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"See More"})]})]})]})})}var y=n(8),k=n(3);function S(e){var t=a.a.createRef(),n=e.didPost,s=function(e,t){201===t?n(e):(console.log(e),alert("An error occured, please try again later"))};return Object(c.jsx)("div",{className:e.className,children:Object(c.jsx)("div",{className:"col-12 mb-3",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;l("POST","/posts/create/",s,{content:n}),t.current.value=""},children:[Object(c.jsx)("textarea",{className:"form-control",name:"post",required:!0,ref:t}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Post"})]})})})}function P(e){var t=Object(s.useState)([]),n=Object(f.a)(t,2),o=n[0],r=n[1],i=Object(s.useState)([]),l=Object(f.a)(i,2),u=l[0],d=l[1],b=Object(s.useState)(null),O=Object(f.a)(b,2),m=O[0],p=O[1],h=Object(s.useState)(!1),x=Object(f.a)(h,2),v=x[0],g=x[1];Object(s.useEffect)((function(){var t=Object(k.a)(e.newPosts).concat(o);t.length!==u.length&&d(t)}),[e.newPosts,u,o]),Object(s.useEffect)((function(){if(!1===v){j(e.username,(function(e,t){200===t?(p(e.next),r(e.results),g(!0)):alert("There was an error")}))}}),[o,v,g,e.username]);return Object(c.jsxs)(a.a.Fragment,{children:[u.map((function(e,t){return Object(c.jsx)(N,{post:e,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==m&&Object(c.jsx)("button",{className:"btn btn-outline-primary",onClick:function(t){if(t.preventDefault(),null!==m){j(e.username,(function(e,t){if(200===t){p(e.next);var n=Object(k.a)(u).concat(e.results);d(n),r(n)}else alert("There was an error")}),m)}},children:"See more"})]})}function T(e){var t=Object(s.useState)([]),n=Object(f.a)(t,2),o=n[0],r=n[1],i=Object(s.useState)([]),l=Object(f.a)(i,2),j=l[0],d=l[1],b=Object(s.useState)(null),O=Object(f.a)(b,2),m=O[0],p=O[1],h=Object(s.useState)(!1),x=Object(f.a)(h,2),v=x[0],g=x[1];Object(s.useEffect)((function(){var t=Object(k.a)(e.newPosts).concat(o);t.length!==j.length&&d(t)}),[e.newPosts,j,o]),Object(s.useEffect)((function(){if(!1===v){u((function(e,t){200===t&&(p(e.next),r(e.results),g(!0))}))}}),[o,v,g,e.username]);return Object(c.jsxs)(a.a.Fragment,{children:[j.map((function(e,t){return Object(c.jsx)(N,{post:e,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-{item.id}"))})),null!==m&&Object(c.jsx)("button",{className:"btn btn-outline-primary",onClick:function(e){if(e.preventDefault(),null!==m){u((function(e,t){if(200===t){p(e.next);var n=Object(k.a)(j).concat(e.results);d(n),r(n)}}),m)}},children:"See more"})]})}function E(e){var t=Object(s.useState)([]),n=Object(f.a)(t,2),a=n[0],o=n[1],r="false"!==e.canPost;return Object(c.jsxs)("div",{className:e.className,children:[!0===r&&Object(c.jsx)(S,{didPost:function(e){var t=Object(k.a)(a);t.unshift(e),o(t)},className:"col-12 mb-3"}),Object(c.jsx)(P,Object(y.a)({newPosts:a},e))]})}function L(e){var t=e.postId,n=Object(s.useState)(!1),a=Object(f.a)(n,2),o=a[0],r=a[1],i=Object(s.useState)(null),u=Object(f.a)(i,2),j=u[0],d=u[1],b=function(e,t){200===t?d(e):alert("There was an error, canot find your post")};return Object(s.useEffect)((function(){!1===o&&(!function(e,t){l("GET","/posts/".concat(e,"/"),t)}(t,b),r(!0))}),[t,o,r]),null===j?null:Object(c.jsx)(N,{post:j,className:e.className})}var F=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(c.jsxs)("p",{children:["Edit ",Object(c.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(c.jsx)("div",{children:Object(c.jsx)(E,{})}),Object(c.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))},C=document.getElementById("root");C&&r.a.render(Object(c.jsx)(F,{}),C);var _=a.a.createElement,q=document.getElementById("diaries");q&&r.a.render(_(E,q.dataset),q);var R=document.getElementById("diaries-feed");R&&r.a.render(_((function(e){var t=Object(s.useState)([]),n=Object(f.a)(t,2),a=n[0],o=n[1],r="false"!==e.canPost;return Object(c.jsxs)("div",{className:e.className,children:[!0===r&&Object(c.jsx)(S,{didPost:function(e){var t=Object(k.a)(a);t.unshift(e),o(t)},className:"col-12 mb-3"}),Object(c.jsx)(T,Object(y.a)({newPosts:a},e))]})}),R.dataset),R),document.querySelectorAll(".diaries-detail").forEach((function(e){r.a.render(_(L,e.dataset),e)})),document.querySelectorAll(".diaries-profile-badge").forEach((function(e){r.a.render(_(w,e.dataset),e)})),A()}},[[18,1,2]]]);
//# sourceMappingURL=main.3b4e6698.chunk.js.map