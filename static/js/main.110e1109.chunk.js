(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(66)},40:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(31),o=n.n(c),u=(n(40),n(13)),s=n(14),i=n(16),l=n(15),m=n(17),p=n(10),b=n(4),f="GET_BOOK_DATA";function v(e){return{type:f,searchParams:e}}var h=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSearch",value:function(e){e.preventDefault(),this.props.getBookData(e.target[0].value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"align-items-center"},r.a.createElement("h1",null,"BOOK FINDER")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 offset-sm-2"},r.a.createElement("form",{onSubmit:function(t){return e.handleSearch(t)}},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},"Search"))))))))}}]),t}(a.Component);var d=Object(p.b)(function(e){return{}},function(e){return Object(b.b)({getBookData:v},e)})(h),O=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null))}}]),t}(a.Component);var j=Object(p.b)(function(e){return{}},function(e){return Object(b.b)({},e)})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=n(34),E=n(23);var g=Object(b.c)({testReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"TEST_REDUCER":return Object(E.a)({},e);default:return e}}}),k=n(9),y=n.n(k),N=n(18),x=n(33),B=n.n(x);function D(e){return B.a.get(e).then(function(e){return{response:e}}).catch(function(e){return{error:e}})}var T=y.a.mark(A),S=y.a.mark(R),_=y.a.mark(C);function A(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)("GET_BOOK_DATA",R);case 2:case"end":return e.stop()}},T)}function R(e){var t,n,a,r;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t="https://www.googleapis.com/books/v1/volumes?q="+e.searchParams,c.next=3,Object(N.b)(D,t);case 3:n=c.sent,a=n.response,r=n.error,console.log(a),console.log(r);case 8:case"end":return c.stop()}},S)}function C(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([A()]);case 2:case"end":return e.stop()}},_)}var K=Object(w.a)(),G=Object(b.e)(g,Object(b.d)(Object(b.a)(K)));K.run(C),o.a.render(r.a.createElement(p.a,{store:G},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.110e1109.chunk.js.map