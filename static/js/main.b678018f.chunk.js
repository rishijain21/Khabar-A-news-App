(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(28),a(8)),l=a(9),o=a(11),j=a(10),p=(a(29),a(7)),b=a(0),d=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)(p.b,{className:"navbar-brand",to:"/",children:"KHABAR"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(p.b,{className:"nav-link active","aria-current":"page",to:"/",children:"General "})}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/business",children:"Business"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/health",children:"Health"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/science",children:"Science"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/sports",children:"Sports"})]}),Object(b.jsxs)("li",{className:"nav-item",children:[" ",Object(b.jsx)(p.b,{className:"nav-link",to:"/technology",children:"Technology"})]})]})})]})})})}}]),a}(c.Component),h=a(13),u=a.n(h),x=a(15),g=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,c=e.imgUrl,n=e.newsUrl,s=e.publishedAt,r=e.source;return Object(b.jsxs)("div",{className:"my-3",children:[Object(b.jsx)("span",{className:"badge rounded-pill bg-danger",children:r}),Object(b.jsxs)("div",{className:"card",style:{width:"20rem"},children:[Object(b.jsx)("img",{src:c,className:"card-img-top",alt:"..."}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:[t,"..."]}),Object(b.jsxs)("p",{className:"card-text",children:[a,"..."]}),Object(b.jsx)("p",{className:"card-text",children:Object(b.jsxs)("small",{className:"text-muted",children:["On ",new Date(s).toGMTString()," "]})}),Object(b.jsxs)("a",{href:n,target:"_blank",rel:"noreferrer",className:"btn-sm btn-dark",children:["Read More"," "]})]})]})]})}}]),a}(c.Component),O=a(23),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var c;return Object(i.a)(this,a),(c=t.call(this,e)).handlePrevClick=Object(x.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(c.props.country,"&category=").concat(c.props.category,"&apiKey=3ae9e72c2e1c40c789efef6de548608a&page=").concat(c.state.page-1,"&pageSize=").concat(c.props.pageSize),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c.setState({articles:n.articles}),c.setState({page:c.state.page-1});case 9:case"end":return e.stop()}}),e)}))),c.handleNextClick=Object(x.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(c.props.country,"&category=").concat(c.props.category,"&apiKey=3ae9e72c2e1c40c789efef6de548608a&page=").concat(c.state.page+1,"&pageSize=").concat(c.props.pageSize),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,c.setState({articles:n.articles}),c.setState({page:c.state.page+1});case 9:case"end":return e.stop()}}),e)}))),c.state={articles:[],loading:!1,page:1},document.title="Khabar - ".concat(c.capitalizeFirstLetter(c.props.category)),c}return Object(l.a)(a,[{key:"capitalizeFirstLetter",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"componentDidMount",value:function(){var e=Object(x.a)(u.a.mark((function e(){var t,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://newsapi.org/v2/top-headlines?country=".concat(this.props.country,"&category=").concat(this.props.category,"&apiKey=3ae9e72c2e1c40c789efef6de548608a&pageSize=").concat(this.props.pageSize),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,this.setState({articles:c.articles,totalResults:c.totalResults});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h2",{className:"text-center",children:["Top Khabar -  ",this.capitalizeFirstLetter(this.props.category)]}),Object(b.jsx)(O.a,{dataLength:this.state.articles.length,next:this.fetchMoreData,hasMore:!0,loader:Object(b.jsx)("h4",{children:"Loading..."}),children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"\\"}),this.state.articles.map((function(e){return Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(g,{title:e.title?e.title.slice(0,45):"",description:e.description?e.description.slice(0,90):"",imgUrl:e.urlToImage,newsUrl:e.url,publishedAt:e.publishedAt,source:e.source.name})},e.url)}))]})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("button",{disabled:this.state.page<=1,type:"button",className:"btn btn-danger",onClick:this.handlePrevClick,children:"\u2190 Privous "}),Object(b.jsx)("button",{disabled:this.state.page+1>Math.ceil(this.totalResults/this.props.pageSize),type:"button",className:"btn btn-success",onClick:this.handleNextClick,children:"Next \u2192"})]})})]})}}]),a}(c.Component);m.defaultProps={country:"in",pageSize:8,category:"general"};var v=m,y=a(2),f=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(y.c,{children:[Object(b.jsxs)(y.a,{exact:!0,path:"/",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"general"},"general")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/business",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"business"},"business")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/entertainment",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"entertainment"},"entertainment")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/health",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"health"},"health")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/science",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"science"},"science")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/sports",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"sports"},"sports")," "]}),Object(b.jsxs)(y.a,{exact:!0,path:"/technology",children:[" ",Object(b.jsx)(v,{pageSize:21,country:"in",category:"technology"},"technology")," "]})]})]})})}}]),a}(c.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.b678018f.chunk.js.map