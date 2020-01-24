(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{dth9:function(t,e,i){"use strict";i.r(e);var s=i("ofXK"),a=i("tk/3"),c=i("PCNd"),r=i("jtHE"),n=i("itXk"),o=i("lJxs"),l=i("fXoL"),u=i("XNiG"),h=i("1G5W"),p=i("vkgz"),b=i("jn67"),f=i("vHPH");let d=(()=>{class t{constructor(t,e){this.http=t,this.logger=e,this.apiBase=b.b+"api/",this.apiListJsonDefault="api-list.json",this.firstTime=!0,this.onDestroy=new u.a,this.sectionsSubject=new r.a(1),this._sections=this.sectionsSubject.pipe(Object(h.a)(this.onDestroy))}get sections(){return this.firstTime&&(this.firstTime=!1,this.fetchSections(),this._sections.subscribe(t=>this.logger.log(`ApiService got API ${t.length} section(s)`))),this._sections.pipe(Object(p.a)(t=>{t.forEach(t=>{t.deprecated=!!t.items&&t.items.every(t=>"deprecated"===t.stability)})}))}ngOnDestroy(){this.onDestroy.next()}fetchSections(t){const e=this.apiBase+(t||this.apiListJsonDefault);this.http.get(e).pipe(Object(h.a)(this.onDestroy),Object(p.a)(()=>this.logger.log(`Got API sections from ${e}`))).subscribe(t=>this.sectionsSubject.next(t),t=>{throw this.logger.error(t),t})}}return t.\u0275fac=function(e){return new(e||t)(l.Zb(a.a),l.Zb(f.a))},t.\u0275prov=l.Lb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})();var y=i("/lUL"),v=i("x4lQ");const g=["filter"];function m(t,e){if(1&t&&(l.Vb(0,"h2"),l.Vb(1,"a",11),l.Gc(2),l.Tb(),l.Tb()),2&t){const t=l.hc().$implicit;l.Ab(1),l.Fb("deprecated-api-item",t.deprecated),l.mc("href",t.path,l.xc),l.Ab(1),l.Hc(t.title)}}function S(t,e){if(1&t&&(l.Sb(0),l.Vb(1,"li",13),l.Vb(2,"a",11),l.Qb(3,"span"),l.Gc(4),l.Tb(),l.Tb(),l.Rb()),2&t){const t=e.$implicit;l.Ab(2),l.Fb("deprecated-api-item","deprecated"===t.stability),l.mc("href",t.path,l.xc),l.Ab(1),l.Eb("symbol ",t.docType,""),l.Ab(1),l.Ic(" ",t.title," ")}}function w(t,e){if(1&t&&(l.Vb(0,"ul",12),l.Ec(1,S,5,6,"ng-container",8),l.Tb()),2&t){const t=l.hc().$implicit;l.Ab(1),l.mc("ngForOf",t.items)}}function T(t,e){if(1&t&&(l.Vb(0,"div"),l.Ec(1,m,3,3,"h2",9),l.Ec(2,w,2,1,"ul",10),l.Tb()),2&t){const t=e.$implicit;l.Ab(1),l.mc("ngIf",t.items),l.Ab(1),l.mc("ngIf",t.items&&t.items.length)}}class j{constructor(){this.query="",this.status="all",this.type="all"}}let A=(()=>{class t{constructor(t,e){this.apiService=t,this.locationService=e,this.showStatusMenu=!1,this.showTypeMenu=!1,this.criteriaSubject=new r.a(1),this.searchCriteria=new j,this.types=[{value:"all",title:"\u5168\u90e8"},{value:"class",title:"\u7c7b"},{value:"const",title:"\u5e38\u91cf"},{value:"decorator",title:"\u88c5\u9970\u5668"},{value:"directive",title:"\u6307\u4ee4"},{value:"enum",title:"\u679a\u4e3e"},{value:"function",title:"\u51fd\u6570"},{value:"interface",title:"\u63a5\u53e3"},{value:"pipe",title:"\u7ba1\u9053"},{value:"ngmodule",title:"NgModule"},{value:"type-alias",title:"\u7c7b\u578b\u522b\u540d"},{value:"package",title:"\u5305"}],this.statuses=[{value:"all",title:"\u5168\u90e8"},{value:"deprecated",title:"\u5f03\u7528"},{value:"security-risk",title:"\u5b89\u5168\u98ce\u9669"}]}ngOnInit(){this.filteredSections=Object(n.a)([this.apiService.sections,this.criteriaSubject]).pipe(Object(o.a)(t=>({sections:t[0],criteria:t[1]})),Object(o.a)(t=>t.sections.map(e=>Object.assign(Object.assign({},e),{items:this.filterSection(e,t.criteria)})))),this.initializeSearchCriteria()}setQuery(t){this.setSearchCriteria({query:(t||"").toLowerCase().trim()})}setStatus(t){this.toggleStatusMenu(),this.status=t,this.setSearchCriteria({status:t.value})}setType(t){this.toggleTypeMenu(),this.type=t,this.setSearchCriteria({type:t.value})}toggleStatusMenu(){this.showStatusMenu=!this.showStatusMenu}toggleTypeMenu(){this.showTypeMenu=!this.showTypeMenu}filterSection(t,{query:e,status:i,type:s}){const a=!e||-1!==t.name.indexOf(e),c=t.items.filter(t=>(t=>"all"===s||s===t.docType)(t)&&(t=>"all"===i||i===t.stability||"security-risk"===i&&t.securityRisk)(t)&&(t=>a||-1!==t.name.indexOf(e))(t));return c.length?c:a&&"package"===s?[]:null}initializeSearchCriteria(){const{query:t,status:e,type:i}=this.locationService.search(),s=(t||"").toLowerCase();this.queryEl.nativeElement.value=s,this.status=this.statuses.find(t=>t.value===e)||this.statuses[0],this.type=this.types.find(t=>t.value===i)||this.types[0],this.searchCriteria={query:s,status:this.status.value,type:this.type.value},this.criteriaSubject.next(this.searchCriteria)}setLocationSearch(){const{query:t,status:e,type:i}=this.searchCriteria;this.locationService.setSearch("API \u641c\u7d22",{query:t||void 0,status:"all"!==e?e:void 0,type:"all"!==i?i:void 0})}setSearchCriteria(t){this.criteriaSubject.next(Object.assign(this.searchCriteria,t)),this.setLocationSearch()}}return t.\u0275fac=function(e){return new(e||t)(l.Pb(d),l.Pb(y.a))},t.\u0275cmp=l.Jb({type:t,selectors:[["aio-api-list"]],viewQuery:function(t,e){var i;1&t&&l.Ac(g,!0),2&t&&l.rc(i=l.ec())&&(e.queryEl=i.first)},decls:11,vars:9,consts:[[1,"l-flex-wrap","api-filter"],["label","\u7c7b\u578b\uff1a",3,"options","selected","showSymbol","change"],["label","\u72b6\u6001\uff1a",3,"options","selected","disabled","change"],[1,"form-search"],["placeholder","\u8fc7\u6ee4","aria-label","Filter Search",3,"input"],["filter",""],[1,"material-icons"],[1,"api-list-container","l-content-small","docs-content"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","api-list",4,"ngIf"],[3,"href"],[1,"api-list"],[1,"api-item"]],template:function(t,e){1&t&&(l.Vb(0,"div",0),l.Vb(1,"aio-select",1),l.dc("change",(function(t){return e.setType(t.option)})),l.Tb(),l.Vb(2,"aio-select",2),l.dc("change",(function(t){return e.setStatus(t.option)})),l.Tb(),l.Vb(3,"div",3),l.Vb(4,"input",4,5),l.dc("input",(function(t){return e.setQuery(t.target.value)})),l.Tb(),l.Vb(6,"i",6),l.Gc(7,"search"),l.Tb(),l.Tb(),l.Tb(),l.Vb(8,"article",7),l.Ec(9,T,3,2,"div",8),l.ic(10,"async"),l.Tb()),2&t&&(l.Ab(1),l.mc("options",e.types)("selected",e.type)("showSymbol",!0),l.Ab(1),l.mc("options",e.statuses)("selected",e.status)("disabled","package"===e.type.value),l.Ab(7),l.mc("ngForOf",l.jc(10,7,e.filteredSections)))},directives:[v.a,s.j,s.k],pipes:[s.b],encapsulation:2}),t})();i.d(e,"ApiListModule",(function(){return O}));let O=(()=>{class t{constructor(){this.customElementComponent=A}}return t.\u0275mod=l.Nb({type:t}),t.\u0275inj=l.Mb({factory:function(e){return new(e||t)},providers:[d],imports:[[s.c,c.a,a.b]]}),t})()}}]);
//# sourceMappingURL=api-api-list-module-es2015.f9a7feca72e4139dc89e.js.map