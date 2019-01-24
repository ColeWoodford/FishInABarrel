(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e,t,n){e.exports=n(94)},91:function(e,t){},94:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),o=n.n(c),u=n(8),s=n(9),i=n(12),l=n(10),p=n(11),E=n(19),d=n(4),h=n(37),b=n(38);function f(){var e=Object(h.a)(["\n\twidth: 200px;\n\theight: 100px;\n\tbackground: #00ccff;\n\tbox-shadow: none;\n\tborder: none;\n\n\t&:hover {\n\t\tbackground: #4ddbff;\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground: #00a3cc;\n\t}\n"]);return f=function(){return e},e}function k(){var e=Object(h.a)(["\n\twidth: 100px;\n\theight: 100px;\n\tbackground: #00ccff;\n\tbox-shadow: none;\n\tborder: none;\n\n\t&:hover {\n\t\tbackground: #4ddbff;\n\t}\n\n\t&:focus {\n\t\toutline: none;\n\t\tbackground: #00a3cc;\n\t}\n"]);return k=function(){return e},e}var S=b.a.button(k()),L=b.a.button(f()),j={SELECT_TILE:"SELECT_TILE",GET_LAKES:"GET_LAKES",GET_LAKES_SUCCESS:"GET_LAKES_SUCCESS",GET_LAKES_FAILURE:"GET_LAKES_FAILURE",NEW_LAKE:"NEW_LAKE",NEW_LAKE_SUCCESS:"NEW_LAKE_SUCCESS",NEW_LAKE_FAILURE:"NEW_LAKE_FAILURE"},m=function(){return{type:j.GET_LAKES,payload:null}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:j.NEW_LAKE,payload:e}},g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleFocus=function(){n.setState({display:n.state.count,firstFlag:!0})},n.handleBlur=function(){n.setState({display:"><>"})},n.handleClick=function(){!0===n.state.firstFlag?n.setState({display:n.state.count,firstFlag:!1}):n.setState({count:++n.state.count,display:n.state.count})},n.getLakeName=function(){if(n.props.lakes.length)return n.props.lakes[0].lake_name},n.state={count:0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({display:"><>",firstFlag:!1}),this.props.getLakes()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.getLakeName()),r.a.createElement(S,{onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur},this.state.display))}}]),t}(a.Component);var O=Object(E.b)(function(e){return{lakes:e.LakesReducer.lakes}},function(e){return Object(d.b)({getLakes:m},e)})(g),_=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(L,{onClick:function(){return e.props.newLake("Desert Lake")}}))}}]),t}(a.Component);var y=Object(E.b)(function(e){return{currentLake:e.LakesReducer.currentLake}},function(e){return Object(d.b)({newLake:v},e)})(_),C=n(14),A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(i.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e){n.setState({message:e.target.value})},n.handleSubmit=function(e){var t=n.props.socket;e.preventDefault(),t.emit("client message",n.state.message)},n.makeChat=function(){return r.a.createElement("div",null,n.state.chatBoxContent.map(function(e){return r.a.createElement("div",{key:e}," ",e," ")}))},n.state={message:"",chatBoxContent:[]},n.props.socket.on("chat message",function(e){var t=n.state.chatBoxContent;t.push(e),console.log(e),n.setState({chatBoxContent:t})}),n.handleChange=n.handleChange.bind(Object(C.a)(Object(C.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(C.a)(Object(C.a)(n))),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.makeChat(),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"SEND",onClick:this.handleSubmit}))}}]),t}(a.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null,"Add Desert Lake"),r.a.createElement(O,null),r.a.createElement(A,{socket:this.props.socket}))}}]),t}(a.Component),K=n(58),w={lakes:[],currentLake:""};var T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.GET_LAKES_SUCCESS:return Object.assign({},e,{lakes:t.payload});case j.GET_LAKES_FAILURE:return console.log("Failed to get lakes: ",t.payload),e;case j.NEW_LAKE_SUCCESS:return Object.assign({},e,{currentLake:t.payload});case j.NEW_LAKE_FAILURE:return console.log("Failed ",t.payload),e;default:return e}},F=Object(d.c)({LakesReducer:T}),N=n(15),U=n.n(N),G=n(5),W=function(){return fetch("/api/lakes",{method:"GET",headers:{Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return e})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return fetch("/api/lakes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()})},R=U.a.mark(J),B=U.a.mark(M),D=U.a.mark(P);function J(e){var t;return U.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(G.a)(W,e.payload);case 3:return t=n.sent,n.next=6,Object(G.b)({type:j.GET_LAKES_SUCCESS,payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(G.b)({type:j.GET_LAKES_FAILURE,payload:n.t0.message});case 12:case"end":return n.stop()}},R,this,[[0,8]])}function M(e){var t,n;return U.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t={lake_name:e.payload},a.next=4,Object(G.a)(I,t);case 4:return n=a.sent,a.next=7,Object(G.b)({type:j.NEW_LAKE_SUCCESS,payload:n});case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(G.b)({type:j.NEW_LAKE_FAILURE,payload:a.t0.message});case 13:case"end":return a.stop()}},B,this,[[0,9]])}function P(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.c)(j.GET_LAKES,J);case 2:return e.next=4,Object(G.c)(j.NEW_LAKE,M);case 4:case"end":return e.stop()}},D,this)}var q=P,z=n(57),H=n.n(z),Q=Object(K.a)(),V=Object(d.d)(F,Object(d.a)(Q)),X=H()("http://localhost:8000/");Q.run(q),console.log(V.getState());V.subscribe(function(){return console.log(V.getState())});o.a.render(r.a.createElement(E.a,{store:V},r.a.createElement(x,{socket:X})),document.getElementById("root"))}},[[60,2,1]]]);
//# sourceMappingURL=main.1743285f.chunk.js.map