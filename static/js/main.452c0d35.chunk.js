(this["webpackJsonpecommerece-site"]=this["webpackJsonpecommerece-site"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(6),s=c.n(i),o=(c(11),c(12),c(3)),u=c.n(o),a=c(5),j=c(2),d=c(0),b=function(e){var t=e.onSubmit,c=Object(n.useState)(""),r=Object(j.a)(c,2),i=r[0],s=r[1],o=Object(n.useState)(""),u=Object(j.a)(o,2),a=u[0],b=u[1],p=Object(n.useState)(""),l=Object(j.a)(p,2),h=l[0],O=l[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={productName:i,productPrice:a,productDescription:h};""!==c.productName&&""!==c.productPrice&&""!==c.productDescription&&(t(c),s(""),b(""),O(""))},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Product name"}),Object(d.jsx)("input",{id:"name",type:"text",value:i,onChange:function(e){s(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"price",children:"Product price"}),Object(d.jsx)("input",{id:"price",type:"text",value:a,onChange:function(e){b(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"description",children:"Product description"}),Object(d.jsx)("input",{id:"description",type:"text",value:h,onChange:function(e){O(e.target.value)}})]}),Object(d.jsx)("button",{children:"Submit"})]})},p=function(e){return Object(d.jsxs)("li",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("h3",{children:e.amount}),Object(d.jsx)("h3",{children:e.description})]})},l=function(e){var t=e.product;return Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(p,{name:e.name,amount:e.amount,description:e.description},e.id)}))})})};var h=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useCallback)(Object(a.a)(u.a.mark((function e(){var t,c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://e-site-53120-default-rtdb.firebaseio.com/products.json");case 2:return t=e.sent,e.next=5,t.json();case 5:for(r in c=e.sent,n=[],c)n.push({id:r,name:c[r].productName,amount:c[r].productPrice,description:c[r].productDescription});i(n);case 9:case"end":return e.stop()}}),e)}))),[]);function o(){return(o=Object(a.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://e-site-53120-default-rtdb.firebaseio.com/products.json",{method:"POST",body:JSON.stringify(t)});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s()}),[s]),Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)("section",{children:Object(d.jsx)(b,{onSubmit:function(e){return o.apply(this,arguments)}})}),Object(d.jsx)("section",{children:Object(d.jsx)("button",{onClick:s,children:"Fetch Latest Products"})}),Object(d.jsx)("section",{children:Object(d.jsx)(l,{product:c})})]})};var O=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{children:"Products"}),Object(d.jsx)(h,{})]})})};s.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.452c0d35.chunk.js.map