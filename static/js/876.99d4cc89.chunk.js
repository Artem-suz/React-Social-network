"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[876],{3876:function(e,s,a){a.r(s),a.d(s,{default:function(){return W}});var i=a(364),n=a(7781),l=a(2807),t=(a(2791),"Dialogs_pageDialogs__WHFua"),r="Dialogs_dialogs__xS83o",d="Dialogs_messages__jWYJC",c="Dialogs_messagesWrapper__WKukP",g="Dialogs_mesText__Jc1lx",o="Dialogs_error__v6KrY",m="Dialogs_appWrapperContent__YEGWB",u="Dialogs_dialogsBtnSend__i7wTF",_="MessageItem_message__Exre2",h=a(184),x=function(e){return(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:_,children:e.message})})},j=a(3504),v="DialogItem_dialog__hDKiN",p="DialogItem_active__5unxN",f="DialogItem_img__YVJHV",M=function(e){return e.isActive?p:""},N=function(e){var s="/dialogs/"+e.id;return(0,h.jsx)("div",{className:v,children:(0,h.jsxs)(j.OL,{to:s,className:M,children:[(0,h.jsx)("img",{className:f,src:e.img,alt:"User avatar"}),e.name]})})},D=a(5705),b=a(132),k=a(5558),C=function(e){var s=b.Ry().shape({chatMessage:b.Z_().max(500,"Too long")});return(0,h.jsx)(D.J9,{initialValues:{chatMessage:""},validateOnBlur:!0,onSubmit:function(s,a){e.sendMessage(s.chatMessage),a.resetForm({chatMessage:""})},validationSchema:s,children:function(e){var s=e.values,a=e.errors,i=e.touched,n=e.handleChange,l=e.handleBlur,t=e.isValid,r=e.handleSubmit,d=e.dirty;return(0,h.jsxs)(D.l0,{children:[(0,h.jsx)("div",{children:(0,h.jsx)(D.gN,{placeholder:"Enter your message",type:"text",name:"chatMessage",component:k.aP,onChange:n,onBlur:l,value:s.chatMessage})}),i.chatMessage&&a.chatMessage&&(0,h.jsx)("p",{className:o,children:a.chatMessage}),(0,h.jsx)("div",{className:u,children:(0,h.jsx)("button",{disabled:!t&&!d,onClick:r,type:"submit",children:"Send"})})]})}})},S=function(e){return(0,h.jsx)("div",{className:m,children:(0,h.jsxs)("div",{className:t,children:[(0,h.jsx)("div",{className:r,children:e.dialogs.map((function(e){return(0,h.jsx)(N,{name:e.name,id:e.id,img:e.img},e.id)}))}),(0,h.jsx)("div",{className:d,children:(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("div",{className:g,children:e.messages.map((function(e){return(0,h.jsx)(x,{message:e.message,id:e.id},e.id)}))}),(0,h.jsx)(C,{sendMessage:function(s){e.sendMessage(s)}})]})})]})})},W=(0,n.qC)((0,i.$j)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages,newMessageText:e.dialogsPage.newMessageText}}),{sendMessage:l.b}))(S)}}]);
//# sourceMappingURL=876.99d4cc89.chunk.js.map