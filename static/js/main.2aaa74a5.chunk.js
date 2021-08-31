(this["webpackJsonpsinthooran-react-editing-version"]=this["webpackJsonpsinthooran-react-editing-version"]||[]).push([[0],{10:function(e,t,a){e.exports={Welcome:"Welcome_Welcome__JY8L6",fade:"Welcome_fade__28en4",LightBg:"Welcome_LightBg__35WWQ",DarkBg:"Welcome_DarkBg__KzjhU"}},12:function(e,t,a){e.exports={Project:"Project_Project__37SfC",LightBorder:"Project_LightBorder__2h3Uj",DarkBorder:"Project_DarkBorder__3lI_Z"}},13:function(e,t,a){e.exports={App:"App_App__2aLp-",Light:"App_Light__2S2nv",fade:"App_fade__nRkLT",Dark:"App_Dark__1MIsF"}},18:function(e,t,a){e.exports={ProjectsPage:"Projects_ProjectsPage__aqRIF",Projects:"Projects_Projects__pfRY8"}},2:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__2Psxt",Name:"Navbar_Name__3ZxtI",NavLinks:"Navbar_NavLinks__36Fvr",ThemeIcon:"Navbar_ThemeIcon__1MdEs",NavReset:"Navbar_NavReset__3MTcf",LightNav:"Navbar_LightNav__3V9u6",ActiveScroll:"Navbar_ActiveScroll__4m-vX",DarkNav:"Navbar_DarkNav__1MYqE"}},25:function(e,t,a){e.exports=a.p+"static/media/Sinthooran_Ravinathan_Resume.7458b49f.pdf"},27:function(e,t,a){e.exports=a.p+"static/media/me.66512055.png"},28:function(e){e.exports=JSON.parse('[{"title":"WeatherOwl","description":"Android Studio | Java | OpenWeatherMap API ","link":"https://github.com/SinthooranR/WeatherApp","deployLink":"","image":"images/WeatherOwl.jpg"},{"title":"Repository Viewing App","description":"HTML | CSS | JavaScript | D3.js","link":"https://github.com/SinthooranR/InfoVis_FinalProject","deployLink":"","image":"images/repoviewer.png"},{"title":"Notifier","description":"VueJS | NodeJS | Postgres | GraphQL","link":"https://github.com/SinthooranR/CSCI3230U-Project","deployLink":"","image":"images/notifier.gif"},{"title":"Mock Forum Site","description":"React | NodeJS | Express | MongoDB | Axios","link":"https://github.com/SinthooranR/Forum_Site","deployLink":"","image":"images/mockForum.webp"},{"title":"Movie Database","description":"React | Redux | TMDb API ","link":"https://github.com/SinthooranR/Movie_DB_App","deployLink":"https://moviedb-sinthooranr.netlify.app","image":"images/MovieDB.PNG"},{"title":"Chat App","description":"React | Redux | GraphQL | PostgreSQL | Docker","link":"https://github.com/SinthooranR/Chat_App","deployLink":"https://chat-app-postgres.herokuapp.com/","image":"images/ChatApp.PNG"}]')},29:function(e,t,a){e.exports=a(45)},3:function(e,t,a){e.exports={AboutMe:"AboutMe_AboutMe__n_9BW",Description:"AboutMe_Description__2X9DP",Interests:"AboutMe_Interests__B_PYc",SkillGrid:"AboutMe_SkillGrid__15R0K"}},34:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),o=a.n(l),i=(a(34),a(8)),c=Object(n.createContext)({theme:!1,switchTheme:function(){}}),s=a(24),m=a(23),u=a(9),p=a(2),h=a.n(p),d=function(e){var t=e.theme,a=Object(n.useContext)(c),l=Object(n.useState)(""),o=Object(i.a)(l,2),p=o[0],d=o[1];return Object(n.useEffect)((function(){window.addEventListener("scroll",(function(){window.pageYOffset>0?d(t?h.a.DarkNav:h.a.LightNav):d(h.a.NavReset)}))})),r.a.createElement("header",{className:[h.a.Navbar,p].join(" ")},r.a.createElement("span",{className:h.a.Name},r.a.createElement("h3",null,"Sinthooran Ravinathan")),r.a.createElement("div",{className:h.a.NavLinks},r.a.createElement(u.Link,{activeClass:h.a.ActiveScroll,to:"home",spy:!0,smooth:!0,offset:-70,duration:500},"Home"),r.a.createElement(u.Link,{activeClass:h.a.ActiveScroll,to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About"),r.a.createElement(u.Link,{activeClass:h.a.ActiveScroll,to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects")),r.a.createElement("div",{onClick:function(){a.switchTheme()},className:h.a.ThemeIcon},t?r.a.createElement(s.a,{style:{fontSize:"2.25rem"}}):r.a.createElement(m.a,{style:{fontSize:"2.25rem"}})))},E=a(11),_=a(26),v=a(25),g=a.n(v),f=a(10),b=a.n(f),k=function(e){var t=e.theme;return r.a.createElement("div",{className:[b.a.Welcome,"".concat(t?b.a.DarkBg:b.a.LightBg)].join(" "),id:"home"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("div",null,r.a.createElement("a",{href:"mailto: sinthooranr@gmail.com",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(_.a,{style:{fontSize:"2.25rem"}})),r.a.createElement("a",{href:"https://github.com/SinthooranR",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.b,{style:{fontSize:"2.25rem"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/sinthooranravinathan/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.c,{style:{fontSize:"2.25rem"}})),r.a.createElement("a",{href:g.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(E.a,{style:{fontSize:"2.25rem"}}))))},S=a(27),N=a.n(S),L=a(3),j=a.n(L),A=function(){return r.a.createElement("div",{className:j.a.AboutMe,id:"about"},r.a.createElement("h1",null,"About Me"),r.a.createElement("img",{src:N.a,alt:"avatar"}),r.a.createElement("div",{className:j.a.Description},r.a.createElement("p",null,"Graduated from the University of Ontario Institute of Technology(UOIT) as of May 2020 in Computer Science and currently working as a Web Developer whose passionate in both Frontend and Backend development."),r.a.createElement("span",null,r.a.createElement("h2",null,"Interests:"),r.a.createElement("ul",{className:j.a.Interests},r.a.createElement("li",null,"Interested in learning various languages to help experience the worlds of Web and Mobile development"),r.a.createElement("li",null,"Making use of various databases such as MongoDB, Postgres and SQLite"),r.a.createElement("li",null,"Designing Pages meeting the indviduals criteria"))),r.a.createElement("h2",null,"Skills"),r.a.createElement("span",{className:j.a.SkillGrid},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("h3",null,"Languages"),r.a.createElement("li",null,"C++"),r.a.createElement("li",null,"Python"),r.a.createElement("li",null,"Java"),r.a.createElement("li",null,"HTML"),r.a.createElement("li",null,"CSS/SASS"),r.a.createElement("li",null,"JavaScript/TypeScript"),r.a.createElement("li",null,"GraphQL"))),r.a.createElement("div",{className:j.a.Frameworks},r.a.createElement("ul",null,r.a.createElement("h3",null,"Frameworks/Libraries"),r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Redux"),r.a.createElement("li",null,"Express"),r.a.createElement("li",null,"Axios"),r.a.createElement("li",null,"Bootstrap"),r.a.createElement("li",null,"Material-UI"))),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("h3",null,"Tools"),r.a.createElement("li",null,"Android Studio"),r.a.createElement("li",null,"Visual Studio"),r.a.createElement("li",null,"Git"),r.a.createElement("li",null,"IntelliJ"),r.a.createElement("li",null,"Node"),r.a.createElement("li",null,"Docker"))))))},P=a(12),y=a.n(P),w=function(e){var t,a,l=e.image,o=e.title,i=e.description,s=e.link,m=e.deployLink;switch(Object(n.useContext)(c).theme){case!1:t=y.a.LightBorder,a="primary";break;case!0:t=y.a.DarkBorder,a="secondary"}return r.a.createElement("div",{className:[y.a.Project,t].join(" ")},r.a.createElement("div",{style:{height:"75%"}},r.a.createElement("img",{src:l,alt:""}),r.a.createElement("h2",null,o),r.a.createElement("p",null,i)),r.a.createElement("span",null,m&&r.a.createElement("a",{href:m,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{color:a},"Demo")),r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{color:a},"Code"))))},D=a(28),M=a(18),R=a.n(M),x=function(){return r.a.createElement("div",{id:"projects"},r.a.createElement("div",{className:R.a.ProjectsPage},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{className:R.a.Projects},D.map((function(e,t){return r.a.createElement(w,Object.assign({key:t},e))})))))},B=a(13),I=a.n(B);var C=function(){var e,t=Object(n.useState)(!0),a=Object(i.a)(t,2),l=a[0],o=a[1];switch(l){case!1:e=I.a.Light;break;case!0:e=I.a.Dark}return r.a.createElement(c.Provider,{value:{theme:l,switchTheme:function(){o((function(e){return!e})),window.scrollTo({top:window.pageYOffset-1,behavior:"smooth"})}}},r.a.createElement("div",{className:[I.a.App,e].join(" ")},r.a.createElement(d,{theme:l}),r.a.createElement(k,{theme:l}),r.a.createElement(A,{theme:l}),r.a.createElement(x,{theme:l})))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.2aaa74a5.chunk.js.map