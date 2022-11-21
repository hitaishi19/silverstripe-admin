!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s="./client/src/legacy/TinyMCE_sslink.js")}({"./client/src/components/TinymceInlineToolbar/TinymceInlineToolbar.js":function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n){var o=Array.isArray(n)?n:[n||""];return!(!t||!e)&&(o=o.map(function(t){return String(t)}).map(function(t){return t.toLowerCase()}),o.filter(function(e){if(e.indexOf("[")>-1&&e.indexOf("]")>-1){var n=e.substring(0,e.indexOf("[")),o=e.substring(e.indexOf("[")+1,e.indexOf("]"));if(n===t.tagName.toLowerCase()&&t.getAttribute(o))return!0}else if(t.tagName&&e===t.tagName.toLowerCase())return!0;return!1}).length>0)}function r(t,e){function n(){i(l,s,o)&&(r.hide(),clearTimeout(c),c=setTimeout(function(){r.show(),r.reposition(l)},300))}var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["a"],r=new a(t,e),l=null,c=null,s=!1;return r.hide().renderTo(window.document.body),t.on("remove",function(){r.remove()}),t.on("focus",function(){s=!0}),t.on("blur hide",function(){r.hide(),s=!1}),t.on("nodechange",function(e){var n={element:e.element,parents:e.parents,collapsed:t.selection.isCollapsed()};l=n.selection||n.element,i(l,s,o)?(r.show(),r.reposition(l)):r.hide()}),window.addEventListener("scroll",function(e){e.target.contains(document.querySelector("#"+t.id))&&n()},!0),t.contentDocument.addEventListener("scroll",n),r}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=function(){function t(e,n){o(this,t),this.mceIframe=document.getElementById(e.id+"_ifr"),this.container=e.getContainer(),this.mceToolbar=null,this.mceStatusbar=null,this.container&&(this.mceToolbar=this.container.querySelector(".mce-toolbar-grp"),this.mceStatusbar=this.container.querySelector(".mce-statusbar")),this.control=tinymce.ui.Factory.create({type:"panel",classes:"inline-toolbar",layout:"stack",items:[{type:"toolbar",items:n}]})}return l(t,[{key:"remove",value:function(){return this.control.remove(),this}},{key:"hide",value:function(){return this.control.hide(),this}},{key:"show",value:function(){return this.control.show(),this}},{key:"renderTo",value:function(t){return this.control.renderTo(t),this}},{key:"setStyles",value:function(t){return tinymce.DOM.setStyles(this.control.getEl(),t),this}},{key:"reposition",value:function(t){if(!t)return this;var e=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop,o=window.innerWidth,i=window.innerHeight,r=this.mceIframe?this.mceIframe.getBoundingClientRect():{top:0,right:o,bottom:i,left:0,width:o,height:i},l=this.control.getEl(),a=l.offsetWidth,c=l.offsetHeight,s=t.getBoundingClientRect(),u=(s.left+s.right)/2,d=c+8+5,f=this.mceToolbar?this.mceToolbar.getBoundingClientRect().bottom:0,m=this.mceStatusbar?i-this.mceStatusbar.getBoundingClientRect().top:0,h=Math.max(0,f,r.top),g=Math.max(0,m,i-r.bottom),p=s.top+r.top-h,b=i-r.top-s.bottom-g,y=i-h-g,k="",v=0,w=0;return p>=y||b>=y?this.hide():(this.bottom?b>=d?(k=" mce-arrow-up",v=s.bottom+r.top+n+10):p>=d&&(k=" mce-arrow-down",v=s.top+r.top+n-c-8):p>=d?(k=" mce-arrow-down",v=s.top+r.top+n-c-8):b>=d&&y/2>s.bottom+r.top-h&&(k=" mce-arrow-up",v=s.bottom+r.top+n+10),0===v&&(v=n+h+5),w=u-a/2+r.left+e,s.left<0||s.right>r.width?w=r.left+e+(r.width-a)/2:a>=o?(k+=" mce-arrow-full",w=0):w<0&&s.left+a>o||w+a>o&&s.right-a<0?w=(o-a)/2:w<r.left+e?(k+=" mce-arrow-left",w=s.left+r.left+e):w+a>r.width+r.left+e&&(k+=" mce-arrow-right",w=s.right-a+r.left+e),l.className=l.className.replace(/ ?mce-arrow-[\w]+/g,"")+k,this.setStyles({left:w,top:v}),this)}}]),t}();e.default=a,e.setupTinyMceInlineToolbar=r,e.shouldShowToolbar=i},"./client/src/legacy/TinyMCE_sslink.js":function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n("lib/TinyMCEActionRegistrar"),r=o(i),l=n("react-dom"),a=o(l),c=n("jquery"),s=o(c),u=n("./client/src/components/TinymceInlineToolbar/TinymceInlineToolbar.js"),d=n("lib/ShortcodeSerialiser"),f=n("i18n"),m=o(f),h={init:function(t){function e(){var e=tinymce.activeEditor.selection.getNode(),n=e.getAttribute("href");n&&t.execCommand(r.default.getEditorCommandFromUrl(n))}var n=this,o=navigator.platform.toUpperCase().includes("MAC")?"⌘":"Ctrl",i=m.default._t("Admin.INSERT_LINK","Insert link"),l=m.default.inject(m.default._t("Admin.INSERT_LINK_WITH_SHORTCUT","Insert link {shortcut}"),{shortcut:"["+o+"+K]"}),a=r.default.getSortedActions("sslink",t.settings.editorIdentifier,!0).map(function(e){return Object.assign({},e,{onclick:function(){return e.onclick(t)}})});t.addButton("sslink",{icon:"link",title:l,type:"menubutton",menu:a}),t.addMenuItem("sslink",{icon:"link",text:i,menu:a}),t.addShortcut("Meta+k","Open link menu",function(){(0,s.default)('[aria-label^="'+i+'"] > button',t.container).first().click()}),t.on("preinit",function(){(0,u.setupTinyMceInlineToolbar)(t,[{type:"button",onClick:e,text:m.default._t("Admin.EDIT_LINK","Edit link")},{type:"button",onClick:function(){return n.handleRemoveLinkClick(t)},text:m.default._t("Admin.REMOVE_LINK","Remove link")}],["a[href]"])})},handleRemoveLinkClick:function(t){var e=t.execCommand("unlink"),n=t.selection.getNode();return n&&void 0!==n.normalize&&n.normalize(),e}};s.default.entwine("ss",function(t){t(".insert-link__dialog-wrapper").entwine({Element:null,Data:{},Bookmark:null,onunmatch:function(){this._clearModal()},_clearModal:function(){a.default.unmountComponentAtNode(this[0])},open:function(){var t=this.getElement().getEditor().getInstance();this.setBookmark(t.selection.getBookmark(2,!0)),this.renderModal(!0)},close:function(){this.setData({}),this.renderModal(!1)},renderModal:function(){},handleInsert:function(t){this.getElement().getEditor().getInstance().selection.moveToBookmark(this.getBookmark());var e=this.buildAttributes(t),n=(0,d.createHTMLSanitiser)(),o=n(t.Text);return this.insertLinkInEditor(e,o),this.close(),Promise.resolve()},buildAttributes:function(t){var e=t.Anchor,n=t.Link,o=t.TargetBlank,i=t.Description,r=e&&e.length?"#"+e:"";return r=r.replace(/^#+/,"#"),{href:""+n+r,target:o?"_blank":"",title:i}},insertLinkInEditor:function(t,e){var n=this.getElement().getEditor();n.insertLink(t,null,e),n.addUndo(),n.repaint();var o=n.getInstance(),i=o.selection;setTimeout(function(){return i&&i.collapse()},0)},getOriginalAttributes:function(){var e=this.getElement().getEditor(),n=t(e.getSelectedNode()),o=(n.attr("href")||"").split("#");return{Link:o[0]||"",Anchor:o[1]||"",Description:n.attr("title"),TargetBlank:!!n.attr("target")}}})}),tinymce.PluginManager.add("sslink",function(t){return h.init(t)}),e.default=h},i18n:function(t,e){t.exports=i18n},jquery:function(t,e){t.exports=jQuery},"lib/ShortcodeSerialiser":function(t,e){t.exports=ShortcodeSerialiser},"lib/TinyMCEActionRegistrar":function(t,e){t.exports=TinyMCEActionRegistrar},"react-dom":function(t,e){t.exports=ReactDom}});
