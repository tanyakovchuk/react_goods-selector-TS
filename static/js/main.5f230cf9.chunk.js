(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(3),a=c(5),r=c(6),l=c(8),d=c(7),i=c(1),u=c.n(i),p=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.removeGood=function(t){var c=e.state.selectedGoods.filter((function(e){return e!==t}));e.setState({selectedGoods:Object(s.a)(c)})},e.addGood=function(t){var c=e.state.selectedGoods;e.setState({selectedGoods:[].concat(Object(s.a)(c),[t])})},e.strOfGoods=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected";case 1:return"Selected goods: ".concat(t.join(", ")," is selected");case 2:return"Selected goods: ".concat(t[0]," and ").concat(t[1]," are selected");default:return"Selected goods: ".concat(t.slice(0,-1).join(", ")," ")+"and ".concat(t[t.length-1]," are selected")}},e.clearAll=function(){e.setState({selectedGoods:[]})},e}return Object(r.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("h1",{className:"app__title",children:[this.strOfGoods(),Object(p.jsx)("button",{className:t.length>0?"app__btn--clear":"app__btn--none",type:"button",onClick:function(){return e.clearAll()},children:"clear"})]}),Object(p.jsx)("ul",{className:"app__list",children:b.map((function(c){return Object(p.jsxs)("li",{className:"app__item",children:[c,t.includes(c)?Object(p.jsx)("button",{className:"app__btn--remove",type:"button",onClick:function(){return e.removeGood(c)},children:"X"}):Object(p.jsx)("button",{className:"app__btn--add",type:"button",onClick:function(){return e.addGood(c)},children:"add"})]},c)}))})]})}}]),c}(u.a.Component),h=j;o.a.render(Object(p.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5f230cf9.chunk.js.map