"use strict";(self.webpackChunkuclathetatau=self.webpackChunkuclathetatau||[]).push([[415],{9448:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var n=a(1721),l=a(7294),c=a(8037),m=a(1358);var r=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=function(e){var t;a.setState(((t={})[e.target.name]=e.target.value,t))},a.handleSubmit=function(e){e.preventDefault();var t,n=e.target;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(t=Object.assign({"form-name":n.getAttribute("name")},a.state),Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"))}).then((function(){return(0,c.c4)(n.getAttribute("action"))})).catch((function(e){return alert(e)}))},a.state={isValidated:!1},a}return(0,n.Z)(t,e),t.prototype.render=function(){return l.createElement(m.Z,null,l.createElement("section",{className:"section"},l.createElement("div",{className:"container"},l.createElement("div",{className:"content"},l.createElement("h1",null,"Contact"),l.createElement("form",{name:"contact",method:"post",action:"/contact/thanks/","data-netlify":"true","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},l.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),l.createElement("div",{hidden:!0},l.createElement("label",null,"Don’t fill this out:"," ",l.createElement("input",{name:"bot-field",onChange:this.handleChange}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"name"},"Your name"),l.createElement("div",{className:"control"},l.createElement("input",{className:"input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"email"},"Email"),l.createElement("div",{className:"control"},l.createElement("input",{className:"input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0}))),l.createElement("div",{className:"field"},l.createElement("label",{className:"label",htmlFor:"message"},"Message"),l.createElement("div",{className:"control"},l.createElement("textarea",{className:"textarea",name:"message",onChange:this.handleChange,id:"message",required:!0}))),l.createElement("div",{className:"field"},l.createElement("button",{className:"button is-link",type:"submit"},"Send")))))))},t}(l.Component)}}]);
//# sourceMappingURL=component---src-pages-contact-index-js-adebbad3fd0fd727d6ab.js.map