import{r as p}from"./index.ed373d49.js";import{s}from"./join.707c3d05.22915b53.js";const N=new Intl.DateTimeFormat("ro-RO",{hour:"2-digit",minute:"2-digit",day:"numeric",month:"short",year:"numeric",weekday:"long"}),v=a=>{const n=Date.now(),o=1e3,t=o*60,r=t*60,l=r*24,i=a.getTime()-n,c=Math.floor(i/l),d=Math.floor((i-c*l)/r),u=Math.floor((i-c*l-d*r)/t),j=Math.floor((i-c*l-d*r-u*t)/o);return{days:c,hours:d,minutes:u,seconds:j}};var x={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=p,_=Symbol.for("react.element"),y=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,g=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function f(a,n,o){var t,r={},l=null,i=null;o!==void 0&&(l=""+o),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(i=n.ref);for(t in n)T.call(n,t)&&!E.hasOwnProperty(t)&&(r[t]=n[t]);if(a&&a.defaultProps)for(t in n=a.defaultProps,n)r[t]===void 0&&(r[t]=n[t]);return{$$typeof:_,type:a,key:l,ref:i,props:r,_owner:g.current}}m.Fragment=y;m.jsx=f;m.jsxs=f;x.exports=m;var e=x.exports;const h={title:"Coding challange #1 - Wallet app UI",dateTime:new Date("2023-09-06T18:00")},S=()=>{const[a,n]=p.useState();p.useEffect(()=>{const i=setInterval(()=>n(v(h.dateTime)),1e3);return console.log("timer"),()=>clearInterval(i)},[]);const{days:o,hours:t,minutes:r,seconds:l}=a??{};return e.jsxs("div",{className:s.container,children:[e.jsxs("div",{className:s.groupContainer,children:[e.jsx("h1",{children:h.title}),e.jsx("span",{className:s.sessionDate,children:N.format(h.dateTime)})]}),e.jsx("hr",{}),e.jsxs("div",{className:s.groupContainer,children:[e.jsx("span",{children:"Sesiunea începe în:"}),e.jsxs("div",{className:s.timerContainer,children:[e.jsxs("div",{className:s.timerCell,children:[e.jsx("span",{className:s.timerCellValue,children:o}),e.jsx("span",{className:s.timerCellUnit,children:"zile"})]}),e.jsxs("div",{className:s.timerCell,children:[e.jsx("span",{className:s.timerCellValue,children:t}),e.jsx("span",{className:s.timerCellUnit,children:"ore"})]}),e.jsxs("div",{className:s.timerCell,children:[e.jsx("span",{className:s.timerCellValue,children:r}),e.jsx("span",{className:s.timerCellUnit,children:"min"})]}),e.jsxs("div",{className:s.timerCell,children:[e.jsx("span",{className:s.timerCellValue,children:l}),e.jsx("span",{className:s.timerCellUnit,children:"sec"})]})]})]})]})};export{S as default};