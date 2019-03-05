(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(70)},44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(34),c=n.n(o),s=(n(44),n(13)),i=n(14),u=n(16),l=n(15),p=n(17),m=n(9),b=n(5),f="SAVE_BOOK_DATA",h="GET_BOOK_DATA";function v(e){return{type:h,searchParams:e}}function d(e){return{type:f,bookData:e}}var O=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleSearch",value:function(e){e.preventDefault(),this.props.getBookData(e.target[0].value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"align-items-center"},r.a.createElement("h1",null,"BOOK FINDER")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8 offset-sm-2"},r.a.createElement("form",{onSubmit:function(t){return e.handleSearch(t)}},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button"},"Search"))))))))}}]),t}(a.Component);var k=Object(m.b)(function(e){return{}},function(e){return Object(b.b)({getBookData:v},e)})(O),E=n(72),j=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("img",{src:this.props.volumeInfo.imageLinks&&this.props.volumeInfo.imageLinks.smallThumbnail?this.props.volumeInfo.imageLinks.smallThumbnail:""})),r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("p",null,this.props.volumeInfo.title?this.props.volumeInfo.title:"No title found"),r.a.createElement("p",null,"By:"," ",this.props.volumeInfo.authors?this.props.volumeInfo.authors:"No authors found"),r.a.createElement("p",null,"Published by:"," ",this.props.volumeInfo.publisher?this.props.volumeInfo.publisher:"No publisher found")),!!this.props.saleInfo&&!!this.props.saleInfo.buyLink&&r.a.createElement(E.a,{href:this.props.saleInfo.buyLink},"Buy it now!"))}}]),t}(a.Component);var w=Object(m.b)(function(e){return{}},function(e){return Object(b.b)({},e)})(j),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},!!this.props.bookData&&"error"!=this.props.bookData&&this.props.bookData.data.items.map(function(e){return r.a.createElement("div",{className:"col-sm"},r.a.createElement(w,{volumeInfo:e.volumeInfo,saleInfo:e.saleInfo}))}))),!!this.props.bookData&&"error"===this.props.bookData&&r.a.createElement("div",{className:"align-items-center"},"Nothing found. Try another search."))}}]),t}(a.Component);var g=Object(m.b)(function(e){return{bookData:e.bookData.bookData}},function(e){return Object(b.b)({},e)})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=n(38),I=n(26);var N=Object(b.c)({testReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"TEST_ACTION":return Object(I.a)({},e);default:return e}},bookData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_BOOK_DATA":return Object(I.a)({},e,{bookData:t.bookData});default:return e}}}),x=n(12),T=n.n(x),A=n(19),B=n(37),_=n.n(B);function S(e){return _.a.get(e).then(function(e){return{response:e}}).catch(function(e){return{error:e}})}var K=T.a.mark(P),L=T.a.mark(G),C=T.a.mark(J);function P(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.d)("GET_BOOK_DATA",G);case 2:case"end":return e.stop()}},K)}function G(e){var t,n,a,r;return T.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return t="https://www.googleapis.com/books/v1/volumes?q="+e.searchParams,o.next=3,Object(A.b)(S,t);case 3:if(n=o.sent,a=n.response,r=n.error,!a){o.next=11;break}return o.next=9,Object(A.c)(d(a));case 9:o.next=14;break;case 11:if(!r){o.next=14;break}return o.next=14,Object(A.c)(d("error"));case 14:case"end":return o.stop()}},L)}function J(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)([P()]);case 2:case"end":return e.stop()}},C)}var R=Object(D.a)(),V=Object(b.e)(N,Object(b.d)(Object(b.a)(R)));R.run(J),c.a.render(r.a.createElement(m.a,{store:V},r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.2cdbe4ef.chunk.js.map