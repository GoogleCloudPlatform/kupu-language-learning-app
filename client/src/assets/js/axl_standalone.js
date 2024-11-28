(function() { 'use strict';var e="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function g(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var m=g(this);
function n(a,b){if(b)a:{var c=m;a=a.split(".");for(var d=0;d<a.length-1;d++){var k=a[d];if(!(k in c))break a;c=c[k]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&e(c,a,{configurable:!0,writable:!0,value:b})}}n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var k=d.length;c=c||0;for(0>c&&(c=Math.max(c+k,0));c<k;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});n("Object.fromEntries",function(a){return a?a:function(b){var c={};if(!(Symbol.iterator in b))throw new TypeError(""+b+" is not iterable");b=b[Symbol.iterator].call(b);for(var d=b.next();!d.done;d=b.next()){d=d.value;if(Object(d)!==d)throw new TypeError("iterable for fromEntries should yield objects");c[d[0]]=d[1]}return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q=this||self;function r(a,b){a=a.split(".");var c=q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};const t=!!window[["_y",1].join(Math.floor(Math.random()))+0],u=t&&"localhost"==document.location.hostname&&window.self==window.top,v=window.__gci_axl,w=a=>t||!!v||!!a.match(/^https?:\/\/((([\w-]*\.)+google(rs)?\.com)|(embed\.culturalspot\.org))(?:[\/:?#]|$)/i);
(function(){let a=()=>{};t?(a=()=>{const d=document.createElement("div");d.innerText="Development mode";Object.assign(d.style,{background:"rgba(255,0,0,.75)",color:"#fff",fontFamily:"Arial",fontSize:"12px",left:0,padding:"12px",position:"fixed",top:0,zIndex:9999});document.body.appendChild(d)},console.log("%cAxL v14 Development mode","color:teal")):(window.console.log=()=>{},a=()=>{if(window.self===window.top&&!navigator.userAgent.includes("SMLG"))throw document.body.textContent="This experiment is not available on this platform.",
window.close(),"Experiment unavailable on this platform.";if(document.referrer&&""!==document.referrer&&!w(document.referrer))throw document.body.textContent="This experiment is not available for embedding.",window.close(),"Experiment unavailable for embedding.";});let b;const c=()=>{document.body&&(a(),b&&b.disconnect())};b=new MutationObserver(c);b.observe(document.documentElement,{childList:!0});c()})();let x=null;try{x=window.localStorage}catch(a){console.warn(a)}
function z(a){return JSON.parse(x&&x.getItem(a.g+"#hs")||"{}")}function A(a){x&&(x.setItem(a.g+"#ts",Date.now()+""),x.setItem(a.g,JSON.stringify(Object.fromEntries(a.h))))}
class B{constructor(a,b,c,d,k){this.g=a;this.h=new Map;this.l=b;this.D=d;this.i={s:c,d:k};C.delegateSaving&&!c&&(b=z(this),(a=b.s)&&(this.i.s=a),(b=b.d)&&(this.i.d=b),void 0!==a&&this.l("hsl",this.i));this.h=new Map;try{const f=JSON.parse(x&&x.getItem(this.g)||"{}");this.h=new Map(Object.entries(f))}catch(f){}}getItem(a){return Promise.resolve(this.h.get(a))}setItem(a,b){return new Promise((c,d)=>{try{32E3<=this.j-(new Blob([JSON.stringify(this.h.get(a))])).size+(new Blob([JSON.stringify(b)])).size?
d(Error("Storage quota exceeded")):(this.h.set(a,b),A(this),c(this.usage))}catch(k){d(k)}})}removeItem(a){return new Promise(b=>{this.h.delete(a);A(this);b(this.usage)})}H(a,b,c="p",d=!1){const k={s:a,d:b,u:c,lb:d};return C.delegateSaving?(this.i=k,new Promise(f=>{this.l("hs",k);f()})):new Promise((f,l)=>{if(x)try{if(32E3<=this.j-(new Blob([JSON.stringify(x.getItem(this.g+"#hs"))])).size+(new Blob([JSON.stringify(k)])).size)l(Error("Storage quota exceeded"));else{var h=z(this);switch(c){case "p":case "pc":if(a<=
h.s){l(Error("Not highest score."));return}break;case "tm":if(a>=h.s){l(Error("Not highest score."));return}}x.setItem(this.g+"#ts",Date.now()+"");x.setItem(this.g+"#hs",JSON.stringify(k));f(this.usage)}}catch(p){l(p)}else l(Error("Storage not available"))})}G(a){if(!C.delegateSaving)return Promise.reject("Can't save Game State");this.i.d=a;return new Promise(b=>{this.l("gs",a);b()})}o(){return C.delegateSaving?Promise.resolve(this.i.d):Promise.reject("Can't get Game State")}A(){if(C.delegateSaving)return Promise.resolve(this.i.s);
const a=z(this);return Promise.resolve(a.s)}B(){return Promise.resolve(this.D)}flush(){x&&(x.removeItem(this.g),x.removeItem(this.g+"#ts"),x.removeItem(this.g+"#hs"));this.h=new Map;return Promise.resolve()}get lastChange(){return x?x.getItem(this.g+"#ts")?parseInt(x.getItem(this.g+"#ts"),10):Date.now():-1}get j(){if(!x)return 0;const a=Object.keys(x||{}).filter(c=>c.includes(this.g)),b=a.map(c=>x[c]);return(new Blob(a)).size+(new Blob(b)).size}get usage(){return this.j/32E3}get isLocalStorage(){return!!x}}
B.prototype.flush=B.prototype.flush;B.prototype.getReferralScore=B.prototype.B;B.prototype.getHighScore=B.prototype.A;B.prototype.getGameState=B.prototype.o;B.prototype.setGameState=B.prototype.G;B.prototype.setHighScore=B.prototype.H;B.prototype.removeItem=B.prototype.removeItem;B.prototype.setItem=B.prototype.setItem;B.prototype.getItem=B.prototype.getItem;
class D{constructor(a=window.parent){this.l=a;this.h=null;this.i=new Map;this.storage=this.g=null;a=v?50:500;const b=new URLSearchParams(window.location.search);this.j=parseInt(b.get(v?"axlshi":"axlhi"),10)||a}C(){if(u)return console.log("Local dev mode detected, skipping handshake."),Promise.resolve({});let a;const b=new Promise((c,d)=>{const k=f=>{if(!w(f.origin))console.error(`Blocked message from non trusted origin ${f.origin}.`);else if(f.data&&"hpo"==f.data.type)try{clearInterval(a);this.h=
f.origin||"*";this.g=h=>{if(!w(h.origin))console.error("Blocked message from a non trusted origin.");else if(h.data){var p=this.i.get(h.data.type);p&&p(h.data.payload)}};window.addEventListener("message",this.g);window.removeEventListener("message",k);const l=f.data.sys;if(f.data.id){let h=void 0,p=void 0,y=void 0;l&&(C.delegateSaving=!!l.ds,h=l.hs,p=l.rs,y=l.hsd);this.storage=new B(f.data.id,(E,F)=>{this.sendMessage(E,F)},h,p,y)}if(l){l.fb&&this.storage.lastChange<l.fb&&this.storage.flush();const h=
l.c;h&&(C.shareFiles=!!h.sf,C.download=!!h.d,C.useAltIcon=!!h.uai,C.sendFeedback=!!h.f,C.toggleExitButton=!!h.te,C.preferDarkMode=!!h.dme)}c(f.data.payload)}catch(l){d(l)}};window.addEventListener("message",k)});a=setInterval(()=>{this.sendMessage("hpi",{v:14})},this.j);return b}sendMessage(a,b=null){this.h||"hpi"==a?(a={type:a,payload:b},v?v.postMessage(JSON.stringify(a)):this.l.postMessage(a,this.h||"*")):console.warn("Host is not identified, initiate a handshake first.")}m(){this.h=null;this.g&&
window.removeEventListener("message",this.g);this.i.clear()}F(a,b){this.i.set(a,b)}}D.prototype.registerMessageCallback=D.prototype.F;D.prototype.dispose=D.prototype.m;D.prototype.sendMessage=D.prototype.sendMessage;D.prototype.handshake=D.prototype.C;var C={shareFiles:!1,download:!1,useAltIcon:!1,delegateSaving:!1,sendFeedback:!1,toggleExitButton:!1,preferDarkMode:!1};r("AxL",D);r("AxL.can",C);r("AxL.v",14);
r("AxL.ChildToHost",{FEEDBACK:"f",NAVIGATE:"n",SET_URL_PARAMS:"p",SHARE:"s",TOGGLE_EXIT_BUTTON:"te",TRACK:"t",SAVE_HIGH_SCORE:"hs",SAVE_HIGH_SCORE_FROM_LOCALSTORAGE:"hsl",SAVE_GAME_STATE:"gs"});r("AxL.HostToChild",{FREEZE:"f",RESUME:"r"});r("AxL.ScoreUnit",{POINTS:"p",TIME_MILLIS:"tm",PERCENTAGE:"pc"}); })()
