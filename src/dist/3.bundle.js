(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(36),s=t(3),c=t(39),u=t.n(c);var i=function(e){return t=(a=e).value,n=a.state,l=a.index,c=a.setIndex,i=a.setAppState,o=a.setUserProfile,l>5?function(e,a,t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"pa3 black-80 dark-blue"},r.a.createElement("form",{className:"measure center"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},"Summary"),r.a.createElement("ul",{className:"list pl0"},e.map(function(e,t){return r.a.createElement("li",{key:t,className:"pa3 pa3-ns bb b--black-10"},r.a.createElement("b",{className:"db f3 mb1"},a[t].label),r.a.createElement("span",{className:"f4 db lh-copy measure"},e.value))}))),r.a.createElement("fieldset",{className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f2 fw6 ph0 mh0 center"},r.a.createElement("a",{onClick:function(a){!function(e,a,t,n){e.preventDefault();var r={avatar:u.a.image.avatar(),username:a[0].value,password:a[1].value,name:a[2].value,age:a[3].value,location:a[4].value,description:a[5].value};s.a.post("/newuser",{body:r}).then(function(e){n(e.data),t("UserLikePage")})}(a,e,t,n)},className:"f4 link dim ba br4 ph3 pv2 center mb2 dib black grow pointer dark-blue"},"Sign Up"))))))}(n,t,i,o):r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"pa4 black-80 dark-blue"},r.a.createElement("form",{className:"measure center"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f3 fw6 ph0 mh0 center"},t[l].question),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},t[l].label),r.a.createElement("input",{type:3===l?"number":"text",value:n[l].value,onChange:n[l].handleChange,className:"pa2 input-reset ba bg-transparent hover-bg-washed-red w-100"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"fl"},0!==l?r.a.createElement("a",{onClick:function(){c(l-1)},className:"f6 link dim ba br4 ph3 pv2 mb2 dib black grow pointer dark-blue"},"Previous"):null),r.a.createElement("div",{className:"fr"},r.a.createElement("a",{onClick:function(){c(l+1)},className:"f6 link dim ba br4 ph3 pv2 mb2 dib black grow pointer dark-blue"},"Next"))))));var a,t,n,l,c,i,o};function o(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=[{label:"Username",question:"Please setup a username."},{label:"Password",question:"Please setup a password."},{label:"Name",question:"What is your name?"},{label:"Age",question:"How old are you?"},{label:"Location",question:"Where are you located?"},{label:"Quote",question:"What is your favorite quote?"}];a.default=function(e){var a,t,s,c,u,b,p=e.setAppState,f=e.setUserProfile,d=o(Object(n.useState)(0),2),v=d[0],h=d[1],E=(a=Object(l.a)(""),t=Object(l.a)(""),s=Object(l.a)(""),c=Object(l.a)(""),u=Object(l.a)(""),b=Object(l.a)(""),{value:m,state:[a,t,s,c,u,b]}),w=E.value,y=E.state;return r.a.createElement(i,{value:w,state:y,index:v,setIndex:h,setAppState:p,setUserProfile:f})}},36:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(0);function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var t=[],n=!0,r=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw l}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(e){var a=r(Object(n.useState)(e),2),t=a[0],l=a[1];return{value:t,handleChange:function(e){l(e.target.value)}}}}}]);