(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(t,e,n){t.exports=n(45)},45:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n.n(a),c=n(13),o=n.n(c),s=n(14),u=n(15),i=n(18),l=n(16),E=n(19),d=n(17),p=n(5),f=n(28);function b(){var t=Object(f.a)(["\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #00ccff;\n\tbox-shadow: none;\n\tborder: none;\n\n\t&:hover {\n\t\tbackground: #4ddbff;\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground: #00a3cc;\n\t}\n"]);return b=function(){return t},t}var h=n(29).a.button(b()),S={SELECT_TILE:"SELECT_TILE",GET_LAKES:"GET_LAKES",GET_LAKES_SUCCESS:"GET_LAKES_SUCCESS",GET_LAKES_FAILURE:"GET_LAKES_FAILURE"},k=function(){return{type:S.GET_LAKES,payload:null}},L=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(i.a)(this,Object(l.a)(e).call(this,t))).handleFocus=function(){n.setState({display:n.state.count,firstFlag:!0})},n.handleBlur=function(){n.setState({display:"><>"})},n.handleClick=function(){!0===n.state.firstFlag?n.setState({display:n.state.count,firstFlag:!1}):n.setState({count:++n.state.count,display:n.state.count})},n.getLakeName=function(){if(n.props.lakes.length)return n.props.lakes[0].lakeName},n.state={count:0},n}return Object(E.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){this.setState({display:"><>",firstFlag:!1}),this.props.getLakes()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.getLakeName()),r.a.createElement(h,{onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur},this.state.display))}}]),e}(a.Component);var g=Object(d.b)(function(t){return{lakes:t.LakesReducer.lakes}},function(t){return Object(p.b)({getLakes:k},t)})(L),j=function(t){function e(){return Object(s.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}]),e}(a.Component),v=n(32),O={lakes:[]};var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.GET_LAKES_SUCCESS:return Object.assign({},t,{lakes:e.payload});case S.GET_LAKES_FAILURE:return console.log("Failed ",e.payload),t;default:return t}},y=Object(p.c)({LakesReducer:_}),m=n(12),A=n.n(m),T=n(8),C=function(){return fetch("/api/lakes").then(function(t){return t.json()}).then(function(t){return t})},w=A.a.mark(G),F=A.a.mark(K);function G(t){var e;return A.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(T.a)(C,t.payload);case 3:return e=n.sent,n.next=6,Object(T.b)({type:S.GET_LAKES_SUCCESS,payload:e});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(T.b)({type:S.GET_LAKES_FAILURE,message:n.t0.message});case 12:case"end":return n.stop()}},w,this,[[0,8]])}function K(){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(T.c)(S.GET_LAKES,G);case 2:case"end":return t.stop()}},F,this)}var x=K,U=Object(v.a)(),I=Object(p.d)(y,Object(p.a)(U));U.run(x),console.log(I.getState());I.subscribe(function(){return console.log(I.getState())});o.a.render(r.a.createElement(d.a,{store:I},r.a.createElement(j,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.6fa0398c.chunk.js.map