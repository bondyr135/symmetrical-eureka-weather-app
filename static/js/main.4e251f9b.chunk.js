(this["webpackJsonpkadabra-weather"]=this["webpackJsonpkadabra-weather"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(27),r=n.n(c),s=(n(90),n(44)),i=n(14),o=(n(91),n(9)),u=n(15),l=n(148),h=n(147),j=n(149),p=(n(96),n(2));function f(){var e=Object(u.c)((function(e){return e.currentCity})),t=Object(i.f)(),n=Object(a.useState)(t.location.pathname),c=Object(o.a)(n,2),r=c[0],s=c[1];console.log(r),Object(a.useEffect)((function(){s(t.location.pathname)}),[e]);return Object(p.jsxs)("header",{className:"header-comp",children:[Object(p.jsx)(l.a,{variant:"h3",className:"logo",children:"So how's the weather?"}),Object(p.jsxs)(h.a,{className:"btn-group",color:"primary",value:"/"===r?"/":"favorites",onChange:function(e){e.preventDefault();var n=e.target.value;s(n),"favorites"===n?t.replace("/"+n):t.replace("/")},children:[Object(p.jsx)(j.a,{value:"/",className:"btn home-btn",disabled:"/"===r,style:{fontSize:"20px"},children:"Home"}),Object(p.jsx)(j.a,{value:"favorites",className:"btn favorites-btn",disabled:"favorites"===r,style:{fontSize:"18px"},children:"Favorites"})]})]})}var d=n(24),m=n.n(d),b=n(34),O=function(e){return{type:"SET_CURRENT_CITY",payload:{name:e.name,key:e.key,currentWeather:e.weather,currentTemp:e.temp}}},y=function(e){return{type:"OPEN_MODAL",payload:{msg:e}}},v=n(143);n(103);function x(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.modal}));return Object(p.jsx)(v.a,{open:t.open,className:"actual-modal",onClose:function(){e({type:"CLOSE_MODAL"})},children:Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsx)(l.a,{variant:"h5",sx:{lineHeight:"190%",fontWeight:"600",fontSize:"26px"},children:t.msg})})})}var k=n(150),w=n(145),g=n(151),N=n(74),T=n.n(N),E=(n(104),"U21HLUzqUAASTSnfvQJK7jnIyBeVfzGA"),S="http://dataservice.accuweather.com";function C(){var e=Object(u.c)((function(e){return e.currentCity})),t=Object(u.b)(),n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=function(){var e=Object(b.a)(m.a.mark((function e(){var n,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={},e.next=4,fetch(S+"/locations/v1/cities/autocomplete?apikey=".concat(E,"&q=").concat(r));case 4:return a=e.sent,console.log(a),e.next=8,a.json();case 8:return(c=e.sent)!==[]&&(n.name=c[0].LocalizedName,n.key=c[0].Key),e.abrupt("return",n);case 13:e.prev=13,e.t0=e.catch(0),t(y("Something went wrong with the search... \n Are you sure of your spelling?"));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(b.a)(m.a.mark((function e(n){var a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(S+"/currentconditions/v1/".concat(n.key,"?apikey=").concat(E,"&metric=true"));case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,n.weather=c[0].WeatherText,n.temp=Math.round(c[0].Temperature.Metric.Value),t(O(n)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t(y("Something went wrong with the search... \n Are you sure of your spelling?"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i();case 2:return t=e.sent,e.next=5,l(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){l(e)}),[]);var j=function(){var e=Object(b.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:13!==t.keyCode&&"click"!==t.type||(t.preventDefault(),""!==r&&(h(),s("")));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(k.a,{className:"search-comp",sx:{width:"250px"},children:[Object(p.jsx)(w.a,{variant:"filled",sx:{width:"100%"},className:"search-input",placeholder:"Type a city's name...",onChange:function(e){var t=e.target.value,n=t.charCodeAt(t.length-1);65<=n&&n<=90||97<=n&&n<=122||32===n||(t=t.slice(0,-1)),s(t)},value:r,onKeyDown:j,color:"primary"}),Object(p.jsx)(g.a,{sx:{p:"10px"},onClick:j,children:Object(p.jsx)(T.a,{})}),"",Object(p.jsx)(x,{})]})}var _=n(154),D=n(152),A=n(153);n(105);function I(e){var t=e.day;return Object(p.jsx)(D.a,{className:"forcast_card",children:Object(p.jsxs)(A.a,{className:"forcast-content",children:[Object(p.jsx)(l.a,{variant:"h4",className:"day-details",children:t.dayOfWeek}),Object(p.jsxs)(l.a,{variant:"h5",className:"day-details temp",children:[t.maxTemp,Object(p.jsx)("span",{children:"\xb0"}),"-",t.minTemp,Object(p.jsx)("span",{children:"\xb0"})]})]})})}var L=n(75),M=n.n(L),V=n(76),R=n.n(V);n(106);function F(e){var t=e.isCityDisplayed,n=Object(u.b)(),c=Object(u.c)((function(e){return e.currentCity})),r=Object(u.c)((function(e){return e.favorites})),s=Object(a.useState)(r.findIndex((function(e){return e.key===c.key}))>-1),i=Object(o.a)(s,2),l=i[0],h=i[1];Object(a.useEffect)((function(){var e=r.findIndex((function(e){return e.key===c.key}));h(e>-1)}),[c,l]);var j=function(){var e;l?n({type:"REMOVE_FAVORITE",payload:{name:(e=c).name,key:e.key}}):10===r.length?n(y("One can only have so much love... 10 cities are plenty")):n(function(e){return{type:"ADD_FAVORITE",payload:{name:e.name,key:e.key,currentWeather:e.currentWeather,currentTemp:e.currentTemp}}}(c)),h(!l)};return t?Object(p.jsx)("div",{className:"like-unit-comp",children:l?Object(p.jsx)(M.a,{sx:{fontSize:"54px"},className:"heart-icon like",onClick:j}):Object(p.jsx)(R.a,{sx:{fontSize:"54px"},className:"heart-icon unlike",onClick:j})}):null}n(107);var W=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],z="http://dataservice.accuweather.com",U="U21HLUzqUAASTSnfvQJK7jnIyBeVfzGA";function J(){var e=Object(u.c)((function(e){return e.currentCity})),t=e.currentTemp,n=e.currentWeather,c=e.name,r=e.key,s=Object(u.b)(),i=Object(a.useState)([]),h=Object(o.a)(i,2),j=h[0],f=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(b.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(z+"/forecasts/v1/daily/5day/".concat(r,"?apikey=").concat(U,"&metric=true"));case 3:return t=e.sent,console.log(t),e.next=7,t.json();case 7:n=e.sent,console.log(n),a=n.DailyForecasts.map((function(e){return{dayOfWeek:W[new Date(e.Date).getDay()],maxTemp:Math.round(e.Temperature.Maximum.Value),minTemp:Math.round(e.Temperature.Minimum.Value)}})),f(a),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("error in forecast"),s(y("Something went wrong with fetching this city's forecast... Just stay home!"));case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),Object(p.jsxs)(_.a,{className:"weather-display",children:[Object(p.jsxs)("div",{className:"display-top",children:[t&&Object(p.jsx)(D.a,{className:"current-weather-card",children:Object(p.jsxs)(A.a,{className:"current-weather-content",children:[Object(p.jsx)(l.a,{variant:"h5",className:"current-weather-detail",children:n}),Object(p.jsxs)(l.a,{variant:"h5",className:"current-weather-detail",children:[t,Object(p.jsx)("span",{children:"\xb0"})]})]})}),t?Object(p.jsx)(l.a,{className:"city-name",variant:"h3",children:c}):Object(p.jsx)(l.a,{className:"city-name city-err",variant:"h3",children:"Sorry, something went wrong..."}),Object(p.jsx)(F,{className:"city-like",isCityDisplayed:!!t})]}),Object(p.jsx)("div",{className:"display-bottom",children:j.map((function(e,t){return Object(p.jsx)(I,{day:e},e.dayOfWeek)}))})]})}n(108);function B(){return Object(p.jsxs)("main",{className:"home-comp",children:[Object(p.jsx)(C,{className:"search-in-home"}),Object(p.jsx)(J,{className:"weather-display-in-home"})]})}n(109);function H(){var e=Object(u.b)(),t=Object(i.f)(),n=Object(u.c)((function(e){return e.favorites}));return Object(p.jsx)(_.a,{className:"favorites-comp",children:Object(p.jsx)(k.a,{className:"favorites-group",sx:{backgroundColor:"#f5f5f5"},children:n.map((function(n){return Object(p.jsx)(D.a,{value:n.key,onClick:function(){return function(n){var a={key:n.key,name:n.name};e(O(a)),t.replace("/")}(n)},className:"faved-city-card",children:Object(p.jsxs)(A.a,{className:"faved-city-content",children:[Object(p.jsx)(l.a,{className:"faved-city city-name",variant:"h4",children:n.name}),Object(p.jsxs)(l.a,{className:"faved-city city-temp",variant:"h5",children:[n.currentTemp,Object(p.jsx)("span",{children:"\xb0"})]}),Object(p.jsx)(l.a,{className:"faved-city city-weather",variant:"h5",children:n.currentWeather})]})},n.name)}))})})}var K=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(f,{className:"app-header"}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{exact:!0,path:"/symmetrical-eureka-weather-app/",component:B}),Object(p.jsx)(i.a,{exact:!0,path:"/symmetrical-eureka-weather-app/favorites",component:H})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},X=n(50),q={name:"Tel Aviv",key:"215854"},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_CITY"===t.type?t.payload:e},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return e.every((function(e){return e.key!==t.payload.key}))&&e.push(t.payload),e;case"REMOVE_FAVORITE":var n=e.filter((function(e){return e.key!==t.payload.key}));return n;default:return e}},Y={open:!1,msg:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return{open:!0,msg:t.payload.msg};case"CLOSE_MODAL":return{open:!1,msg:""};default:return e}},$=Object(X.a)({favorites:Q,currentCity:G,modal:Z}),ee=Object(X.b)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(p.jsx)(u.a,{store:ee,children:Object(p.jsx)(K,{})}),document.getElementById("root")),P()},90:function(e,t,n){},91:function(e,t,n){},96:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.4e251f9b.chunk.js.map