(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return b});n(48);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(146),u=n.n(c),l=n(143),s=n.n(l),d=(n(147),n(149)),p=n(145),h=n.n(p),f=n(160),m=n.n(f),g=h.a.rhythm,y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.data.site.siteMetadata.title;return i.a.createElement(d.a,{location:this.props.location},i.a.createElement(u.a,{title:t}),i.a.createElement("p",{style:{marginBottom:g(1.5)}},i.a.createElement("img",{alt:"pic",src:m.a,style:{borderRadius:"100%",float:"left",marginRight:g(.25),marginBottom:0,width:g(2),height:g(2)}}),"Written by ",i.a.createElement("strong",null,this.props.data.site.siteMetadata.author)," ",i.a.createElement("br",null),i.a.createElement("a",{href:"https://migueldeguzman.github.io"},"checkout his profile")),i.a.createElement("ul",{style:{marginBottom:0}},e.map(function(e){return i.a.createElement("li",{key:e.node.fields.slug},i.a.createElement(s.a,{style:{textDecoration:"none"},to:e.node.fields.slug},e.node.frontmatter.title))})))},t}(i.a.Component);t.default=y;var b="3883876006"},144:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},145:function(e,t,n){var a=n(152),r=n(153).default,o=n(154).default;r.plugins=[new o],r.baseLineHeight=1.4,r.blockMarginBottom=.75,r.overrideThemeStyles=function(e){return{"blockquote > h1, blockquote > h2, blockquote > h3, blockquote > h4":{marginTop:0},"li > p":{marginBottom:(0,e.rhythm)(.5)},"p code":{fontSize:"75%"},"tt,code":{fontSize:"85%"},pre:{lineHeight:1.22}}};var i=new a(r);e.exports=i},147:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(49),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){"use strict";n(33),n(75);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(143),u=n.n(c),l=n(146),s=n.n(l),d=(n(155),n(156),n(147),n(150),n(145)),p=n.n(d),h=p.a.rhythm,f=p.a.scale,m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e;return e=-1!==["/","/tags/"].indexOf(this.props.location.pathname)||-1!==this.props.location.pathname.indexOf("/tags/")?i.a.createElement(u.a,{style:{textDecoration:"none",boxShadow:"none",color:"grey"},to:"/"},i.a.createElement("h1",{style:Object.assign({},f(1),{marginBottom:h(0),marginTop:0})},"tech stoic")):i.a.createElement(u.a,{style:{textDecoration:"none",boxShadow:"none",color:"inherit"},to:"/"},i.a.createElement("h3",{style:{marginTop:0}},"tech stoic")),i.a.createElement("div",{style:{padding:h(1.5)+" "+h(.75),maxWidth:h(22),margin:"0 auto"}},i.a.createElement(s.a,{defaultTitle:"tech stoic",titleTemplate:"tech stoic | %s"}),i.a.createElement("div",null,e),this.props.children)},t}(i.a.Component);t.a=m},150:function(e,t,n){},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(143),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(144),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),h=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},160:function(e,t,n){e.exports=n.p+"static/profile-f7f215beb06fe58a8ae508f58338e3b6.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-48d604c8a9f39f453d51.js.map