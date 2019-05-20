(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),o=a.n(i),c=a(21),l=a(28),s=(a(57),a(85),a(10)),u=a(11),m=a(13),d=a(12),p=a(14),h=(a(86),a(9)),f=a(69),b=a.n(f),v=(a(104),a(27)),g=a.n(v),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={galleryItems:[1,2,3].map(function(e){return r.a.createElement("h2",{key:e},e)}),data:""},a.getData=function(){var e=Object(h.a)(Object(h.a)(a));fetch(a.props.url).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t})})},a.responsive={0:{items:1},1024:{items:3}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this;if(this.state.data){var t=this.state.data.results.map(function(e){return r.a.createElement("div",{className:"carousel"},r.a.createElement(c.Link,{to:"/movie/"+e.id},r.a.createElement("div",null,r.a.createElement(g.a,{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,fallbackImage:"/moviedb/my-backup.png",initialImage:"loader.gif",alt:"poster "+e.title})),r.a.createElement("h3",null,e.title)))});return r.a.createElement("div",{className:"carousel"},r.a.createElement("h1",null,this.props.title),r.a.createElement("p",null,r.a.createElement("span",{className:"arrow",onClick:function(){return e.Carousel._slidePrev()}},"<"),r.a.createElement("span",{className:"arrow",onClick:function(){return e.Carousel._slideNext()}},">")),r.a.createElement(b.a,{items:t,responsive:this.responsive,fadeOutAnimation:!0,mouseDragEnabled:!0,disableAutoPlayOnAction:!0,dotsDisabled:!0,buttonsDisabled:!0,onSlideChange:this.onSlideChange,onSlideChanged:this.onSlideChanged,ref:function(t){return e.Carousel=t}}))}return null}}]),t}(r.a.Component),j=a(72),O=a(135),y=a(136),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.movies.results.map(function(e){return e.overview.length>150&&(e.overview=e.overview.slice(0,150)+"..."),r.a.createElement(j.a,{md:4,className:"cardCustom"},r.a.createElement(g.a,{src:"https://image.tmdb.org/t/p/w300/"+e.poster_path,fallbackImage:"/moviedb/my-backup.png",initialImage:"loader.gif",alt:"poster "+e.title}),r.a.createElement("h3",null,e.original_title),r.a.createElement("p",null,e.overview),r.a.createElement(c.Link,{to:"../movie/"+e.id},r.a.createElement("button",{className:"btnCustom btn"},"See More")))});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,this.props.title),r.a.createElement(O.a,{fluid:!0},r.a.createElement(y.a,null,e)))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getData=function(){var e=Object(h.a)(Object(h.a)(a)),t="https://api.themoviedb.org/3/search/movie?api_key=81513ffcd2dd02982ba2ca645d242d4f&query="+a.props.match.params.query;fetch(t).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({data:t})})},a.state={data:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({data:null})}},{key:"render",value:function(){return this.state.data||this.getData(),this.state.data?r.a.createElement(k,{movies:this.state.data,title:"Results for: "+this.props.match.params.query}):null}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={input:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(!this.state.input)return r.a.createElement("div",{className:"App"},r.a.createElement(E,{title:"Trending",url:"https://api.themoviedb.org/3/trending/movie/week?api_key=81513ffcd2dd02982ba2ca645d242d4f"}),r.a.createElement(E,{title:"Popular",url:"https://api.themoviedb.org/3/movie/popular?api_key=81513ffcd2dd02982ba2ca645d242d4f"}),r.a.createElement(E,{title:"Upcoming",url:"https://api.themoviedb.org/3/movie/upcoming?api_key=81513ffcd2dd02982ba2ca645d242d4f"}),r.a.createElement(E,{title:"Top Rated",url:"https://api.themoviedb.org/3/movie/top_rated?api_key=81513ffcd2dd02982ba2ca645d242d4f"}))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getData=function(e){var t=Object(h.a)(Object(h.a)(a));fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({data:e})})},a.getGenreId=function(){var e=Object(h.a)(Object(h.a)(a));fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=81513ffcd2dd02982ba2ca645d242d4f").then(function(e){return e.json()}).then(function(t){t.genres.map(function(t){if(t.name.toLowerCase()==e.props.match.params.category){var a="https://api.themoviedb.org/3/discover/movie?api_key=81513ffcd2dd02982ba2ca645d242d4f&sort_by=popularity.desc&with_genres="+t.id;e.getData(a)}})})},a.state={data:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({data:null})}},{key:"render",value:function(){return this.state.data||this.getGenreId("https://api.themoviedb.org/3/genre/movie/list?api_key=81513ffcd2dd02982ba2ca645d242d4f"),this.state.data?r.a.createElement("div",{className:"App"},r.a.createElement(k,{movies:this.state.data,title:this.props.match.params.category})):null}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{className:"containerCustom"},r.a.createElement(y.a,{className:"showC"},r.a.createElement(j.a,{md:6},r.a.createElement(g.a,{src:"https://image.tmdb.org/t/p/w300/"+this.props.data.poster_path,fallbackImage:"/moviedb/my-backup.png",initialImage:"loader.gif",alt:"poster "+this.props.data.original_title})),r.a.createElement(j.a,{md:6,className:"details"},r.a.createElement("h1",null,this.props.data.original_title),r.a.createElement("p",null,this.props.data.overview),r.a.createElement("iframe",{src:"https://www.youtube.com/embed/"+this.props.data.videos.results[0].key,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:"video"}))))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).getData=function(e){var t=Object(h.a)(Object(h.a)(a));fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e),t.setState({data:e})})},a.state={data:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e!==this.props&&this.setState({data:null})}},{key:"render",value:function(){return this.state.data||this.getData("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=81513ffcd2dd02982ba2ca645d242d4f&append_to_response=videos"),this.state.data?r.a.createElement("div",{className:"App"},r.a.createElement(S,{data:this.state.data})):null}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={data:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Sorry, this page is unavailable.")}}]),t}(n.Component),D=a(138),L=a(140),x=a(139),A=a(137),R=a(79),B=a(78),P=a(26),W=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).routeChange=function(e){e.preventDefault();var t="/search/"+a.state.input;a.props.history.push(t)},a.textInput=r.a.createRef(),a.state={input:""},a.routeChange=a.routeChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(){var e=this.textInput.current.value;this.setState({input:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"navigation"},r.a.createElement(D.a,{bg:"dark",variant:"dark",expand:"lg",fixed:"top"},r.a.createElement(P.LinkContainer,{to:"/"},r.a.createElement(D.a.Brand,{href:"#home"},"MovieBook")),r.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(P.LinkContainer,{to:"/"},r.a.createElement(L.a.Link,{href:"#"},"Home")),r.a.createElement(x.a,{title:"Categories",id:"basic-nav-dropdown"},r.a.createElement(P.LinkContainer,{to:"/category/romance"},r.a.createElement(x.a.Item,{href:"#"},"Romance")),r.a.createElement(P.LinkContainer,{to:"/category/action"},r.a.createElement(x.a.Item,{href:"#"},"Action")),r.a.createElement(P.LinkContainer,{to:"/category/western"},r.a.createElement(x.a.Item,{href:"#"},"Western")),r.a.createElement(P.LinkContainer,{to:"/category/horror"},r.a.createElement(x.a.Item,{href:"#"},"Horror")))),r.a.createElement(A.a,{inline:!0,onSubmit:this.routeChange},r.a.createElement(R.a,{ref:this.textInput,type:"text",onChange:function(){return e.handleChange()},placeholder:"Search",className:"mr-sm-2"}),r.a.createElement(P.LinkContainer,{to:"/search/"+this.state.input},r.a.createElement(B.a,{variant:"outline-success"},"Search"))))))}}]),t}(n.Component),q=Object(l.k)(W);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=r.a.createElement(c.BrowserRouter,null,r.a.createElement("div",null,r.a.createElement(q,null),r.a.createElement(l.g,null,r.a.createElement(l.d,{exact:!0,path:"/",component:w}),r.a.createElement(l.d,{path:"/category/:category",component:_}),r.a.createElement(l.d,{path:"/movie/:id",component:I}),r.a.createElement(l.d,{path:"/search/:query",component:C}),r.a.createElement(l.d,{component:N}))));o.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a(134)},85:function(e,t,a){},86:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.b7a0ae88.chunk.js.map