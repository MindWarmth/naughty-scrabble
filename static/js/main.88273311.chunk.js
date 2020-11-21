(this["webpackJsonpnaughty-scrabble"]=this["webpackJsonpnaughty-scrabble"]||[]).push([[0],{174:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),r=n(9),i=n.n(r),s=(n(174),n(13)),l=n(24),j=n(12),d=n(159),b=n(363),u=Object(a.createContext)(),O=n(346),h=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome to Naughty Scrabble!"}),Object(c.jsx)("p",{children:"Press the button below to create a new game."}),Object(c.jsx)(O.a,{component:l.b,to:"/create",color:"primary",variant:"contained",size:"large",children:"New game"}),Object(c.jsx)("p",{children:"To join an existed game you need a link."})]})},f=n(100),x=n.n(f),m=n(151),p=n(160),g=n(350),v=n(364),w=n(152),y=n.n(w),C=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useContext)(u),i=r.publicURL,j=r.setGameID,d=r.setDictionary,b=Boolean(window.Worker),h=new Worker("".concat(i,"/workers/dictionary.js")),f=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:t=e.sent,o(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed to read clipboard");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Create new game"}),Object(c.jsxs)(g.a,{container:!0,spacing:3,children:[Object(c.jsx)(g.a,{item:!0,xs:6,children:Object(c.jsx)(v.a,{label:"Text",placeholder:"Put you text here",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",value:n,onChange:function(e){var t=e.currentTarget.value;return o(t)}})}),Object(c.jsx)(g.a,{item:!0,xs:6,children:Object(c.jsx)(O.a,{variant:"contained",color:"secondary",startIcon:Object(c.jsx)(y.a,{}),onClick:f,children:"Paste from clipboard"})}),Object(c.jsx)(g.a,{item:!0,xs:12,children:Object(c.jsx)(O.a,{component:l.b,disabled:!n,onClick:function(){j(Object(p.a)()),b&&(h.postMessage(n),h.onmessage=function(e){var t=e.data;d(t)})},to:"/invite",color:"primary",variant:"contained",size:"large",children:"Proceed"})})]})]})},D=n(353),S=n(153),N=n.n(S),R=n(154),T=n.n(R),k=n(155),I=n.n(k),P=n(156),A=n.n(P),E=n(354),L=n(161),z=n(68),M="dictionary",B="message",J=Object(a.createContext)({open:function(){},onMessage:function(){},sendMessage:function(){}}),W=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection||window.msRTCPeerConnection,_=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription||window.msRTCSessionDescription,F={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},U={},G="Alice",H=function(e){var t=Object(a.useContext)(u).setUser,n=Object(a.useState)(),o=Object(s.a)(n,2),r=o[0],i=o[1],l=Object(a.useState)([]),j=Object(s.a)(l,2),d=j[0],b=j[1],O=Object(a.useState)(),h=Object(s.a)(O,2),f=h[0],x=h[1];Object(a.useEffect)((function(){f&&(d.forEach((function(e){e&&e(f)})),x(null))}),[f]);var m={open:function(n){return function(n){return new Promise((function(c,a){var o,r,s=null,l="".concat(G,"_").concat(Math.floor(1e4*Math.random()));function j(){return(o=new W(F,U)).onicecandidate=function(e){o&&e&&e.candidate&&d("candidate",e.candidate)},(r=o.createDataChannel("datachannel",{reliable:!1})).onopen=function(){console.log("%cDATACHANNEL OPENED","color: green"),t(l),i(r),c()},r.onclose=function(){console.log("%cDATACHANNEL CLOSED","color: red")},r.onerror=function(){console.log("%cDATACHANNEL ERROR","color: red")},o.ondatachannel=function(e){e.channel.onopen=function(){},e.channel.onmessage=function(e){x(JSON.parse(e.data))}},o}function d(e,t){var c={from:l,gameID:n,action:e,data:t};s.send(JSON.stringify(c))}function b(e){var t=j();t.setRemoteDescription(new _(e)).catch((function(e){console.log(e)}));var n={mandatory:{OfferToReceiveAudio:!1,OfferToReceiveVideo:!1}};t.createAnswer(n).then((function(e){return t.setLocalDescription(e).then((function(){d("answer",e)}))}),(function(e){console.log(e)}))}function u(e){o.setRemoteDescription(new _(e))}function O(e){o.addIceCandidate(new RTCIceCandidate(e)).catch((function(e){console.log(e)}))}(s=new WebSocket(e.url)).onopen=function(e){console.log("%cWebsocket opened","color: gray"),j();var t={offerToReceiveAudio:!0,offerToReceiveVideo:!1};o.createOffer(t).then((function(e){o.setLocalDescription(e),d("offer",e)}),(function(e){console.log(e)}))},s.onclose=function(e){console.log("%cWebsocket closed","color: gray")},s.onerror=function(e){console.log("%cWebsocket error","color: red")},s.onmessage=function(e){var t=JSON.parse(e.data);t.gameID===n&&t.from!==l&&("candidate"===t.action?O(t.data):"offer"===t.action?b(t.data):"answer"===t.action&&u(t.data))}}))}(n)},onMessage:function(e){return function(e){console.log("messageHandlers",d),b((function(t){return[].concat(Object(z.a)(t),[e])}))}(e)},sendMessage:function(e){return function(e){r&&r.send(JSON.stringify(e))}(e)}};return Object(c.jsx)(J.Provider,Object(L.a)({value:m},e))},V=function(){return Object(a.useContext)(J)},Z="ready",q="success",K="failure",Q=function(){var e=Object(a.useState)(Z),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!1),i=Object(s.a)(r,2),l=i[0],d=i[1],b=Object(a.useContext)(u).gameID,h=V(),f=Object(j.g)(),x="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname,"#"),m="".concat(x,"/join/").concat(b),p="/game/".concat(b);return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Share this link with your friend to play the SRRRABBBLE:"}),Object(c.jsx)("code",{className:"multiline-code",children:"".concat(m)}),navigator.share&&Object(c.jsx)("p",{children:Object(c.jsx)(D.a,{onClick:function(){navigator.share({url:"".concat(m),title:"SCRABBLE",text:"Invite your friend to the game!"}).then((function(){return console.log("Invite sent!")})).catch((function(e){return console.log("".concat(e))}))},children:Object(c.jsx)(N.a,{})})}),navigator.clipboard&&Object(c.jsx)("p",{children:Object(c.jsx)(D.a,{onClick:function(){if(n===Z)try{navigator.clipboard.writeText(m).then((function(){return o(q)})).catch((function(){return o(K)}))}catch(e){console.log("Failed to write to clipboard")}},"aria-label":"paste from clipboard",component:"span",children:n===Z?Object(c.jsx)(T.a,{}):n===q?Object(c.jsx)(I.a,{}):Object(c.jsx)(A.a,{})})}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{color:"primary",variant:"contained",onClick:function(){d(!0),h.open(b).then((function(){f.push(p)})).catch((function(){d(!1)}))},disabled:l,size:"large",children:"Proceed to game"})}),l&&Object(c.jsxs)(c.Fragment,{children:["Waiting for peer: ",Object(c.jsx)(E.a,{size:24})]})]})},X=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(j.g)(),i=Object(j.h)().gameID,l=Object(a.useContext)(u).setGameID,d="/game/".concat(i),b=V();return Object(a.useEffect)((function(){l(i)}),[i]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Join to the SRRRABBBLE"}),Object(c.jsxs)("code",{children:["Game ID: ",i]}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{variant:"contained",color:"primary",onClick:function(){o(!0),b.open(i).then((function(){r.push(d)})).catch((function(){o(!1)}))},size:"large",disabled:n,children:"Join"})}),n&&Object(c.jsxs)(c.Fragment,{children:["Joining: ",Object(c.jsx)(E.a,{size:24})]})]})},Y=n(157),$=n.n(Y),ee=n(158),te=n.n(ee),ne=(n(303),new Array(10).fill({})),ce=new Array(10).fill({});var ae=function(e){var t=e.fieldsData,n=e.onChange,a=e.canPlay;return Object(c.jsx)("div",{className:"board",children:ne.map((function(e,o){return Object(c.jsx)("div",{className:"board__row",children:ce.map((function(e,r){var i,s,l=te()("".concat(o,".").concat(r),t);return Object(c.jsx)("div",{className:"board__col",children:a&&!l?Object(c.jsx)("input",{className:"board__cell",onChange:(i=o,s=r,function(e){var t=e.currentTarget.value,c=String(t).toUpperCase().match(/([A-Z])/);c&&c.length&&n({row:i,col:s,letter:c[0]})})}):Object(c.jsx)("div",{className:"board__cell",children:l})},"col-".concat(r))}))},"row-".concat(o))}))})},oe=n(355),re=n(352),ie=n(357),se=n(365),le=n(356),je=(n(304),Object(oe.a)((function(e){return{root:{backgroundColor:e.palette.background.paper}}})));var de=function(){var e=je(),t=Object(a.useContext)(u).user,n=V(),o=Object(a.useState)([]),r=Object(s.a)(o,2),i=r[0],l=r[1];return Object(a.useEffect)((function(){n.onMessage((function(e){e.type===B&&l((function(t){return[e.data].concat(Object(z.a)(t))}))})),setTimeout((function(){n.sendMessage({type:B,data:"".concat(t," joined")})}),1e3)}),[]),Object(c.jsx)("div",{className:"log",children:Object(c.jsx)(re.a,{className:e.root,component:"nav","aria-label":"main mailbox folders",subheader:Object(c.jsx)(le.a,{component:"div",children:"Logs:"}),children:i.map((function(e,t){return Object(c.jsx)(ie.a,{children:Object(c.jsx)(se.a,{primary:e})},t)}))})})},be=n(359),ue=n(360),Oe=n(362),he=n(358),fe=n(361),xe=n(351);n(305);var me=function(){return Object(c.jsx)("div",{className:"scoreboard",children:Object(c.jsx)(he.a,{component:xe.a,children:Object(c.jsx)(be.a,{"aria-label":"simple table",size:"small",children:Object(c.jsxs)(ue.a,{children:[Object(c.jsxs)(fe.a,{children:[Object(c.jsx)(Oe.a,{component:"th",scope:"row",children:"Player #1 last score:"}),Object(c.jsx)(Oe.a,{align:"right",children:"5"})]}),Object(c.jsxs)(fe.a,{children:[Object(c.jsx)(Oe.a,{component:"th",scope:"row",children:"Player #1 total score:"}),Object(c.jsx)(Oe.a,{align:"right",children:"47"})]}),Object(c.jsxs)(fe.a,{children:[Object(c.jsx)(Oe.a,{component:"th",scope:"row",children:"Player #2 last score:"}),Object(c.jsx)(Oe.a,{align:"right",children:"2"})]}),Object(c.jsxs)(fe.a,{children:[Object(c.jsx)(Oe.a,{component:"th",scope:"row",children:"Player #2 total score:"}),Object(c.jsx)(Oe.a,{align:"right",children:"54"})]})]})})})})},pe=(n(306),Object(oe.a)((function(e){return{btn:{margin:"0 2px"}}})));var ge=function(){var e=pe();return Object(c.jsxs)("div",{className:"controls",children:[Object(c.jsx)(O.a,{variant:"contained",size:"small",color:"primary",className:e.btn,children:"Submit"}),Object(c.jsx)(O.a,{variant:"contained",size:"small",color:"secondary",className:e.btn,children:"Pass"}),Object(c.jsx)(O.a,{variant:"contained",size:"small",className:e.btn,children:"Reset"}),Object(c.jsx)(O.a,{variant:"contained",size:"small",className:e.btn,children:"Swap"})]})},ve=function(){var e=Object(j.h)(),t=Object(a.useContext)(u),n=t.gameID,o=t.dictionary,r=t.setDictionary,i=t.user,l=Object(a.useState)({}),d=Object(s.a)(l,2),b=d[0],O=d[1],h=Object(a.useState)(!0),f=Object(s.a)(h,2),x=f[0],m=f[1],p=V();if(Object(a.useEffect)((function(){p.onMessage((function(e){e.type===M&&r(e.data)})),o&&p.sendMessage({type:M,data:o})}),[]),!n&&e.gameID)return Object(c.jsx)(j.a,{to:"/join/".concat(e.gameID)});return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h1",{className:"title",children:["Game ID: ",Object(c.jsx)("code",{children:n}),", user: ",Object(c.jsx)("code",{children:i})]}),Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"main",children:Object(c.jsx)(ae,{fieldsData:b,onChange:function(e){var t=e.row,n=e.col,c=e.letter;m(!1),O($()("".concat(t,".").concat(n),c,b))},canPlay:x})}),Object(c.jsxs)("div",{className:"sidebar",children:[Object(c.jsx)(de,{}),Object(c.jsx)(me,{}),Object(c.jsx)(ge,{})]})]}),o&&o.length&&Object(c.jsx)("code",{children:o.map((function(e){return"".concat(e,", ")}))})]})};n(307);var we=function(){var e=Object(d.a)({palette:{type:"dark",primary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#fff"}}}),t=Object(a.useState)(),n=Object(s.a)(t,2),o=n[0],r=n[1],i=Object(a.useState)(),O=Object(s.a)(i,2),f=O[0],x=O[1],m=Object(a.useState)(),p=Object(s.a)(m,2),g=p[0],v=p[1];return Object(c.jsx)(l.a,{children:Object(c.jsx)(u.Provider,{value:{publicURL:window.publicURL||"",gameID:o,setGameID:r,dictionary:f,setDictionary:x,user:g,setUser:v},children:Object(c.jsx)(H,{url:"wss://ice-server.app.html.wtf",children:Object(c.jsx)(b.a,{theme:e,children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/create",children:Object(c.jsx)(C,{})}),Object(c.jsx)(j.b,{path:"/invite",children:Object(c.jsx)(Q,{})}),Object(c.jsx)(j.b,{path:"/join/:gameID",children:Object(c.jsx)(X,{})}),Object(c.jsx)(j.b,{path:"/game/:gameID",children:Object(c.jsx)(ve,{})}),Object(c.jsx)(j.b,{path:"/",children:Object(c.jsx)(h,{})})]})})})})})})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,366)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(we,{})}),document.getElementById("root")),ye()}},[[308,1,2]]]);
//# sourceMappingURL=main.88273311.chunk.js.map