(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(45)},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(19),o=n.n(c),u=n(10),s=n(11),i=n(15),l=n(12),E=n(16),d=n(14),p=n(4),b=n(22),f=n(23);function h(){var e=Object(b.a)(["\n\twidth: 200px;\n\theight: 100px;\n\tbackground: #00ccff;\n\tbox-shadow: none;\n\tborder: none;\n\n\t&:hover {\n\t\tbackground: #4ddbff;\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground: #00a3cc;\n\t}\n"]);return h=function(){return e},e}function L(){var e=Object(b.a)(["\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #00ccff;\n\tbox-shadow: none;\n\tborder: none;\n\n\t&:hover {\n\t\tbackground: #4ddbff;\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground: #00a3cc;\n\t}\n"]);return L=function(){return e},e}var S=f.a.button(L()),k=f.a.button(h()),_={SELECT_TILE:"SELECT_TILE",GET_LAKES:"GET_LAKES",GET_LAKES_SUCCESS:"GET_LAKES_SUCCESS",GET_LAKES_FAILURE:"GET_LAKES_FAILURE",NEW_LAKE:"NEW_LAKE",NEW_LAKE_SUCCESS:"NEW_LAKE_SUCCESS",NEW_LAKE_FAILURE:"NEW_LAKE_FAILURE"},j=function(){return{type:_.GET_LAKES,payload:null}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:_.NEW_LAKE,payload:e}},g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleFocus=function(){n.setState({display:n.state.count,firstFlag:!0})},n.handleBlur=function(){n.setState({display:"><>"})},n.handleClick=function(){!0===n.state.firstFlag?n.setState({display:n.state.count,firstFlag:!1}):n.setState({count:++n.state.count,display:n.state.count})},n.getLakeName=function(){if(n.props.lakes.length)return n.props.lakes[0].lake_name},n.state={count:0},n}return Object(E.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({display:"><>",firstFlag:!1}),this.props.getLakes()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.getLakeName()),r.a.createElement(S,{onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur},this.state.display))}}]),t}(a.Component);var v=Object(d.b)(function(e){return{lakes:e.LakesReducer.lakes}},function(e){return Object(p.b)({getLakes:j},e)})(g),A=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k,{onClick:function(){return e.props.newLake("Desert Lake")}}))}}]),t}(a.Component);var y=Object(d.b)(function(e){return{currentLake:e.LakesReducer.currentLake}},function(e){return Object(p.b)({newLake:O},e)})(A),m=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,"Add Desert Lake"),r.a.createElement(v,null))}}]),t}(a.Component),C=n(32),K={lakes:[],currentLake:""};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.GET_LAKES_SUCCESS:return Object.assign({},e,{lakes:t.payload});case _.GET_LAKES_FAILURE:return console.log("Failed ",t.payload),e;case _.NEW_LAKE_SUCCESS:return Object.assign({},e,{currentLake:t.payload});case _.NEW_LAKE_FAILURE:return console.log("Failed ",t.payload),e;default:return e}},x=Object(p.c)({LakesReducer:T}),w=n(9),F=n.n(w),U=n(5),N=function(){return fetch("/api/lakes").then(function(e){return e.json()}).then(function(e){return console.log("RESULT OF API: ",e),e})},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return fetch("/api/lakes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},R=F.a.mark(B),I=F.a.mark(D),W=F.a.mark(J);function B(e){var t;return F.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(U.a)(N,e.payload);case 3:return t=n.sent,console.log("RESULT OF GET CALL: ",t),n.next=7,Object(U.b)({type:_.GET_LAKES_SUCCESS,payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(U.b)({type:_.GET_LAKES_FAILURE,message:n.t0.message});case 13:case"end":return n.stop()}},R,this,[[0,9]])}function D(e){var t,n;return F.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t={lake_name:e.payload},a.next=4,Object(U.a)(G,t);case 4:return n=a.sent,a.next=7,Object(U.b)({type:_.NEW_LAKE_SUCCESS,payload:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(U.b)({type:_.NEW_LAKE_FAILURE,message:a.t0.message});case 13:case"end":return a.stop()}},I,this,[[0,9]])}function J(){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(_.GET_LAKES,B);case 2:return e.next=4,Object(U.c)(_.NEW_LAKE,D);case 4:case"end":return e.stop()}},W,this)}var P=J,M=Object(C.a)(),q=Object(p.d)(x,Object(p.a)(M));M.run(P),console.log(q.getState());q.subscribe(function(){return console.log(q.getState())});o.a.render(r.a.createElement(d.a,{store:q},r.a.createElement(m,null)),document.getElementById("root"))}},[[34,2,1]]]);
//# sourceMappingURL=main.507ca903.chunk.js.map