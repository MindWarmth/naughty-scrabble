(this["webpackJsonpnaughty-scrabble"]=this["webpackJsonpnaughty-scrabble"]||[]).push([[0],{186:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),r=n(9),i=n.n(r),s=(n(186),n(11)),l=n(21),j=n(13),d=n(170),u=n(369),b=Object(a.createContext)(),h=n(357),O=n(353),f=function(e){return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172 172",width:e.width,height:e.height,children:Object(c.jsxs)("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:"1",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:"10",strokeDasharray:"",strokeDashoffset:"0",fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",children:[Object(c.jsx)("path",{d:"M0,172v-172h172v172z",fill:"none"}),Object(c.jsx)("g",{fill:e.fill,children:Object(c.jsx)("path",{d:"M86,6.88c-43.65603,0 -79.12,35.46397 -79.12,79.12c0,43.65603 35.46397,79.12 79.12,79.12c43.65603,0 79.12,-35.46397 79.12,-79.12c0,-43.65603 -35.46397,-79.12 -79.12,-79.12zM86,13.76c39.93779,0 72.24,32.30221 72.24,72.24c0,39.93779 -32.30221,72.24 -72.24,72.24c-39.93779,0 -72.24,-32.30221 -72.24,-72.24c0,-39.93779 32.30221,-72.24 72.24,-72.24zM85.40875,58.48c-12.36336,0 -15.88985,8.83214 -15.88985,13.8339c0,6.76992 5.2997,10.29592 7.65266,11.18c-2.94464,1.17648 -9.41969,4.4154 -9.41969,13.53828c0,7.65056 4.71151,16.4811 18.54375,16.4811c5.2976,0 17.9525,-2.64886 17.9525,-16.4811c0,-9.41872 -6.47827,-12.6542 -9.71531,-13.53828c2.06056,-0.88064 7.35703,-4.41008 7.35703,-11.18c0,-2.6488 -0.8807,-13.8339 -16.4811,-13.8339zM53.32,59.34c-1.47232,8.24912 -7.22744,9.84947 -15.48,10.14531v5.30109l13.76,0.0336v37.84h6.88v-53.32zM85.70437,64.36563c7.9464,0 9.12406,5.5951 9.12406,8.2439c0,2.94464 -1.47028,8.82844 -8.82844,8.82844c-9.12288,0 -9.71204,-7.35612 -9.7086,-8.82844c0,-1.17992 0.58249,-8.2439 9.41297,-8.2439zM123.84,72.24v10.32h-10.32v6.88h10.32v10.32h6.88v-10.32h10.32v-6.88h-10.32v-10.32zM86,87.02797c8.83048,0 11.18672,7.9536 11.18672,10.30656c0,5.00176 -3.82856,10.58875 -11.18672,10.58875c-5.59344,0 -11.48235,-2.93475 -11.48235,-10.58875c0,-4.41696 2.94771,-10.30656 11.48235,-10.30656z"})})]})})},x=n.p+"static/media/logo.6ba9428e.gif",m=function(){return Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(c.jsx)(O.a,{item:!0,xs:12,sm:6,md:5,children:Object(c.jsx)("img",{src:x,className:"logo",alt:"Naughty Board"})}),Object(c.jsxs)(O.a,{item:!0,xs:12,sm:6,md:5,children:[Object(c.jsx)("h1",{children:"Welcome to Naughty Board!"}),Object(c.jsx)("p",{children:"Press the button below to create a new game."}),Object(c.jsx)(h.a,{component:l.b,to:"/create",color:"primary",variant:"contained",size:"large",children:"Create new game"}),Object(c.jsx)("p",{children:"To join an existed game you need a link."}),Object(c.jsx)(f,{fill:"#E74C3C",width:48,height:48})]})]})},g=n(110),p=n.n(g),v=n(161),w=n(171),y=n(371),C=n(370),k=n(162),D=n.n(k),S=n(358),I=Object(S.a)({formEl:{marginTop:16}}),z=function(){var e=I(),t=Object(a.useState)(""),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(""),j=Object(s.a)(i,2),d=j[0],u=j[1],f=Object(a.useContext)(b),x=f.setUser,m=f.publicURL,g=f.setGameID,k=f.setDictionary,S=Boolean(window.Worker),z=new Worker("".concat(m,"/workers/dictionary.js")),T=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed to read clipboard");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(O.a,{container:!0,direction:"row",justify:"center",children:Object(c.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(c.jsxs)(O.a,{container:!0,spacing:3,children:[Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsx)("h1",{children:"Create a new game"})}),Object(c.jsxs)(O.a,{item:!0,xs:12,children:[Object(c.jsx)(C.a,{label:"Username",placeholder:"Put your username here",fullWidth:!0,variant:"outlined",value:d,required:!1,onChange:function(e){var t=e.currentTarget.value;return u(t)}}),Object(c.jsx)(C.a,{label:"Insert text which will be used as dictionary",placeholder:"Put text here",className:e.formEl,multiline:!0,rows:4,fullWidth:!0,variant:"outlined",value:o,required:!0,onChange:function(e){var t=e.currentTarget.value;return r(t)}}),Object(c.jsxs)(h.a,{variant:"contained",color:"secondary",className:e.formEl,startIcon:Object(c.jsx)(D.a,{}),onClick:T,children:["Paste",Object(c.jsx)(y.a,{xsDown:!0,children:" from clipboard"})]})]}),Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsx)(h.a,{component:l.b,disabled:!o,onClick:function(){g(Object(w.a)()),d&&x(d),S&&(z.postMessage(o),z.onmessage=function(e){var t=e.data;k(t)})},to:"/invite",color:"primary",variant:"contained",size:"large",children:"Proceed"})})]})})})},T=n(166),M=n.n(T),R=n(163),_=n.n(R),N=n(164),P=n.n(N),E=n(165),W=n.n(E),U=n(361),L=n(52),A=n(31),B="dictionary",J="welcome",F="play",G="LEAVE",V=Object(a.createContext)({open:function(){},onMessage:function(){},sendMessage:function(){}}),q=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection||window.msRTCPeerConnection,H=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription||window.msRTCSessionDescription,Y={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},Z={},K="Alice",Q=function(e){var t=Object(a.useContext)(b),n=t.user,o=t.setUser,r=Object(a.useState)(),i=Object(s.a)(r,2),l=i[0],j=i[1],d=Object(a.useState)([]),u=Object(s.a)(d,2),h=u[0],O=u[1],f=Object(a.useState)(),x=Object(s.a)(f,2),m=x[0],g=x[1];Object(a.useEffect)((function(){m&&(h.forEach((function(e){e&&e(m)})),g(null))}),[m]);var p={open:function(t){return function(t){return new Promise((function(c,a){var r,i,s,l=null;function d(){return(r=new q(Y,Z)).onicecandidate=function(e){r&&e&&e.candidate&&u("candidate",e.candidate)},(i=r.createDataChannel("datachannel",{reliable:!1})).onopen=function(){console.log("%cdataChannel: opened","color: green"),j(i),c()},i.onclose=function(){console.log("%cdataChannel: closed","color: red")},i.onerror=function(){console.log("%cdataChannel: error","color: red")},r.ondatachannel=function(e){e.channel.onopen=function(){},e.channel.onmessage=function(e){g(JSON.parse(e.data))},e.channel.onclose=function(){console.log("%cpeerConnection channel: closed","color: red")},e.channel.onerror=function(e){console.log("%cpeerConnection channel: error","color: red")}},r}function u(e,n){var c={from:s,gameID:t,action:e,data:n};l.send(JSON.stringify(c))}function b(e){var t=d();t.setRemoteDescription(new H(e)).catch((function(e){console.log(e)}));var n={mandatory:{OfferToReceiveAudio:!1,OfferToReceiveVideo:!1}};t.createAnswer(n).then((function(e){return t.setLocalDescription(e).then((function(){u("answer",e)}))}),(function(e){console.log(e)}))}function h(e){r.setRemoteDescription(new H(e))}function O(e){r.addIceCandidate(new RTCIceCandidate(e)).catch((function(e){console.log(e)}))}n?s=n:(s="".concat(K,"_").concat(Math.floor(1e6*Math.random())),o(s)),(l=new WebSocket(e.url)).onopen=function(e){console.log("%cWebsocket: opened","color: gray"),d();var t={offerToReceiveAudio:!0,offerToReceiveVideo:!1};r.createOffer(t).then((function(e){r.setLocalDescription(e),u("offer",e)}),(function(e){console.log(e)}))},l.onclose=function(e){console.log("%cWebsocket: closed","color: gray")},l.onerror=function(e){console.log("%cWebsocket: error","color: red")},l.onmessage=function(e){var n=JSON.parse(e.data);n.gameID===t&&n.from!==s&&("candidate"===n.action?O(n.data):"offer"===n.action?b(n.data):"answer"===n.action&&h(n.data))}}))}(t)},onMessage:function(e){return function(e){O((function(t){return[].concat(Object(A.a)(t),[e])}))}(e)},sendMessage:function(e){return function(e){l&&l.send(JSON.stringify(e))}(e)}};return Object(c.jsx)(V.Provider,Object(L.a)({value:p},e))},X=function(){return Object(a.useContext)(V)},$="ready",ee="success",te="failure",ne=function(){var e=Object(a.useState)($),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),i=Object(s.a)(r,2),d=i[0],u=i[1],f=Object(a.useContext)(b).gameID,x=X(),m=Object(j.g)(),g="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"#"),p="".concat(g,"/join/").concat(f),v="/game/".concat(f);return Object(c.jsx)(O.a,{container:!0,direction:"row",justify:"center",children:Object(c.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(c.jsxs)(O.a,{container:!0,spacing:3,children:[Object(c.jsxs)(O.a,{item:!0,xs:12,children:[Object(c.jsx)("h1",{children:"Share link"}),Object(c.jsx)("p",{children:"Share this link with your friend to play together:"}),Object(c.jsx)("code",{children:"".concat(p)})]}),Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsxs)(O.a,{container:!0,children:[navigator.clipboard&&Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsxs)(h.a,{color:"secondary",variant:"outlined",onClick:function(){if(n===$)try{navigator.clipboard.writeText(p).then((function(){return o(ee)})).catch((function(){return o(te)}))}catch(e){console.log("Failed to write to clipboard")}},size:"large",startIcon:n===$?Object(c.jsx)(_.a,{}):n===ee?Object(c.jsx)(P.a,{}):Object(c.jsx)(W.a,{}),children:["Copy",Object(c.jsx)(y.a,{xsDown:!0,children:" to cliboard"})]})}),navigator.share&&Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsx)(h.a,{color:"secondary",variant:"outlined",onClick:function(){navigator.share({url:"".concat(p),title:"Naughty Board",text:"Invite your friend to the game!"}).then((function(){return console.log("Invite sent!")})).catch((function(e){return console.log("".concat(e))}))},size:"large",startIcon:Object(c.jsx)(M.a,{}),children:"Share"})})]})}),Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsxs)(h.a,{color:"primary",variant:"contained",onClick:function(){u(!0),x.open(f).then((function(){m.push(v)})).catch((function(){u(!1)}))},disabled:d,size:"large",startIcon:d&&Object(c.jsx)(U.a,{size:16}),children:["Start",Object(c.jsx)(y.a,{xsDown:!0,children:" game"})]})}),Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsxs)(h.a,{component:l.b,to:"/create",color:"primary",variant:"outlined",size:"large",children:[Object(c.jsx)(y.a,{xsDown:!0,children:"Create new game"}),Object(c.jsx)(y.a,{smUp:!0,children:"Create"})]})})]})})})},ce=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(j.g)(),i=Object(j.h)().gameID,d=Object(a.useContext)(b),u=d.setGameID,f=d.setUser,x="/game/".concat(i),m=X(),g=Object(a.useState)(""),p=Object(s.a)(g,2),v=p[0],w=p[1];return Object(a.useEffect)((function(){f(v)}),[v]),Object(a.useEffect)((function(){u(i)}),[i]),Object(c.jsx)(O.a,{container:!0,direction:"row",justify:"center",children:Object(c.jsx)(O.a,{item:!0,xs:12,md:6,children:Object(c.jsxs)(O.a,{container:!0,spacing:3,children:[Object(c.jsxs)(O.a,{item:!0,xs:12,children:[Object(c.jsx)("h1",{children:"Join to the game"}),Object(c.jsxs)("code",{children:["Game ID: ",i]})]}),Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsx)(C.a,{label:"Username",placeholder:"Put your username here",fullWidth:!0,variant:"outlined",value:v,required:!1,onChange:function(e){var t=e.currentTarget.value;return w(t)}})}),Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsx)(h.a,{variant:"contained",color:"primary",onClick:function(){o(!0),m.open(i).then((function(){r.push(x)})).catch((function(){o(!1)}))},size:"large",disabled:n,startIcon:n&&Object(c.jsx)(U.a,{size:16}),children:"Join game"})}),Object(c.jsx)(O.a,{item:!0,xs:6,children:Object(c.jsxs)(h.a,{component:l.b,to:"/create",color:"primary",variant:"outlined",size:"large",children:["Create",Object(c.jsx)(y.a,{xsDown:!0,children:" new game"})]})})]})})})},ae=n(72),oe=n(167),re=n.n(oe),ie=(n(312),n(368)),se=n(169),le=n.n(se),je=n(168),de=n.n(je),ue=n(111),be=n.n(ue),he=(n(315),new Array(10).fill({})),Oe=new Array(10).fill({});var fe=function(e){var t=e.fieldsData,n=e.onChange,a=e.canPlay;return Object(c.jsx)("div",{className:be()("board",{"board--active":a}),children:he.map((function(e,o){return Object(c.jsx)("div",{className:"board__row",children:Oe.map((function(e,r){var i,s,l=de()("".concat(o,".").concat(r),t);return Object(c.jsx)("div",{className:"board__col",children:a&&!l?Object(c.jsx)("input",{className:"board__cell",value:"",onChange:(i=o,s=r,function(e){var t=e.currentTarget.value,c=String(t).toUpperCase().match(/([A-Z])/);c&&c.length&&n({row:i,col:s,letter:c[0]})})}):Object(c.jsx)("div",{className:be()("board__cell",l?{"board__cell--checked":l.checked,"board__cell--start-vertical":l.startVertical,"board__cell--start-horizontal":l.startHorizontal,"board__cell--type-vertical":l.vertical,"board__cell--type-horizontal":l.horizontal}:null),children:l?l.value:""})},"col-".concat(r))}))},"row-".concat(o))}))})},xe=n(360),me=n(362),ge=n(372),pe=Object(S.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,maxHeight:124,overflow:"auto"}}}));var ve=function(){var e=pe(),t=Object(a.useContext)(b),n=t.user,o=t.opponent,r=t.setOpponent,i=X(),l=Object(a.useState)([]),j=Object(s.a)(l,2),d=j[0],u=j[1],h=Object(a.useState)(),O=Object(s.a)(h,2),f=O[0],x=O[1];return Object(a.useEffect)((function(){i.onMessage((function(e){x(e)})),setTimeout((function(){i.sendMessage({type:J,data:{user:n}})}),1e3)}),[]),Object(a.useEffect)((function(){if(f){var e=f.type,t=f.data;switch(e){case J:u((function(e){return["Opponent ".concat(t.user," joined")].concat(Object(A.a)(e))})),r(t.user);break;case F:u((function(e){return["".concat(o,": ").concat(t.previousStep.letter)].concat(Object(A.a)(e))}));break;case G:u((function(e){return["".concat(o," left the game")].concat(Object(A.a)(e))}))}}}),[f]),Object(c.jsx)(xe.a,{className:e.root,component:"nav",dense:!0,children:d.map((function(e,t){return Object(c.jsx)(me.a,{children:Object(c.jsx)(ge.a,{primary:e})},t)}))})},we=n(364),ye=n(365),Ce=n(367),ke=n(363),De=n(366),Se=n(359),Ie=Object(S.a)({table:{marginBottom:16,marginTop:16}});var ze=function(){var e=Ie(),t=Object(a.useContext)(b),n=t.user,o=t.opponent;return Object(c.jsx)(ke.a,{component:Se.a,className:e.table,children:Object(c.jsx)(we.a,{size:"small",children:Object(c.jsxs)(ye.a,{children:[Object(c.jsxs)(De.a,{children:[Object(c.jsx)(Ce.a,{scope:"row",children:Object(c.jsxs)("strong",{children:[n," score:"]})}),Object(c.jsx)(Ce.a,{align:"right",children:Object(c.jsx)("strong",{children:"0"})})]}),Object(c.jsxs)(De.a,{children:[Object(c.jsxs)(Ce.a,{scope:"row",children:[o," score:"]}),Object(c.jsx)(Ce.a,{align:"right",children:"0"})]})]})})})},Te=function(){var e=Object(j.h)(),t=Object(a.useContext)(b),n=t.gameID,o=t.setGameID,r=t.dictionary,i=t.setDictionary,l=t.user,d=t.setUser,u=t.publicURL,h=t.setOpponent,f=Object(a.useState)(new Array(10).fill(new Array(10).fill(null))),x=Object(s.a)(f,2),m=x[0],g=x[1],p=Object(a.useState)(),v=Object(s.a)(p,2),w=v[0],C=v[1],k=Object(a.useState)(!0),D=Object(s.a)(k,2),S=D[0],I=D[1],z=X(),T=new Worker("".concat(u,"/workers/chunks.js")),M=Object(j.g)();Object(a.useEffect)((function(){return z.onMessage((function(e){var t=e.type,n=e.data;switch(t){case B:i(n);break;case F:I(!0),g(n.fieldsData)}})),r&&z.sendMessage({type:B,data:r}),function(){T.terminate()}}),[]),Object(a.useEffect)((function(){m&&(console.log("useEffect",m),T.postMessage({fieldsData:m}))}),[m]);var R=Object(a.useMemo)((function(){return w&&w.data&&w.list&&r?w.list.reduce((function(e,t){return r.includes(t)?{data:Object(L.a)(Object(L.a)({},e.data),{},Object(ae.a)({},t,w.data[t])),list:[].concat(Object(A.a)(e.list),[t])}:e}),{data:{},list:[]}):null}),[w,r]);if(!n&&e.gameID)return Object(c.jsx)(j.a,{to:"/join/".concat(e.gameID)});return T.onmessage=function(e){var t=e.data;return C(t)},console.log("chunks",w),console.log("foundWords",R),Object(c.jsxs)(O.a,{container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:3,children:[Object(c.jsxs)(O.a,{item:!0,xs:12,md:10,children:[Object(c.jsxs)("h1",{children:["Game ID: ",Object(c.jsx)("code",{children:n})]}),Object(c.jsxs)("p",{children:["user: ",Object(c.jsx)("code",{children:l})]})]}),Object(c.jsx)(O.a,{item:!0,xs:12,sm:6,children:Object(c.jsx)(fe,{fieldsData:m,onChange:function(e){var t=e.row,n=e.col,c=e.letter,a=re()("".concat(t,".").concat(n,".value"),c,m);I(!1),g(a),z.sendMessage({type:F,data:{previousStep:{row:t,col:n,letter:c},fieldsData:a}})},canPlay:S})}),Object(c.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(c.jsxs)(O.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsxs)(O.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(c.jsx)(O.a,{item:!0,children:S?"You turn!":Object(c.jsx)("small",{children:"Wait for the opponent..."})}),Object(c.jsx)(O.a,{item:!0,children:Object(c.jsx)(ie.a,{"aria-label":"Leave",component:"span",size:"small",onClick:function(){z.sendMessage({type:G}),o(null),i([]),d(null),h(null),M.push("/")},children:Object(c.jsx)(le.a,{})})})]})}),Object(c.jsx)(y.a,{xsDown:!0,children:Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsx)(ve,{})})}),Object(c.jsx)(O.a,{item:!0,xs:12,children:Object(c.jsx)(ze,{})})]})}),r&&r.length>0&&Object(c.jsx)(O.a,{item:!0,xs:12,md:10,children:Object(c.jsx)("code",{children:r.map((function(e){return"".concat(e,", ")}))})})]})};n(316);var Me=function(){var e=Object(d.a)({palette:{type:"dark",primary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#fff"}}}),t=Object(a.useState)(),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(),h=Object(s.a)(i,2),O=h[0],f=h[1],x=Object(a.useState)(),g=Object(s.a)(x,2),p=g[0],v=g[1],w=Object(a.useState)(),y=Object(s.a)(w,2),C=y[0],k=y[1];return Object(c.jsx)(l.a,{children:Object(c.jsx)(b.Provider,{value:{publicURL:window.publicURL||"",gameID:o,setGameID:r,dictionary:O,setDictionary:f,user:p,setUser:v,opponent:C,setOpponent:k},children:Object(c.jsx)(Q,{url:"wss://ice-server.app.html.wtf",children:Object(c.jsx)(u.a,{theme:e,children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/create",children:Object(c.jsx)(z,{})}),Object(c.jsx)(j.b,{path:"/invite",children:Object(c.jsx)(ne,{})}),Object(c.jsx)(j.b,{path:"/join/:gameID",children:Object(c.jsx)(ce,{})}),Object(c.jsx)(j.b,{path:"/game/:gameID",children:Object(c.jsx)(Te,{})}),Object(c.jsx)(j.b,{path:"/",children:Object(c.jsx)(m,{})})]})})})})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,373)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(Me,{})}),document.getElementById("root")),Re()}},[[317,1,2]]]);
//# sourceMappingURL=main.840a9d93.chunk.js.map