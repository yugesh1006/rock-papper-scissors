(this["webpackJsonprock-paper"]=this["webpackJsonprock-paper"]||[]).push([[0],{21:function(e,c,s){},23:function(e,c,s){},32:function(e,c,s){},33:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){},36:function(e,c,s){"use strict";s.r(c);var t=s(11),a=s.n(t),n=s(7),i=s(8),r=s(1),l=(s(21),s(0)),j=function(e){var c=e.score;return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{className:"text",children:[Object(l.jsx)("span",{children:"ROCK"}),Object(l.jsx)("span",{children:"PAPER"}),Object(l.jsx)("span",{children:"SCISSORS"})]}),Object(l.jsxs)("div",{className:"score-box",children:[Object(l.jsx)("span",{children:"Score"}),Object(l.jsx)("div",{className:"score-box_score",children:c})]})]})},o=(s(23),function(e){var c=e.score,s=e.myChoice,t=e.setScore,a=Object(r.useState)(""),j=Object(i.a)(a,2),o=j[0],d=j[1],b=Object(r.useState)(""),O=Object(i.a)(b,2),x=O[0],h=O[1],m=Object(r.useState)(3),u=Object(i.a)(m,2),p=u[0],v=u[1];Object(r.useEffect)((function(){d(["rock","paper","scissors"][Math.floor(3*Math.random())])}),[]);return Object(r.useEffect)((function(){var e=p>0?setInterval((function(){v(p-1)}),1e3):void("rock"===s&&"scissors"===o||"paper"===s&&"rock"===o?(h("win"),t(c+1)):"paper"===s&&"scissors"===o?(h("lose"),t(c-1)):"scissors"===s&&"paper"===o?(h("win"),t(c+1)):"scissors"===s&&"rock"===o||"rock"===s&&"papper"===o?(h("lose"),t(c-1)):h("draw"));return function(){clearInterval(e)}}),[p,o]),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsxs)("div",{className:"game_you",children:[Object(l.jsx)("span",{className:"text",children:"YOU PICKED"}),Object(l.jsx)("div",{className:"icon-".concat(s," ").concat("Win"===x?"icon-".concat(s,"--winner"):"")})]}),"win"===x&&Object(l.jsxs)("div",{className:"result_play",children:[Object(l.jsx)("span",{className:"text",children:"YOU WIN"}),Object(l.jsx)(n.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"lose"===x&&Object(l.jsxs)("div",{className:"result_play",children:[Object(l.jsx)("span",{className:"text",children:"YOU LOSE"}),Object(l.jsx)(n.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),"draw"===x&&Object(l.jsxs)("div",{className:"result_play",children:[Object(l.jsx)("span",{className:"text",children:"DRAW"}),Object(l.jsx)(n.b,{to:"/",className:"play-again",onClick:function(){return d()},children:"Play Again"})]}),Object(l.jsxs)("div",{className:"game_computer",children:[Object(l.jsx)("span",{className:"text",children:"COMPUTER PICKED"}),0===p?Object(l.jsx)("div",{className:"icon-".concat(o," ").concat("lose"===x?"icon-".concat(o,"--winner"):"")}):Object(l.jsx)("div",{className:"counter",children:p})]})]})}),d=(s(32),s.p+"static/media/bg-triangle.c0c30b56.svg"),b=function(e){var c=e.setMyChoice,s=function(e){c(e.target.dataset.id)};return Object(l.jsxs)("div",{className:"play",children:[Object(l.jsx)("img",{src:d,alt:"my_triangle",className:"triangle"}),Object(l.jsxs)("div",{className:"items",children:[Object(l.jsx)(n.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"paper",onClick:s,className:"icon icon--paper"})}),Object(l.jsx)(n.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"scissors",onClick:s,className:"icon icon--scissors"})}),Object(l.jsx)(n.b,{to:"/game",children:Object(l.jsx)("div",{"data-id":"rock",onClick:s,className:"icon icon--rock"})})]})]})},O=s.p+"static/media/icon-close.bde602ec.svg",x=s.p+"static/media/image-rules.258b753f.svg",h=(s(33),function(e){var c=e.toggle;return a.a.createPortal(Object(l.jsx)("div",{className:"modal-container",children:Object(l.jsxs)("div",{className:"modal-box",children:[Object(l.jsxs)("div",{className:"modal__header",children:[Object(l.jsx)("h1",{children:"Rules"}),Object(l.jsx)("button",{onClick:c,children:Object(l.jsx)("img",{src:O,alt:"Close",srcset:""})})]}),Object(l.jsx)("img",{src:x,alt:"Rules",srcset:""})]})}),document.getElementById("modal"))}),m=(s(34),function(){var e=Object(r.useState)(!1),c=Object(i.a)(e,2),s=c[0],t=c[1],a=function(){t(!s)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsxs)("div",{class:"attribution",children:["Challenge by"," ",Object(l.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by ",Object(l.jsx)("a",{href:"#",className:"name",children:"Yugesh Eathalapaka"}),"."]}),Object(l.jsx)("button",{className:"rules",onClick:a,children:"Rules"})]}),s?Object(l.jsx)(h,{toggle:a}):null]})}),u=s(2);s(35);var p=function(){var e=Object(r.useState)(""),c=Object(i.a)(e,2),s=c[0],t=c[1],a=Object(r.useState)(0),n=Object(i.a)(a,2),d=n[0],O=n[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{score:d}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"/",children:Object(l.jsx)(b,{setMyChoice:t})}),Object(l.jsx)(u.a,{exact:!0,path:"/game",children:Object(l.jsx)(o,{myChoice:s,score:d,setScore:O})})]}),Object(l.jsx)(m,{})]})};a.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b19539e5.chunk.js.map