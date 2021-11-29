(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={list:"ContactList_list__3al9f",list__item:"ContactList_list__item__27wiv",button:"ContactList_button__1xrmy"}},22:function(t,e,n){t.exports={label:"Filter_label__GkC8A",input:"Filter_input__2VAUG"}},39:function(t,e,n){},40:function(t,e,n){},68:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),u=n.n(r),i=(n(39),n(40),n(23)),o=n(70),s=n(8),l=n.n(s),b=n(7),j=n(9),d=n.n(j),O=n(18),f=n(12),p=n.n(f),m=n(6);p.a.defaults.baseURL="https://61a1187a6c3b400017e69bf3.mockapi.io";var h=Object(m.c)("getContacts",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,p.a.get("/contacts");case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),v=Object(m.c)("addContacts",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var a,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,p.a.post("/contacts",e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),x=Object(m.c)("deleteContacts",function(){var t=Object(O.a)(d.a.mark((function t(e,n){var a,c,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.rejectWithValue,t.prev=1,t.next=4,p.a.delete("/contacts/".concat(e));case 4:return c=t.sent,r=c.data.id,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),_=n(16),g=function(t){return t.contacts.contact},y=function(t){return t.filter},N=Object(_.a)([g,y],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),C=n(1);function w(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),u=Object(i.a)(r,2),s=u[0],j=u[1],d=Object(o.a)(),O=Object(o.a)(),f=Object(b.b)(),p=Object(b.c)(g),m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"userName":c(a);break;case"userNumber":j(a);break;default:return}},h=function(){c(""),j("")};return Object(C.jsx)("div",{children:Object(C.jsxs)("form",{className:l.a.form,onSubmit:function(t){if(t.preventDefault(),p.find((function(t){return t.name===n})))return alert("".concat(n," is already in contacts")),void h();var e={name:n,number:s,id:Object(o.a)()};f(v(e)),h()},children:[Object(C.jsx)("label",{className:l.a.label,htmlFor:d,children:"Name"}),Object(C.jsx)("input",{className:l.a.input,id:d,type:"text",name:"userName",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m}),Object(C.jsx)("label",{className:l.a.label,htmlFor:O,children:"Number"}),Object(C.jsx)("input",{className:l.a.input,id:O,type:"tel",name:"userNumber",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m}),Object(C.jsx)("button",{className:l.a.button,type:"submit",children:"Add contact"})]})})}var k=n(19),A=n.n(k);function F(){var t=Object(b.b)(),e=Object(b.c)(N);return Object(a.useEffect)((function(){t(h())}),[t]),Object(C.jsx)("ul",{className:A.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(C.jsxs)("li",{className:A.a.list__item,children:[a," : ",c,Object(C.jsx)("button",{className:A.a.button,onClick:function(){return t(x(n))},type:"button",id:n,children:"Delete"})]},n)}))})}var L=n(22),z=n.n(L),S=Object(m.b)("changeFilter");function V(){var t=Object(b.b)(),e=Object(b.c)(y);return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("label",{className:z.a.label,children:"Find contacts by name"}),Object(C.jsx)("input",{className:z.a.input,type:"text",value:e,onChange:function(e){t(S(e.currentTarget.value))}})]})}var q,B=function(){return Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("h1",{children:"Phonebook"}),Object(C.jsx)(w,{}),Object(C.jsx)("h2",{children:"Contacts"}),Object(C.jsx)(V,{}),Object(C.jsx)(F,{})]})},E=n(10),J=n(5),W=n(24),Z=n(2),D=Object(m.e)({name:"contacts",initialState:{contact:[],loading:!1,error:null},extraReducers:(q={},Object(J.a)(q,h.pending,(function(t){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!0})})),Object(J.a)(q,h.fulfilled,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{contact:e.payload,loading:!1})})),Object(J.a)(q,h.rejected,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!1,error:e.payload})})),Object(J.a)(q,v.pending,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!0})})),Object(J.a)(q,v.fulfilled,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{contact:[].concat(Object(W.a)(t.contact),Object(W.a)(e.payload)),loading:!1})})),Object(J.a)(q,v.rejected,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!1,error:e.payload})})),Object(J.a)(q,x.pending,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!0})})),Object(J.a)(q,x.fulfilled,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{contact:t.contact.filter((function(t){return t.id!==e.payload})),loading:!1})})),Object(J.a)(q,x.rejected,(function(t,e){return Object(Z.a)(Object(Z.a)({},t),{},{loading:!1,error:e.payload})})),q)}).reducer,G=Object(m.d)("",Object(J.a)({},S,(function(t,e){return e.payload}))),K=n(34),M=n.n(K),R=Object(m.a)({reducer:{contacts:D,filter:G},middleware:function(t){return t({serializableCheck:{ignoredActions:[E.a,E.f,E.b,E.c,E.d,E.e]}}).concat(M.a)}});u.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(b.a,{store:R,children:Object(C.jsx)(B,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__2m88K",button:"Form_button__A1L4H",label:"Form_label__qENQy",input:"Form_input__27BKL"}}},[[68,1,2]]]);
//# sourceMappingURL=main.ebbdfc97.chunk.js.map