(window.webpackJsonpgithubfinder=window.webpackJsonpgithubfinder||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/spinner.9209e391.gif"},19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),i=a(7),s=a(5),u=a(6),o=(a(24),function(e){var t=e.icon,a=e.title;return r.a.createElement("div",{className:"navbar",style:{color:"white",background:"#39c0cc"}},r.a.createElement("h1",null,r.a.createElement("a",{href:"https://github.com"},r.a.createElement("i",{className:t})),r.a.createElement(s.b,{to:"/github-users-finder/"},a)),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.b,{to:"/github-users-finder/user/therohitjha"},"therohitjha")),r.a.createElement("li",null,r.a.createElement(s.b,{to:"/github-users-finder/about"},"About"))))});o.defaultProps={title:"Github Finder",icon:"fab fa-github"};var m=o,E=function(e){var t=e.user,a=t.avatar_url,n=t.login,c=t.id;return r.a.createElement("div",{className:"card text-center"},r.a.createElement("img",{src:a,alt:c,className:"round-img",style:{width:"60px"}}),r.a.createElement("h1",null,n),r.a.createElement(s.b,{to:"/user/".concat(n),className:"btn btn-dark btn-sm my-1"},"More"))},d=a(18),h=a.n(d),b=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:h.a,alt:"loading...",style:{width:"200px",display:"block",margin:"auto"}}))},f={display:"flex",flexWrap:"wrap",justifyContent:"space-around"},p=function(e){var t=e.users;return e.isLoading?r.a.createElement(b,null):r.a.createElement("div",{style:f},t.map((function(e){return r.a.createElement(E,{key:e.id,user:e})})))},g=function(e){var t=e.repo;return r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,r.a.createElement("a",{href:t.html_url},t.name)))},_=function(e){return e.repos.map((function(e){return r.a.createElement(g,{repo:e,key:e.id})}))},N=function(e){var t=e.user,a=e.isloading,c=e.repos,l=e.getrepos,i=e.getUser,u=e.match;Object(n.useEffect)((function(){i(u.params.login),l(u.params.login)}),[]);var o=t.name,m=t.bio,E=t.location,d=t.followers,h=t.following,f=t.public_repos,p=t.avatar_url,g=t.html_url,N=t.hireable;return a?r.a.createElement(b,null):r.a.createElement(n.Fragment,null,r.a.createElement(s.b,{to:"/",className:"btn btn-light"},"Back"),"Hireable:"," ",N?r.a.createElement("i",{className:"fas fa-check text-success"}):r.a.createElement("i",{className:"fas fa-times-circle text-danger"}),r.a.createElement("div",{className:"card grid-2"},r.a.createElement("div",{className:"all-center"},r.a.createElement("img",{src:p,alt:o,className:"round-img",style:{width:"150px"}}),r.a.createElement("h3",null,o),r.a.createElement("h4",null,E)),r.a.createElement("div",null,m&&r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Bio"),r.a.createElement("p",null,m),r.a.createElement("a",{href:g,className:"btn btn-dark my-1"},"My Github Page")))),r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"badge badge-primary"},"Follower: ",d),r.a.createElement("div",{className:"badge badge-light"},"Following: ",h),r.a.createElement("div",{className:"badge badge-success"},"Repos: ",f)),r.a.createElement(_,{repos:c}))},v=function(e){var t=e.setAlert,a=e.searchUsers,c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],u=l[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===s?t("Please Enter User Name!","light"):(a(s),u(""))},className:"form"},r.a.createElement("input",{type:"text",name:"text",placeholder:"Search Users",value:s,onChange:function(e){u(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block"})))},j=function(){return r.a.createElement("div",null,r.a.createElement("span",{style:{display:"flex",width:"100%",padding:"1em",background:"#333",color:"#eee",justifyContent:"center"}},"\xa9therohitjha"))},C=function(e){var t=e.alert;return null!=t&&r.a.createElement("div",{className:"alert alert-".concat(t.type)},r.a.createElement("i",{className:"fas fa-info-circle"}),t.msg)},O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Github Users Finder"),r.a.createElement("p",null," Version : 1.0.0"),r.a.createElement("p",null,"Developer : Rohit Jha"))},U=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),o=Object(i.a)(l,2),E=o[0],d=o[1],h=Object(n.useState)(!1),b=Object(i.a)(h,2),f=b[0],g=b[1],_=Object(n.useState)(null),U=Object(i.a)(_,2),I=U[0],T=U[1],L=Object(n.useState)([]),P=Object(i.a)(L,2),y=P[0],R=P[1];Object(n.useEffect)((function(){g(!0),fetch("https://api.github.com/users?client_id=".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(e){return e.json()})).then((function(e){c(e),g(!1)}))}),[]);var A=function(e){fetch("https://api.github.com/search/users?q=".concat(e,"&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(e){return e.json()})).then((function(e){c(e.items),g(!1)}))},B=function(e){fetch("https://api.github.com/users/".concat(e,"?client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(e){return e.json()})).then((function(e){d(e),g(!1)}))},w=function(e){fetch("https://api.github.com/users/".concat(e,"/repos?per_page=5&sort=created:asc&client_id=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_ID,"&client_secret=").concat(Object({NODE_ENV:"production",PUBLIC_URL:"/github-users-finder"}).REACT_APP_GITHUB_CLIENT_SECRET)).then((function(e){return e.json()})).then((function(e){R(e),g(!1)}))},x=function(e,t){T({msg:e,type:t}),setTimeout((function(){T(!1)}),2e3)};return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(C,{alert:I}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/github-users-finder/",render:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(v,{searchUsers:A,setAlert:x}),r.a.createElement(p,{isLoading:f,users:a}))}}),r.a.createElement(u.a,{exact:!0,path:"/github-users-finder/about",component:O}),r.a.createElement(u.a,{path:"/github-users-finder/user/:login",render:function(e){return r.a.createElement(N,Object.assign({},e,{getUser:B,user:E,isLoading:f,getrepos:w,repos:y}))}}))),r.a.createElement(j,null)))};l.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.53d0ec52.chunk.js.map