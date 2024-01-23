/*
 CookieConsent v2.7.2
 https://www.github.com/orestbida/cookieconsent
 Author Orest Bida
 Released under the MIT License
*/
(function(){var fb=function(Za){var f={current_lang:"en",auto_language:null,autorun:!0,cookie_name:"cc_cookie",cookie_expiration:182,cookie_domain:window.location.hostname,cookie_path:"/",cookie_same_site:"Lax",use_rfc_cookie:!1,autoclear_cookies:!0,revision:0,script_selector:"data-cookiecategory"},k={},r={},U=!1,V=!1,na=!1,xa=!1,oa=!1,u,aa,W,ya,za,Aa,ba=!0,Ba=!1,A=null,Ca,Da=[],Pa=[],Qa=!1,ta,Ea,Fa=[],ja=[],Q=[],F=[],ua=[],ka=document.documentElement,L,x,G,R,$a=function(a){"number"===typeof a.cookie_expiration&&
(f.cookie_expiration=a.cookie_expiration);"number"===typeof a.cookie_necessary_only_expiration&&(f.cookie_necessary_only_expiration=a.cookie_necessary_only_expiration);"boolean"===typeof a.autorun&&(f.autorun=a.autorun);"string"===typeof a.cookie_domain&&(f.cookie_domain=a.cookie_domain);"string"===typeof a.cookie_same_site&&(f.cookie_same_site=a.cookie_same_site);"string"===typeof a.cookie_path&&(f.cookie_path=a.cookie_path);"string"===typeof a.cookie_name&&(f.cookie_name=a.cookie_name);"function"===
typeof a.onAccept&&(ya=a.onAccept);"function"===typeof a.onFirstAction&&(Aa=a.onFirstAction);"function"===typeof a.onChange&&(za=a.onChange);"number"===typeof a.revision&&(-1<a.revision&&(f.revision=a.revision),Ba=!0);!0===a.autoclear_cookies&&(f.autoclear_cookies=!0);!0===a.use_rfc_cookie&&(f.use_rfc_cookie=!0);!0===a.hide_from_bots&&(Qa=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver));f.page_scripts=!0===a.page_scripts;f.page_scripts_order=
!1!==a.page_scripts_order;"browser"===a.auto_language||!0===a.auto_language?f.auto_language="browser":"document"===a.auto_language&&(f.auto_language="document");var b=a.languages;a=a.current_lang;"browser"===f.auto_language?(a=navigator.language||navigator.browserLanguage,2<a.length&&(a=a[0]+a[1]),a=a.toLowerCase(),b=Ga(a,b)):b="document"===f.auto_language?Ga(document.documentElement.lang,b):"string"===typeof a?f.current_lang=Ga(a,b):f.current_lang;f.current_lang=b},ab=function(){for(var a=document.querySelectorAll('a[data-cc="c-settings"], button[data-cc="c-settings"]'),
b=0;b<a.length;b++)a[b].setAttribute("aria-haspopup","dialog"),H(a[b],"click",function(c){k.showSettings(0);c.preventDefault?c.preventDefault():c.returnValue=!1})},Ga=function(a,b){if(Object.prototype.hasOwnProperty.call(b,a))return a;if(0<pa(b).length)return Object.prototype.hasOwnProperty.call(b,f.current_lang)?f.current_lang:pa(b)[0]},Ra=function(){function a(c,d){var e=!1,h=!1;try{for(var l=c.querySelectorAll(b.join(':not([tabindex="-1"]), ')),m,n=l.length,p=0;p<n;)m=l[p].getAttribute("data-focus"),
h||"1"!==m?"0"===m&&(e=l[p],h||"0"===l[p+1].getAttribute("data-focus")||(h=l[p+1])):h=l[p],p++}catch(q){return c.querySelectorAll(b.join(", "))}d[0]=l[0];d[1]=l[l.length-1];d[2]=e;d[3]=h}var b=["[href]","button","input","details",'[tabindex="0"]'];a(R,ja);U&&a(x,Fa)},Ha,Ia,Sa="",qa,bb=function(a,b){L=g("div");L.id="cc--main";L.style.position="fixed";L.style.zIndex="1000000";L.innerHTML='\x3c!--[if lt IE 9 ]><div id="cc_div" class="cc_div ie"></div><![endif]--\x3e\x3c!--[if (gt IE 8)|!(IE)]>\x3c!--\x3e<div id="cc_div" class="cc_div"></div>\x3c!--<![endif]--\x3e';
var c=L.children[0],d=f.current_lang,e="string"===typeof ka.textContent?"textContent":"innerText";Ha=b;Ia=function(t){!0===t.force_consent&&I(ka,"force--consent");var y=t.languages[d].consent_modal.description;Ba&&(y=ba?y.replace("{{revision_message}}",""):y.replace("{{revision_message}}",Sa||t.languages[d].consent_modal.revision_message||""));if(x)qa.innerHTML=y;else{x=g("div");var ca=g("div"),va=g("div");qa=g("div");var da=g("div"),wa=g("div");x.id="cm";ca.id="c-inr";va.id="c-inr-i";qa.id="c-txt";
da.id="c-bns";wa.id="cm-ov";x.setAttribute("role","dialog");x.setAttribute("aria-modal","true");x.setAttribute("aria-hidden","false");x.setAttribute("aria-labelledby","c-ttl");x.setAttribute("aria-describedby","c-txt");x.style.visibility=wa.style.visibility="hidden";wa.style.opacity=0;var X=t.languages[d].consent_modal.title;if(X){var ra=g("div");ra.id="c-ttl";ra.setAttribute("role","heading");ra.setAttribute("aria-level","2");ra.insertAdjacentHTML("beforeend",X);va.appendChild(ra)}qa.insertAdjacentHTML("beforeend",
y);va.appendChild(qa);y=t.languages[d].consent_modal.primary_btn;X=t.languages[d].consent_modal.secondary_btn;if(y){var la=g("button");la.id="c-p-bn";la.className="c-bn";la[e]=t.languages[d].consent_modal.primary_btn.text;var Ta;"accept_all"===y.role&&(Ta="all");H(la,"click",function(){k.hide();k.accept(Ta)})}if(X){var ea=g("button");ea.id="c-s-bn";ea.className="c-bn c_link";ea[e]=t.languages[d].consent_modal.secondary_btn.text;"accept_necessary"===X.role?H(ea,"click",function(){k.hide();k.accept([])}):
H(ea,"click",function(){k.showSettings(0)})}(t=t.gui_options)&&t.consent_modal&&!0===t.consent_modal.swap_buttons?(X&&da.appendChild(ea),y&&da.appendChild(la),da.className="swap"):(y&&da.appendChild(la),X&&da.appendChild(ea));ca.appendChild(va);(y||X)&&ca.appendChild(da);x.appendChild(ca);c.appendChild(x);c.appendChild(wa);U=!0}};a||Ia(b);G=g("div");var h=g("div"),l=g("div"),m=g("div");R=g("div");var n=g("div"),p=g("div"),q=g("button"),Y=g("div"),S=g("div"),z=g("div");G.id="s-cnt";h.id="c-vln";m.id=
"c-s-in";l.id="cs";n.id="s-ttl";R.id="s-inr";p.id="s-hdr";S.id="s-bl";q.id="s-c-bn";z.id="cs-ov";Y.id="s-c-bnc";q.className="c-bn";q.setAttribute("aria-label",b.languages[d].settings_modal.close_btn_label||"Close");G.setAttribute("role","dialog");G.setAttribute("aria-modal","true");G.setAttribute("aria-hidden","true");G.setAttribute("aria-labelledby","s-ttl");n.setAttribute("role","heading");G.style.visibility=z.style.visibility="hidden";z.style.opacity=0;Y.appendChild(q);H(h,"keydown",function(t){t=
t||window.event;27===t.keyCode&&k.hideSettings(0)},!0);H(q,"click",function(){k.hideSettings(0)});W=b.languages[f.current_lang].settings_modal.blocks;aa=b.languages[f.current_lang].settings_modal.cookie_table_headers;q=W.length;n.insertAdjacentHTML("beforeend",b.languages[f.current_lang].settings_modal.title);for(var v=0;v<q;++v){var C=W[v].title,J=W[v].description,M=W[v].toggle,fa=W[v].cookie_table,K=!0===b.remove_cookie_tables,w=J&&"truthy"||!K&&fa&&"truthy",ma=g("div"),Z=g("div");if(J){var T=g("div");
T.className="p";T.insertAdjacentHTML("beforeend",J)}var B=g("div");B.className="title";ma.className="c-bl";Z.className="desc";if("undefined"!==typeof M){var N="c-ac-"+v,ha=w?g("button"):g("div"),D=g("label"),O=g("input"),P=g("span"),ia=g("span"),Ua=g("span"),Va=g("span");ha.className=w?"b-tl exp":"b-tl";D.className="b-tg";O.className="c-tgl";Ua.className="on-i";Va.className="off-i";P.className="c-tg";ia.className="t-lb";w&&(ha.setAttribute("aria-expanded","false"),ha.setAttribute("aria-controls",
N));O.type="checkbox";P.setAttribute("aria-hidden","true");var Ja=M.value;O.value=Ja;ia[e]=C;ha.insertAdjacentHTML("beforeend",C);B.appendChild(ha);P.appendChild(Ua);P.appendChild(Va);a?-1<E(r.level,Ja)?(O.checked=!0,Q.push(!0)):Q.push(!1):M.enabled?(O.checked=!0,Q.push(!0)):Q.push(!1);F.push(Ja);M.readonly?(O.disabled=!0,I(P,"c-ro"),ua.push(!0)):ua.push(!1);I(Z,"b-acc");I(B,"b-bn");I(ma,"b-ex");Z.id=N;Z.setAttribute("aria-hidden","true");D.appendChild(O);D.appendChild(P);D.appendChild(ia);B.appendChild(D);
w&&function(t,y,ca){H(ha,"click",function(){Wa(y,"act")?(Ka(y,"act"),ca.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true")):(I(y,"act"),ca.setAttribute("aria-expanded","true"),t.setAttribute("aria-hidden","false"))},!1)}(Z,ma,ha)}else C&&(w=g("div"),w.className="b-tl",w.setAttribute("role","heading"),w.setAttribute("aria-level","3"),w.insertAdjacentHTML("beforeend",C),B.appendChild(w));C&&ma.appendChild(B);J&&Z.appendChild(T);if(!K&&"undefined"!==typeof fa){w=document.createDocumentFragment();
for(N=0;N<aa.length;++N)D=g("th"),K=aa[N],D.setAttribute("scope","col"),K&&(B=K&&pa(K)[0],D[e]=aa[N][B],w.appendChild(D));K=g("tr");K.appendChild(w);B=g("thead");B.appendChild(K);w=g("table");w.appendChild(B);N=document.createDocumentFragment();for(D=0;D<fa.length;D++){O=g("tr");for(P=0;P<aa.length;++P)if(K=aa[P])B=pa(K)[0],ia=g("td"),ia.insertAdjacentHTML("beforeend",fa[D][B]),ia.setAttribute("data-column",K[B]),O.appendChild(ia);N.appendChild(O)}fa=g("tbody");fa.appendChild(N);w.appendChild(fa);
Z.appendChild(w)}if(M&&C||!M&&(C||J))ma.appendChild(Z),S.appendChild(ma)}a=g("div");T=g("button");q=g("button");a.id="s-bns";T.id="s-sv-bn";q.id="s-all-bn";T.className="c-bn";q.className="c-bn";T.insertAdjacentHTML("beforeend",b.languages[f.current_lang].settings_modal.save_settings_btn);q.insertAdjacentHTML("beforeend",b.languages[f.current_lang].settings_modal.accept_all_btn);a.appendChild(q);if(b=b.languages[f.current_lang].settings_modal.reject_all_btn)v=g("button"),v.id="s-rall-bn",v.className=
"c-bn",v.insertAdjacentHTML("beforeend",b),H(v,"click",function(){k.hideSettings();k.hide();k.accept([])}),R.className="bns-t",a.appendChild(v);a.appendChild(T);H(T,"click",function(){k.hideSettings();k.hide();k.accept()});H(q,"click",function(){k.hideSettings();k.hide();k.accept("all")});p.appendChild(n);p.appendChild(Y);R.appendChild(p);R.appendChild(S);R.appendChild(a);m.appendChild(R);l.appendChild(m);h.appendChild(l);G.appendChild(h);c.appendChild(G);c.appendChild(z);(Za||document.body).appendChild(L)},
cb=function(a){var b=document.querySelectorAll(".c-tgl")||[],c=[],d=!1;if(0<b.length){for(var e=0;e<b.length;e++)-1!==E(a,F[e])?(b[e].checked=!0,Q[e]||(c.push(F[e]),Q[e]=!0)):(b[e].checked=!1,Q[e]&&(c.push(F[e]),Q[e]=!1));if(f.autoclear_cookies&&V&&0<c.length){b=W.length;e=-1;var h=sa("","all"),l=[f.cookie_domain,"."+f.cookie_domain];if("www."===f.cookie_domain.slice(0,4)){var m=f.cookie_domain.substr(4);l.push(m);l.push("."+m)}for(m=0;m<b;m++){var n=W[m];if(Object.prototype.hasOwnProperty.call(n,
"toggle")&&!Q[++e]&&Object.prototype.hasOwnProperty.call(n,"cookie_table")&&-1<E(c,n.toggle.value)){var p=n.cookie_table,q=pa(aa[0])[0],Y=p.length;"on_disable"===n.toggle.reload&&(d=!0);for(var S=0;S<Y;S++){var z=p[S],v=[],C=z[q],J=z.is_regex||!1,M=z.domain||null;z=z.path||!1;M&&(l=[M,"."+M]);if(J)for(J=0;J<h.length;J++)h[J].match(C)&&v.push(h[J]);else C=E(h,C),-1<C&&v.push(h[C]);0<v.length&&(Xa(v,z,l),"on_clear"===n.toggle.reload&&(d=!0))}}}}}r={level:a,revision:f.revision,data:A,rfc_cookie:f.use_rfc_cookie};
if(!V||0<c.length||!ba)ba=!0,Ca=La(Ma()),Na(f.cookie_name,JSON.stringify(r)),Oa();V?("function"===typeof za&&0<c.length&&za(r,c),d&&window.location.reload()):("function"===typeof Aa&&Aa(k.getUserPreferences(),r),"function"===typeof ya&&ya(r),V=!0)},db=function(a,b){if("string"!==typeof a||""===a||document.getElementById("cc--style"))b();else{var c=g("style");c.id="cc--style";var d=new XMLHttpRequest;d.onreadystatechange=function(){4===this.readyState&&200===this.status&&(c.setAttribute("type","text/css"),
c.styleSheet?c.styleSheet.cssText=this.responseText:c.appendChild(document.createTextNode(this.responseText)),document.getElementsByTagName("head")[0].appendChild(c),b())};d.open("GET",a);d.send()}},E=function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]===b)return d;return-1},g=function(a){var b=document.createElement(a);"button"===a&&b.setAttribute("type",a);return b},eb=function(){var a=!1,b=!1;H(document,"keydown",function(c){c=c||window.event;"Tab"===c.key&&(u&&(c.shiftKey?document.activeElement===
u[0]&&(u[1].focus(),c.preventDefault()):document.activeElement===u[1]&&(u[0].focus(),c.preventDefault()),b||oa||(b=!0,!a&&c.preventDefault(),c.shiftKey?u[3]?u[2]?u[2].focus():u[0].focus():u[1].focus():u[3]?u[3].focus():u[0].focus())),!b&&(a=!0))});document.contains&&H(L,"click",function(c){c=c||window.event;xa?R.contains(c.target)?oa=!0:(k.hideSettings(0),oa=!1):na&&x.contains(c.target)&&(oa=!0)},!0)},Ya=function(a,b){function c(e,h,l,m,n,p,q){p=p&&p.split(" ")||[];if(-1<E(h,n)&&(I(e,n),("bar"!==
n||"middle"!==p[0])&&-1<E(l,p[0])))for(h=0;h<p.length;h++)I(e,p[h]);-1<E(m,q)&&I(e,q)}if("object"===typeof a){var d=a.consent_modal;a=a.settings_modal;U&&d&&c(x,["box","bar","cloud"],["top","middle","bottom"],["zoom","slide"],d.layout,d.position,d.transition);!b&&a&&c(G,["bar"],["left","right"],["zoom","slide"],a.layout,a.position,a.transition)}};k.allowedCategory=function(a){return-1<E(JSON.parse(sa(f.cookie_name,"one",!0)||"{}").level||[],a)};k.run=function(a){if(!document.getElementById("cc_div")&&
($a(a),!Qa&&(r=JSON.parse(sa(f.cookie_name,"one",!0)||"{}"),V=void 0!==r.level,A=void 0!==r.data?r.data:null,ba="number"===typeof a.revision?V?-1<a.revision?r.revision===f.revision:!0:!0:!0,U=!V||!ba,bb(!U,a),db(a.theme_css,function(){Ra();Ya(a.gui_options);ab();f.autorun&&U&&k.show(a.delay||0);setTimeout(function(){I(L,"c--anim")},30);setTimeout(function(){eb()},100)}),V&&ba))){var b="boolean"===typeof r.rfc_cookie;if(!b||b&&r.rfc_cookie!==f.use_rfc_cookie)r.rfc_cookie=f.use_rfc_cookie,Na(f.cookie_name,
JSON.stringify(r));Ca=La(Ma());Oa();if("function"===typeof a.onAccept)a.onAccept(r)}};k.showSettings=function(a){setTimeout(function(){I(ka,"show--settings");G.setAttribute("aria-hidden","false");xa=!0;setTimeout(function(){na?Ea=document.activeElement:ta=document.activeElement;0!==ja.length&&(ja[3]?ja[3].focus():ja[0].focus(),u=ja)},200)},0<a?a:0)};var Oa=function(){if(f.page_scripts){var a=document.querySelectorAll("script["+f.script_selector+"]"),b=f.page_scripts_order,c=r.level||[],d=function(e,
h){if(h<e.length){var l=e[h],m=l.getAttribute(f.script_selector);if(-1<E(c,m)){l.type="text/javascript";l.removeAttribute(f.script_selector);m=l.getAttribute("data-src");var n=g("script");n.textContent=l.innerHTML;(function(p,q){for(var Y=q.attributes,S=Y.length,z=0;z<S;z++)q=Y[z],p.setAttribute(q.nodeName,q.nodeValue)})(n,l);m?n.src=m:m=l.src;m&&(b?n.readyState?n.onreadystatechange=function(){if("loaded"===n.readyState||"complete"===n.readyState)n.onreadystatechange=null,d(e,++h)}:n.onload=function(){n.onload=
null;d(e,++h)}:m=!1);l.parentNode.replaceChild(n,l);if(m)return}d(e,++h)}};d(a,0)}};k.set=function(a,b){switch(a){case "data":a=b.value;var c=!1;if("update"===b.mode)if(A=k.get("data"),(b=typeof A===typeof a)&&"object"===typeof A){!A&&(A={});for(var d in a)A[d]!==a[d]&&(A[d]=a[d],c=!0)}else!b&&A||A===a||(A=a,c=!0);else A=a,c=!0;c&&(r.data=A,Na(f.cookie_name,JSON.stringify(r)));return c;case "revision":return d=b.value,a=b.prompt_consent,b=b.message,L&&"number"===typeof d&&r.revision!==d?(Ba=!0,Sa=
b,ba=!1,f.revision=d,!0===a?(Ia(Ha),Ya(Ha.gui_options,!0),Ra(),k.show()):k.accept(),b=!0):b=!1,b;default:return!1}};k.get=function(a,b){return JSON.parse(sa(b||f.cookie_name,"one",!0)||"{}")[a]};k.getConfig=function(a){return f[a]};var Ma=function(){Da=r.level||[];Pa=F.filter(function(a){return-1===E(Da,a)});return{accepted:Da,rejected:Pa}},La=function(a){var b="custom",c=ua.filter(function(d){return!0===d}).length;a.accepted.length===F.length?b="all":0<=a.rejected.length&&a.accepted.length===c&&
(b="necessary");return b};k.getUserPreferences=function(){var a=Ma();return{accept_type:La(a),accepted_categories:a.accepted,rejected_categories:a.rejected}};k.loadScript=function(a,b,c){var d="function"===typeof b;if(document.querySelector('script[src="'+a+'"]'))d&&b();else{var e=g("script");if(c&&0<c.length)for(var h=0;h<c.length;++h)c[h]&&e.setAttribute(c[h].name,c[h].value);d&&(e.readyState?e.onreadystatechange=function(){if("loaded"===e.readyState||"complete"===e.readyState)e.onreadystatechange=
null,b()}:e.onload=b);e.src=a;(document.head?document.head:document.getElementsByTagName("head")[0]).appendChild(e)}};k.updateScripts=function(){Oa()};k.show=function(a){U&&setTimeout(function(){I(ka,"show--consent");x.setAttribute("aria-hidden","false");na=!0;setTimeout(function(){ta=document.activeElement;u=Fa},200)},0<a?a:0)};k.hide=function(){U&&(Ka(ka,"show--consent"),x.setAttribute("aria-hidden","true"),na=!1,setTimeout(function(){ta.focus();u=null},200))};k.hideSettings=function(){Ka(ka,"show--settings");
xa=!1;G.setAttribute("aria-hidden","true");setTimeout(function(){na?(Ea&&Ea.focus(),u=Fa):(ta.focus(),u=null);oa=!1},200)};k.accept=function(a,b){a=a||void 0;var c=b||[];b=[];var d=function(){for(var h=document.querySelectorAll(".c-tgl")||[],l=[],m=0;m<h.length;m++)h[m].checked&&l.push(h[m].value);return l};if(a)if("object"===typeof a&&"number"===typeof a.length)for(var e=0;e<a.length;e++)-1!==E(F,a[e])&&b.push(a[e]);else"string"===typeof a&&("all"===a?b=F.slice():-1!==E(F,a)&&b.push(a));else b=d();
if(1<=c.length)for(e=0;e<c.length;e++)b=b.filter(function(h){return h!==c[e]});for(e=0;e<F.length;e++)!0===ua[e]&&-1===E(b,F[e])&&b.push(F[e]);cb(b)};k.eraseCookies=function(a,b,c){var d=[];c=c?[c,"."+c]:[f.cookie_domain,"."+f.cookie_domain];if("object"===typeof a&&0<a.length)for(var e=0;e<a.length;e++)this.validCookie(a[e])&&d.push(a[e]);else this.validCookie(a)&&d.push(a);Xa(d,b,c)};var Na=function(a,b){var c=f.cookie_expiration;"number"===typeof f.cookie_necessary_only_expiration&&"necessary"===
Ca&&(c=f.cookie_necessary_only_expiration);b=f.use_rfc_cookie?encodeURIComponent(b):b;var d=new Date;d.setTime(d.getTime()+864E5*c);c="; expires="+d.toUTCString();a=a+"="+(b||"")+c+"; Path="+f.cookie_path+";";a+=" SameSite="+f.cookie_same_site+";";-1<window.location.hostname.indexOf(".")&&(a+=" Domain="+f.cookie_domain+";");"https:"===window.location.protocol&&(a+=" Secure;");document.cookie=a},sa=function(a,b,c){var d;if("one"===b){if((d=(d=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))?
c?d.pop():a:"")&&a===f.cookie_name){try{d=JSON.parse(d)}catch(e){try{d=JSON.parse(decodeURIComponent(d))}catch(h){d={}}}d=JSON.stringify(d)}}else if("all"===b)for(a=document.cookie.split(/;\s*/),d=[],b=0;b<a.length;b++)d.push(a[b].split("=")[0]);return d},Xa=function(a,b,c){b=b?b:"/";for(var d=0;d<a.length;d++)for(var e=0;e<c.length;e++)document.cookie=a[d]+"=; path="+b+(-1<c[e].indexOf(".")?"; domain="+c[e]:"")+"; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"};k.validCookie=function(a){return""!==sa(a,
"one",!0)};var H=function(a,b,c,d){a.addEventListener?!0===d?a.addEventListener(b,c,{passive:!0}):a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},pa=function(a){if("object"===typeof a){var b=[],c=0;for(b[c++]in a);return b}},I=function(a,b){a.classList?a.classList.add(b):Wa(a,b)||(a.className+=" "+b)},Ka=function(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(\\s|^)"+b+"(\\s|$)")," ")},Wa=function(a,b){return a.classList?a.classList.contains(b):!!a.className.match(new RegExp("(\\s|^)"+
b+"(\\s|$)"))};return k};"function"!==typeof window.initCookieConsent&&(window.initCookieConsent=fb)})();

var cc = initCookieConsent();

cc.run({
  current_lang : 'cs',
  autoclear_cookies : true,                   // default: false
  cookie_name: 'cookie_consent',              // default: 'cc_cookie'
  cookie_expiration : 365,                    // default: 182
  page_scripts: true,                         // default: false

  // auto_language: null,                     // default: null; could also be 'browser' or 'document'
  // autorun: true,                           // default: true
  // delay: 0,                                // default: 0
  // force_consent: false,
  // hide_from_bots: false,                   // default: false
  // remove_cookie_tables: false              // default: false
  // cookie_domain: location.hostname,        // default: current domain
  // cookie_path: "/",                        // default: root
  // cookie_same_site: "Lax",
  // use_rfc_cookie: false,                   // default: false
  // revision: 0,                             // default: 0

  gui_options: {
    consent_modal: {
      layout: 'box',                      // box,cloud,bar
      position: 'bottom left',          	// bottom,middle,top + left,right,center
      transition: 'slide'                 // zoom,slide
    },
    settings_modal: {
      layout: 'box',                      // box,bar
      // position: 'left',                // right,left (available only if bar layout selected)
      transition: 'slide'                 // zoom,slide
    }
  },

  onAccept: function (cookie) {
    //('onAccept fired ...');

    // delete line below
    typeof doDemoThings === 'function' && doDemoThings(cookie);
  },

  onChange: function (cookie, changed_preferences) {
    //console.log('onChange fired ...');

    // If analytics category's status was changed ...
    if (changed_preferences.indexOf('analytics') > -1) {

      // If analytics category is disabled ...
      if (!cc.allowedCategory('analytics')) {

        // Disable gtag ...
        //console.log('disabling gtag')
        window.dataLayer = window.dataLayer || [];

        function gtag() { dataLayer.push(arguments); }

        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });
      }
    }

    // delete line below
    typeof doDemoThings === 'function' && doDemoThings(cookie);
  },

  languages: {
    'cs': {
      consent_modal: {
        title: 'Informace o cookies na této stránce',
        description: 'Soubory cookie používáme ke shromažďování a analýze informací o výkonu a používání webu, zajištění fungování funkcí ze sociálních médií a ke zlepšení a přizpůsobení obsahu a reklam.',
        primary_btn: {
          text: 'Přijmout vše',
          role: 'accept_all'              	// 'accept_selected' or 'accept_all'
        },
        secondary_btn: {
          text: 'Nastavení cookies',
          role: 'settings'        					// 'settings' or 'accept_necessary'
          //role: 'accept_necessary'        // 'settings' or 'accept_necessary'
        },
        revision_message: '<br><br> Dear user, terms and conditions have changed since the last time you visisted!'
      },
      settings_modal: {
        title: 'Nastavení cookies',
        save_settings_btn: 'Uložit',
        accept_all_btn: 'Přijmout vše',
        reject_all_btn: 'Odmítnout vše',
        close_btn_label: 'Zavřít',
        cookie_table_headers: [
          {col1: 'Název'},
          {col2: 'Doména'},
          {col3: 'Expirace'},
          {col4: 'Popis'}
        ],
        blocks: [
          {
            title: '',
            description: 'Soubory cookie používáme ke shromažďování a analýze informací o výkonu a používání webu, zajištění fungování funkcí ze sociálních médií a ke zlepšení a přizpůsobení obsahu a reklam.'
          }, {
            title: 'Nutné soubory cookies',
            description: 'Některé soubory cookie jsou vyžadovány, aby byla zajištěna základní funkčnost. Bez těchto cookies nebude web fungovat správně. Ve výchozím nastavení jsou povoleny a nelze je zakázat.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true // cookie categories with readonly=true are all treated as "necessary cookies"
            }
          }, {
            title: 'Analytické soubory cookie',
            description: 'Analytické soubory cookie nám pomáhají vylepšovat naše webové stránky shromažďováním informací a podáváním zpráv o jeho používání.',
            toggle: {
              value: 'analytics', // there are no default categories => you specify them
              enabled: false,
              readonly: false
            },
            /*cookie_table: [
              {
                col1: '^_ga',
                col2: 'google.com',
                col3: '2 years',
                col4: 'description ...',
                is_regex: true
              },
              {
                col1: '_gid',
                col2: 'google.com',
                col3: '1 day',
                col4: 'description ...',
              }
            ]*/
          }, {
            title: 'Marketingové soubory cookie',
            description: 'Marketingové soubory cookie se používají ke sledování návštěvníků napříč webovými stránkami, které majitelům stránek umožňují zobrazovat relevantní a poutavé reklamy.',
            toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false
            }
          }/*, {
            title: 'Více informací',
            description: 'For any queries in relation to my policy on cookies and your choices, please <a class="cc-link" href="https://orestbida.com/contact">contact me</a>.',
          }*/
        ]
      }
    }
  }
});
