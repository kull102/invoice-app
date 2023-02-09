(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function dd(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function fd(t){if(te(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=it(i)?TE(i):fd(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(it(t))return t;if(ke(t))return t}}const IE=/;(?![^(]*\))/g,bE=/:([^]+)/,EE=/\/\*.*?\*\//gs;function TE(t){const e={};return t.replace(EE,"").split(IE).forEach(n=>{if(n){const i=n.split(bE);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ia(t){let e="";if(it(t))e=t;else if(te(t))for(let n=0;n<t.length;n++){const i=Ia(t[n]);i&&(e+=i+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const SE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",CE=dd(SE);function Ty(t){return!!t||t===""}function AE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=du(t[i],e[i]);return n}function du(t,e){if(t===e)return!0;let n=xp(t),i=xp(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Vo(t),i=Vo(e),n||i)return t===e;if(n=te(t),i=te(e),n||i)return n&&i?AE(t,e):!1;if(n=ke(t),i=ke(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!du(t[o],e[o]))return!1}}return String(t)===String(e)}function kE(t,e){return t.findIndex(n=>du(n,e))}const Ne=t=>it(t)?t:t==null?"":te(t)||ke(t)&&(t.toString===Ay||!ae(t.toString))?JSON.stringify(t,Sy,2):String(t),Sy=(t,e)=>e&&e.__v_isRef?Sy(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:pu(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!te(e)&&!ky(e)?String(e):e,Pe={},is=[],ln=()=>{},DE=()=>!1,xE=/^on[^a-z]/,fu=t=>xE.test(t),pd=t=>t.startsWith("onUpdate:"),_t=Object.assign,md=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},NE=Object.prototype.hasOwnProperty,ve=(t,e)=>NE.call(t,e),te=Array.isArray,rs=t=>ba(t)==="[object Map]",pu=t=>ba(t)==="[object Set]",xp=t=>ba(t)==="[object Date]",ae=t=>typeof t=="function",it=t=>typeof t=="string",Vo=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",Cy=t=>ke(t)&&ae(t.then)&&ae(t.catch),Ay=Object.prototype.toString,ba=t=>Ay.call(t),RE=t=>ba(t).slice(8,-1),ky=t=>ba(t)==="[object Object]",gd=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pc=dd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},PE=/-(\w)/g,xn=mu(t=>t.replace(PE,(e,n)=>n?n.toUpperCase():"")),OE=/\B([A-Z])/g,Ps=mu(t=>t.replace(OE,"-$1").toLowerCase()),gu=mu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Tl=mu(t=>t?`on${gu(t)}`:""),Bo=(t,e)=>!Object.is(t,e),mc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Dc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ME=t=>{const e=it(t)?Number(t):NaN;return isNaN(e)?t:e};let Np;const LE=()=>Np||(Np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ht;class Dy{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function xy(t){return new Dy(t)}function FE(t,e=Ht){e&&e.active&&e.effects.push(t)}function Ny(){return Ht}function UE(t){Ht&&Ht.cleanups.push(t)}const yd=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ry=t=>(t.w&_i)>0,Py=t=>(t.n&_i)>0,VE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_i},BE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Ry(r)&&!Py(r)?r.delete(t):e[n++]=r,r.w&=~_i,r.n&=~_i}e.length=n}},Nc=new WeakMap;let go=0,_i=1;const ih=30;let an;const dr=Symbol(""),rh=Symbol("");class vd{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,FE(this,i)}run(){if(!this.active)return this.fn();let e=an,n=gi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,gi=!0,_i=1<<++go,go<=ih?VE(this):Rp(this),this.fn()}finally{go<=ih&&BE(this),_i=1<<--go,an=this.parent,gi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(Rp(this),this.onStop&&this.onStop(),this.active=!1)}}function Rp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let gi=!0;const Oy=[];function Os(){Oy.push(gi),gi=!1}function Ms(){const t=Oy.pop();gi=t===void 0?!0:t}function qt(t,e,n){if(gi&&an){let i=Nc.get(t);i||Nc.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=yd()),My(r)}}function My(t,e){let n=!1;go<=ih?Py(t)||(t.n|=_i,n=!Ry(t)):n=!t.has(an),n&&(t.add(an),an.deps.push(t))}function jn(t,e,n,i,r,s){const o=Nc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&te(t)){const c=Number(i);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":te(t)?gd(n)&&a.push(o.get("length")):(a.push(o.get(dr)),rs(t)&&a.push(o.get(rh)));break;case"delete":te(t)||(a.push(o.get(dr)),rs(t)&&a.push(o.get(rh)));break;case"set":rs(t)&&a.push(o.get(dr));break}if(a.length===1)a[0]&&sh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);sh(yd(c))}}function sh(t,e){const n=te(t)?t:[...t];for(const i of n)i.computed&&Pp(i);for(const i of n)i.computed||Pp(i)}function Pp(t,e){(t!==an||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function $E(t,e){var n;return(n=Nc.get(t))===null||n===void 0?void 0:n.get(e)}const qE=dd("__proto__,__v_isRef,__isVue"),Ly=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vo)),jE=wd(),KE=wd(!1,!0),HE=wd(!0),Op=WE();function WE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=pe(this);for(let s=0,o=this.length;s<o;s++)qt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(pe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Os();const i=pe(this)[e].apply(this,n);return Ms(),i}}),t}function GE(t){const e=pe(this);return qt(e,"has",t),e.hasOwnProperty(t)}function wd(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?uT:$y:e?By:Vy).get(i))return i;const o=te(i);if(!t){if(o&&ve(Op,r))return Reflect.get(Op,r,s);if(r==="hasOwnProperty")return GE}const a=Reflect.get(i,r,s);return(Vo(r)?Ly.has(r):qE(r))||(t||qt(i,"get",r),e)?a:Ke(a)?o&&gd(r)?a:a.value:ke(a)?t?qy(a):Ls(a):a}}const zE=Fy(),QE=Fy(!0);function Fy(t=!1){return function(n,i,r,s){let o=n[i];if(ds(o)&&Ke(o)&&!Ke(r))return!1;if(!t&&(!Rc(r)&&!ds(r)&&(o=pe(o),r=pe(r)),!te(n)&&Ke(o)&&!Ke(r)))return o.value=r,!0;const a=te(n)&&gd(i)?Number(i)<n.length:ve(n,i),c=Reflect.set(n,i,r,s);return n===pe(s)&&(a?Bo(r,o)&&jn(n,"set",i,r):jn(n,"add",i,r)),c}}function YE(t,e){const n=ve(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&jn(t,"delete",e,void 0),i}function XE(t,e){const n=Reflect.has(t,e);return(!Vo(e)||!Ly.has(e))&&qt(t,"has",e),n}function JE(t){return qt(t,"iterate",te(t)?"length":dr),Reflect.ownKeys(t)}const Uy={get:jE,set:zE,deleteProperty:YE,has:XE,ownKeys:JE},ZE={get:HE,set(t,e){return!0},deleteProperty(t,e){return!0}},eT=_t({},Uy,{get:KE,set:QE}),_d=t=>t,yu=t=>Reflect.getPrototypeOf(t);function Xa(t,e,n=!1,i=!1){t=t.__v_raw;const r=pe(t),s=pe(e);n||(e!==s&&qt(r,"get",e),qt(r,"get",s));const{has:o}=yu(r),a=i?_d:n?Ed:$o;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Ja(t,e=!1){const n=this.__v_raw,i=pe(n),r=pe(t);return e||(t!==r&&qt(i,"has",t),qt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Za(t,e=!1){return t=t.__v_raw,!e&&qt(pe(t),"iterate",dr),Reflect.get(t,"size",t)}function Mp(t){t=pe(t);const e=pe(this);return yu(e).has.call(e,t)||(e.add(t),jn(e,"add",t,t)),this}function Lp(t,e){e=pe(e);const n=pe(this),{has:i,get:r}=yu(n);let s=i.call(n,t);s||(t=pe(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Bo(e,o)&&jn(n,"set",t,e):jn(n,"add",t,e),this}function Fp(t){const e=pe(this),{has:n,get:i}=yu(e);let r=n.call(e,t);r||(t=pe(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&jn(e,"delete",t,void 0),s}function Up(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&jn(t,"clear",void 0,void 0),n}function ec(t,e){return function(i,r){const s=this,o=s.__v_raw,a=pe(o),c=e?_d:t?Ed:$o;return!t&&qt(a,"iterate",dr),o.forEach((u,l)=>i.call(r,c(u),c(l),s))}}function tc(t,e,n){return function(...i){const r=this.__v_raw,s=pe(r),o=rs(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...i),l=n?_d:e?Ed:$o;return!e&&qt(s,"iterate",c?rh:dr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function ei(t){return function(...e){return t==="delete"?!1:this}}function tT(){const t={get(s){return Xa(this,s)},get size(){return Za(this)},has:Ja,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:ec(!1,!1)},e={get(s){return Xa(this,s,!1,!0)},get size(){return Za(this)},has:Ja,add:Mp,set:Lp,delete:Fp,clear:Up,forEach:ec(!1,!0)},n={get(s){return Xa(this,s,!0)},get size(){return Za(this,!0)},has(s){return Ja.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:ec(!0,!1)},i={get(s){return Xa(this,s,!0,!0)},get size(){return Za(this,!0)},has(s){return Ja.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:ec(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tc(s,!1,!1),n[s]=tc(s,!0,!1),e[s]=tc(s,!1,!0),i[s]=tc(s,!0,!0)}),[t,n,e,i]}const[nT,iT,rT,sT]=tT();function Id(t,e){const n=e?t?sT:rT:t?iT:nT;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ve(n,r)&&r in i?n:i,r,s)}const oT={get:Id(!1,!1)},aT={get:Id(!1,!0)},cT={get:Id(!0,!1)},Vy=new WeakMap,By=new WeakMap,$y=new WeakMap,uT=new WeakMap;function lT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hT(t){return t.__v_skip||!Object.isExtensible(t)?0:lT(RE(t))}function Ls(t){return ds(t)?t:bd(t,!1,Uy,oT,Vy)}function dT(t){return bd(t,!1,eT,aT,By)}function qy(t){return bd(t,!0,ZE,cT,$y)}function bd(t,e,n,i,r){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=hT(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Bn(t){return ds(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function ds(t){return!!(t&&t.__v_isReadonly)}function Rc(t){return!!(t&&t.__v_isShallow)}function jy(t){return Bn(t)||ds(t)}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function fs(t){return Dc(t,"__v_skip",!0),t}const $o=t=>ke(t)?Ls(t):t,Ed=t=>ke(t)?qy(t):t;function Ky(t){gi&&an&&(t=pe(t),My(t.dep||(t.dep=yd())))}function Hy(t,e){t=pe(t);const n=t.dep;n&&sh(n)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function Td(t){return Wy(t,!1)}function fT(t){return Wy(t,!0)}function Wy(t,e){return Ke(t)?t:new pT(t,e)}class pT{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:$o(e)}get value(){return Ky(this),this._value}set value(e){const n=this.__v_isShallow||Rc(e)||ds(e);e=n?e:pe(e),Bo(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$o(e),Hy(this))}}function ss(t){return Ke(t)?t.value:t}const mT={get:(t,e,n)=>ss(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ke(r)&&!Ke(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Gy(t){return Bn(t)?t:new Proxy(t,mT)}function gT(t){const e=te(t)?new Array(t.length):{};for(const n in t)e[n]=zy(t,n);return e}class yT{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return $E(pe(this._object),this._key)}}function zy(t,e,n){const i=t[e];return Ke(i)?i:new yT(t,e,n)}var Qy;class vT{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Qy]=!1,this._dirty=!0,this.effect=new vd(e,()=>{this._dirty||(this._dirty=!0,Hy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=pe(this);return Ky(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qy="__v_isReadonly";function wT(t,e,n=!1){let i,r;const s=ae(t);return s?(i=t,r=ln):(i=t.get,r=t.set),new vT(i,r,s||!r,n)}function yi(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){vu(s,e,n)}return r}function tn(t,e,n,i){if(ae(t)){const s=yi(t,e,n,i);return s&&Cy(s)&&s.catch(o=>{vu(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(tn(t[s],e,n,i));return r}function vu(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){yi(c,null,10,[t,o,a]);return}}_T(t,n,r,i)}function _T(t,e,n,i=!0){console.error(t)}let qo=!1,oh=!1;const Ct=[];let yn=0;const os=[];let Ln=null,Yi=0;const Yy=Promise.resolve();let Sd=null;function Cd(t){const e=Sd||Yy;return t?e.then(this?t.bind(this):t):e}function IT(t){let e=yn+1,n=Ct.length;for(;e<n;){const i=e+n>>>1;jo(Ct[i])<t?e=i+1:n=i}return e}function Ad(t){(!Ct.length||!Ct.includes(t,qo&&t.allowRecurse?yn+1:yn))&&(t.id==null?Ct.push(t):Ct.splice(IT(t.id),0,t),Xy())}function Xy(){!qo&&!oh&&(oh=!0,Sd=Yy.then(Zy))}function bT(t){const e=Ct.indexOf(t);e>yn&&Ct.splice(e,1)}function ET(t){te(t)?os.push(...t):(!Ln||!Ln.includes(t,t.allowRecurse?Yi+1:Yi))&&os.push(t),Xy()}function Vp(t,e=qo?yn+1:0){for(;e<Ct.length;e++){const n=Ct[e];n&&n.pre&&(Ct.splice(e,1),e--,n())}}function Jy(t){if(os.length){const e=[...new Set(os)];if(os.length=0,Ln){Ln.push(...e);return}for(Ln=e,Ln.sort((n,i)=>jo(n)-jo(i)),Yi=0;Yi<Ln.length;Yi++)Ln[Yi]();Ln=null,Yi=0}}const jo=t=>t.id==null?1/0:t.id,TT=(t,e)=>{const n=jo(t)-jo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Zy(t){oh=!1,qo=!0,Ct.sort(TT);const e=ln;try{for(yn=0;yn<Ct.length;yn++){const n=Ct[yn];n&&n.active!==!1&&yi(n,null,14)}}finally{yn=0,Ct.length=0,Jy(),qo=!1,Sd=null,(Ct.length||os.length)&&Zy()}}function ST(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pe;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=i[l]||Pe;d&&(r=n.map(p=>it(p)?p.trim():p)),h&&(r=n.map(xc))}let a,c=i[a=Tl(e)]||i[a=Tl(xn(e))];!c&&s&&(c=i[a=Tl(Ps(e))]),c&&tn(c,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,tn(u,t,6,r)}}function ev(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ae(t)){const c=u=>{const l=ev(u,e,!0);l&&(a=!0,_t(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(ke(t)&&i.set(t,null),null):(te(s)?s.forEach(c=>o[c]=null):_t(o,s),ke(t)&&i.set(t,o),o)}function wu(t,e){return!t||!fu(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Ps(e))||ve(t,e))}let Qt=null,_u=null;function Pc(t){const e=Qt;return Qt=t,_u=t&&t.type.__scopeId||null,e}function Fs(t){_u=t}function Us(){_u=null}function Iu(t,e=Qt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Qp(-1);const s=Pc(e);let o;try{o=t(...r)}finally{Pc(s),i._d&&Qp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Sl(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:w}=t;let C,D;const L=Pc(t);try{if(n.shapeFlag&4){const G=r||i;C=gn(l.call(G,G,h,s,p,d,g)),D=c}else{const G=e;C=gn(G.length>1?G(s,{attrs:c,slots:a,emit:u}):G(s,null)),D=e.props?c:CT(c)}}catch(G){So.length=0,vu(G,t,1),C=st(hn)}let N=C;if(D&&w!==!1){const G=Object.keys(D),{shapeFlag:K}=N;G.length&&K&7&&(o&&G.some(pd)&&(D=AT(D,o)),N=Ii(N,D))}return n.dirs&&(N=Ii(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),C=N,Pc(L),C}const CT=t=>{let e;for(const n in t)(n==="class"||n==="style"||fu(n))&&((e||(e={}))[n]=t[n]);return e},AT=(t,e)=>{const n={};for(const i in t)(!pd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function kT(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?Bp(i,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==i[d]&&!wu(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bp(i,o,u):!0:!!o;return!1}function Bp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!wu(n,s))return!0}return!1}function DT({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xT=t=>t.__isSuspense;function NT(t,e){e&&e.pendingBranch?te(t)?e.effects.push(...t):e.effects.push(t):ET(t)}function gc(t,e){if(Qe){let n=Qe.provides;const i=Qe.parent&&Qe.parent.provides;i===n&&(n=Qe.provides=Object.create(i)),n[t]=e}}function Cn(t,e,n=!1){const i=Qe||Qt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ae(e)?e.call(i.proxy):e}}const nc={};function Eo(t,e,n){return tv(t,e,n)}function tv(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=Pe){const a=Ny()===(Qe==null?void 0:Qe.scope)?Qe:null;let c,u=!1,l=!1;if(Ke(t)?(c=()=>t.value,u=Rc(t)):Bn(t)?(c=()=>t,i=!0):te(t)?(l=!0,u=t.some(N=>Bn(N)||Rc(N)),c=()=>t.map(N=>{if(Ke(N))return N.value;if(Bn(N))return sr(N);if(ae(N))return yi(N,a,2)})):ae(t)?e?c=()=>yi(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),tn(t,a,3,[d])}:c=ln,e&&i){const N=c;c=()=>sr(N())}let h,d=N=>{h=D.onStop=()=>{yi(N,a,4)}},p;if(Go)if(d=ln,e?n&&tn(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const N=T0();p=N.__watcherHandles||(N.__watcherHandles=[])}else return ln;let g=l?new Array(t.length).fill(nc):nc;const w=()=>{if(D.active)if(e){const N=D.run();(i||u||(l?N.some((G,K)=>Bo(G,g[K])):Bo(N,g)))&&(h&&h(),tn(e,a,3,[N,g===nc?void 0:l&&g[0]===nc?[]:g,d]),g=N)}else D.run()};w.allowRecurse=!!e;let C;r==="sync"?C=w:r==="post"?C=()=>Lt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),C=()=>Ad(w));const D=new vd(c,C);e?n?w():g=D.run():r==="post"?Lt(D.run.bind(D),a&&a.suspense):D.run();const L=()=>{D.stop(),a&&a.scope&&md(a.scope.effects,D)};return p&&p.push(L),L}function RT(t,e,n){const i=this.proxy,r=it(t)?t.includes(".")?nv(i,t):()=>i[t]:t.bind(i,i);let s;ae(e)?s=e:(s=e.handler,n=e);const o=Qe;ps(this);const a=tv(r,s.bind(i),n);return o?ps(o):fr(),a}function nv(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function sr(t,e){if(!ke(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ke(t))sr(t.value,e);else if(te(t))for(let n=0;n<t.length;n++)sr(t[n],e);else if(pu(t)||rs(t))t.forEach(n=>{sr(n,e)});else if(ky(t))for(const n in t)sr(t[n],e);return t}function PT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cv(()=>{t.isMounted=!0}),uv(()=>{t.isUnmounting=!0}),t}const Zt=[Function,Array],OT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zt,onEnter:Zt,onAfterEnter:Zt,onEnterCancelled:Zt,onBeforeLeave:Zt,onLeave:Zt,onAfterLeave:Zt,onLeaveCancelled:Zt,onBeforeAppear:Zt,onAppear:Zt,onAfterAppear:Zt,onAppearCancelled:Zt},setup(t,{slots:e}){const n=bv(),i=PT();let r;return()=>{const s=e.default&&sv(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const w of s)if(w.type!==hn){o=w;break}}const a=pe(t),{mode:c}=a;if(i.isLeaving)return Cl(o);const u=$p(o);if(!u)return Cl(o);const l=ah(u,a,i,n);ch(u,l);const h=n.subTree,d=h&&$p(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const w=g();r===void 0?r=w:w!==r&&(r=w,p=!0)}if(d&&d.type!==hn&&(!Xi(u,d)||p)){const w=ah(d,a,i,n);if(ch(d,w),c==="out-in")return i.isLeaving=!0,w.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Cl(o);c==="in-out"&&u.type!==hn&&(w.delayLeave=(C,D,L)=>{const N=rv(i,d);N[String(d.key)]=d,C._leaveCb=()=>{D(),C._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=L})}return o}}},iv=OT;function rv(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ah(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:w,onAppear:C,onAfterAppear:D,onAppearCancelled:L}=e,N=String(t.key),G=rv(n,t),K=(U,ce)=>{U&&tn(U,i,9,ce)},ne=(U,ce)=>{const le=ce[1];K(U,ce),te(U)?U.every(Re=>Re.length<=1)&&le():U.length<=1&&le()},Y={mode:s,persisted:o,beforeEnter(U){let ce=a;if(!n.isMounted)if(r)ce=w||a;else return;U._leaveCb&&U._leaveCb(!0);const le=G[N];le&&Xi(t,le)&&le.el._leaveCb&&le.el._leaveCb(),K(ce,[U])},enter(U){let ce=c,le=u,Re=l;if(!n.isMounted)if(r)ce=C||c,le=D||u,Re=L||l;else return;let j=!1;const Ae=U._enterCb=Ve=>{j||(j=!0,Ve?K(Re,[U]):K(le,[U]),Y.delayedLeave&&Y.delayedLeave(),U._enterCb=void 0)};ce?ne(ce,[U,Ae]):Ae()},leave(U,ce){const le=String(t.key);if(U._enterCb&&U._enterCb(!0),n.isUnmounting)return ce();K(h,[U]);let Re=!1;const j=U._leaveCb=Ae=>{Re||(Re=!0,ce(),Ae?K(g,[U]):K(p,[U]),U._leaveCb=void 0,G[le]===t&&delete G[le])};G[le]=t,d?ne(d,[U,j]):j()},clone(U){return ah(U,e,n,i)}};return Y}function Cl(t){if(bu(t))return t=Ii(t),t.children=null,t}function $p(t){return bu(t)?t.children?t.children[0]:void 0:t}function ch(t,e){t.shapeFlag&6&&t.component?ch(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function sv(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Wt?(o.patchFlag&128&&r++,i=i.concat(sv(o.children,e,a))):(e||o.type!==hn)&&i.push(a!=null?Ii(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ov(t){return ae(t)?{setup:t,name:t.name}:t}const yc=t=>!!t.type.__asyncLoader,bu=t=>t.type.__isKeepAlive;function MT(t,e){av(t,"a",e)}function LT(t,e){av(t,"da",e)}function av(t,e,n=Qe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Eu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)bu(r.parent.vnode)&&FT(i,e,n,r),r=r.parent}}function FT(t,e,n,i){const r=Eu(e,t,i,!0);lv(()=>{md(i[e],r)},n)}function Eu(t,e,n=Qe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Os(),ps(n);const a=tn(e,n,t,o);return fr(),Ms(),a});return i?r.unshift(s):r.push(s),s}}const Gn=t=>(e,n=Qe)=>(!Go||t==="sp")&&Eu(t,(...i)=>e(...i),n),UT=Gn("bm"),cv=Gn("m"),VT=Gn("bu"),BT=Gn("u"),uv=Gn("bum"),lv=Gn("um"),$T=Gn("sp"),qT=Gn("rtg"),jT=Gn("rtc");function KT(t,e=Qe){Eu("ec",t,e)}function tt(t,e){const n=Qt;if(n===null)return t;const i=Cu(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=Pe]=e[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&sr(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function qi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Os(),tn(c,n,8,[t.el,a,t,e]),Ms())}}const hv="components";function fi(t,e){return WT(hv,t,!0,e)||t}const HT=Symbol();function WT(t,e,n=!0,i=!1){const r=Qt||Qe;if(r){const s=r.type;if(t===hv){const a=I0(s,!1);if(a&&(a===e||a===xn(e)||a===gu(xn(e))))return s}const o=qp(r[t]||s[t],e)||qp(r.appContext[t],e);return!o&&i?s:o}}function qp(t,e){return t&&(t[e]||t[xn(e)]||t[gu(xn(e))])}function kd(t,e,n,i){let r;const s=n&&n[i];if(te(t)||it(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ke(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const uh=t=>t?Ev(t)?Cu(t)||t.proxy:uh(t.parent):null,To=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uh(t.parent),$root:t=>uh(t.root),$emit:t=>t.emit,$options:t=>Dd(t),$forceUpdate:t=>t.f||(t.f=()=>Ad(t.update)),$nextTick:t=>t.n||(t.n=Cd.bind(t.proxy)),$watch:t=>RT.bind(t)}),Al=(t,e)=>t!==Pe&&!t.__isScriptSetup&&ve(t,e),GT={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Al(i,e))return o[e]=1,i[e];if(r!==Pe&&ve(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ve(u,e))return o[e]=3,s[e];if(n!==Pe&&ve(n,e))return o[e]=4,n[e];lh&&(o[e]=0)}}const l=To[e];let h,d;if(l)return e==="$attrs"&&qt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&ve(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ve(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Al(r,e)?(r[e]=n,!0):i!==Pe&&ve(i,e)?(i[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Pe&&ve(t,o)||Al(e,o)||(a=s[0])&&ve(a,o)||ve(i,o)||ve(To,o)||ve(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let lh=!0;function zT(t){const e=Dd(t),n=t.proxy,i=t.ctx;lh=!1,e.beforeCreate&&jp(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:w,deactivated:C,beforeDestroy:D,beforeUnmount:L,destroyed:N,unmounted:G,render:K,renderTracked:ne,renderTriggered:Y,errorCaptured:U,serverPrefetch:ce,expose:le,inheritAttrs:Re,components:j,directives:Ae,filters:Ve}=e;if(u&&QT(u,i,null,t.appContext.config.unwrapInjectedRef),o)for(const De in o){const Te=o[De];ae(Te)&&(i[De]=Te.bind(n))}if(r){const De=r.call(n,n);ke(De)&&(t.data=Ls(De))}if(lh=!0,s)for(const De in s){const Te=s[De],rn=ae(Te)?Te.bind(n,n):ae(Te.get)?Te.get.bind(n,n):ln,$i=!ae(Te)&&ae(Te.set)?Te.set.bind(n):ln,sn=zt({get:rn,set:$i});Object.defineProperty(i,De,{enumerable:!0,configurable:!0,get:()=>sn.value,set:Mt=>sn.value=Mt})}if(a)for(const De in a)dv(a[De],i,n,De);if(c){const De=ae(c)?c.call(n):c;Reflect.ownKeys(De).forEach(Te=>{gc(Te,De[Te])})}l&&jp(l,t,"c");function Be(De,Te){te(Te)?Te.forEach(rn=>De(rn.bind(n))):Te&&De(Te.bind(n))}if(Be(UT,h),Be(cv,d),Be(VT,p),Be(BT,g),Be(MT,w),Be(LT,C),Be(KT,U),Be(jT,ne),Be(qT,Y),Be(uv,L),Be(lv,G),Be($T,ce),te(le))if(le.length){const De=t.exposed||(t.exposed={});le.forEach(Te=>{Object.defineProperty(De,Te,{get:()=>n[Te],set:rn=>n[Te]=rn})})}else t.exposed||(t.exposed={});K&&t.render===ln&&(t.render=K),Re!=null&&(t.inheritAttrs=Re),j&&(t.components=j),Ae&&(t.directives=Ae)}function QT(t,e,n=ln,i=!1){te(t)&&(t=hh(t));for(const r in t){const s=t[r];let o;ke(s)?"default"in s?o=Cn(s.from||r,s.default,!0):o=Cn(s.from||r):o=Cn(s),Ke(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function jp(t,e,n){tn(te(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function dv(t,e,n,i){const r=i.includes(".")?nv(n,i):()=>n[i];if(it(t)){const s=e[t];ae(s)&&Eo(r,s)}else if(ae(t))Eo(r,t.bind(n));else if(ke(t))if(te(t))t.forEach(s=>dv(s,e,n,i));else{const s=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(s)&&Eo(r,s,t)}}function Dd(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(u=>Oc(c,u,o,!0)),Oc(c,e,o)),ke(e)&&s.set(e,c),c}function Oc(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Oc(t,s,n,!0),r&&r.forEach(o=>Oc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=YT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const YT={data:Kp,props:Gi,emits:Gi,methods:Gi,computed:Gi,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Gi,directives:Gi,watch:JT,provide:Kp,inject:XT};function Kp(t,e){return e?t?function(){return _t(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function XT(t,e){return Gi(hh(t),hh(e))}function hh(t){if(te(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gi(t,e){return t?_t(_t(Object.create(null),t),e):e}function JT(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const i in e)n[i]=Dt(t[i],e[i]);return n}function ZT(t,e,n,i=!1){const r={},s={};Dc(s,Su,1),t.propsDefaults=Object.create(null),fv(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:dT(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function e0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=pe(r),[c]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(wu(t.emitsOptions,d))continue;const p=e[d];if(c)if(ve(s,d))p!==s[d]&&(s[d]=p,u=!0);else{const g=xn(d);r[g]=dh(c,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,u=!0)}}}else{fv(t,e,r,s)&&(u=!0);let l;for(const h in a)(!e||!ve(e,h)&&((l=Ps(h))===h||!ve(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=dh(c,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!ve(e,h))&&(delete s[h],u=!0)}u&&jn(t,"set","$attrs")}function fv(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(pc(c))continue;const u=e[c];let l;r&&ve(r,l=xn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:wu(t.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=pe(n),u=a||Pe;for(let l=0;l<s.length;l++){const h=s[l];n[h]=dh(r,c,h,u[h],t,!ve(u,h))}}return o}function dh(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ve(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&ae(c)){const{propsDefaults:u}=r;n in u?i=u[n]:(ps(r),i=u[n]=c.call(null,e),fr())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Ps(n))&&(i=!0))}return i}function pv(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!ae(t)){const l=h=>{c=!0;const[d,p]=pv(h,e,!0);_t(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return ke(t)&&i.set(t,is),is;if(te(s))for(let l=0;l<s.length;l++){const h=xn(s[l]);Hp(h)&&(o[h]=Pe)}else if(s)for(const l in s){const h=xn(l);if(Hp(h)){const d=s[l],p=o[h]=te(d)||ae(d)?{type:d}:Object.assign({},d);if(p){const g=zp(Boolean,p.type),w=zp(String,p.type);p[0]=g>-1,p[1]=w<0||g<w,(g>-1||ve(p,"default"))&&a.push(h)}}}const u=[o,a];return ke(t)&&i.set(t,u),u}function Hp(t){return t[0]!=="$"}function Wp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Gp(t,e){return Wp(t)===Wp(e)}function zp(t,e){return te(e)?e.findIndex(n=>Gp(n,t)):ae(e)&&Gp(e,t)?0:-1}const mv=t=>t[0]==="_"||t==="$stable",xd=t=>te(t)?t.map(gn):[gn(t)],t0=(t,e,n)=>{if(e._n)return e;const i=Iu((...r)=>xd(e(...r)),n);return i._c=!1,i},gv=(t,e,n)=>{const i=t._ctx;for(const r in t){if(mv(r))continue;const s=t[r];if(ae(s))e[r]=t0(r,s,i);else if(s!=null){const o=xd(s);e[r]=()=>o}}},yv=(t,e)=>{const n=xd(e);t.slots.default=()=>n},n0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),Dc(e,"_",n)):gv(e,t.slots={})}else t.slots={},e&&yv(t,e);Dc(t.slots,Su,1)},i0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Pe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(_t(r,e),!n&&a===1&&delete r._):(s=!e.$stable,gv(e,r)),o=e}else e&&(yv(t,e),o={default:1});if(s)for(const a in r)!mv(a)&&!(a in o)&&delete r[a]};function vv(){return{app:null,config:{isNativeTag:DE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let r0=0;function s0(t,e){return function(i,r=null){ae(i)||(i=Object.assign({},i)),r!=null&&!ke(r)&&(r=null);const s=vv(),o=new Set;let a=!1;const c=s.app={_uid:r0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:S0,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&ae(u.install)?(o.add(u),u.install(c,...l)):ae(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=st(i,r);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Cu(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}function fh(t,e,n,i,r=!1){if(te(t)){t.forEach((d,p)=>fh(d,e&&(te(e)?e[p]:e),n,i,r));return}if(yc(i)&&!r)return;const s=i.shapeFlag&4?Cu(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(it(u)?(l[u]=null,ve(h,u)&&(h[u]=null)):Ke(u)&&(u.value=null)),ae(c))yi(c,a,12,[o,l]);else{const d=it(c),p=Ke(c);if(d||p){const g=()=>{if(t.f){const w=d?ve(h,c)?h[c]:l[c]:c.value;r?te(w)&&md(w,s):te(w)?w.includes(s)||w.push(s):d?(l[c]=[s],ve(h,c)&&(h[c]=l[c])):(c.value=[s],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ve(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(l[t.k]=o))};o?(g.id=-1,Lt(g,n)):g()}}}const Lt=NT;function o0(t){return a0(t)}function a0(t,e){const n=LE();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=ln,insertStaticContent:g}=t,w=(f,m,I,b=null,S=null,P=null,B=!1,R=null,M=!!m.dynamicChildren)=>{if(f===m)return;f&&!Xi(f,m)&&(b=V(f),Mt(f,S,P,!0),f=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:k,ref:Z,shapeFlag:H}=m;switch(k){case Tu:C(f,m,I,b);break;case hn:D(f,m,I,b);break;case kl:f==null&&L(m,I,b,B);break;case Wt:j(f,m,I,b,S,P,B,R,M);break;default:H&1?K(f,m,I,b,S,P,B,R,M):H&6?Ae(f,m,I,b,S,P,B,R,M):(H&64||H&128)&&k.process(f,m,I,b,S,P,B,R,M,ye)}Z!=null&&S&&fh(Z,f&&f.ref,P,m||f,!m)},C=(f,m,I,b)=>{if(f==null)i(m.el=a(m.children),I,b);else{const S=m.el=f.el;m.children!==f.children&&u(S,m.children)}},D=(f,m,I,b)=>{f==null?i(m.el=c(m.children||""),I,b):m.el=f.el},L=(f,m,I,b)=>{[f.el,f.anchor]=g(f.children,m,I,b,f.el,f.anchor)},N=({el:f,anchor:m},I,b)=>{let S;for(;f&&f!==m;)S=d(f),i(f,I,b),f=S;i(m,I,b)},G=({el:f,anchor:m})=>{let I;for(;f&&f!==m;)I=d(f),r(f),f=I;r(m)},K=(f,m,I,b,S,P,B,R,M)=>{B=B||m.type==="svg",f==null?ne(m,I,b,S,P,B,R,M):ce(f,m,S,P,B,R,M)},ne=(f,m,I,b,S,P,B,R)=>{let M,k;const{type:Z,props:H,shapeFlag:ee,transition:re,dirs:he}=f;if(M=f.el=o(f.type,P,H&&H.is,H),ee&8?l(M,f.children):ee&16&&U(f.children,M,null,b,S,P&&Z!=="foreignObject",B,R),he&&qi(f,null,b,"created"),Y(M,f,f.scopeId,B,b),H){for(const Se in H)Se!=="value"&&!pc(Se)&&s(M,Se,null,H[Se],P,f.children,b,S,q);"value"in H&&s(M,"value",null,H.value),(k=H.onVnodeBeforeMount)&&mn(k,b,f)}he&&qi(f,null,b,"beforeMount");const xe=(!S||S&&!S.pendingBranch)&&re&&!re.persisted;xe&&re.beforeEnter(M),i(M,m,I),((k=H&&H.onVnodeMounted)||xe||he)&&Lt(()=>{k&&mn(k,b,f),xe&&re.enter(M),he&&qi(f,null,b,"mounted")},S)},Y=(f,m,I,b,S)=>{if(I&&p(f,I),b)for(let P=0;P<b.length;P++)p(f,b[P]);if(S){let P=S.subTree;if(m===P){const B=S.vnode;Y(f,B,B.scopeId,B.slotScopeIds,S.parent)}}},U=(f,m,I,b,S,P,B,R,M=0)=>{for(let k=M;k<f.length;k++){const Z=f[k]=R?ci(f[k]):gn(f[k]);w(null,Z,m,I,b,S,P,B,R)}},ce=(f,m,I,b,S,P,B)=>{const R=m.el=f.el;let{patchFlag:M,dynamicChildren:k,dirs:Z}=m;M|=f.patchFlag&16;const H=f.props||Pe,ee=m.props||Pe;let re;I&&ji(I,!1),(re=ee.onVnodeBeforeUpdate)&&mn(re,I,m,f),Z&&qi(m,f,I,"beforeUpdate"),I&&ji(I,!0);const he=S&&m.type!=="foreignObject";if(k?le(f.dynamicChildren,k,R,I,b,he,P):B||Te(f,m,R,null,I,b,he,P,!1),M>0){if(M&16)Re(R,m,H,ee,I,b,S);else if(M&2&&H.class!==ee.class&&s(R,"class",null,ee.class,S),M&4&&s(R,"style",H.style,ee.style,S),M&8){const xe=m.dynamicProps;for(let Se=0;Se<xe.length;Se++){const et=xe[Se],on=H[et],Kr=ee[et];(Kr!==on||et==="value")&&s(R,et,on,Kr,S,f.children,I,b,q)}}M&1&&f.children!==m.children&&l(R,m.children)}else!B&&k==null&&Re(R,m,H,ee,I,b,S);((re=ee.onVnodeUpdated)||Z)&&Lt(()=>{re&&mn(re,I,m,f),Z&&qi(m,f,I,"updated")},b)},le=(f,m,I,b,S,P,B)=>{for(let R=0;R<m.length;R++){const M=f[R],k=m[R],Z=M.el&&(M.type===Wt||!Xi(M,k)||M.shapeFlag&70)?h(M.el):I;w(M,k,Z,null,b,S,P,B,!0)}},Re=(f,m,I,b,S,P,B)=>{if(I!==b){if(I!==Pe)for(const R in I)!pc(R)&&!(R in b)&&s(f,R,I[R],null,B,m.children,S,P,q);for(const R in b){if(pc(R))continue;const M=b[R],k=I[R];M!==k&&R!=="value"&&s(f,R,k,M,B,m.children,S,P,q)}"value"in b&&s(f,"value",I.value,b.value)}},j=(f,m,I,b,S,P,B,R,M)=>{const k=m.el=f?f.el:a(""),Z=m.anchor=f?f.anchor:a("");let{patchFlag:H,dynamicChildren:ee,slotScopeIds:re}=m;re&&(R=R?R.concat(re):re),f==null?(i(k,I,b),i(Z,I,b),U(m.children,I,Z,S,P,B,R,M)):H>0&&H&64&&ee&&f.dynamicChildren?(le(f.dynamicChildren,ee,I,S,P,B,R),(m.key!=null||S&&m===S.subTree)&&wv(f,m,!0)):Te(f,m,I,Z,S,P,B,R,M)},Ae=(f,m,I,b,S,P,B,R,M)=>{m.slotScopeIds=R,f==null?m.shapeFlag&512?S.ctx.activate(m,I,b,B,M):Ve(m,I,b,S,P,B,M):ze(f,m,M)},Ve=(f,m,I,b,S,P,B)=>{const R=f.component=g0(f,b,S);if(bu(f)&&(R.ctx.renderer=ye),y0(R),R.asyncDep){if(S&&S.registerDep(R,Be),!f.el){const M=R.subTree=st(hn);D(null,M,m,I)}return}Be(R,f,m,I,S,P,B)},ze=(f,m,I)=>{const b=m.component=f.component;if(kT(f,m,I))if(b.asyncDep&&!b.asyncResolved){De(b,m,I);return}else b.next=m,bT(b.update),b.update();else m.el=f.el,b.vnode=m},Be=(f,m,I,b,S,P,B)=>{const R=()=>{if(f.isMounted){let{next:Z,bu:H,u:ee,parent:re,vnode:he}=f,xe=Z,Se;ji(f,!1),Z?(Z.el=he.el,De(f,Z,B)):Z=he,H&&mc(H),(Se=Z.props&&Z.props.onVnodeBeforeUpdate)&&mn(Se,re,Z,he),ji(f,!0);const et=Sl(f),on=f.subTree;f.subTree=et,w(on,et,h(on.el),V(on),f,S,P),Z.el=et.el,xe===null&&DT(f,et.el),ee&&Lt(ee,S),(Se=Z.props&&Z.props.onVnodeUpdated)&&Lt(()=>mn(Se,re,Z,he),S)}else{let Z;const{el:H,props:ee}=m,{bm:re,m:he,parent:xe}=f,Se=yc(m);if(ji(f,!1),re&&mc(re),!Se&&(Z=ee&&ee.onVnodeBeforeMount)&&mn(Z,xe,m),ji(f,!0),H&&ue){const et=()=>{f.subTree=Sl(f),ue(H,f.subTree,f,S,null)};Se?m.type.__asyncLoader().then(()=>!f.isUnmounted&&et()):et()}else{const et=f.subTree=Sl(f);w(null,et,I,b,f,S,P),m.el=et.el}if(he&&Lt(he,S),!Se&&(Z=ee&&ee.onVnodeMounted)){const et=m;Lt(()=>mn(Z,xe,et),S)}(m.shapeFlag&256||xe&&yc(xe.vnode)&&xe.vnode.shapeFlag&256)&&f.a&&Lt(f.a,S),f.isMounted=!0,m=I=b=null}},M=f.effect=new vd(R,()=>Ad(k),f.scope),k=f.update=()=>M.run();k.id=f.uid,ji(f,!0),k()},De=(f,m,I)=>{m.component=f;const b=f.vnode.props;f.vnode=m,f.next=null,e0(f,m.props,b,I),i0(f,m.children,I),Os(),Vp(),Ms()},Te=(f,m,I,b,S,P,B,R,M=!1)=>{const k=f&&f.children,Z=f?f.shapeFlag:0,H=m.children,{patchFlag:ee,shapeFlag:re}=m;if(ee>0){if(ee&128){$i(k,H,I,b,S,P,B,R,M);return}else if(ee&256){rn(k,H,I,b,S,P,B,R,M);return}}re&8?(Z&16&&q(k,S,P),H!==k&&l(I,H)):Z&16?re&16?$i(k,H,I,b,S,P,B,R,M):q(k,S,P,!0):(Z&8&&l(I,""),re&16&&U(H,I,b,S,P,B,R,M))},rn=(f,m,I,b,S,P,B,R,M)=>{f=f||is,m=m||is;const k=f.length,Z=m.length,H=Math.min(k,Z);let ee;for(ee=0;ee<H;ee++){const re=m[ee]=M?ci(m[ee]):gn(m[ee]);w(f[ee],re,I,null,S,P,B,R,M)}k>Z?q(f,S,P,!0,!1,H):U(m,I,b,S,P,B,R,M,H)},$i=(f,m,I,b,S,P,B,R,M)=>{let k=0;const Z=m.length;let H=f.length-1,ee=Z-1;for(;k<=H&&k<=ee;){const re=f[k],he=m[k]=M?ci(m[k]):gn(m[k]);if(Xi(re,he))w(re,he,I,null,S,P,B,R,M);else break;k++}for(;k<=H&&k<=ee;){const re=f[H],he=m[ee]=M?ci(m[ee]):gn(m[ee]);if(Xi(re,he))w(re,he,I,null,S,P,B,R,M);else break;H--,ee--}if(k>H){if(k<=ee){const re=ee+1,he=re<Z?m[re].el:b;for(;k<=ee;)w(null,m[k]=M?ci(m[k]):gn(m[k]),I,he,S,P,B,R,M),k++}}else if(k>ee)for(;k<=H;)Mt(f[k],S,P,!0),k++;else{const re=k,he=k,xe=new Map;for(k=he;k<=ee;k++){const Kt=m[k]=M?ci(m[k]):gn(m[k]);Kt.key!=null&&xe.set(Kt.key,k)}let Se,et=0;const on=ee-he+1;let Kr=!1,Ap=0;const to=new Array(on);for(k=0;k<on;k++)to[k]=0;for(k=re;k<=H;k++){const Kt=f[k];if(et>=on){Mt(Kt,S,P,!0);continue}let pn;if(Kt.key!=null)pn=xe.get(Kt.key);else for(Se=he;Se<=ee;Se++)if(to[Se-he]===0&&Xi(Kt,m[Se])){pn=Se;break}pn===void 0?Mt(Kt,S,P,!0):(to[pn-he]=k+1,pn>=Ap?Ap=pn:Kr=!0,w(Kt,m[pn],I,null,S,P,B,R,M),et++)}const kp=Kr?c0(to):is;for(Se=kp.length-1,k=on-1;k>=0;k--){const Kt=he+k,pn=m[Kt],Dp=Kt+1<Z?m[Kt+1].el:b;to[k]===0?w(null,pn,I,Dp,S,P,B,R,M):Kr&&(Se<0||k!==kp[Se]?sn(pn,I,Dp,2):Se--)}}},sn=(f,m,I,b,S=null)=>{const{el:P,type:B,transition:R,children:M,shapeFlag:k}=f;if(k&6){sn(f.component.subTree,m,I,b);return}if(k&128){f.suspense.move(m,I,b);return}if(k&64){B.move(f,m,I,ye);return}if(B===Wt){i(P,m,I);for(let H=0;H<M.length;H++)sn(M[H],m,I,b);i(f.anchor,m,I);return}if(B===kl){N(f,m,I);return}if(b!==2&&k&1&&R)if(b===0)R.beforeEnter(P),i(P,m,I),Lt(()=>R.enter(P),S);else{const{leave:H,delayLeave:ee,afterLeave:re}=R,he=()=>i(P,m,I),xe=()=>{H(P,()=>{he(),re&&re()})};ee?ee(P,he,xe):xe()}else i(P,m,I)},Mt=(f,m,I,b=!1,S=!1)=>{const{type:P,props:B,ref:R,children:M,dynamicChildren:k,shapeFlag:Z,patchFlag:H,dirs:ee}=f;if(R!=null&&fh(R,null,I,f,!0),Z&256){m.ctx.deactivate(f);return}const re=Z&1&&ee,he=!yc(f);let xe;if(he&&(xe=B&&B.onVnodeBeforeUnmount)&&mn(xe,m,f),Z&6)E(f.component,I,b);else{if(Z&128){f.suspense.unmount(I,b);return}re&&qi(f,null,m,"beforeUnmount"),Z&64?f.type.remove(f,m,I,S,ye,b):k&&(P!==Wt||H>0&&H&64)?q(k,m,I,!1,!0):(P===Wt&&H&384||!S&&Z&16)&&q(M,m,I),b&&jr(f)}(he&&(xe=B&&B.onVnodeUnmounted)||re)&&Lt(()=>{xe&&mn(xe,m,f),re&&qi(f,null,m,"unmounted")},I)},jr=f=>{const{type:m,el:I,anchor:b,transition:S}=f;if(m===Wt){Ya(I,b);return}if(m===kl){G(f);return}const P=()=>{r(I),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:B,delayLeave:R}=S,M=()=>B(I,P);R?R(f.el,P,M):M()}else P()},Ya=(f,m)=>{let I;for(;f!==m;)I=d(f),r(f),f=I;r(m)},E=(f,m,I)=>{const{bum:b,scope:S,update:P,subTree:B,um:R}=f;b&&mc(b),S.stop(),P&&(P.active=!1,Mt(B,f,m,I)),R&&Lt(R,m),Lt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},q=(f,m,I,b=!1,S=!1,P=0)=>{for(let B=P;B<f.length;B++)Mt(f[B],m,I,b,S)},V=f=>f.shapeFlag&6?V(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),X=(f,m,I)=>{f==null?m._vnode&&Mt(m._vnode,null,null,!0):w(m._vnode||null,f,m,null,null,null,I),Vp(),Jy(),m._vnode=f},ye={p:w,um:Mt,m:sn,r:jr,mt:Ve,mc:U,pc:Te,pbc:le,n:V,o:t};let $e,ue;return e&&([$e,ue]=e(ye)),{render:X,hydrate:$e,createApp:s0(X,$e)}}function ji({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wv(t,e,n=!1){const i=t.children,r=e.children;if(te(i)&&te(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=ci(r[s]),a.el=o.el),n||wv(o,a)),a.type===Tu&&(a.el=o.el)}}function c0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const u0=t=>t.__isTeleport,Wt=Symbol(void 0),Tu=Symbol(void 0),hn=Symbol(void 0),kl=Symbol(void 0),So=[];let cn=null;function fe(t=!1){So.push(cn=t?null:[])}function l0(){So.pop(),cn=So[So.length-1]||null}let Ko=1;function Qp(t){Ko+=t}function _v(t){return t.dynamicChildren=Ko>0?cn||is:null,l0(),Ko>0&&cn&&cn.push(t),t}function Ie(t,e,n,i,r,s){return _v(y(t,e,n,i,r,s,!0))}function Ho(t,e,n,i,r){return _v(st(t,e,n,i,r,!0))}function ph(t){return t?t.__v_isVNode===!0:!1}function Xi(t,e){return t.type===e.type&&t.key===e.key}const Su="__vInternal",Iv=({key:t})=>t??null,vc=({ref:t,ref_key:e,ref_for:n})=>t!=null?it(t)||Ke(t)||ae(t)?{i:Qt,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,i=0,r=null,s=t===Wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Iv(e),ref:e&&vc(e),scopeId:_u,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return a?(Nd(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=it(n)?8:16),Ko>0&&!o&&cn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&cn.push(c),c}const st=h0;function h0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===HT)&&(t=hn),ph(t)){const a=Ii(t,e,!0);return n&&Nd(a,n),Ko>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag|=-2,a}if(b0(t)&&(t=t.__vccOpts),e){e=d0(e);let{class:a,style:c}=e;a&&!it(a)&&(e.class=Ia(a)),ke(c)&&(jy(c)&&!te(c)&&(c=_t({},c)),e.style=fd(c))}const o=it(t)?1:xT(t)?128:u0(t)?64:ke(t)?4:ae(t)?2:0;return y(t,e,n,i,r,o,s,!0)}function d0(t){return t?jy(t)||Su in t?_t({},t):t:null}function Ii(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?f0(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Iv(a),ref:e&&e.ref?n&&r?te(r)?r.concat(vc(e)):[r,vc(e)]:vc(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ii(t.ssContent),ssFallback:t.ssFallback&&Ii(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Wo(t=" ",e=0){return st(Tu,null,t,e)}function St(t="",e=!1){return e?(fe(),Ho(hn,null,t)):st(hn,null,t)}function gn(t){return t==null||typeof t=="boolean"?st(hn):te(t)?st(Wt,null,t.slice()):typeof t=="object"?ci(t):st(Tu,null,String(t))}function ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ii(t)}function Nd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(te(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Su in e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),i&64?(n=16,e=[Wo(e)]):n=8);t.children=e,t.shapeFlag|=n}function f0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ia([e.class,i.class]));else if(r==="style")e.style=fd([e.style,i.style]);else if(fu(r)){const s=e[r],o=i[r];o&&s!==o&&!(te(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function mn(t,e,n,i=null){tn(t,e,7,[n,i])}const p0=vv();let m0=0;function g0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||p0,s={uid:m0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Dy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pv(i,r),emitsOptions:ev(i,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:i.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ST.bind(null,s),t.ce&&t.ce(s),s}let Qe=null;const bv=()=>Qe||Qt,ps=t=>{Qe=t,t.scope.on()},fr=()=>{Qe&&Qe.scope.off(),Qe=null};function Ev(t){return t.vnode.shapeFlag&4}let Go=!1;function y0(t,e=!1){Go=e;const{props:n,children:i}=t.vnode,r=Ev(t);ZT(t,n,r,e),n0(t,i);const s=r?v0(t,e):void 0;return Go=!1,s}function v0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fs(new Proxy(t.ctx,GT));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?_0(t):null;ps(t),Os();const s=yi(i,t,0,[t.props,r]);if(Ms(),fr(),Cy(s)){if(s.then(fr,fr),e)return s.then(o=>{Yp(t,o,e)}).catch(o=>{vu(o,t,0)});t.asyncDep=s}else Yp(t,s,e)}else Tv(t,e)}function Yp(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Gy(e)),Tv(t,n)}let Xp;function Tv(t,e,n){const i=t.type;if(!t.render){if(!e&&Xp&&!i.render){const r=i.template||Dd(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,u=_t(_t({isCustomElement:s,delimiters:a},o),c);i.render=Xp(r,u)}}t.render=i.render||ln}ps(t),Os(),zT(t),Ms(),fr()}function w0(t){return new Proxy(t.attrs,{get(e,n){return qt(t,"get","$attrs"),e[n]}})}function _0(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=w0(t))},slots:t.slots,emit:t.emit,expose:e}}function Cu(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Gy(fs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in To)return To[n](t)},has(e,n){return n in e||n in To}}))}function I0(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function b0(t){return ae(t)&&"__vccOpts"in t}const zt=(t,e)=>wT(t,e,Go);function Rd(t,e,n){const i=arguments.length;return i===2?ke(e)&&!te(e)?ph(e)?st(t,null,[e]):st(t,e):st(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ph(n)&&(n=[n]),st(t,e,n))}const E0=Symbol(""),T0=()=>Cn(E0),S0="3.2.47",C0="http://www.w3.org/2000/svg",Ji=typeof document<"u"?document:null,Jp=Ji&&Ji.createElement("template"),A0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?Ji.createElementNS(C0,t):Ji.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ji.createTextNode(t),createComment:t=>Ji.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ji.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Jp.innerHTML=i?`<svg>${t}</svg>`:t;const a=Jp.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function k0(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function D0(t,e,n){const i=t.style,r=it(n);if(n&&!r){if(e&&!it(e))for(const s in e)n[s]==null&&mh(i,s,"");for(const s in n)mh(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const Zp=/\s*!important$/;function mh(t,e,n){if(te(n))n.forEach(i=>mh(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=x0(t,e);Zp.test(n)?t.setProperty(Ps(i),n.replace(Zp,""),"important"):t[i]=n}}const em=["Webkit","Moz","ms"],Dl={};function x0(t,e){const n=Dl[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return Dl[e]=i;i=gu(i);for(let r=0;r<em.length;r++){const s=em[r]+i;if(s in t)return Dl[e]=s}return e}const tm="http://www.w3.org/1999/xlink";function N0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tm,e.slice(6,e.length)):t.setAttributeNS(tm,e,n);else{const s=CE(e);n==null||s&&!Ty(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function R0(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Ty(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Zi(t,e,n,i){t.addEventListener(e,n,i)}function P0(t,e,n,i){t.removeEventListener(e,n,i)}function O0(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=M0(e);if(i){const u=s[e]=U0(i,r);Zi(t,a,u,c)}else o&&(P0(t,a,o,c),s[e]=void 0)}}const nm=/(?:Once|Passive|Capture)$/;function M0(t){let e;if(nm.test(t)){e={};let i;for(;i=t.match(nm);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let xl=0;const L0=Promise.resolve(),F0=()=>xl||(L0.then(()=>xl=0),xl=Date.now());function U0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;tn(V0(i,n.value),e,5,[i])};return n.value=t,n.attached=F0(),n}function V0(t,e){if(te(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const im=/^on[a-z]/,B0=(t,e,n,i,r=!1,s,o,a,c)=>{e==="class"?k0(t,i,r):e==="style"?D0(t,n,i):fu(e)?pd(e)||O0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$0(t,e,i,r))?R0(t,e,i,s,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),N0(t,e,i,r))};function $0(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&im.test(e)&&ae(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||im.test(e)&&it(n)?!1:e in t}const ti="transition",no="animation",Pd=(t,{slots:e})=>Rd(iv,q0(t),e);Pd.displayName="Transition";const Sv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pd.props=_t({},iv.props,Sv);const Ki=(t,e=[])=>{te(t)?t.forEach(n=>n(...e)):t&&t(...e)},rm=t=>t?te(t)?t.some(e=>e.length>1):t.length>1:!1;function q0(t){const e={};for(const j in t)j in Sv||(e[j]=t[j]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=j0(r),w=g&&g[0],C=g&&g[1],{onBeforeEnter:D,onEnter:L,onEnterCancelled:N,onLeave:G,onLeaveCancelled:K,onBeforeAppear:ne=D,onAppear:Y=L,onAppearCancelled:U=N}=e,ce=(j,Ae,Ve)=>{Hi(j,Ae?l:a),Hi(j,Ae?u:o),Ve&&Ve()},le=(j,Ae)=>{j._isLeaving=!1,Hi(j,h),Hi(j,p),Hi(j,d),Ae&&Ae()},Re=j=>(Ae,Ve)=>{const ze=j?Y:L,Be=()=>ce(Ae,j,Ve);Ki(ze,[Ae,Be]),sm(()=>{Hi(Ae,j?c:s),ni(Ae,j?l:a),rm(ze)||om(Ae,i,w,Be)})};return _t(e,{onBeforeEnter(j){Ki(D,[j]),ni(j,s),ni(j,o)},onBeforeAppear(j){Ki(ne,[j]),ni(j,c),ni(j,u)},onEnter:Re(!1),onAppear:Re(!0),onLeave(j,Ae){j._isLeaving=!0;const Ve=()=>le(j,Ae);ni(j,h),W0(),ni(j,d),sm(()=>{j._isLeaving&&(Hi(j,h),ni(j,p),rm(G)||om(j,i,C,Ve))}),Ki(G,[j,Ve])},onEnterCancelled(j){ce(j,!1),Ki(N,[j])},onAppearCancelled(j){ce(j,!0),Ki(U,[j])},onLeaveCancelled(j){le(j),Ki(K,[j])}})}function j0(t){if(t==null)return null;if(ke(t))return[Nl(t.enter),Nl(t.leave)];{const e=Nl(t);return[e,e]}}function Nl(t){return ME(t)}function ni(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Hi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function sm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let K0=0;function om(t,e,n,i){const r=t._endId=++K0,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=H0(t,e);if(!o)return i();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function H0(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${ti}Delay`),s=i(`${ti}Duration`),o=am(r,s),a=i(`${no}Delay`),c=i(`${no}Duration`),u=am(a,c);let l=null,h=0,d=0;e===ti?o>0&&(l=ti,h=o,d=s.length):e===no?u>0&&(l=no,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ti:no:null,d=l?l===ti?s.length:c.length:0);const p=l===ti&&/\b(transform|all)(,|$)/.test(i(`${ti}Property`).toString());return{type:l,timeout:h,propCount:d,hasTransform:p}}function am(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>cm(n)+cm(t[i])))}function cm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function W0(){return document.body.offsetHeight}const Mc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return te(e)?n=>mc(e,n):e};function G0(t){t.target.composing=!0}function um(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Tt={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t._assign=Mc(r);const s=i||r.props&&r.props.type==="number";Zi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=xc(a)),t._assign(a)}),n&&Zi(t,"change",()=>{t.value=t.value.trim()}),e||(Zi(t,"compositionstart",G0),Zi(t,"compositionend",um),Zi(t,"change",um))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:r}},s){if(t._assign=Mc(s),t.composing||document.activeElement===t&&t.type!=="range"&&(n||i&&t.value.trim()===e||(r||t.type==="number")&&xc(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},z0={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const r=pu(e);Zi(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?xc(Lc(o)):Lc(o));t._assign(t.multiple?r?new Set(s):s:s[0])}),t._assign=Mc(i)},mounted(t,{value:e}){lm(t,e)},beforeUpdate(t,e,n){t._assign=Mc(n)},updated(t,{value:e}){lm(t,e)}};function lm(t,e){const n=t.multiple;if(!(n&&!te(e)&&!pu(e))){for(let i=0,r=t.options.length;i<r;i++){const s=t.options[i],o=Lc(s);if(n)te(e)?s.selected=kE(e,o)>-1:s.selected=e.has(o);else if(du(Lc(s),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lc(t){return"_value"in t?t._value:t.value}const Q0=["ctrl","shift","alt","meta"],Y0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Q0.some(n=>t[`${n}Key`]&&!e.includes(n))},X0=(t,e)=>(n,...i)=>{for(let r=0;r<e.length;r++){const s=Y0[e[r]];if(s&&s(n,e))return}return t(n,...i)},gh={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):io(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),io(t,!0),i.enter(t)):i.leave(t,()=>{io(t,!1)}):io(t,e))},beforeUnmount(t,{value:e}){io(t,e)}};function io(t,e){t.style.display=e?t._vod:"none"}const J0=_t({patchProp:B0},A0);let hm;function Z0(){return hm||(hm=o0(J0))}const eS=(...t)=>{const e=Z0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=tS(i);if(!r)return;const s=e._component;!ae(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function tS(t){return it(t)?document.querySelector(t):t}var nS=!1;/*!
  * pinia v2.0.30
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Cv;const Au=t=>Cv=t,Av=Symbol();function yh(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Co;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Co||(Co={}));function iS(){const t=xy(!0),e=t.run(()=>Td({}));let n=[],i=[];const r=fs({install(s){Au(r),r._a=s,s.provide(Av,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!nS?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const kv=()=>{};function dm(t,e,n,i=kv){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Ny()&&UE(r),r}function Hr(t,...e){t.slice().forEach(n=>{n(...e)})}function vh(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];yh(r)&&yh(i)&&t.hasOwnProperty(n)&&!Ke(i)&&!Bn(i)?t[n]=vh(r,i):t[n]=i}return t}const rS=Symbol();function sS(t){return!yh(t)||!t.hasOwnProperty(rS)}const{assign:ui}=Object;function oS(t){return!!(Ke(t)&&t.effect)}function aS(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=r?r():{});const l=gT(n.state.value[t]);return ui(l,s,Object.keys(o||{}).reduce((h,d)=>(h[d]=fs(zt(()=>{Au(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Dv(t,u,e,n,i,!0),c.$reset=function(){const h=r?r():{};this.$patch(d=>{ui(d,h)})},c}function Dv(t,e,n={},i,r,s){let o;const a=ui({actions:{}},n),c={deep:!0};let u,l,h=fs([]),d=fs([]),p;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Td({});let w;function C(Y){let U;u=l=!1,typeof Y=="function"?(Y(i.state.value[t]),U={type:Co.patchFunction,storeId:t,events:p}):(vh(i.state.value[t],Y),U={type:Co.patchObject,payload:Y,storeId:t,events:p});const ce=w=Symbol();Cd().then(()=>{w===ce&&(u=!0)}),l=!0,Hr(h,U,i.state.value[t])}const D=kv;function L(){o.stop(),h=[],d=[],i._s.delete(t)}function N(Y,U){return function(){Au(i);const ce=Array.from(arguments),le=[],Re=[];function j(ze){le.push(ze)}function Ae(ze){Re.push(ze)}Hr(d,{args:ce,name:Y,store:K,after:j,onError:Ae});let Ve;try{Ve=U.apply(this&&this.$id===t?this:K,ce)}catch(ze){throw Hr(Re,ze),ze}return Ve instanceof Promise?Ve.then(ze=>(Hr(le,ze),ze)).catch(ze=>(Hr(Re,ze),Promise.reject(ze))):(Hr(le,Ve),Ve)}}const G={_p:i,$id:t,$onAction:dm.bind(null,d),$patch:C,$reset:D,$subscribe(Y,U={}){const ce=dm(h,Y,U.detached,()=>le()),le=o.run(()=>Eo(()=>i.state.value[t],Re=>{(U.flush==="sync"?l:u)&&Y({storeId:t,type:Co.direct,events:p},Re)},ui({},c,U)));return ce},$dispose:L},K=Ls(G);i._s.set(t,K);const ne=i._e.run(()=>(o=xy(),o.run(()=>e())));for(const Y in ne){const U=ne[Y];if(Ke(U)&&!oS(U)||Bn(U))s||(g&&sS(U)&&(Ke(U)?U.value=g[Y]:vh(U,g[Y])),i.state.value[t][Y]=U);else if(typeof U=="function"){const ce=N(Y,U);ne[Y]=ce,a.actions[Y]=U}}return ui(K,ne),ui(pe(K),ne),Object.defineProperty(K,"$state",{get:()=>i.state.value[t],set:Y=>{C(U=>{ui(U,Y)})}}),i._p.forEach(Y=>{ui(K,o.run(()=>Y({store:K,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(K.$state,g),u=!0,l=!0,K}function cS(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,c){const u=bv();return a=a||u&&Cn(Av,null),a&&Au(a),a=Cv,a._s.has(i)||(s?Dv(i,e,r,a):aS(i,r,a)),a._s.get(i)}return o.$id=i,o}function uS(t){{t=pe(t);const e={};for(const n in t){const i=t[n];(Ke(i)||Bn(i))&&(e[n]=zy(t,n))}return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},lS=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),i.push(n[l],n[h],n[d],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(i.push(d),u!==64){const p=a<<4&240|u>>2;if(i.push(p),h!==64){const g=u<<6&192|h;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},hS=function(t){const e=xv(t);return Nv.encodeByteArray(e,!0)},Fc=function(t){return hS(t).replace(/\./g,"")},Rv=function(t){try{return Nv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Uc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dS(n)||(t[n]=Uc(t[n],e[n]));return t}function dS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=()=>fS().__FIREBASE_DEFAULTS__,mS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},gS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rv(t[1]);return e&&JSON.parse(e)},Od=()=>{try{return pS()||mS()||gS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yS=()=>{var t;return(t=Od())===null||t===void 0?void 0:t.config},vS=t=>{var e;return(e=Od())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Fc(JSON.stringify(n)),Fc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function IS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function Md(){var t;const e=(t=Od())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bS(){return typeof self=="object"&&self.self===self}function Pv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ov(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ES(){return!Md()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function TS(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="FirebaseError";class Pt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=SS,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?CS(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pt(r,a,i)}}function CS(t,e){return t.replace(AS,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const AS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wh(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(pm(s)&&pm(o)){if(!wh(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function pm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function es(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function yo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Mv(t,e){const n=new DS(t,e);return n.subscribe.bind(n)}class DS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");xS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Rl),r.error===void 0&&(r.error=Rl),r.complete===void 0&&(r.complete=Rl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new wS;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:zi})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=zi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zi){return this.instances.has(e)}getOptions(e=zi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zi){return this.component?this.component.multipleInstances?e:zi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(t){return t===zi?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new NS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=[];var we;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(we||(we={}));const Lv={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},MS=we.INFO,LS={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},FS=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=LS[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=MS,this._logHandler=FS,this._userLogHandler=null,Fd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}function US(t){Fd.forEach(e=>{e.setLogLevel(t)})}function VS(t,e){for(const n of Fd){let i=null;e&&e.level&&(i=Lv[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");s>=(i??r.logLevel)&&t({level:we[s].toLowerCase(),message:a,args:o,type:r.name})}}}const BS=(t,e)=>e.some(n=>t instanceof n);let mm,gm;function $S(){return mm||(mm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qS(){return gm||(gm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,_h=new WeakMap,Uv=new WeakMap,Pl=new WeakMap,Ud=new WeakMap;function jS(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vi(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fv.set(n,t)}).catch(()=>{}),Ud.set(e,t),e}function KS(t){if(_h.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_h.set(t,e)}let Ih={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HS(t){Ih=t(Ih)}function WS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ol(this),e,...n);return Uv.set(i,e.sort?e.sort():[e]),vi(i)}:qS().includes(t)?function(...e){return t.apply(Ol(this),e),vi(Fv.get(this))}:function(...e){return vi(t.apply(Ol(this),e))}}function GS(t){return typeof t=="function"?WS(t):(t instanceof IDBTransaction&&KS(t),BS(t,$S())?new Proxy(t,Ih):t)}function vi(t){if(t instanceof IDBRequest)return jS(t);if(Pl.has(t))return Pl.get(t);const e=GS(t);return e!==t&&(Pl.set(t,e),Ud.set(e,t)),e}const Ol=t=>Ud.get(t);function zS(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=vi(o);return i&&o.addEventListener("upgradeneeded",c=>{i(vi(o.result),c.oldVersion,c.newVersion,vi(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const QS=["get","getKey","getAll","getAllKeys","count"],YS=["put","add","delete","clear"],Ml=new Map;function ym(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ml.get(e))return Ml.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=YS.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||QS.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ml.set(e,s),s}HS(t=>({...t,get:(e,n,i)=>ym(e,n)||t.get(e,n,i),has:(e,n)=>!!ym(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JS(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function JS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",vm="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new ku("@firebase/app"),ZS="@firebase/app-compat",eC="@firebase/analytics-compat",tC="@firebase/analytics",nC="@firebase/app-check-compat",iC="@firebase/app-check",rC="@firebase/auth",sC="@firebase/auth-compat",oC="@firebase/database",aC="@firebase/database-compat",cC="@firebase/functions",uC="@firebase/functions-compat",lC="@firebase/installations",hC="@firebase/installations-compat",dC="@firebase/messaging",fC="@firebase/messaging-compat",pC="@firebase/performance",mC="@firebase/performance-compat",gC="@firebase/remote-config",yC="@firebase/remote-config-compat",vC="@firebase/storage",wC="@firebase/storage-compat",_C="@firebase/firestore",IC="@firebase/firestore-compat",bC="firebase",EC="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="[DEFAULT]",TC={[bh]:"fire-core",[ZS]:"fire-core-compat",[tC]:"fire-analytics",[eC]:"fire-analytics-compat",[iC]:"fire-app-check",[nC]:"fire-app-check-compat",[rC]:"fire-auth",[sC]:"fire-auth-compat",[oC]:"fire-rtdb",[aC]:"fire-rtdb-compat",[cC]:"fire-fn",[uC]:"fire-fn-compat",[lC]:"fire-iid",[hC]:"fire-iid-compat",[dC]:"fire-fcm",[fC]:"fire-fcm-compat",[pC]:"fire-perf",[mC]:"fire-perf-compat",[gC]:"fire-rc",[yC]:"fire-rc-compat",[vC]:"fire-gcs",[wC]:"fire-gcs-compat",[_C]:"fire-fst",[IC]:"fire-fst-compat","fire-js":"fire-js",[bC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map,Qo=new Map;function Vc(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vv(t,e){t.container.addOrOverwriteComponent(e)}function Ti(t){const e=t.name;if(Qo.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Qo.set(e,t);for(const n of Ei.values())Vc(n,t);return!0}function Bv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function SC(t,e,n=bi){Bv(t,e).clearInstance(n)}function CC(){Qo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Pr("app","Firebase",AC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kC=class{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=EC;function Vd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bi,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw $n.create("bad-app-name",{appName:String(r)});if(n||(n=yS()),!n)throw $n.create("no-options");const s=Ei.get(r);if(s){if(wh(n,s.options)&&wh(i,s.config))return s;throw $n.create("duplicate-app",{appName:r})}const o=new OS(r);for(const c of Qo.values())o.addComponent(c);const a=new kC(n,i,o);return Ei.set(r,a),a}function DC(t=bi){const e=Ei.get(t);if(!e&&t===bi)return Vd();if(!e)throw $n.create("no-app",{appName:t});return e}function xC(){return Array.from(Ei.values())}async function $v(t){const e=t.name;Ei.has(e)&&(Ei.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function An(t,e,n){var i;let r=(i=TC[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(a.join(" "));return}Ti(new Nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function qv(t,e){if(t!==null&&typeof t!="function")throw $n.create("invalid-log-argument");VS(t,e)}function jv(t){US(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="firebase-heartbeat-database",RC=1,Yo="firebase-heartbeat-store";let Ll=null;function Kv(){return Ll||(Ll=zS(NC,RC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yo)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Ll}async function PC(t){try{return(await Kv()).transaction(Yo).objectStore(Yo).get(Hv(t))}catch(e){if(e instanceof Pt)wr.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function wm(t,e){try{const i=(await Kv()).transaction(Yo,"readwrite");return await i.objectStore(Yo).put(e,Hv(t)),i.done}catch(n){if(n instanceof Pt)wr.warn(n.message);else{const i=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(i.message)}}}function Hv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1024,MC=30*24*60*60*1e3;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UC(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=_m();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=MC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_m(),{heartbeatsToSend:n,unsentEntries:i}=FC(this._heartbeatsCache.heartbeats),r=Fc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _m(){return new Date().toISOString().substring(0,10)}function FC(t,e=OC){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Im(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Im(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class UC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?TS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await PC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Im(t){return Fc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t){Ti(new Nn("platform-logger",e=>new XS(e),"PRIVATE")),Ti(new Nn("heartbeat",e=>new LC(e),"PRIVATE")),An(bh,vm,t),An(bh,vm,"esm2017"),An("fire-js","")}VC("");const BC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pt,SDK_VERSION:Or,_DEFAULT_ENTRY_NAME:bi,_addComponent:Vc,_addOrOverwriteComponent:Vv,_apps:Ei,_clearComponents:CC,_components:Qo,_getProvider:Bv,_registerComponent:Ti,_removeServiceInstance:SC,deleteApp:$v,getApp:DC,getApps:xC,initializeApp:Vd,onLog:qv,registerVersion:An,setLogLevel:jv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this._delegate=e,this.firebase=n,Vc(e,new Nn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),$v(this._delegate)))}_getService(e,n=bi){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=bi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Vc(this._delegate,e)}_addOrOverwriteComponent(e){Vv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},bm=new Pr("app-compat","Firebase",qC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:An,setLogLevel:jv,onLog:qv,apps:null,SDK_VERSION:Or,INTERNAL:{registerComponent:a,removeApp:i,useAsService:c,modularAPIs:BC}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(u){delete e[u]}function r(u){if(u=u||bi,!fm(e,u))throw bm.create("no-app",{appName:u});return e[u]}r.App=t;function s(u,l={}){const h=Vd(u,l);if(fm(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ti(u)&&u.type==="PUBLIC"){const d=(p=r())=>{if(typeof p[h]!="function")throw bm.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Uc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(){const t=jC($C);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Wv,extendNamespace:e,createSubscribe:Mv,ErrorFactory:Pr,deepExtend:Uc});function e(n){Uc(t,n)}return t}const KC=Wv();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new ku("@firebase/app-compat"),HC="@firebase/app-compat",WC="0.2.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){An(HC,WC,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(bS()&&self.firebase!==void 0){Em.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Em.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Bs=KC;GC();var zC="firebase",QC="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bs.registerVersion(zC,QC,"app-compat");var YC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W,Bd=Bd||{},ie=YC||self;function Bc(){}function Du(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ea(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function XC(t){return Object.prototype.hasOwnProperty.call(t,Fl)&&t[Fl]||(t[Fl]=++JC)}var Fl="closure_uid_"+(1e9*Math.random()>>>0),JC=0;function ZC(t,e,n){return t.call.apply(t.bind,arguments)}function eA(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function At(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?At=ZC:At=eA,At.apply(null,arguments)}function ic(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function Et(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Pi(){this.s=this.s,this.o=this.o}var tA=0;Pi.prototype.s=!1;Pi.prototype.na=function(){!this.s&&(this.s=!0,this.M(),tA!=0)&&XC(this)};Pi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Gv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $d(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Tm(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Du(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function kt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}kt.prototype.h=function(){this.defaultPrevented=!0};var nA=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",Bc,e),ie.removeEventListener("test",Bc,e)}catch{}return t}();function $c(t){return/^[\s\xa0]*$/.test(t)}var Sm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ul(t,e){return t<e?-1:t>e?1:0}function xu(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return xu().indexOf(t)!=-1}function qd(t){return qd[" "](t),t}qd[" "]=Bc;function iA(t){var e=oA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var rA=vn("Opera"),ms=vn("Trident")||vn("MSIE"),zv=vn("Edge"),Eh=zv||ms,Qv=vn("Gecko")&&!(xu().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),sA=xu().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function Yv(){var t=ie.document;return t?t.documentMode:void 0}var qc;e:{var Vl="",Bl=function(){var t=xu();if(Qv)return/rv:([^\);]+)(\)|;)/.exec(t);if(zv)return/Edge\/([\d\.]+)/.exec(t);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(sA)return/WebKit\/(\S+)/.exec(t);if(rA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Bl&&(Vl=Bl?Bl[1]:""),ms){var $l=Yv();if($l!=null&&$l>parseFloat(Vl)){qc=String($l);break e}}qc=Vl}var oA={};function aA(){return iA(function(){let t=0;const e=Sm(String(qc)).split("."),n=Sm("9").split("."),i=Math.max(e.length,n.length);for(let o=0;t==0&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r[0].length==0&&s[0].length==0)break;t=Ul(r[1].length==0?0:parseInt(r[1],10),s[1].length==0?0:parseInt(s[1],10))||Ul(r[2].length==0,s[2].length==0)||Ul(r[2],s[2]),r=r[3],s=s[3]}while(t==0)}return 0<=t})}var Th;if(ie.document&&ms){var Cm=Yv();Th=Cm||parseInt(qc,10)||void 0}else Th=void 0;var cA=Th;function Xo(t,e){if(kt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qv){e:{try{qd(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xo.X.h.call(this)}}Et(Xo,kt);var uA={2:"touch",3:"pen",4:"mouse"};Xo.prototype.h=function(){Xo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ta="closure_listenable_"+(1e6*Math.random()|0),lA=0;function hA(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++lA,this.ba=this.ea=!1}function Nu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function jd(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Xv(t){const e={};for(const n in t)e[n]=t[n];return e}const Am="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Jv(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Am.length;s++)n=Am[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ru(t){this.src=t,this.g={},this.h=0}Ru.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ch(t,e,i,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new hA(e,this.src,s,!!i,r),e.ea=n,t.push(e)),e};function Sh(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=Gv(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Nu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ch(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}var Kd="closure_lm_"+(1e6*Math.random()|0),ql={};function Zv(t,e,n,i,r){if(i&&i.once)return tw(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Zv(t,e[s],n,i,r);return null}return n=Gd(n),t&&t[Ta]?t.N(e,n,Ea(i)?!!i.capture:!!i,r):ew(t,e,n,!1,i,r)}function ew(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ea(r)?!!r.capture:!!r,a=Wd(t);if(a||(t[Kd]=a=new Ru(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=dA(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(iw(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dA(){function t(n){return e.call(t.src,t.listener,n)}const e=fA;return t}function tw(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)tw(t,e[s],n,i,r);return null}return n=Gd(n),t&&t[Ta]?t.O(e,n,Ea(i)?!!i.capture:!!i,r):ew(t,e,n,!0,i,r)}function nw(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)nw(t,e[s],n,i,r);else i=Ea(i)?!!i.capture:!!i,n=Gd(n),t&&t[Ta]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ch(s,n,i,r),-1<n&&(Nu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Wd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ch(e,n,i,r)),(n=-1<t?e[t]:null)&&Hd(n))}function Hd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ta])Sh(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(iw(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Wd(e))?(Sh(n,t),n.h==0&&(n.src=null,e[Kd]=null)):Nu(t)}}}function iw(t){return t in ql?ql[t]:ql[t]="on"+t}function fA(t,e){if(t.ba)t=!0;else{e=new Xo(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&Hd(t),t=n.call(i,e)}return t}function Wd(t){return t=t[Kd],t instanceof Ru?t:null}var jl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Gd(t){return typeof t=="function"?t:(t[jl]||(t[jl]=function(e){return t.handleEvent(e)}),t[jl])}function ht(){Pi.call(this),this.i=new Ru(this),this.P=this,this.I=null}Et(ht,Pi);ht.prototype[Ta]=!0;ht.prototype.removeEventListener=function(t,e,n,i){nw(this,t,e,n,i)};function vt(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,typeof e=="string")e=new kt(e,t);else if(e instanceof kt)e.target=e.target||t;else{var r=e;e=new kt(i,t),Jv(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=rc(o,i,!0,e)&&r}if(o=e.g=t,r=rc(o,i,!0,e)&&r,r=rc(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=rc(o,i,!1,e)&&r}ht.prototype.M=function(){if(ht.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Nu(n[i]);delete t.g[e],t.h--}}this.I=null};ht.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};ht.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function rc(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Sh(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var zd=ie.JSON.stringify;function pA(){var t=ow;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class mA{constructor(){this.h=this.g=null}add(e,n){const i=rw.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var rw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new gA,t=>t.reset());class gA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function yA(t){ie.setTimeout(()=>{throw t},0)}function sw(t,e){Ah||vA(),kh||(Ah(),kh=!0),ow.add(t,e)}var Ah;function vA(){var t=ie.Promise.resolve(void 0);Ah=function(){t.then(wA)}}var kh=!1,ow=new mA;function wA(){for(var t;t=pA();){try{t.h.call(t.g)}catch(n){yA(n)}var e=rw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}kh=!1}function Pu(t,e){ht.call(this),this.h=t||1,this.g=e||ie,this.j=At(this.lb,this),this.l=Date.now()}Et(Pu,ht);W=Pu.prototype;W.ca=!1;W.R=null;W.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),vt(this,"tick"),this.ca&&(Qd(this),this.start()))}};W.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}W.M=function(){Pu.X.M.call(this),Qd(this),delete this.g};function Yd(t,e,n){if(typeof t=="function")n&&(t=At(t,n));else if(t&&typeof t.handleEvent=="function")t=At(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function aw(t){t.g=Yd(()=>{t.g=null,t.i&&(t.i=!1,aw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _A extends Pi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:aw(this)}M(){super.M(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jo(t){Pi.call(this),this.h=t,this.g={}}Et(Jo,Pi);var km=[];function cw(t,e,n,i){Array.isArray(n)||(n&&(km[0]=n.toString()),n=km);for(var r=0;r<n.length;r++){var s=Zv(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function uw(t){jd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Hd(e)},t),t.g={}}Jo.prototype.M=function(){Jo.X.M.call(this),uw(this)};Jo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ou(){this.g=!0}Ou.prototype.Aa=function(){this.g=!1};function IA(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function bA(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function ts(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+TA(t,n)+(i?" "+i:"")})}function EA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ou.prototype.info=function(){};function TA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zd(n)}catch{return e}}var Mr={},Dm=null;function Mu(){return Dm=Dm||new ht}Mr.Pa="serverreachability";function lw(t){kt.call(this,Mr.Pa,t)}Et(lw,kt);function Zo(t){const e=Mu();vt(e,new lw(e))}Mr.STAT_EVENT="statevent";function hw(t,e){kt.call(this,Mr.STAT_EVENT,t),this.stat=e}Et(hw,kt);function Rt(t){const e=Mu();vt(e,new hw(e,t))}Mr.Qa="timingevent";function dw(t,e){kt.call(this,Mr.Qa,t),this.size=e}Et(dw,kt);function Sa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var Lu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},fw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Xd(){}Xd.prototype.h=null;function xm(t){return t.h||(t.h=t.i())}function pw(){}var Ca={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Jd(){kt.call(this,"d")}Et(Jd,kt);function Zd(){kt.call(this,"c")}Et(Zd,kt);var Dh;function Fu(){}Et(Fu,Xd);Fu.prototype.g=function(){return new XMLHttpRequest};Fu.prototype.i=function(){return{}};Dh=new Fu;function Aa(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new Jo(this),this.O=SA,t=Eh?125:void 0,this.T=new Pu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new mw}function mw(){this.i=null,this.g="",this.h=!1}var SA=45e3,xh={},jc={};W=Aa.prototype;W.setTimeout=function(t){this.O=t};function Nh(t,e,n){t.K=1,t.v=Vu(Kn(e)),t.s=n,t.P=!0,gw(t,null)}function gw(t,e){t.F=Date.now(),ka(t),t.A=Kn(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Tw(n.i,"t",i),t.C=0,n=t.l.H,t.h=new mw,t.g=Hw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new _A(At(t.La,t,t.g),t.N)),cw(t.S,t.g,"readystatechange",t.ib),e=t.H?Xv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zo(),IA(t.j,t.u,t.A,t.m,t.U,t.s)}W.ib=function(t){t=t.target;const e=this.L;e&&Fn(t)==3?e.l():this.La(t)};W.La=function(t){try{if(t==this.g)e:{const l=Fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Eh||this.g&&(this.h.h||this.g.fa()||Om(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Zo(3):Zo(2)),Uu(this);var n=this.g.aa();this.Y=n;t:if(yw(this)){var i=Om(this.g);t="";var r=i.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Ao(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,bA(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$c(a)){var u=a;break t}}u=null}if(n=u)ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rh(this,n);else{this.i=!1,this.o=3,Rt(12),or(this),Ao(this);break e}}this.P?(vw(this,l,o),Eh&&this.i&&l==3&&(cw(this.S,this.T,"tick",this.hb),this.T.start())):(ts(this.j,this.m,o,null),Rh(this,o)),l==4&&or(this),this.i&&!this.I&&(l==4?$w(this.l,this):(this.i=!1,ka(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),or(this),Ao(this)}}}catch{}finally{}};function yw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function vw(t,e,n){let i=!0,r;for(;!t.I&&t.C<n.length;)if(r=CA(t,n),r==jc){e==4&&(t.o=4,Rt(14),i=!1),ts(t.j,t.m,null,"[Incomplete Response]");break}else if(r==xh){t.o=4,Rt(15),ts(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else ts(t.j,t.m,r,null),Rh(t,r);yw(t)&&r!=jc&&r!=xh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),af(e),e.K=!0,Rt(11))):(ts(t.j,t.m,n,"[Invalid Chunked Response]"),or(t),Ao(t))}W.hb=function(){if(this.g){var t=Fn(this.g),e=this.g.fa();this.C<e.length&&(Uu(this),vw(this,t,e),this.i&&t!=4&&ka(this))}};function CA(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?jc:(n=Number(e.substring(n,i)),isNaN(n)?xh:(i+=1,i+n>e.length?jc:(e=e.substr(i,n),t.C=i+n,e)))}W.cancel=function(){this.I=!0,or(this)};function ka(t){t.V=Date.now()+t.O,ww(t,t.O)}function ww(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Sa(At(t.gb,t),e)}function Uu(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}W.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(EA(this.j,this.A),this.K!=2&&(Zo(),Rt(17)),or(this),this.o=2,Ao(this)):ww(this,this.V-t)};function Ao(t){t.l.G==0||t.I||$w(t.l,t)}function or(t){Uu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qd(t.T),uw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ph(n.h,t))){if(!t.J&&Ph(n.h,t)&&n.G==3){try{var i=n.Fa.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Wc(n),qu(n);else break e;of(n),Rt(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Sa(At(n.cb,n),6e3));if(1>=Aw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ar(n,11)}else if((t.J||n.g==t)&&Wc(n),!$c(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(i=1.5*d,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=i.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ef(s,s.h),s.h=null))}if(i.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(i.za=w,Le(i.F,i.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=t;if(i.sa=Kw(i,i.H?i.ka:null,i.V),o.J){kw(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Uu(a),ka(a)),i.g=o}else Vw(i);0<n.i.length&&ju(n)}else u[0]!="stop"&&u[0]!="close"||ar(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ar(n,7):sf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Zo(4)}catch{}}function AA(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Du(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function kA(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Du(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function _w(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Du(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=kA(t),i=AA(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Iw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function DA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function pr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof pr){this.h=e!==void 0?e:t.h,Kc(this,t.j),this.s=t.s,this.g=t.g,Hc(this,t.m),this.l=t.l,e=t.i;var n=new ea;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nm(this,n),this.o=t.o}else t&&(n=String(t).match(Iw))?(this.h=!!e,Kc(this,n[1]||"",!0),this.s=vo(n[2]||""),this.g=vo(n[3]||"",!0),Hc(this,n[4]),this.l=vo(n[5]||"",!0),Nm(this,n[6]||"",!0),this.o=vo(n[7]||"")):(this.h=!!e,this.i=new ea(null,this.h))}pr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wo(e,Rm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wo(e,Rm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wo(n,n.charAt(0)=="/"?RA:NA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wo(n,OA)),t.join("")};function Kn(t){return new pr(t)}function Kc(t,e,n){t.j=n?vo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nm(t,e,n){e instanceof ea?(t.i=e,MA(t.i,t.h)):(n||(e=wo(e,PA)),t.i=new ea(e,t.h))}function Le(t,e,n){t.i.set(e,n)}function Vu(t){return Le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,xA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rm=/[#\/\?@]/g,NA=/[#\?:]/g,RA=/[#\?]/g,PA=/[#\?@]/g,OA=/#/g;function ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Oi(t){t.g||(t.g=new Map,t.h=0,t.i&&DA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}W=ea.prototype;W.add=function(t,e){Oi(this),this.i=null,t=$s(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bw(t,e){Oi(t),e=$s(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ew(t,e){return Oi(t),e=$s(t,e),t.g.has(e)}W.forEach=function(t,e){Oi(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};W.oa=function(){Oi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};W.W=function(t){Oi(this);let e=[];if(typeof t=="string")Ew(this,t)&&(e=e.concat(this.g.get($s(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};W.set=function(t,e){return Oi(this),this.i=null,t=$s(this,t),Ew(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};W.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Tw(t,e,n){bw(t,e),0<n.length&&(t.i=null,t.g.set($s(t,e),$d(n)),t.h+=n.length)}W.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function $s(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MA(t,e){e&&!t.j&&(Oi(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(bw(this,i),Tw(this,r,n))},t)),t.j=e}var LA=class{constructor(e,n){this.h=e,this.g=n}};function Sw(t){this.l=t||FA,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ga&&ie.g.Ga()&&ie.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FA=10;function Cw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Aw(t){return t.h?1:t.g?t.g.size:0}function Ph(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ef(t,e){t.g?t.g.add(e):t.h=e}function kw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Sw.prototype.cancel=function(){if(this.i=Dw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return $d(t.i)}function tf(){}tf.prototype.stringify=function(t){return ie.JSON.stringify(t,void 0)};tf.prototype.parse=function(t){return ie.JSON.parse(t,void 0)};function UA(){this.g=new tf}function VA(t,e,n){const i=n||"";try{_w(t,function(r,s){let o=r;Ea(r)&&(o=zd(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function BA(t,e){const n=new Ou;if(ie.Image){const i=new Image;i.onload=ic(sc,n,i,"TestLoadImage: loaded",!0,e),i.onerror=ic(sc,n,i,"TestLoadImage: error",!1,e),i.onabort=ic(sc,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=ic(sc,n,i,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function sc(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Da(t){this.l=t.ac||null,this.j=t.jb||!1}Et(Da,Xd);Da.prototype.g=function(){return new Bu(this.l,this.j)};Da.prototype.i=function(t){return function(){return t}}({});function Bu(t,e){ht.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=nf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Et(Bu,ht);var nf=0;W=Bu.prototype;W.open=function(t,e){if(this.readyState!=nf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ta(this)};W.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ie).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};W.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xa(this)),this.readyState=nf};W.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ta(this)),this.g&&(this.readyState=3,ta(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}W.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?xa(this):ta(this),this.readyState==3&&xw(this)}};W.Va=function(t){this.g&&(this.response=this.responseText=t,xa(this))};W.Ua=function(t){this.g&&(this.response=t,xa(this))};W.ga=function(){this.g&&xa(this)};function xa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ta(t)}W.setRequestHeader=function(t,e){this.v.append(t,e)};W.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};W.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ta(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $A=ie.JSON.parse;function He(t){ht.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Nw,this.K=this.L=!1}Et(He,ht);var Nw="",qA=/^https?$/i,jA=["POST","PUT"];W=He.prototype;W.Ka=function(t){this.L=t};W.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Dh.g(),this.C=this.u?xm(this.u):xm(Dh),this.g.onreadystatechange=At(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Pm(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=ie.FormData&&t instanceof ie.FormData,!(0<=Gv(jA,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ow(this),0<this.B&&((this.K=KA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=At(this.qa,this)):this.A=Yd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Pm(this,s)}};function KA(t){return ms&&aA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}W.qa=function(){typeof Bd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))};function Pm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Rw(t),$u(t)}function Rw(t){t.D||(t.D=!0,vt(t,"complete"),vt(t,"error"))}W.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),$u(this))};W.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$u(this,!0)),He.X.M.call(this)};W.Ha=function(){this.s||(this.F||this.v||this.l?Pw(this):this.fb())};W.fb=function(){Pw(this)};function Pw(t){if(t.h&&typeof Bd<"u"&&(!t.C[1]||Fn(t)!=4||t.aa()!=2)){if(t.v&&Fn(t)==4)Yd(t.Ha,0,t);else if(vt(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=a===0){var r=String(t.H).match(Iw)[1]||null;if(!r&&ie.self&&ie.self.location){var s=ie.self.location.protocol;r=s.substr(0,s.length-1)}i=!qA.test(r?r.toLowerCase():"")}n=i}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var o=2<Fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Rw(t)}}finally{$u(t)}}}}function $u(t,e){if(t.g){Ow(t);const n=t.g,i=t.C[0]?Bc:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=i}catch{}}}function Ow(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}W.aa=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};W.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};W.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$A(e)}};function Om(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Nw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}W.Ea=function(){return this.m};W.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mw(t){let e="";return jd(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function rf(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Mw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Le(t,e,n))}function ro(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Lw(t){this.Ca=0,this.i=[],this.j=new Ou,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ro("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ro("baseRetryDelayMs",5e3,t),this.bb=ro("retryDelaySeedMs",1e4,t),this.$a=ro("forwardChannelMaxRetries",2,t),this.ta=ro("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Sw(t&&t.concurrentRequestLimit),this.Fa=new UA,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}W=Lw.prototype;W.ma=8;W.G=1;function sf(t){if(Fw(t),t.G==3){var e=t.U++,n=Kn(t.F);Le(n,"SID",t.I),Le(n,"RID",e),Le(n,"TYPE","terminate"),Na(t,n),e=new Aa(t,t.j,e,void 0),e.K=2,e.v=Vu(Kn(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon&&(n=ie.navigator.sendBeacon(e.v.toString(),"")),!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=Hw(e.l,null),e.g.da(e.v)),e.F=Date.now(),ka(e)}jw(t)}function qu(t){t.g&&(af(t),t.g.cancel(),t.g=null)}function Fw(t){qu(t),t.u&&(ie.clearTimeout(t.u),t.u=null),Wc(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function ju(t){Cw(t.h)||t.m||(t.m=!0,sw(t.Ja,t),t.C=0)}function HA(t,e){return Aw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Sa(At(t.Ja,t,e),qw(t,t.C)),t.C++,!0)}W.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Aa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Xv(s),Jv(s,this.S)):s=this.S),this.o!==null||this.N||(r.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var i=this.i[n];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Uw(this,r,e),n=Kn(this.F),Le(n,"RID",t),Le(n,"CVER",22),this.D&&Le(n,"X-HTTP-Session-Id",this.D),Na(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Mw(s)))+"&"+e:this.o&&rf(n,this.o,s)),ef(this.h,r),this.Ya&&Le(n,"TYPE","init"),this.O?(Le(n,"$req",e),Le(n,"SID","null"),r.Z=!0,Nh(r,n,null)):Nh(r,n,e),this.G=2}}else this.G==3&&(t?Mm(this,t):this.i.length==0||Cw(this.h)||Mm(this))};function Mm(t,e){var n;e?n=e.m:n=t.U++;const i=Kn(t.F);Le(i,"SID",t.I),Le(i,"RID",n),Le(i,"AID",t.T),Na(t,i),t.o&&t.s&&rf(i,t.o,t.s),n=new Aa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Uw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ef(t.h,n),Nh(n,i,e)}function Na(t,e){t.ia&&jd(t.ia,function(n,i){Le(e,i,n)}),t.l&&_w({},function(n,i){Le(e,i,n)})}function Uw(t,e,n){n=Math.min(t.i.length,n);var i=t.l?At(t.l.Ra,t.l,t):null;e:{var r=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=s,0>u)s=Math.max(0,r[c].h-100),a=!1;else try{VA(l,o,"req"+u+"_")}catch{i&&i(l)}}if(a){i=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,i}function Vw(t){t.g||t.u||(t.Z=1,sw(t.Ia,t),t.A=0)}function of(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Sa(At(t.Ia,t),qw(t,t.A)),t.A++,!0)}W.Ia=function(){if(this.u=null,Bw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Sa(At(this.eb,this),t)}};W.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),qu(this),Bw(this))};function af(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function Bw(t){t.g=new Aa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kn(t.sa);Le(e,"RID","rpc"),Le(e,"SID",t.I),Le(e,"CI",t.L?"0":"1"),Le(e,"AID",t.T),Le(e,"TYPE","xmlhttp"),Na(t,e),t.o&&t.s&&rf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Vu(Kn(e)),n.s=null,n.P=!0,gw(n,t)}W.cb=function(){this.v!=null&&(this.v=null,qu(this),of(this),Rt(19))};function Wc(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function $w(t,e){var n=null;if(t.g==e){Wc(t),af(t),t.g=null;var i=2}else if(Ph(t.h,e))n=e.D,kw(t.h,e),i=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=Mu(),vt(i,new dw(i,n)),ju(t)}else Vw(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(i==1&&HA(t,e)||i==2&&of(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:ar(t,5);break;case 4:ar(t,10);break;case 3:ar(t,6);break;default:ar(t,2)}}}function qw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ar(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var i=At(t.kb,t);n||(n=new pr("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||Kc(n,"https"),Vu(n)),BA(n.toString(),i)}else Rt(2);t.G=0,t.l&&t.l.va(e),jw(t),Fw(t)}W.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function jw(t){if(t.G=0,t.la=[],t.l){const e=Dw(t.h);(e.length!=0||t.i.length!=0)&&(Tm(t.la,e),Tm(t.la,t.i),t.h.i.length=0,$d(t.i),t.i.length=0),t.l.ua()}}function Kw(t,e,n){var i=n instanceof pr?Kn(n):new pr(n,void 0);if(i.g!="")e&&(i.g=e+"."+i.g),Hc(i,i.m);else{var r=ie.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new pr(null,void 0);i&&Kc(s,i),e&&(s.g=e),r&&Hc(s,r),n&&(s.l=n),i=s}return n=t.D,e=t.za,n&&e&&Le(i,n,e),Le(i,"VER",t.ma),Na(t,i),i}function Hw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new He(new Da({jb:!0})):new He(t.ra),e.Ka(t.H),e}function Ww(){}W=Ww.prototype;W.xa=function(){};W.wa=function(){};W.va=function(){};W.ua=function(){};W.Ra=function(){};function Gc(){if(ms&&!(10<=Number(cA)))throw Error("Environmental error: no available transport.")}Gc.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){ht.call(this),this.g=new Lw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$c(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$c(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qs(this)}Et(Xt,ht);Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Kw(t,null,t.V),ju(t)};Xt.prototype.close=function(){sf(this.g)};Xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zd(t),t=n);e.i.push(new LA(e.ab++,t)),e.G==3&&ju(e)};Xt.prototype.M=function(){this.g.l=null,delete this.j,sf(this.g),delete this.g,Xt.X.M.call(this)};function Gw(t){Jd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Et(Gw,Jd);function zw(){Zd.call(this),this.status=1}Et(zw,Zd);function qs(t){this.g=t}Et(qs,Ww);qs.prototype.xa=function(){vt(this.g,"a")};qs.prototype.wa=function(t){vt(this.g,new Gw(t))};qs.prototype.va=function(t){vt(this.g,new zw)};qs.prototype.ua=function(){vt(this.g,"b")};Gc.prototype.createWebChannel=Gc.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;Lu.NO_ERROR=0;Lu.TIMEOUT=8;Lu.HTTP_ERROR=6;fw.COMPLETE="complete";pw.EventType=Ca;Ca.OPEN="a";Ca.CLOSE="b";Ca.ERROR="c";Ca.MESSAGE="d";ht.prototype.listen=ht.prototype.N;He.prototype.listenOnce=He.prototype.O;He.prototype.getLastError=He.prototype.Oa;He.prototype.getLastErrorCode=He.prototype.Ea;He.prototype.getStatus=He.prototype.aa;He.prototype.getResponseJson=He.prototype.Sa;He.prototype.getResponseText=He.prototype.fa;He.prototype.send=He.prototype.da;He.prototype.setWithCredentials=He.prototype.Ka;var WA=function(){return new Gc},GA=function(){return Mu()},Kl=Lu,zA=fw,QA=Mr,Lm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},YA=Da,oc=pw,XA=He;const Fm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new ku("@firebase/firestore");function Oh(){return Si.logLevel}function JA(t){Si.setLogLevel(t)}function A(t,...e){if(Si.logLevel<=we.DEBUG){const n=e.map(cf);Si.debug(`Firestore (${js}): ${t}`,...n)}}function Ye(t,...e){if(Si.logLevel<=we.ERROR){const n=e.map(cf);Si.error(`Firestore (${js}): ${t}`,...n)}}function gs(t,...e){if(Si.logLevel<=we.WARN){const n=e.map(cf);Si.warn(`Firestore (${js}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function z(t,e){t||$()}function ZA(t,e){t||$()}function F(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Pt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ek{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class tk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nk{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(z(typeof i.accessToken=="string"),new Qw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new ut(e)}}class ik{constructor(e,n,i,r){this.h=e,this.l=n,this.m=i,this.g=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(z(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rk{constructor(e,n,i,r){this.h=e,this.l=n,this.m=i,this.g=r}getToken(){return Promise.resolve(new ik(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ok{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const i=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?r(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),this.A=n.token,new sk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=ak(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function se(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}function Xw(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new T(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Ue(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ue(0,0))}static max(){return new Q(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,i){n===void 0?n=0:n>e.length&&$(),i===void 0?i=e.length-n:i>e.length-n&&$(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return na.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof na?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends na{construct(e,n,i){return new ge(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends na{construct(e,n,i){return new Xe(e,n,i)}static isValidIdentifier(e){return ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Xe(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new T(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new T(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new T(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ge.fromString(e))}static fromName(e){return new O(ge.fromString(e).popFirst(5))}static empty(){return new O(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ge(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n,i,r){this.indexId=e,this.collectionGroup=n,this.fields=i,this.indexState=r}}function Mh(t){return t.fields.find(e=>e.kind===2)}function Qi(t){return t.fields.filter(e=>e.kind!==2)}Jw.UNKNOWN_ID=-1;class uk{constructor(e,n){this.fieldPath=e,this.kind=n}}class zc{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new zc(0,Jt.min())}}function Zw(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Q.fromTimestamp(i===1e9?new Ue(n+1,0):new Ue(n,i));return new Jt(r,O.empty(),e)}function e_(t){return new Jt(t.readTime,t.key,-1)}class Jt{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Jt(Q.min(),O.empty(),-1)}static max(){return new Jt(Q.max(),O.empty(),-1)}}function uf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class n_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==t_)throw t;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,i)=>{n(e)})}static reject(e){return new v((n,i)=>{i(e)})}static waitFor(e){return new v((n,i)=>{let r=0,s=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},c=>i(c))}),o=!0,s===r&&n()})}static or(e){let n=v.resolve(!1);for(const i of e)n=n.next(r=>r?v.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new v((i,r)=>{const s=e.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===s&&i(o)},l=>r(l))}})}static doWhile(e,n){return new v((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new lt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new ko(e,n.error)):this.P.resolve()},this.transaction.onerror=i=>{const r=lf(i.target.error);this.P.reject(new ko(e,r))}}static open(e,n,i,r){try{return new Ku(n,e.transaction(r,i))}catch(s){throw new ko(n,s)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new hk(n)}}class un{constructor(e,n,i){this.name=e,this.version=n,this.S=i,un.D(qe())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),er(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!zo())return!1;if(un.N())return!0;const e=qe(),n=un.D(e),i=0<n&&n<10,r=un.k(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||s)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(i)}static k(e){const n=e.match(/Android ([\d.]+)/i),i=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(i)}async F(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,i)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=s=>{const o=s.target.result;n(o)},r.onblocked=()=>{i(new ko(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=s=>{const o=s.target.error;o.name==="VersionError"?i(new T(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?i(new T(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):i(new ko(e,o))},r.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.$(o,r.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,i,r){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Ku.open(this.db,e,s?"readonly":"readwrite",i),c=r(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),v.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class lk{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return er(this.q.delete())}}class ko extends T{constructor(e,n){super(_.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Li(t){return t.name==="IndexedDbTransactionError"}class hk{constructor(e){this.store=e}put(e,n){let i;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),i=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),er(i)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),er(this.store.add(e))}get(e){return er(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),er(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),er(this.store.count())}W(e,n){const i=this.options(e,n);if(i.index||typeof this.store.getAll!="function"){const r=this.cursor(i),s=[];return this.H(r,(o,a)=>{s.push(a)}).next(()=>s)}{const r=this.store.getAll(i.range);return new v((s,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{s(a.target.result)}})}}J(e,n){const i=this.store.getAll(e,n===null?void 0:n);return new v((r,s)=>{i.onerror=o=>{s(o.target.error)},i.onsuccess=o=>{r(o.target.result)}})}Y(e,n){A("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,n);i.X=!1;const r=this.cursor(i);return this.H(r,(s,o,a)=>a.delete())}Z(e,n){let i;n?i=e:(i={},n=e);const r=this.cursor(i);return this.H(r,n)}tt(e){const n=this.cursor({});return new v((i,r)=>{n.onerror=s=>{const o=lf(s.target.error);r(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():i()}):i()}})}H(e,n){const i=[];return new v((r,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new lk(a),u=n(a.primaryKey,a.value,c);if(u instanceof v){const l=u.catch(h=>(c.done(),v.reject(h)));i.push(l)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>v.waitFor(i))}options(e,n){let i;return e!==void 0&&(typeof e=="string"?i=e:n=e),{index:i,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const i=this.store.index(e.index);return e.X?i.openKeyCursor(e.range,n):i.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function er(t){return new v((e,n)=>{t.onsuccess=i=>{const r=i.target.result;e(r)},t.onerror=i=>{const r=lf(i.target.error);n(r)}})}let Um=!1;function lf(t){const e=un.D(qe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const i=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Um||(Um=!0,setTimeout(()=>{throw i},0)),i}}return t}class dk{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Li(n)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Mi(n)}await this.nt(6e4)})}}class fk{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const i=new Set;let r=n,s=!0;return v.doWhile(()=>s===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!i.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,i.add(o)});s=!1})).next(()=>n-r)}rt(e,n,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,i).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,s)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let i=e;return n.changes.forEach((r,s)=>{const o=e_(s);uf(o,i)>0&&(i=o)}),new Jt(i.readTime,i.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ut(i),this.ct=i=>n.writeSequenceNumber(i))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Vt.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,i,r,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ci{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ci("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ci&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function r_(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new ot(n)}static fromUint8Array(e){const n=function(i){let r="";for(let s=0;s<i.length;++s)r+=String.fromCharCode(i[s]);return r}(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const gk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ai(t){if(z(!!t),typeof t=="string"){let e=0;const n=gk.exec(t);if(z(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function s_(t){const e=t.mapValue.fields.__previous_value__;return hf(e)?s_(e):e}function ra(t){const e=Ai(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wc={nullValue:"NULL_VALUE"};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?hf(t)?4:o_(t)?9007199254740991:10:$()}function Rn(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const s=Ai(i.timestampValue),o=Ai(r.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return _r(i.bytesValue).isEqual(_r(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return je(i.geoPointValue.latitude)===je(r.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return je(i.integerValue)===je(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const s=je(i.doubleValue),o=je(r.doubleValue);return s===o?ia(s)===ia(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:return function(i,r){const s=i.mapValue.fields||{},o=r.mapValue.fields||{};if(Vm(s)!==Vm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function sa(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ki(t,e){if(t===e)return 0;const n=Ir(t),i=Ir(e);if(n!==i)return se(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(r,s){const o=je(r.integerValue||r.doubleValue),a=je(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Bm(t.timestampValue,e.timestampValue);case 4:return Bm(ra(t),ra(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(r,s){const o=_r(r),a=_r(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,s){const o=r.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=se(o[c],a[c]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,s){const o=se(je(r.latitude),je(s.latitude));return o!==0?o:se(je(r.longitude),je(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,s){const o=r.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ki(o[c],a[c]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,s){if(r===pi.mapValue&&s===pi.mapValue)return 0;if(r===pi.mapValue)return 1;if(s===pi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=se(a[l],u[l]);if(h!==0)return h;const d=ki(o[a[l]],c[u[l]]);if(d!==0)return d}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function Bm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Ai(t),i=Ai(e),r=se(n.seconds,i.seconds);return r!==0?r:se(n.nanos,i.nanos)}function vs(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const r=Ai(i);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?_r(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let r="[",s=!0;for(const o of i.values||[])s?s=!1:r+=",",r+=Lh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(i){const r=Object.keys(i.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Lh(i.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function br(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fh(t){return!!t&&"integerValue"in t}function oa(t){return!!t&&"arrayValue"in t}function $m(t){return!!t&&"nullValue"in t}function qm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _c(t){return!!t&&"mapValue"in t}function Do(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Do(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Do(t.arrayValue.values[n]);return e}return Object.assign({},t)}function o_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function yk(t){return"nullValue"in t?wc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?br(Ci.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:$()}function vk(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?br(Ci.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?pi:$()}function jm(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Km(t,e){const n=ki(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.position=e,this.inclusive=n}}function Hm(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(s.field.isKeyField()?i=O.comparator(O.fromName(o.referenceValue),n.key):i=ki(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{}class de extends a_{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new wk(e,n,i):n==="array-contains"?new bk(e,i):n==="in"?new f_(e,i):n==="not-in"?new Ek(e,i):n==="array-contains-any"?new Tk(e,i):new de(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new _k(e,i):new Ik(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ki(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ee extends a_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ee(e,n)}matches(e){return ws(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function ws(t){return t.op==="and"}function Uh(t){return t.op==="or"}function df(t){return c_(t)&&ws(t)}function c_(t){for(const e of t.filters)if(e instanceof Ee)return!1;return!0}function Vh(t){if(t instanceof de)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(df(t))return t.filters.map(e=>Vh(e)).join(",");{const e=t.filters.map(n=>Vh(n)).join(",");return`${t.op}(${e})`}}function u_(t,e){return t instanceof de?function(n,i){return i instanceof de&&n.op===i.op&&n.field.isEqual(i.field)&&Rn(n.value,i.value)}(t,e):t instanceof Ee?function(n,i){return i instanceof Ee&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((r,s,o)=>r&&u_(s,i.filters[o]),!0):!1}(t,e):void $()}function l_(t,e){const n=t.filters.concat(e);return Ee.create(n,t.op)}function h_(t){return t instanceof de?function(e){return`${e.field.canonicalString()} ${e.op} ${vs(e.value)}`}(t):t instanceof Ee?function(e){return e.op.toString()+" {"+e.getFilters().map(h_).join(" ,")+"}"}(t):"Filter"}class wk extends de{constructor(e,n,i){super(e,n,i),this.key=O.fromName(i.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class _k extends de{constructor(e,n){super(e,"in",n),this.keys=d_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ik extends de{constructor(e,n){super(e,"not-in",n),this.keys=d_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>O.fromName(i.referenceValue))}class bk extends de{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oa(n)&&sa(n.arrayValue,this.value)}}class f_ extends de{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class Ek extends de{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}}class Tk extends de{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oa(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>sa(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n="asc"){this.field=e,this.dir=n}}function Sk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||gt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ac(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ac(this.root,e,this.comparator,!1)}getReverseIterator(){return new ac(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ac(this.root,e,this.comparator,!0)}}class ac{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class gt{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??gt.RED,this.left=r??gt.EMPTY,this.right=s??gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new gt(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return gt.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}gt.EMPTY=null,gt.RED=!0,gt.BLACK=!1;gt.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,i,r){return this}insert(t,e,n){return new gt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gm(this.data.getIterator())}getIteratorFrom(e){return new Gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class Gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wr(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Ce(Xe.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!_c(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Do(n)}setAll(e){let n=Xe.emptyPath(),i={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=Do(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());_c(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];_c(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){Lr(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new yt(Do(this.value))}}function p_(t){const e=[];return Lr(t.fields,(n,i)=>{const r=new Xe([n]);if(_c(i)){const s=p_(i.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,n,i,r,s,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Oe(e,0,Q.min(),Q.min(),Q.min(),yt.empty(),0)}static newFoundDocument(e,n,i,r){return new Oe(e,1,n,Q.min(),i,r,0)}static newNoDocument(e,n){return new Oe(e,2,n,Q.min(),Q.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,Q.min(),Q.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n=null,i=[],r=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Bh(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Ck(t,e,n,i,r,s,o)}function Er(t){const e=F(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Vh(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>vs(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>vs(i)).join(",")),e.ft=n}return e.ft}function Pa(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Sk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!u_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function Qc(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Yc(t,e){return t.filters.filter(n=>n instanceof de&&n.field.isEqual(e))}function zm(t,e,n){let i=wc,r=!0;for(const s of Yc(t,e)){let o=wc,a=!0;switch(s.op){case"<":case"<=":o=yk(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=wc}jm({value:i,inclusive:r},{value:o,inclusive:a})<0&&(i=o,r=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];jm({value:i,inclusive:r},{value:o,inclusive:n.inclusive})<0&&(i=o,r=n.inclusive);break}}return{value:i,inclusive:r}}function Qm(t,e,n){let i=pi,r=!0;for(const s of Yc(t,e)){let o=pi,a=!0;switch(s.op){case">=":case">":o=vk(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=pi}Km({value:i,inclusive:r},{value:o,inclusive:a})>0&&(i=o,r=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Km({value:i,inclusive:r},{value:o,inclusive:n.inclusive})>0&&(i=o,r=n.inclusive);break}}return{value:i,inclusive:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n=null,i=[],r=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function m_(t,e,n,i,r,s,o,a){return new zn(t,e,n,i,r,s,o,a)}function Ks(t){return new zn(t)}function Ym(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ff(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Hu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function pf(t){return t.collectionGroup!==null}function mr(t){const e=F(t);if(e.dt===null){e.dt=[];const n=Hu(e),i=ff(e);if(n!==null&&i===null)n.isKeyField()||e.dt.push(new as(n)),e.dt.push(new as(Xe.keyField(),"asc"));else{let r=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(r=!0);if(!r){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new as(Xe.keyField(),s))}}}return e.dt}function jt(t){const e=F(t);if(!e._t)if(e.limitType==="F")e._t=Bh(e.path,e.collectionGroup,mr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of mr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new as(s.field,o))}const i=e.endAt?new Di(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Di(e.startAt.position,e.startAt.inclusive):null;e._t=Bh(e.path,e.collectionGroup,n,e.filters,e.limit,i,r)}return e._t}function $h(t,e){e.getFirstInequalityField(),Hu(t);const n=t.filters.concat([e]);return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Xc(t,e,n){return new zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oa(t,e){return Pa(jt(t),jt(e))&&t.limitType===e.limitType}function g_(t){return`${Er(jt(t))}|lt:${t.limitType}`}function qh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>h_(i)).join(", ")}]`),Ra(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>vs(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>vs(i)).join(",")),`Target(${n})`}(jt(t))}; limitType=${t.limitType})`}function Ma(t,e){return e.isFoundDocument()&&function(n,i){const r=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,i){for(const r of mr(n))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const r of n.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(r,s,o){const a=Hm(r,s,o);return r.inclusive?a<=0:a<0}(n.startAt,mr(n),i)||n.endAt&&!function(r,s,o){const a=Hm(r,s,o);return r.inclusive?a>=0:a>0}(n.endAt,mr(n),i))}(t,e)}function y_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v_(t){return(e,n)=>{let i=!1;for(const r of mr(t)){const s=Ak(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function Ak(t,e,n){const i=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,s,o){const a=s.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ki(a,c):$()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function __(t){return{integerValue:""+t}}function I_(t,e){return r_(e)?__(e):w_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this._=void 0}}function kk(t,e,n){return t instanceof _s?function(i,r){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&(s.fields.__previous_value__=r),{mapValue:s}}(n,e):t instanceof Tr?E_(t,e):t instanceof Sr?T_(t,e):function(i,r){const s=b_(i,r),o=Xm(s)+Xm(i.gt);return Fh(s)&&Fh(i.gt)?__(o):w_(i.yt,o)}(t,e)}function Dk(t,e,n){return t instanceof Tr?E_(t,e):t instanceof Sr?T_(t,e):n}function b_(t,e){return t instanceof Is?Fh(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class _s extends Wu{}class Tr extends Wu{constructor(e){super(),this.elements=e}}function E_(t,e){const n=S_(e);for(const i of t.elements)n.some(r=>Rn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Sr extends Wu{constructor(e){super(),this.elements=e}}function T_(t,e){let n=S_(e);for(const i of t.elements)n=n.filter(r=>!Rn(r,i));return{arrayValue:{values:n}}}class Is extends Wu{constructor(e,n){super(),this.yt=e,this.gt=n}}function Xm(t){return je(t.integerValue||t.doubleValue)}function S_(t){return oa(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,n){this.field=e,this.transform=n}}function xk(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof Tr&&i instanceof Tr||n instanceof Sr&&i instanceof Sr?ys(n.elements,i.elements,Rn):n instanceof Is&&i instanceof Is?Rn(n.gt,i.gt):n instanceof _s&&i instanceof _s}(t.transform,e.transform)}class Nk{constructor(e,n){this.version=e,this.transformResults=n}}class Fe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ic(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gu{}function C_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ws(t.key,Fe.none()):new Hs(t.key,t.data,Fe.none());{const n=t.data,i=yt.empty();let r=new Ce(Xe.comparator);for(let s of e.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new Qn(t.key,i,new Bt(r.toArray()),Fe.none())}}function Rk(t,e,n){t instanceof Hs?function(i,r,s){const o=i.value.clone(),a=Zm(i.fieldTransforms,r,s.transformResults);o.setAll(a),r.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(i,r,s){if(!Ic(i.precondition,r))return void r.convertToUnknownDocument(s.version);const o=Zm(i.fieldTransforms,r,s.transformResults),a=r.data;a.setAll(A_(i)),a.setAll(o),r.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,r,s){r.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,i){return t instanceof Hs?function(r,s,o,a){if(!Ic(r.precondition,s))return o;const c=r.value.clone(),u=eg(r.fieldTransforms,a,s);return c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Qn?function(r,s,o,a){if(!Ic(r.precondition,s))return o;const c=eg(r.fieldTransforms,a,s),u=s.data;return u.setAll(A_(r)),u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,i):function(r,s,o){return Ic(r.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Pk(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=b_(i.transform,r||null);s!=null&&(n===null&&(n=yt.empty()),n.set(i.field,s))}return n||null}function Jm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&ys(n,i,(r,s)=>xk(r,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hs extends Gu{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qn extends Gu{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function A_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Zm(t,e,n){const i=new Map;z(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Dk(o,a,n[r]))}return i}function eg(t,e,n){const i=new Map;for(const r of t){const s=r.transform,o=n.data.field(r.field);i.set(r.field,kk(s,o,e))}return i}class Ws extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mf extends Gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt,me;function k_(t){switch(t){default:return $();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function D_(t){if(t===void 0)return Ye("GRPC error has no .code"),_.UNKNOWN;switch(t){case nt.OK:return _.OK;case nt.CANCELLED:return _.CANCELLED;case nt.UNKNOWN:return _.UNKNOWN;case nt.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case nt.INTERNAL:return _.INTERNAL;case nt.UNAVAILABLE:return _.UNAVAILABLE;case nt.UNAUTHENTICATED:return _.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case nt.NOT_FOUND:return _.NOT_FOUND;case nt.ALREADY_EXISTS:return _.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return _.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case nt.ABORTED:return _.ABORTED;case nt.OUT_OF_RANGE:return _.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return _.UNIMPLEMENTED;case nt.DATA_LOSS:return _.DATA_LOSS;default:return $()}}(me=nt||(nt={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return i_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new We(O.comparator);function $t(){return Mk}const x_=new We(O.comparator);function _o(...t){let e=x_;for(const n of t)e=e.insert(n.key,n);return e}function N_(t){let e=x_;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function En(){return No()}function R_(){return No()}function No(){return new Fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Lk=new We(O.comparator),Fk=new Ce(O.comparator);function oe(...t){let e=Fk;for(const n of t)e=e.add(n);return e}const Uk=new Ce(se);function zu(){return Uk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,Ua.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new Fa(Q.min(),r,zu(),$t(),oe())}}class Ua{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ua(i,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,i,r){this.It=e,this.removedTargetIds=n,this.key=i,this.Tt=r}}class P_{constructor(e,n){this.targetId=e,this.Et=n}}class O_{constructor(e,n,i=ot.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class tg{constructor(){this.At=0,this.Rt=ig(),this.bt=ot.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=oe(),n=oe(),i=oe();return this.Rt.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:$()}}),new Ua(this.bt,this.Pt,e,n,i)}xt(){this.vt=!1,this.Rt=ig()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Vk{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=$t(),this.qt=ng(),this.Ut=new Ce(se)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const i=this.Wt(n);switch(e.state){case 0:this.zt(n)&&i.Dt(e.resumeToken);break;case 1:i.Mt(),i.Vt||i.xt(),i.Dt(e.resumeToken);break;case 2:i.Mt(),i.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(i.Ft(),i.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),i.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((i,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,i=e.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Qc(s))if(i===0){const o=new O(s.path);this.Qt(n,o,Oe.newNoDocument(o,Q.min()))}else z(i===1);else this.Xt(n)!==i&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Qc(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Oe.newNoDocument(c,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let i=oe();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(i=i.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const r=new Fa(e,n,this.Ut,this.Lt,i);return this.Lt=$t(),this.qt=ng(),this.Ut=new Ce(se),r}Gt(e,n){if(!this.zt(e))return;const i=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,i),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,i){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),i&&(this.Lt=this.Lt.insert(n,i))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new tg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ce(se),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new tg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function ng(){return new We(O.comparator)}function ig(){return new We(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$k=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qk=(()=>({and:"AND",or:"OR"}))();class jk{constructor(e,n){this.databaseId=e,this.wt=n}}function bs(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function M_(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Kk(t,e){return bs(t,e.toTimestamp())}function Je(t){return z(!!t),Q.fromTimestamp(function(e){const n=Ai(e);return new Ue(n.seconds,n.nanos)}(t))}function gf(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function L_(t){const e=ge.fromString(t);return z(H_(e)),e}function aa(t,e){return gf(t.databaseId,e.path)}function kn(t,e){const n=L_(e);if(n.get(1)!==t.databaseId.projectId)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(U_(n))}function jh(t,e){return gf(t.databaseId,e)}function F_(t){const e=L_(t);return e.length===4?ge.emptyPath():U_(e)}function ca(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function U_(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rg(t,e,n){return{name:aa(t,e),fields:n.value.mapValue.fields}}function V_(t,e,n){const i=kn(t,e.name),r=Je(e.updateTime),s=e.createTime?Je(e.createTime):Q.min(),o=new yt({mapValue:{fields:e.fields}}),a=Oe.newFoundDocument(i,r,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Hk(t,e){return"found"in e?function(n,i){z(!!i.found),i.found.name,i.found.updateTime;const r=kn(n,i.found.name),s=Je(i.found.updateTime),o=i.found.createTime?Je(i.found.createTime):Q.min(),a=new yt({mapValue:{fields:i.found.fields}});return Oe.newFoundDocument(r,s,o,a)}(t,e):"missing"in e?function(n,i){z(!!i.missing),z(!!i.readTime);const r=kn(n,i.missing),s=Je(i.readTime);return Oe.newNoDocument(r,s)}(t,e):$()}function Wk(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,u){return c.wt?(z(u===void 0||typeof u=="string"),ot.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),ot.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:D_(c.code);return new T(u,c.message||"")}(o);n=new O_(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=kn(t,i.document.name),s=Je(i.document.updateTime),o=i.document.createTime?Je(i.document.createTime):Q.min(),a=new yt({mapValue:{fields:i.document.fields}}),c=Oe.newFoundDocument(r,s,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new bc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=kn(t,i.document),s=i.readTime?Je(i.readTime):Q.min(),o=Oe.newNoDocument(r,s),a=i.removedTargetIds||[];n=new bc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=kn(t,i.document),s=i.removedTargetIds||[];n=new bc([],s,r,null)}else{if(!("filter"in e))return $();{e.filter;const i=e.filter;i.targetId;const r=i.count||0,s=new Ok(r),o=i.targetId;n=new P_(o,s)}}return n}function ua(t,e){let n;if(e instanceof Hs)n={update:rg(t,e.key,e.value)};else if(e instanceof Ws)n={delete:aa(t,e.key)};else if(e instanceof Qn)n={update:rg(t,e.key,e.data),updateMask:Jk(e.fieldMask)};else{if(!(e instanceof mf))return $();n={verify:aa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(r,s){const o=s.transform;if(o instanceof _s)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Tr)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Sr)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Is)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:Kk(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:$()}(t,e.precondition)),n}function Kh(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?Fe.updateTime(Je(r.updateTime)):r.exists!==void 0?Fe.exists(r.exists):Fe.none()}(e.currentDocument):Fe.none(),i=e.updateTransforms?e.updateTransforms.map(r=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new _s;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Tr(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Sr(u)}else"increment"in o?a=new Is(s,o.increment):$();const c=Xe.fromServerFormat(o.fieldPath);return new La(c,a)}(t,r)):[];if(e.update){e.update.name;const r=kn(t,e.update.name),s=new yt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Bt(c.map(u=>Xe.fromServerFormat(u)))}(e.updateMask);return new Qn(r,s,o,n,i)}return new Hs(r,s,n,i)}if(e.delete){const r=kn(t,e.delete);return new Ws(r,n)}if(e.verify){const r=kn(t,e.verify);return new mf(r,n)}return $()}function Gk(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(i,r){let s=i.updateTime?Je(i.updateTime):Je(r);return s.isEqual(Q.min())&&(s=Je(r)),new Nk(s,i.transformResults||[])}(n,e))):[]}function B_(t,e){return{documents:[jh(t,e.path)]}}function $_(t,e){const n={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(n.parent=jh(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jh(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(c){if(c.length!==0)return K_(Ee.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const s=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Yr(l.field),direction:Qk(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(c,u){return c.wt||Ra(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function q_(t){let e=F_(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){z(i===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(l){const h=j_(l);return h instanceof Ee&&df(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new as(Xr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ra(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Di(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Di(d,h)}(n.endAt)),m_(e,r,o,s,a,"F",c,u)}function zk(t,e){const n=function(i,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function j_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Xr(e.unaryFilter.field);return de.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Xr(e.unaryFilter.field);return de.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xr(e.unaryFilter.field);return de.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xr(e.unaryFilter.field);return de.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return de.create(Xr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ee.create(e.compositeFilter.filters.map(n=>j_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function Qk(t){return Bk[t]}function Yk(t){return $k[t]}function Xk(t){return qk[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return Xe.fromServerFormat(t.fieldPath)}function K_(t){return t instanceof de?function(e){if(e.op==="=="){if(qm(e.value))return{unaryFilter:{field:Yr(e.field),op:"IS_NAN"}};if($m(e.value))return{unaryFilter:{field:Yr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qm(e.value))return{unaryFilter:{field:Yr(e.field),op:"IS_NOT_NAN"}};if($m(e.value))return{unaryFilter:{field:Yr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(e.field),op:Yk(e.op),value:e.value}}}(t):t instanceof Ee?function(e){const n=e.getFilters().map(i=>K_(i));return n.length===1?n[0]:{compositeFilter:{op:Xk(e.op),filters:n}}}(t):$()}function Jk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sg(e)),e=Zk(t.get(n),e);return sg(e)}function Zk(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const s=t.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function sg(t){return t+""}function Tn(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),ge.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&$(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),i.push(c);break;case"":r+=t.substring(s,o),r+="\0";break;case"":r+=t.substring(s,o+1);break;default:$()}s=o+2}return new ge(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t,e){return[t,Ot(e)]}function W_(t,e,n){return[t,Ot(e),n]}const eD={},tD=["prefixPath","collectionGroup","readTime","documentId"],nD=["prefixPath","collectionGroup","documentId"],iD=["collectionGroup","readTime","prefixPath","documentId"],rD=["canonicalId","targetId"],sD=["targetId","path"],oD=["path","targetId"],aD=["collectionId","parent"],cD=["indexId","uid"],uD=["uid","sequenceNumber"],lD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],hD=["indexId","uid","orderedDocumentKey"],dD=["userId","collectionPath","documentId"],fD=["userId","collectionPath","largestBatchId"],pD=["userId","collectionGroup","largestBatchId"],G_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],mD=[...G_,"documentOverlays"],z_=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Q_=z_,gD=[...Q_,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends n_{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function ft(t,e){const n=F(t);return un.M(n.se,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&Rk(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=xo(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=xo(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=R_();return this.mutations.forEach(r=>{const s=e.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const c=C_(o,a);c!==null&&i.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(Q.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,i)=>Jm(n,i))&&ys(this.baseMutations,e.baseMutations,(n,i)=>Jm(n,i))}}class vf{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){z(e.mutations.length===i.length);let r=Lk;const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new vf(e,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,i,r,s=Q.min(),o=Q.min(),a=ot.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.ie=e}}function yD(t,e){let n;if(e.document)n=V_(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=O.fromSegments(e.noDocument.path),r=Ar(e.noDocument.readTime);n=Oe.newNoDocument(i,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const i=O.fromSegments(e.unknownDocument.path),r=Ar(e.unknownDocument.version);n=Oe.newUnknownDocument(i,r)}}return e.readTime&&n.setReadTime(function(i){const r=new Ue(i[0],i[1]);return Q.fromTimestamp(r)}(e.readTime)),n}function ag(t,e){const n=e.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Jc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(r,s){return{name:aa(r,s.key),fields:s.data.value.mapValue.fields,updateTime:bs(r,s.version.toTimestamp()),createTime:bs(r,s.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:Cr(e.version)};else{if(!e.isUnknownDocument())return $();i.unknownDocument={path:n.path.toArray(),version:Cr(e.version)}}return i}function Jc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Cr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ar(t){const e=new Ue(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function tr(t,e){const n=(e.baseMutations||[]).map(s=>Kh(t.ie,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map(s=>Kh(t.ie,s)),r=Ue.fromMillis(e.localWriteTimeMs);return new yf(e.batchId,r,n,i)}function Io(t){const e=Ar(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ar(t.lastLimboFreeSnapshotVersion):Q.min();let i;var r;return t.query.documents!==void 0?(z((r=t.query).documents.length===1),i=jt(Ks(F_(r.documents[0])))):i=function(s){return jt(q_(s))}(t.query),new wi(i,t.targetId,0,t.lastListenSequenceNumber,e,n,ot.fromBase64String(t.resumeToken))}function X_(t,e){const n=Cr(e.snapshotVersion),i=Cr(e.lastLimboFreeSnapshotVersion);let r;r=Qc(e.target)?B_(t.ie,e.target):$_(t.ie,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Er(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function _f(t){const e=q_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Xc(e,e.limit,"L"):e}function Hl(t,e){return new wf(e.largestBatchId,Kh(t.ie,e.overlayMutation))}function cg(t,e){const n=e.path.lastSegment();return[t,Ot(e.path.popLast()),n]}function ug(t,e,n,i){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:Cr(i.readTime),documentKey:Ot(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{getBundleMetadata(e,n){return lg(e).get(n).next(i=>{if(i)return{id:(r=i).bundleId,createTime:Ar(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return lg(e).put({bundleId:(i=n).id,createTime:Cr(Je(i.createTime)),version:i.version});var i}getNamedQuery(e,n){return hg(e).get(n).next(i=>{if(i)return{name:(r=i).name,query:_f(r.bundledQuery),readTime:Ar(r.readTime)};var r})}saveNamedQuery(e,n){return hg(e).put(function(i){return{name:i.name,readTime:Cr(Je(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function lg(t){return ft(t,"bundles")}function hg(t){return ft(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const i=n.uid||"";return new Qu(e,i)}getOverlay(e,n){return so(e).get(cg(this.userId,n)).next(i=>i?Hl(this.yt,i):null)}getOverlays(e,n){const i=En();return v.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){const r=[];return i.forEach((s,o)=>{const a=new wf(n,o);r.push(this.oe(e,a))}),v.waitFor(r)}removeOverlaysForBatchId(e,n,i){const r=new Set;n.forEach(o=>r.add(Ot(o.getCollectionPath())));const s=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,i],[this.userId,o,i+1],!1,!0);s.push(so(e).Y("collectionPathOverlayIndex",a))}),v.waitFor(s)}getOverlaysForCollection(e,n,i){const r=En(),s=Ot(n),o=IDBKeyRange.bound([this.userId,s,i],[this.userId,s,Number.POSITIVE_INFINITY],!0);return so(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Hl(this.yt,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,n,i,r){const s=En();let o;const a=IDBKeyRange.bound([this.userId,n,i],[this.userId,n,Number.POSITIVE_INFINITY],!0);return so(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Hl(this.yt,u);s.size()<r||h.largestBatchId===o?(s.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>s)}oe(e,n){return so(e).put(function(i,r,s){const[o,a,c]=cg(r,s.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:s.mutation.key.getCollectionGroup(),largestBatchId:s.largestBatchId,overlayMutation:ua(i.ie,s.mutation)}}(this.yt,this.userId,n))}}function so(t){return ft(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(je(e.integerValue));else if("doubleValue"in e){const i=je(e.doubleValue);isNaN(i)?this.he(n,13):(this.he(n,15),ia(i)?n.le(0):n.le(i))}else if("timestampValue"in e){const i=e.timestampValue;this.he(n,20),typeof i=="string"?n.fe(i):(n.fe(`${i.seconds||""}`),n.le(i.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(_r(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const i=e.geoPointValue;this.he(n,45),n.le(i.latitude||0),n.le(i.longitude||0)}else"mapValue"in e?o_(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):$()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const i=e.fields||{};this.he(n,55);for(const r of Object.keys(i))this.de(r,n),this.ce(i[r],n)}ye(e,n){const i=e.values||[];this.he(n,50);for(const r of i)this.ce(r,n)}me(e,n){this.he(n,37),O.fromName(e).path.forEach(i=>{this.he(n,60),this.pe(i,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}nr.Ie=new nr;function wD(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function dg(t){const e=64-function(n){let i=0;for(let r=0;r<8;++r){const s=wD(255&n[r]);if(i+=s,s!==8)break}return i}(t);return Math.ceil(e/8)}class _D{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.Ee(i.value),i=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.be(i.value),i=n.next();this.Pe()}ve(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.Ee(i);else if(i<2048)this.Ee(960|i>>>6),this.Ee(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|i>>>12),this.Ee(128|63&i>>>6),this.Ee(128|63&i);else{const r=n.codePointAt(0);this.Ee(240|r>>>18),this.Ee(128|63&r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r)}}this.Ae()}Ve(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.be(i);else if(i<2048)this.be(960|i>>>6),this.be(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|i>>>12),this.be(128|63&i>>>6),this.be(128|63&i);else{const r=n.codePointAt(0);this.be(240|r>>>18),this.be(128|63&r>>>12),this.be(128|63&r>>>6),this.be(128|63&r)}}this.Pe()}Se(e){const n=this.De(e),i=dg(n);this.Ce(1+i),this.buffer[this.position++]=255&i;for(let r=n.length-i;r<n.length;++r)this.buffer[this.position++]=255&n[r]}xe(e){const n=this.De(e),i=dg(n);this.Ce(1+i),this.buffer[this.position++]=~(255&i);for(let r=n.length-i;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(r){const s=new DataView(new ArrayBuffer(8));return s.setFloat64(0,r,!1),new Uint8Array(s.buffer)}(e),i=(128&n[0])!=0;n[0]^=i?255:128;for(let r=1;r<n.length;++r)n[r]^=i?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let i=2*this.buffer.length;i<n&&(i=n);const r=new Uint8Array(i);r.set(this.buffer),this.buffer=r}}class ID{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class bD{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class oo{constructor(){this.$e=new _D,this.Be=new ID(this.$e),this.Le=new bD(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n,i,r){this.indexId=e,this.documentKey=n,this.arrayValue=i,this.directionalValue=r}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(n);return i.set(this.directionalValue,0),n!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new ir(this.indexId,this.documentKey,this.arrayValue,i)}}function ii(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=fg(t.arrayValue,e.arrayValue),n!==0?n:(n=fg(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function fg(t,e){for(let n=0;n<t.length&&n<e.length;++n){const i=t[n]-e[n];if(i!==0)return i}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const i=n;i.isInequality()?this.Qe=i:this.Ge.push(i)}}je(e){z(e.collectionGroup===this.collectionId);const n=Mh(e);if(n!==void 0&&!this.We(n))return!1;const i=Qi(e);let r=0,s=0;for(;r<i.length&&this.We(i[r]);++r);if(r===i.length)return!0;if(this.Qe!==void 0){const o=i[r];if(!this.ze(this.Qe,o)||!this.He(this.Ke[s++],o))return!1;++r}for(;r<i.length;++r){const o=i[r];if(s>=this.Ke.length||!this.He(this.Ke[s++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===i}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){var e,n;if(z(t instanceof de||t instanceof Ee),t instanceof de){if(t instanceof f_){const r=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>de.create(t.field,"==",s)))||[];return Ee.create(r,"or")}return t}const i=t.filters.map(r=>J_(r));return Ee.create(i,t.op)}function TD(t){if(t.getFilters().length===0)return[];const e=zh(J_(t));return z(Z_(e)),Wh(e)||Gh(e)?[e]:e.getFilters()}function Wh(t){return t instanceof de}function Gh(t){return t instanceof Ee&&df(t)}function Z_(t){return Wh(t)||Gh(t)||function(e){if(e instanceof Ee&&Uh(e)){for(const n of e.getFilters())if(!Wh(n)&&!Gh(n))return!1;return!0}return!1}(t)}function zh(t){if(z(t instanceof de||t instanceof Ee),t instanceof de)return t;if(t.filters.length===1)return zh(t.filters[0]);const e=t.filters.map(i=>zh(i));let n=Ee.create(e,t.op);return n=Zc(n),Z_(n)?n:(z(n instanceof Ee),z(ws(n)),z(n.filters.length>1),n.filters.reduce((i,r)=>If(i,r)))}function If(t,e){let n;return z(t instanceof de||t instanceof Ee),z(e instanceof de||e instanceof Ee),n=t instanceof de?e instanceof de?function(i,r){return Ee.create([i,r],"and")}(t,e):pg(t,e):e instanceof de?pg(e,t):function(i,r){if(z(i.filters.length>0&&r.filters.length>0),ws(i)&&ws(r))return l_(i,r.getFilters());const s=Uh(i)?i:r,o=Uh(i)?r:i,a=s.filters.map(c=>If(c,o));return Ee.create(a,"or")}(t,e),Zc(n)}function pg(t,e){if(ws(e))return l_(e,t.getFilters());{const n=e.filters.map(i=>If(t,i));return Ee.create(n,"or")}}function Zc(t){if(z(t instanceof de||t instanceof Ee),t instanceof de)return t;const e=t.getFilters();if(e.length===1)return Zc(e[0]);if(c_(t))return t;const n=e.map(r=>Zc(r)),i=[];return n.forEach(r=>{r instanceof de?i.push(r):r instanceof Ee&&(r.op===t.op?i.push(...r.filters):i.push(r))}),i.length===1?i[0]:Ee.create(i,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(){this.Je=new bf}addToCollectionParentIndex(e,n){return this.Je.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(Jt.min())}updateCollectionGroup(e,n,i){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class bf{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new Ce(ge.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new Ce(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Uint8Array(0);class CD{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new bf,this.Xe=new Fi(i=>Er(i),(i,r)=>Pa(i,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const i=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const s={collectionId:i,parent:Ot(r)};return mg(e).put(s)}return v.resolve()}getCollectionParents(e,n){const i=[],r=IDBKeyRange.bound([n,""],[Xw(n),""],!1,!0);return mg(e).W(r).next(s=>{for(const o of s){if(o.collectionId!==n)break;i.push(Tn(o.parent))}return i})}addFieldIndex(e,n){const i=uc(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete r.indexId;const s=i.add(r);if(n.indexState){const o=co(e);return s.next(a=>{o.put(ug(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const i=uc(e),r=co(e),s=ao(e);return i.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const i=ao(e);let r=!0;const s=new Map;return v.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{r&&(r=!!a),s.set(o,a)})).next(()=>{if(r){let o=oe();const a=[];return v.forEach(s,(c,u)=>{var l;A("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(N=>`${N.fieldPath}:${N.kind}`).join(",")}`} to execute ${Er(n)}`);const h=function(N,G){const K=Mh(G);if(K===void 0)return null;for(const ne of Yc(N,K.fieldPath))switch(ne.op){case"array-contains-any":return ne.value.arrayValue.values||[];case"array-contains":return[ne.value]}return null}(u,c),d=function(N,G){const K=new Map;for(const ne of Qi(G))for(const Y of Yc(N,ne.fieldPath))switch(Y.op){case"==":case"in":K.set(ne.fieldPath.canonicalString(),Y.value);break;case"not-in":case"!=":return K.set(ne.fieldPath.canonicalString(),Y.value),Array.from(K.values())}return null}(u,c),p=function(N,G){const K=[];let ne=!0;for(const Y of Qi(G)){const U=Y.kind===0?zm(N,Y.fieldPath,N.startAt):Qm(N,Y.fieldPath,N.startAt);K.push(U.value),ne&&(ne=U.inclusive)}return new Di(K,ne)}(u,c),g=function(N,G){const K=[];let ne=!0;for(const Y of Qi(G)){const U=Y.kind===0?Qm(N,Y.fieldPath,N.endAt):zm(N,Y.fieldPath,N.endAt);K.push(U.value),ne&&(ne=U.inclusive)}return new Di(K,ne)}(u,c),w=this.en(c,u,p),C=this.en(c,u,g),D=this.nn(c,u,d),L=this.sn(c.indexId,h,w,p.inclusive,C,g.inclusive,D);return v.forEach(L,N=>i.J(N,n.limit).next(G=>{G.forEach(K=>{const ne=O.fromSegments(K.documentKey);o.has(ne)||(o=o.add(ne),a.push(ne))})}))}).next(()=>a)}return v.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=TD(Ee.create(e.filters,"and")).map(i=>Bh(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,i,r,s,o,a){const c=(n!=null?n.length:1)*Math.max(i.length,s.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):cc,p=this.on(e,d,i[h%u],r),g=this.un(e,d,s[h%u],o),w=a.map(C=>this.on(e,d,C,!0));l.push(...this.createRange(p,g,w))}return l}on(e,n,i,r){const s=new ir(e,O.empty(),n,i);return r?s:s.Ue()}un(e,n,i,r){const s=new ir(e,O.empty(),n,i);return r?s.Ue():s}tn(e,n){const i=new ED(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(s=>{let o=null;for(const a of s)i.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let i=2;const r=this.Ze(n);return v.forEach(r,s=>this.tn(e,s).next(o=>{o?i!==0&&o.fields.length<function(a){let c=new Ce(Xe.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(s)&&(i=1):i=0})).next(()=>function(s){return s.limit!==null}(n)&&r.length>1&&i===2?1:i)}cn(e,n){const i=new oo;for(const r of Qi(e)){const s=n.data.field(r.fieldPath);if(s==null)return null;const o=i.qe(r.kind);nr.Ie.ue(s,o)}return i.Fe()}rn(e){const n=new oo;return nr.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const i=new oo;return nr.Ie.ue(br(this.databaseId,n),i.qe(function(r){const s=Qi(r);return s.length===0?0:s[s.length-1].kind}(e))),i.Fe()}nn(e,n,i){if(i===null)return[];let r=[];r.push(new oo);let s=0;for(const o of Qi(e)){const a=i[s++];for(const c of r)if(this.hn(n,o.fieldPath)&&oa(a))r=this.ln(r,o,a);else{const u=c.qe(o.kind);nr.Ie.ue(a,u)}}return this.fn(r)}en(e,n,i){return this.nn(e,n,i.position)}fn(e){const n=[];for(let i=0;i<e.length;++i)n[i]=e[i].Fe();return n}ln(e,n,i){const r=[...e],s=[];for(const o of i.arrayValue.values||[])for(const a of r){const c=new oo;c.seed(a.Fe()),nr.Ie.ue(o,c.qe(n.kind)),s.push(c)}return s}hn(e,n){return!!e.filters.find(i=>i instanceof de&&i.field.isEqual(n)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,n){const i=uc(e),r=co(e);return(n?i.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):i.W()).next(s=>{const o=[];return v.forEach(s,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new zc(l.sequenceNumber,new Jt(Ar(l.readTime),new O(Tn(l.documentKey)),l.largestBatchId)):zc.empty(),d=u.fields.map(([p,g])=>new uk(Xe.fromServerFormat(p),g));return new Jw(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((i,r)=>{const s=i.indexState.sequenceNumber-r.indexState.sequenceNumber;return s!==0?s:se(i.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,i){const r=uc(e),s=co(e);return this.dn(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>v.forEach(a,c=>s.put(ug(c.indexId,this.user,o,i)))))}updateIndexEntries(e,n){const i=new Map;return v.forEach(n,(r,s)=>{const o=i.get(r.collectionGroup);return(o?v.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(i.set(r.collectionGroup,a),v.forEach(a,c=>this._n(e,r,c).next(u=>{const l=this.wn(s,c);return u.isEqual(l)?v.resolve():this.mn(e,s,c,u,l)}))))})}gn(e,n,i,r){return ao(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(i,n.key),documentKey:n.key.path.toArray()})}yn(e,n,i,r){return ao(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(i,n.key),n.key.path.toArray()])}_n(e,n,i){const r=ao(e);let s=new Ce(ii);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.an(i,n)])},(o,a)=>{s=s.add(new ir(i.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}wn(e,n){let i=new Ce(ii);const r=this.cn(n,e);if(r==null)return i;const s=Mh(n);if(s!=null){const o=e.data.field(s.fieldPath);if(oa(o))for(const a of o.arrayValue.values||[])i=i.add(new ir(n.indexId,e.key,this.rn(a),r))}else i=i.add(new ir(n.indexId,e.key,cc,r));return i}mn(e,n,i,r,s){A("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=Wr(d),w=Wr(p);for(;g||w;){let C=!1,D=!1;if(g&&w){const L=u(g,w);L<0?D=!0:L>0&&(C=!0)}else g!=null?D=!0:C=!0;C?(l(w),w=Wr(p)):D?(h(g),g=Wr(d)):(g=Wr(d),w=Wr(p))}}(r,s,ii,a=>{o.push(this.gn(e,n,i,a))},a=>{o.push(this.yn(e,n,i,a))}),v.waitFor(o)}dn(e){let n=1;return co(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,r,s)=>{s.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,i){i=i.sort((o,a)=>ii(o,a)).filter((o,a,c)=>!a||ii(o,c[a-1])!==0);const r=[];r.push(e);for(const o of i){const a=ii(o,e),c=ii(o,n);if(a===0)r[0]=e.Ue();else if(a>0&&c<0)r.push(o),r.push(o.Ue());else if(c>0)break}r.push(n);const s=[];for(let o=0;o<r.length;o+=2){if(this.pn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,cc,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,cc,[]];s.push(IDBKeyRange.bound(a,c))}return s}pn(e,n){return ii(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(gg)}getMinOffset(e,n){return v.mapArray(this.Ze(n),i=>this.tn(e,i).next(r=>r||$())).next(gg)}}function mg(t){return ft(t,"collectionParents")}function ao(t){return ft(t,"indexEntries")}function uc(t){return ft(t,"indexConfiguration")}function co(t){return ft(t,"indexState")}function gg(t){z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let i=1;i<t.length;i++){const r=t[i].indexState.offset;uf(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new Jt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t,e,n){const i=t.store("mutations"),r=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Z({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{z(a===1)}));const u=[];for(const l of n.mutations){const h=W_(e,l.key.path,n.batchId);s.push(r.delete(h)),u.push(l.key)}return v.waitFor(s).next(()=>u)}function eu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw $();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);class Yu{constructor(e,n,i,r){this.userId=e,this.yt=n,this.indexManager=i,this.referenceDelegate=r,this.In={}}static re(e,n,i,r){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Yu(s,n,i,r)}checkEmpty(e){let n=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ri(e).Z({index:"userMutationsIndex",range:i},(r,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,i,r){const s=Jr(e),o=ri(e);return o.add({}).next(a=>{z(typeof a=="number");const c=new yf(a,n,i,r),u=function(d,p,g){const w=g.baseMutations.map(D=>ua(d.ie,D)),C=g.mutations.map(D=>ua(d.ie,D));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:w,mutations:C}}(this.yt,this.userId,c),l=[];let h=new Ce((d,p)=>se(d.canonicalString(),p.canonicalString()));for(const d of r){const p=W_(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,eD))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),v.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return ri(e).get(n).next(i=>i?(z(i.userId===this.userId),tr(this.yt,i)):null)}Tn(e,n){return this.In[n]?v.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(i=>{if(i){const r=i.keys();return this.In[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=IDBKeyRange.lowerBound([this.userId,i]);let s=null;return ri(e).Z({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(z(a.batchId>=i),s=tr(this.yt,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return ri(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(r,s,o)=>{i=s.batchId,o.done()}).next(()=>i)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ri(e).W("userMutationsIndex",n).next(i=>i.map(r=>tr(this.yt,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const i=Ec(this.userId,n.path),r=IDBKeyRange.lowerBound(i),s=[];return Jr(e).Z({range:r},(o,a,c)=>{const[u,l,h]=o,d=Tn(l);if(u===this.userId&&n.path.isEqual(d))return ri(e).get(h).next(p=>{if(!p)throw $();z(p.userId===this.userId),s.push(tr(this.yt,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ce(se);const r=[];return n.forEach(s=>{const o=Ec(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Jr(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,w=Tn(p);d===this.userId&&s.path.isEqual(w)?i=i.add(g):h.done()});r.push(c)}),v.waitFor(r).next(()=>this.En(e,i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1,s=Ec(this.userId,i),o=IDBKeyRange.lowerBound(s);let a=new Ce(se);return Jr(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=Tn(d);h===this.userId&&i.isPrefixOf(g)?g.length===r&&(a=a.add(p)):l.done()}).next(()=>this.En(e,a))}En(e,n){const i=[],r=[];return n.forEach(s=>{r.push(ri(e).get(s).next(o=>{if(o===null)throw $();z(o.userId===this.userId),i.push(tr(this.yt,o))}))}),v.waitFor(r).next(()=>i)}removeMutationBatch(e,n){return eI(e.se,this.userId,n).next(i=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),v.forEach(i,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return v.resolve();const i=IDBKeyRange.lowerBound([this.userId]),r=[];return Jr(e).Z({range:i},(s,o,a)=>{if(s[0]===this.userId){const c=Tn(s[1]);r.push(c)}else a.done()}).next(()=>{z(r.length===0)})})}containsKey(e,n){return tI(e,this.userId,n)}Rn(e){return nI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function tI(t,e,n){const i=Ec(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return Jr(t).Z({range:s,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),u.done()}).next(()=>o)}function ri(t){return ft(t,"mutations")}function Jr(t){return ft(t,"documentMutations")}function nI(t){return ft(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new kr(0)}static vn(){return new kr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const i=new kr(n.highestTargetId);return n.highestTargetId=i.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>Q.fromTimestamp(new Ue(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,i){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=n,i&&(r.lastRemoteSnapshotVersion=i.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.Sn(e,r)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(i=>(i.targetCount+=1,this.Cn(n,i),this.Sn(e,i))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Gr(e).delete(n.targetId)).next(()=>this.Vn(e)).next(i=>(z(i.targetCount>0),i.targetCount-=1,this.Sn(e,i)))}removeTargets(e,n,i){let r=0;const s=[];return Gr(e).Z((o,a)=>{const c=Io(a);c.sequenceNumber<=n&&i.get(c.targetId)===null&&(r++,s.push(this.removeTargetData(e,c)))}).next(()=>v.waitFor(s)).next(()=>r)}forEachTarget(e,n){return Gr(e).Z((i,r)=>{const s=Io(r);n(s)})}Vn(e){return vg(e).get("targetGlobalKey").next(n=>(z(n!==null),n))}Sn(e,n){return vg(e).put("targetGlobalKey",n)}Dn(e,n){return Gr(e).put(X_(this.yt,n))}Cn(e,n){let i=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,i=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const i=Er(n),r=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let s=null;return Gr(e).Z({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const u=Io(a);Pa(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,i){const r=[],s=hi(e);return n.forEach(o=>{const a=Ot(o.path);r.push(s.put({targetId:i,path:a})),r.push(this.referenceDelegate.addReference(e,i,o))}),v.waitFor(r)}removeMatchingKeys(e,n,i){const r=hi(e);return v.forEach(n,s=>{const o=Ot(s.path);return v.waitFor([r.delete([i,o]),this.referenceDelegate.removeReference(e,i,s)])})}removeMatchingKeysForTargetId(e,n){const i=hi(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return i.delete(r)}getMatchingKeysForTargetId(e,n){const i=IDBKeyRange.bound([n],[n+1],!1,!0),r=hi(e);let s=oe();return r.Z({range:i,X:!0},(o,a,c)=>{const u=Tn(o[1]),l=new O(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const i=Ot(n.path),r=IDBKeyRange.bound([i],[Xw(i)],!1,!0);let s=0;return hi(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}ne(e,n){return Gr(e).get(n).next(i=>i?Io(i):null)}}function Gr(t){return ft(t,"targets")}function vg(t){return ft(t,"targetGlobal")}function hi(t){return ft(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg([t,e],[n,i]){const r=se(t,n);return r===0?se(e,i):r}class kD{constructor(e){this.xn=e,this.buffer=new Ce(wg),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();wg(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DD{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Li(n)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Mi(n)}await this.Fn(3e5)})}}class xD{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return v.resolve(Vt.at);const i=new kD(n);return this.$n.forEachTarget(e,r=>i.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>i.On(r))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.$n.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(yg)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),yg):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let i,r,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(i=h,a=Date.now(),this.removeTargets(e,i,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,i))).next(h=>(u=Date.now(),Oh()<=we.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e,n){this.db=e,this.garbageCollector=function(i,r){return new xD(i,r)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(i=>n.next(r=>i+r))}Un(e){let n=0;return this.Ln(e,i=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(i,r)=>n(r))}addReference(e,n,i){return lc(e,i)}removeReference(e,n,i){return lc(e,i)}removeTargets(e,n,i){return this.db.getTargetCache().removeTargets(e,n,i)}markPotentiallyOrphaned(e,n){return lc(e,n)}Gn(e,n){return function(i,r){let s=!1;return nI(i).tt(o=>tI(i,o,r).next(a=>(a&&(s=!0),v.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return s++,i.getEntry(e,o).next(()=>(i.removeEntry(o,Q.min()),hi(e).delete([0,Ot(o.path)])))});r.push(c)}}).next(()=>v.waitFor(r)).next(()=>i.apply(e)).next(()=>s)}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,n){return lc(e,n)}Kn(e,n){const i=hi(e);let r,s=Vt.at;return i.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Vt.at&&n(new O(Tn(r)),s),s=u,r=c):s=Vt.at}).next(()=>{s!==Vt.at&&n(new O(Tn(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function lc(t,e){return hi(t).put(function(n,i){return{targetId:0,path:Ot(n.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.changes=new Fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?v.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,i){return Wi(e).put(i)}removeEntry(e,n,i){return Wi(e).delete(function(r,s){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Jc(s),o[o.length-1]]}(n,i))}updateMetadata(e,n){return this.getMetadata(e).next(i=>(i.byteSize+=n,this.Qn(e,i)))}getEntry(e,n){let i=Oe.newInvalidDocument(n);return Wi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(uo(n))},(r,s)=>{i=this.jn(n,s)}).next(()=>i)}Wn(e,n){let i={size:0,document:Oe.newInvalidDocument(n)};return Wi(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(uo(n))},(r,s)=>{i={document:this.jn(n,s),size:eu(s)}}).next(()=>i)}getEntries(e,n){let i=$t();return this.zn(e,n,(r,s)=>{const o=this.jn(r,s);i=i.insert(r,o)}).next(()=>i)}Hn(e,n){let i=$t(),r=new We(O.comparator);return this.zn(e,n,(s,o)=>{const a=this.jn(s,o);i=i.insert(s,a),r=r.insert(s,eu(o))}).next(()=>({documents:i,Jn:r}))}zn(e,n,i){if(n.isEmpty())return v.resolve();let r=new Ce(bg);n.forEach(c=>r=r.add(c));const s=IDBKeyRange.bound(uo(r.first()),uo(r.last())),o=r.getIterator();let a=o.getNext();return Wi(e).Z({index:"documentKeyIndex",range:s},(c,u,l)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&bg(a,h)<0;)i(a,null),a=o.getNext();a&&a.isEqual(h)&&(i(a,u),a=o.hasNext()?o.getNext():null),a?l.j(uo(a)):l.done()}).next(()=>{for(;a;)i(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,i,r){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Jc(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wi(e).W(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=$t();for(const l of c){const h=this.jn(O.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Ma(n,h)||r.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,n,i,r){let s=$t();const o=Ig(n,i),a=Ig(n,Jt.max());return Wi(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(h.key,h),s.size===r&&l.done()}).next(()=>s)}newChangeBuffer(e){return new PD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return _g(e).get("remoteDocumentGlobalKey").next(n=>(z(!!n),n))}Qn(e,n){return _g(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const i=yD(this.yt,n);if(!(i.isNoDocument()&&i.version.isEqual(Q.min())))return i}return Oe.newInvalidDocument(e)}}function rI(t){return new RD(t)}class PD extends iI{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Fi(i=>i.toString(),(i,r)=>i.isEqual(r))}applyChanges(e){const n=[];let i=0,r=new Ce((s,o)=>se(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Xn.get(s);if(n.push(this.Yn.removeEntry(e,s,a.readTime)),o.isValidDocument()){const c=ag(this.Yn.yt,o);r=r.add(s.path.popLast());const u=eu(c);i+=u-a.size,n.push(this.Yn.addEntry(e,s,c))}else if(i-=a.size,this.trackRemovals){const c=ag(this.Yn.yt,o.convertToNoDocument(Q.min()));n.push(this.Yn.addEntry(e,s,c))}}),r.forEach(s=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.Yn.updateMetadata(e,i)),v.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(i=>(this.Xn.set(n,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:i,Jn:r})=>(r.forEach((s,o)=>{this.Xn.set(s,{size:o,readTime:i.get(s).readTime})}),i))}}function _g(t){return ft(t,"remoteDocumentGlobal")}function Wi(t){return ft(t,"remoteDocumentsV14")}function uo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ig(t,e){const n=e.documentKey.path.toArray();return[t,Jc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function bg(t,e){const n=t.path.toArray(),i=e.path.toArray();let r=0;for(let s=0;s<n.length-2&&s<i.length-2;++s)if(r=se(n[s],i[s]),r)return r;return r=se(n.length,i.length),r||(r=se(n[n.length-2],i[i.length-2]),r||se(n[n.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&xo(i.mutation,r,Bt.empty(),Ue.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,oe()).next(()=>i))}getLocalViewOfDocuments(e,n,i=oe()){const r=En();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let o=_o();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=En();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,oe()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,r){let s=$t();const o=No(),a=No();return n.forEach((c,u)=>{const l=i.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Qn)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),xo(l.mutation,u,l.mutation.getFieldMask(),Ue.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new OD(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=No();let r=new We((o,a)=>o-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=i.get(c)||Bt.empty();l=a.applyToLocalView(u,l),i.set(c,l);const h=(r.get(a.batchId)||oe()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=R_();l.forEach(d=>{if(!s.has(d)){const p=C_(n.get(d),i.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):v.resolve(En());let a=-1,c=s;return o.next(u=>v.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?v.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,oe())).next(l=>({batchId:a,changes:N_(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(i=>{let r=_o();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const r=n.collectionGroup;let s=_o();return this.indexManager.getCollectionParents(e,r).next(o=>v.forEach(o,a=>{const c=function(u,l){return new zn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,r))).next(s=>{r.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Oe.newInvalidDocument(u)))});let o=_o();return s.forEach((a,c)=>{const u=r.get(a);u!==void 0&&xo(u.mutation,c,Bt.empty(),Ue.now()),Ma(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return v.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var i;return this.Zn.set(n.id,{id:(i=n).id,version:i.version,createTime:Je(i.createTime)}),v.resolve()}getNamedQuery(e,n){return v.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(i){return{name:i.name,query:_f(i.bundledQuery),readTime:Je(i.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(){this.overlays=new We(O.comparator),this.es=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const i=En();return v.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.oe(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.es.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(i)),v.resolve()}getOverlaysForCollection(e,n,i){const r=En(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>i&&r.set(c.getKey(),c)}return v.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new We((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let l=s.get(u.largestBatchId);l===null&&(l=En(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=En(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return v.resolve(a)}oe(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(i.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new wf(n,i));let s=this.es.get(n);s===void 0&&(s=oe(),this.es.set(n,s)),this.es.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.ns=new Ce(ct.ss),this.rs=new Ce(ct.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const i=new ct(e,n);this.ns=this.ns.add(i),this.rs=this.rs.add(i)}us(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.cs(new ct(e,n))}hs(e,n){e.forEach(i=>this.removeReference(i,n))}ls(e){const n=new O(new ge([])),i=new ct(n,e),r=new ct(n,e+1),s=[];return this.rs.forEachInRange([i,r],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ge([])),i=new ct(n,e),r=new ct(n,e+1);let s=oe();return this.rs.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ct(e,0),i=this.ns.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class ct{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ce(ct.ss)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yf(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new ct(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.ps(i),s=r<0?0:r;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new ct(n,0),r=new ct(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([i,r],o=>{const a=this.ys(o._s);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Ce(se);return n.forEach(r=>{const s=new ct(r,0),o=new ct(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{i=i.add(a._s)})}),v.resolve(this.Is(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;O.isDocumentKey(s)||(s=s.child(""));const o=new ct(new O(s),0);let a=new Ce(se);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),v.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(i=>{const r=this.ys(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){z(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.gs;return v.forEach(n.mutations,r=>{const s=new ct(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=i})}An(e){}containsKey(e,n){const i=new ct(n,0),r=this.gs.firstAfterOrEqual(i);return v.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.Es=e,this.docs=new We(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return v.resolve(i?i.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let i=$t();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Oe.newInvalidDocument(r))}),v.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=$t();const o=n.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uf(e_(l),i)<=0||(r.has(l.key)||Ma(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,i,r){$()}As(e,n){return v.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new VD(this)}getSize(e){return v.resolve(this.size)}}class VD extends iI{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(i)}),v.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e){this.persistence=e,this.Rs=new Fi(n=>Er(n),Pa),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ef,this.targetCount=0,this.vs=kr.Pn()}forEachTarget(e,n){return this.Rs.forEach((i,r)=>n(r)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.bs&&(this.bs=n),v.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new kr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.Dn(n),v.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),v.waitFor(s).next(()=>r)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const i=this.Rs.get(n)||null;return v.resolve(i)}addMatchingKeys(e,n,i){return this.Ps.us(n,i),v.resolve()}removeMatchingKeys(e,n,i){this.Ps.hs(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),v.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Ps.ds(n);return v.resolve(i)}containsKey(e,n){return v.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Vt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new BD(this),this.indexManager=new SD,this.remoteDocumentCache=function(i){return new UD(i)}(i=>this.referenceDelegate.xs(i)),this.yt=new Y_(n),this.Ns=new MD(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Vs[e.toKey()];return i||(i=new FD(n,this.referenceDelegate),this.Vs[e.toKey()]=i),i}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,i){A("MemoryPersistence","Starting transaction:",e);const r=new $D(this.Ss.next());return this.referenceDelegate.ks(),i(r).next(s=>this.referenceDelegate.Os(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ms(e,n){return v.or(Object.values(this.Vs).map(i=>()=>i.containsKey(e,n)))}}class $D extends n_{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Fs=new Ef,this.$s=null}static Bs(e){return new Xu(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,i){return this.Fs.addReference(i,n),this.Ls.delete(i.toString()),v.resolve()}removeReference(e,n,i){return this.Fs.removeReference(i,n),this.Ls.add(i.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),v.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Ls.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Ls,i=>{const r=O.fromPath(i);return this.qs(e,r).next(s=>{s||n.removeEntry(r,Q.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(i=>{i?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return v.or([()=>v.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.yt=e}$(e,n,i,r){const s=new Ku("createOrUpgrade",n);i<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",og,{unique:!0}),a.createObjectStore("documentMutations")}(e),Eg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=v.resolve();return i<3&&r>=3&&(i!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Eg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(s))),i<4&&r>=4&&(i!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",og,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return v.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&r>=5&&(o=o.next(()=>this.Us(s))),i<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(s)))),i<7&&r>=7&&(o=o.next(()=>this.Gs(s))),i<8&&r>=8&&(o=o.next(()=>this.Qs(e,s))),i<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&r>=10&&(o=o.next(()=>this.js(s))),i<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:dD});c.createIndex("collectionPathOverlayIndex",fD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",pD,{unique:!1})})(e)})),i<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:tD});c.createIndex("documentKeyIndex",nD),c.createIndex("collectionGroupIndex",iD)}(e)).next(()=>this.Ws(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&r>=14&&(o=o.next(()=>this.zs(e,s))),i<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:cD}).createIndex("sequenceNumberIndex",uD,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:lD}).createIndex("documentKeyIndex",hD,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((i,r)=>{n+=eu(r)}).next(()=>{const i={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}Us(e){const n=e.store("mutationQueues"),i=e.store("mutations");return n.W().next(r=>v.forEach(r,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return i.W("userMutationsIndex",o).next(a=>v.forEach(a,c=>{z(c.userId===s.userId);const u=tr(this.yt,c);return eI(e,s.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const s=[];return i.Z((o,a)=>{const c=new ge(o),u=function(l){return[0,Ot(l)]}(c);s.push(n.get(u).next(l=>l?v.resolve():(h=>n.put({targetId:0,path:Ot(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>v.waitFor(s))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:aD});const i=n.store("collectionParents"),r=new bf,s=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return i.put({collectionId:a,parent:Ot(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ge(o);return s(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Tn(a);return s(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((i,r)=>{const s=Io(r),o=X_(this.yt,s);return n.put(o)})}Ws(e,n){const i=n.store("remoteDocuments"),r=[];return i.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new O(ge.fromString(u.document.name).popFirst(5)):u.noDocument?O.fromSegments(u.noDocument.path):u.unknownDocument?O.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(l))}).next(()=>v.waitFor(r))}zs(e,n){const i=n.store("mutations"),r=rI(this.yt),s=new oI(Xu.Bs,this.yt.ie);return i.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:oe();tr(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),v.forEach(a,(c,u)=>{const l=new ut(u),h=Qu.re(this.yt,l),d=s.getIndexManager(l),p=Yu.re(l,this.yt,d,s.referenceDelegate);return new sI(r,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Hh(n,Vt.at),c).next()})})}}function Eg(t){t.createObjectStore("targetDocuments",{keyPath:sD}).createIndex("documentTargetsIndex",oD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",rD,{unique:!0}),t.createObjectStore("targetGlobal")}const Wl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Tf{constructor(e,n,i,r,s,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=i,this.Hs=s,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Tf.C())throw new T(_.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ND(this,r),this.ii=n+"main",this.yt=new Y_(c),this.ri=new un(this.ii,this.Xs,new qD(this.yt)),this.Cs=new AD(this.referenceDelegate,this.yt),this.remoteDocumentCache=rI(this.yt),this.Ns=new vD,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,Wl);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new Vt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>hc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Li(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return lo(e).get("owner").next(n=>v.resolve(this.mi(n)))}gi(e){return hc(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const i=ft(n,"clientMetadata");return i.W().next(r=>{const s=this.Ii(r,18e5),o=r.filter(a=>s.indexOf(a)===-1);return v.forEach(o,a=>i.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?v.resolve(!0):lo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new T(_.FAILED_PRECONDITION,Wl);return!1}}return!(!this.networkEnabled||!this.inForeground)||hc(e).W().next(i=>this.Ii(i,5e3).find(r=>{if(this.clientId!==r.clientId){const s=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&A("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Hh(e,Vt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(i=>this.pi(i.updateTimeMs,n)&&!this.Ei(i.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>hc(e).W().next(n=>this.Ii(n,18e5).map(i=>i.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Yu.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new CD(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Qu.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,i){A("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",s=(o=this.Xs)===15?gD:o===14?Q_:o===13?z_:o===12?mD:o===11?G_:void $();var o;let a;return this.ri.runTransaction(e,r,s,c=>(a=new Hh(c,this.Ss?this.Ss.next():Vt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new T(_.FAILED_PRECONDITION,t_);return i(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>i(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return lo(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new T(_.FAILED_PRECONDITION,Wl)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return lo(e).put("owner",n)}static C(){return un.C()}_i(e){const n=lo(e);return n.get("owner").next(i=>this.mi(i)?(A("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):v.resolve())}pi(e,n){const i=Date.now();return!(e<i-n)&&(!(e>i)||(Ye(`Detected an update time that is in the future: ${e} > ${i}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),ES()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const i=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Ye("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function lo(t){return ft(t,"owner")}function hc(t){return ft(t,"clientMetadata")}function Sf(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.Si=i,this.Di=r}static Ci(e,n){let i=oe(),r=oe();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Cf(e,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,i,r){return this.ki(e,n).next(s=>s||this.Oi(e,n,r,i)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Ym(n))return v.resolve(null);let i=jt(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Xc(n,null,"F"),i=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const o=oe(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Xc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,i,r){return Ym(n)||r.isEqual(Q.min())?this.Mi(e,n):this.Ni.getDocuments(e,i).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,i,r)?this.Mi(e,n):(Oh()<=we.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qh(n)),this.Bi(e,o,n,Zw(r,-1)))})}Fi(e,n){let i=new Ce(v_(e));return n.forEach((r,s)=>{Ma(e,s)&&(i=i.add(s))}),i}$i(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Mi(e,n){return Oh()<=we.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",qh(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jt.min())}Bi(e,n,i,r){return this.Ni.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,i,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new We(se),this.Ui=new Fi(s=>Er(s),Pa),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(i)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function cI(t,e,n,i){return new jD(t,e,n,i)}async function uI(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let c=oe();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(i,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function KD(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=v.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const w=c.docVersions.get(p);z(w!==null),g.version.compareTo(w)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=oe();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function lI(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function HD(t,e){const n=F(t),i=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,l.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(ot.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,i)),r=r.insert(h,p),function(g,w,C){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(d,p,l)&&a.push(n.Cs.updateTargetData(s,p))});let c=$t(),u=oe();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(hI(s,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!i.isEqual(Q.min())){const l=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(l)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.qi=r,s))}function hI(t,e,n){let i=oe(),r=oe();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let o=$t();return n.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function WD(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function Es(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Cs.getTargetData(i,e).next(s=>s?(r=s,v.resolve(r)):n.Cs.allocateTargetId(i).next(o=>(r=new wi(e,o,0,i.currentSequenceNumber),n.Cs.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.qi.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(i.targetId,i),n.Ui.set(e,i.targetId)),i})}async function Ts(t,e,n){const i=F(t),r=i.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Li(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.qi=i.qi.remove(e),i.Ui.delete(r.target)}function tu(t,e,n){const i=F(t);let r=Q.min(),s=oe();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=F(a),h=l.Ui.get(u);return h!==void 0?v.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(i,o,jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>i.Li.getDocumentsMatchingQuery(o,e,n?r:Q.min(),n?s:oe())).next(a=>(pI(i,y_(e),a),{documents:a,Hi:s})))}function dI(t,e){const n=F(t),i=F(n.Cs),r=n.qi.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",s=>i.ne(s,e).next(o=>o?o.target:null))}function fI(t,e){const n=F(t),i=n.Ki.get(e)||Q.min();return n.persistence.runTransaction("Get new document changes","readonly",r=>n.Gi.getAllFromCollectionGroup(r,e,Zw(i,-1),Number.MAX_SAFE_INTEGER)).then(r=>(pI(n,e,r),r))}function pI(t,e,n){let i=t.Ki.get(e)||Q.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.Ki.set(e,i)}async function GD(t,e,n,i){const r=F(t);let s=oe(),o=$t();for(const u of n){const l=e.Ji(u.metadata.name);u.document&&(s=s.add(l));const h=e.Yi(u);h.setReadTime(e.Xi(u.metadata.readTime)),o=o.insert(l,h)}const a=r.Gi.newChangeBuffer({trackRemovals:!0}),c=await Es(r,function(u){return jt(Ks(ge.fromString(`__bundle__/docs/${u}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",u=>hI(u,a,o).next(l=>(a.apply(u),l)).next(l=>r.Cs.removeMatchingKeysForTargetId(u,c.targetId).next(()=>r.Cs.addMatchingKeys(u,s,c.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(u,l.Wi,l.zi)).next(()=>l.Wi)))}async function zD(t,e,n=oe()){const i=await Es(t,jt(_f(e.bundledQuery))),r=F(t);return r.persistence.runTransaction("Save named query","readwrite",s=>{const o=Je(e.readTime);if(i.snapshotVersion.compareTo(o)>=0)return r.Ns.saveNamedQuery(s,e);const a=i.withResumeToken(ot.EMPTY_BYTE_STRING,o);return r.qi=r.qi.insert(a.targetId,a),r.Cs.updateTargetData(s,a).next(()=>r.Cs.removeMatchingKeysForTargetId(s,i.targetId)).next(()=>r.Cs.addMatchingKeys(s,n,i.targetId)).next(()=>r.Ns.saveNamedQuery(s,e))})}function Tg(t,e){return`firestore_clients_${t}_${e}`}function Sg(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function Gl(t,e){return`firestore_targets_${t}_${e}`}class nu{constructor(e,n,i,r){this.user=e,this.batchId=n,this.state=i,this.error=r}static Zi(e,n,i){const r=JSON.parse(i);let s,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(s=new T(r.error.code,r.error.message))),o?new nu(e,n,r.state,s):(Ye("SharedClientState",`Failed to parse mutation state for ID '${n}': ${i}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ro{constructor(e,n,i){this.targetId=e,this.state=n,this.error=i}static Zi(e,n){const i=JSON.parse(n);let r,s=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return s&&i.error&&(s=typeof i.error.message=="string"&&typeof i.error.code=="string",s&&(r=new T(i.error.code,i.error.message))),s?new Ro(e,i.state,r):(Ye("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class iu{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Zi(e,n){const i=JSON.parse(n);let r=typeof i=="object"&&i.activeTargetIds instanceof Array,s=zu();for(let o=0;r&&o<i.activeTargetIds.length;++o)r=r_(i.activeTargetIds[o]),s=s.add(i.activeTargetIds[o]);return r?new iu(e,s):(Ye("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Af{constructor(e,n){this.clientId=e,this.onlineState=n}static Zi(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Af(n.clientId,n.onlineState):(Ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qh{constructor(){this.activeTargetIds=zu()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zl{constructor(e,n,i,r,s){this.window=e,this.Hs=n,this.persistenceKey=i,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new We(se),this.started=!1,this.cr=[];const o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ar=Tg(this.persistenceKey,this.sr),this.hr=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Qh),this.lr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.mr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const i of e){if(i===this.sr)continue;const r=this.getItem(Tg(this.persistenceKey,i));if(r){const s=iu.Zi(i,r);s&&(this.ur=this.ur.insert(s.clientId,s))}}this.gr();const n=this.storage.getItem(this.wr);if(n){const i=this.yr(n);i&&this.pr(i)}for(const i of this.cr)this.rr(i);this.cr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let n=!1;return this.ur.forEach((i,r)=>{r.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,n,i){this.Tr(e,n,i),this.Er(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Gl(this.persistenceKey,e));if(i){const r=Ro.Zi(e,i);r&&(n=r.state)}}return this.Ar.er(e),this.gr(),n}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gl(this.persistenceKey,e))}updateQueryState(e,n,i){this.Rr(e,n,i)}handleUserChange(e,n,i){n.forEach(r=>{this.Er(r)}),this.currentUser=e,i.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return A("SharedClientState","READ",e,n),n}setItem(e,n){A("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const n=e;if(n.storageArea===this.storage){if(A("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ar)return void Ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.lr.test(n.key)){if(n.newValue==null){const i=this.vr(n.key);return this.Vr(i,null)}{const i=this.Sr(n.key,n.newValue);if(i)return this.Vr(i.clientId,i)}}else if(this.dr.test(n.key)){if(n.newValue!==null){const i=this.Dr(n.key,n.newValue);if(i)return this.Cr(i)}}else if(this._r.test(n.key)){if(n.newValue!==null){const i=this.Nr(n.key,n.newValue);if(i)return this.kr(i)}}else if(n.key===this.wr){if(n.newValue!==null){const i=this.yr(n.newValue);if(i)return this.pr(i)}}else if(n.key===this.hr){const i=function(r){let s=Vt.at;if(r!=null)try{const o=JSON.parse(r);z(typeof o=="number"),s=o}catch(o){Ye("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);i!==Vt.at&&this.sequenceNumberHandler(i)}else if(n.key===this.mr){const i=this.Or(n.newValue);await Promise.all(i.map(r=>this.syncEngine.Mr(r)))}}}else this.cr.push(n)})}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,n,i){const r=new nu(this.currentUser,e,n,i),s=Sg(this.persistenceKey,this.currentUser,e);this.setItem(s,r.tr())}Er(e){const n=Sg(this.persistenceKey,this.currentUser,e);this.removeItem(n)}br(e){const n={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(n))}Rr(e,n,i){const r=Gl(this.persistenceKey,e),s=new Ro(e,n,i);this.setItem(r,s.tr())}Pr(e){const n=JSON.stringify(Array.from(e));this.setItem(this.mr,n)}vr(e){const n=this.lr.exec(e);return n?n[1]:null}Sr(e,n){const i=this.vr(e);return iu.Zi(i,n)}Dr(e,n){const i=this.dr.exec(e),r=Number(i[1]),s=i[2]!==void 0?i[2]:null;return nu.Zi(new ut(s),r,n)}Nr(e,n){const i=this._r.exec(e),r=Number(i[1]);return Ro.Zi(r,n)}yr(e){return Af.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,n){const i=n?this.ur.insert(e,n):this.ur.remove(e),r=this.Ir(this.ur),s=this.Ir(i),o=[],a=[];return s.forEach(c=>{r.has(c)||o.push(c)}),r.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.Br(o,a).then(()=>{this.ur=i})}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let n=zu();return e.forEach((i,r)=>{n=n.unionWith(r.activeTargetIds)}),n}}class mI{constructor(){this.Lr=new Qh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,i){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Qh,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,i,r,s){const o=this.ho(e,n);A("RestConnection","Sending: ",o,i);const a={};return this.lo(a,r,s),this.fo(e,o,a,i).then(c=>(A("RestConnection","Received: ",c),c),c=>{throw gs("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",i),c})}_o(e,n,i,r,s,o){return this.ao(e,n,i,r,s)}lo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>e[s]=r),i&&i.headers.forEach((r,s)=>e[s]=r)}ho(e,n){const i=YD[e];return`${this.oo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,i,r){return new Promise((s,o)=>{const a=new XA;a.setWithCredentials(!0),a.listenOnce(zA.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Kl.NO_ERROR:const u=a.getResponseJson();A("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Kl.TIMEOUT:A("Connection",'RPC "'+e+'" timed out'),o(new T(_.DEADLINE_EXCEEDED,"Request time out"));break;case Kl.HTTP_ERROR:const l=a.getStatus();if(A("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const p=function(g){const w=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(w)>=0?w:_.UNKNOWN}(d.status);o(new T(p,d.message))}else o(new T(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(_.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{A("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,i,15)})}wo(e,n,i){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=WA(),o=GA(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new YA({})),this.lo(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const c=r.join("");A("Connection","Creating WebChannel: "+c,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new XD({Hr:g=>{h?A("Connection","Not sending because WebChannel is closed:",g):(l||(A("Connection","Opening WebChannel transport."),u.open(),l=!0),A("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),p=(g,w,C)=>{g.listen(w,D=>{try{C(D)}catch(L){setTimeout(()=>{throw L},0)}})};return p(u,oc.EventType.OPEN,()=>{h||A("Connection","WebChannel transport opened.")}),p(u,oc.EventType.CLOSE,()=>{h||(h=!0,A("Connection","WebChannel transport closed"),d.io())}),p(u,oc.EventType.ERROR,g=>{h||(h=!0,gs("Connection","WebChannel transport errored:",g),d.io(new T(_.UNAVAILABLE,"The operation could not be completed")))}),p(u,oc.EventType.MESSAGE,g=>{var w;if(!h){const C=g.data[0];z(!!C);const D=C,L=D.error||((w=D[0])===null||w===void 0?void 0:w.error);if(L){A("Connection","WebChannel received error:",L);const N=L.status;let G=function(ne){const Y=nt[ne];if(Y!==void 0)return D_(Y)}(N),K=L.message;G===void 0&&(G=_.INTERNAL,K="Unknown error status: "+N+" with message "+L.message),h=!0,d.io(new T(G,K)),u.close()}else A("Connection","WebChannel received:",C),d.ro(C)}}),p(o,QA.STAT_EVENT,g=>{g.stat===Lm.PROXY?A("Connection","Detected buffering proxy"):g.stat===Lm.NOPROXY&&A("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(){return typeof window<"u"?window:null}function Tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){return new jk(t,!0)}class kf{constructor(e,n,i=1e3,r=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=i,this.yo=r,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),i=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-i);r>0&&A("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n,i,r,s,o,a,c){this.Hs=e,this.vo=i,this.Vo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new kf(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.So===n&&this.Go(i,r)},i=>{e(()=>{const r=new T(_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Qo(r)})})}Go(e,n){const i=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{i(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{i(()=>this.Qo(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZD extends yI{constructor(e,n,i,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Wk(this.yt,e),i=function(r){if(!("targetChange"in r))return Q.min();const s=r.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Je(s.readTime):Q.min()}(e);return this.listener.Wo(n,i)}zo(e){const n={};n.database=ca(this.yt),n.addTarget=function(r,s){let o;const a=s.target;return o=Qc(a)?{documents:B_(r,a)}:{query:$_(r,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=M_(r,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=bs(r,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const i=zk(this.yt,e);i&&(n.labels=i),this.Bo(n)}Ho(e){const n={};n.database=ca(this.yt),n.removeTarget=e,this.Bo(n)}}class ex extends yI{constructor(e,n,i,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=Gk(e.writeResults,e.commitTime),i=Je(e.commitTime);return this.listener.Zo(i,n)}return z(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=ca(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>ua(this.yt,i))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.yt=r,this.nu=!1}su(){if(this.nu)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.ao(e,n,i,r,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new T(_.UNKNOWN,r.toString())})}_o(e,n,i,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,i,s,o,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class nx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ye(n),this.ou=!1):A("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ix{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{i.enqueueAndForget(async()=>{Ui(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=F(a);c._u.add(4),await Gs(c),c.gu.set("Unknown"),c._u.delete(4),await Ba(c)}(this))})}),this.gu=new nx(i,r)}}async function Ba(t){if(Ui(t))for(const e of t.wu)await e(!0)}async function Gs(t){for(const e of t.wu)await e(!1)}function Ju(t,e){const n=F(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Nf(n)?xf(n):Qs(n).ko()&&Df(n,e))}function la(t,e){const n=F(t),i=Qs(n);n.du.delete(e),i.ko()&&vI(n,e),n.du.size===0&&(i.ko()?i.Fo():Ui(n)&&n.gu.set("Unknown"))}function Df(t,e){t.yu.Ot(e.targetId),Qs(t).zo(e)}function vI(t,e){t.yu.Ot(e),Qs(t).Ho(e)}function xf(t){t.yu=new Vk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Qs(t).start(),t.gu.uu()}function Nf(t){return Ui(t)&&!Qs(t).No()&&t.du.size>0}function Ui(t){return F(t)._u.size===0}function wI(t){t.yu=void 0}async function rx(t){t.du.forEach((e,n)=>{Df(t,e)})}async function sx(t,e){wI(t),Nf(t)?(t.gu.hu(e),xf(t)):t.gu.set("Unknown")}async function ox(t,e,n){if(t.gu.set("Online"),e instanceof O_&&e.state===2&&e.cause)try{await async function(i,r){const s=r.cause;for(const o of r.targetIds)i.du.has(o)&&(await i.remoteSyncer.rejectListen(o,s),i.du.delete(o),i.yu.removeTarget(o))}(t,e)}catch(i){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await ru(t,i)}else if(e instanceof bc?t.yu.Kt(e):e instanceof P_?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Q.min()))try{const i=await lI(t.localStore);n.compareTo(i)>=0&&await function(r,s){const o=r.yu.Zt(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(ot.EMPTY_BYTE_STRING,c.snapshotVersion)),vI(r,a);const u=new wi(c.target,a,1,c.sequenceNumber);Df(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){A("RemoteStore","Failed to raise snapshot:",i),await ru(t,i)}}async function ru(t,e,n){if(!Li(e))throw e;t._u.add(1),await Gs(t),t.gu.set("Offline"),n||(n=()=>lI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ba(t)})}function _I(t,e){return e().catch(n=>ru(t,n,e))}async function zs(t){const e=F(t),n=xi(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;ax(e);)try{const r=await WD(e.localStore,i);if(r===null){e.fu.length===0&&n.Fo();break}i=r.batchId,cx(e,r)}catch(r){await ru(e,r)}II(e)&&bI(e)}function ax(t){return Ui(t)&&t.fu.length<10}function cx(t,e){t.fu.push(e);const n=xi(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function II(t){return Ui(t)&&!xi(t).No()&&t.fu.length>0}function bI(t){xi(t).start()}async function ux(t){xi(t).eu()}async function lx(t){const e=xi(t);for(const n of t.fu)e.Xo(n.mutations)}async function hx(t,e,n){const i=t.fu.shift(),r=vf.from(i,e,n);await _I(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await zs(t)}async function dx(t,e){e&&xi(t).Yo&&await async function(n,i){if(r=i.code,k_(r)&&r!==_.ABORTED){const s=n.fu.shift();xi(n).Mo(),await _I(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zs(n)}var r}(t,e),II(t)&&bI(t)}async function Ag(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const i=Ui(n);n._u.add(3),await Gs(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ba(n)}async function Yh(t,e){const n=F(t);e?(n._u.delete(2),await Ba(n)):e||(n._u.add(2),await Gs(n),n.gu.set("Unknown"))}function Qs(t){return t.pu||(t.pu=function(e,n,i){const r=F(e);return r.su(),new ZD(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,i)}(t.datastore,t.asyncQueue,{Yr:rx.bind(null,t),Zr:sx.bind(null,t),Wo:ox.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Nf(t)?xf(t):t.gu.set("Unknown")):(await t.pu.stop(),wI(t))})),t.pu}function xi(t){return t.Iu||(t.Iu=function(e,n,i){const r=F(e);return r.su(),new ex(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,i)}(t.datastore,t.asyncQueue,{Yr:ux.bind(null,t),Zr:dx.bind(null,t),tu:lx.bind(null,t),Zo:hx.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await zs(t)):(await t.Iu.stop(),t.fu.length>0&&(A("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Rf(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ys(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),Li(t))return new T(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.comparator=e?(n,i)=>e(n,i)||O.comparator(n.key,i.key):(n,i)=>O.comparator(n.key,i.key),this.keyedMap=_o(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new cs;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Tu=new We(O.comparator)}track(e){const n=e.doc.key,i=this.Tu.get(n);i?e.type!==0&&i.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&i.type!==1?this.Tu=this.Tu.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Tu=this.Tu.remove(n):e.type===1&&i.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,i)=>{e.push(i)}),e}}class Ss{constructor(e,n,i,r,s,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ss(e,n,cs.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(){this.Au=void 0,this.listeners=[]}}class px{constructor(){this.queries=new Fi(e=>g_(e),Oa),this.onlineState="Unknown",this.Ru=new Set}}async function Pf(t,e){const n=F(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new fx),r)try{s.Au=await n.onListen(i)}catch(o){const a=Ys(o,`Initialization of query '${qh(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Mf(n)}async function Of(t,e){const n=F(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),r=s.listeners.length===0)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function mx(t,e){const n=F(t);let i=!1;for(const r of e){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(r)&&(i=!0);o.Au=r}}i&&Mf(n)}function gx(t,e,n){const i=F(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Mf(t){t.Ru.forEach(e=>{e.next()})}class Lf{constructor(e,n,i){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=i||{}}Pu(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new Ss(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const i=n!=="Offline";return(!this.options.Nu||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yx{constructor(e,n){this.ku=e,this.byteLength=n}Ou(){return"metadata"in this.ku}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.yt=e}Ji(e){return kn(this.yt,e)}Yi(e){return e.metadata.exists?V_(this.yt,e.document,!1):Oe.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Je(e)}}class vx{constructor(e,n,i){this.Mu=e,this.localStore=n,this.yt=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=EI(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++n;const i=ge.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}$u(e){const n=new Map,i=new Dg(this.yt);for(const r of e)if(r.metadata.queries){const s=i.Ji(r.metadata.name);for(const o of r.metadata.queries){const a=(n.get(o)||oe()).add(s);n.set(o,a)}}return n}async complete(){const e=await GD(this.localStore,new Dg(this.yt),this.documents,this.Mu.id),n=this.$u(this.documents);for(const i of this.queries)await zD(this.localStore,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function EI(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.key=e}}class SI{constructor(e){this.key=e}}class CI{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=oe(),this.mutatedKeys=oe(),this.Gu=v_(e),this.Qu=new cs(this.Gu)}get ju(){return this.qu}Wu(e,n){const i=n?n.zu:new kg,r=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),p=Ma(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;d&&p?d.data.isEqual(p.data)?g!==w&&(i.track({type:3,doc:p}),C=!0):this.Hu(d,p)||(i.track({type:2,doc:p}),C=!0,(c&&this.Gu(p,c)>0||u&&this.Gu(p,u)<0)&&(a=!0)):!d&&p?(i.track({type:0,doc:p}),C=!0):d&&!p&&(i.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(p?(o=o.add(p),s=w?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),i.track({type:1,doc:l})}return{Qu:o,zu:i,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(i);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,s.length!==0||c?{snapshot:new Ss(this.query,e.Qu,r,s,e.mutatedKeys,a===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new kg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=oe(),this.Qu.forEach(i=>{this.Zu(i.key)&&(this.Ku=this.Ku.add(i.key))});const n=[];return e.forEach(i=>{this.Ku.has(i)||n.push(new SI(i))}),this.Ku.forEach(i=>{e.has(i)||n.push(new TI(i))}),n}tc(e){this.qu=e.Hi,this.Ku=oe();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ss.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class wx{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class _x{constructor(e){this.key=e,this.nc=!1}}class Ix{constructor(e,n,i,r,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Fi(a=>g_(a),Oa),this.rc=new Map,this.oc=new Set,this.uc=new We(O.comparator),this.cc=new Map,this.ac=new Ef,this.hc={},this.lc=new Map,this.fc=kr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function bx(t,e){const n=$f(t);let i,r;const s=n.ic.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.ec();else{const o=await Es(n.localStore,jt(e));n.isPrimaryClient&&Ju(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,r=await Ff(n,e,i,a==="current",o.resumeToken)}return r}async function Ff(t,e,n,i,r){t._c=(h,d,p)=>async function(g,w,C,D){let L=w.view.Wu(C);L.$i&&(L=await tu(g.localStore,w.query,!1).then(({documents:K})=>w.view.Wu(K,L)));const N=D&&D.targetChanges.get(w.targetId),G=w.view.applyChanges(L,g.isPrimaryClient,N);return Xh(g,w.targetId,G.Xu),G.snapshot}(t,h,d,p);const s=await tu(t.localStore,e,!0),o=new CI(e,s.Hi),a=o.Wu(s.documents),c=Ua.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Xh(t,n,u.Xu);const l=new wx(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function Ex(t,e){const n=F(t),i=n.ic.get(e),r=n.rc.get(i.targetId);if(r.length>1)return n.rc.set(i.targetId,r.filter(s=>!Oa(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Ts(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),la(n.remoteStore,i.targetId),Cs(n,i.targetId)}).catch(Mi)):(Cs(n,i.targetId),await Ts(n.localStore,i.targetId,!0))}async function Tx(t,e,n){const i=qf(t);try{const r=await function(s,o){const a=F(s),c=Ue.now(),u=o.reduce((d,p)=>d.add(p.key),oe());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=$t(),g=oe();return a.Gi.getEntries(d,u).next(w=>{p=w,p.forEach((C,D)=>{D.isValidDocument()||(g=g.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{l=w;const C=[];for(const D of o){const L=Pk(D,l.get(D.key).overlayedDocument);L!=null&&C.push(new Qn(D.key,L,p_(L.value.mapValue),Fe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,C,o)}).next(w=>{h=w;const C=w.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,C)})}).then(()=>({batchId:h.batchId,changes:N_(l)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(s,o,a){let c=s.hc[s.currentUser.toKey()];c||(c=new We(se)),c=c.insert(o,a),s.hc[s.currentUser.toKey()]=c}(i,r.batchId,n),await Yn(i,r.changes),await zs(i.remoteStore)}catch(r){const s=Ys(r,"Failed to persist write");n.reject(s)}}async function AI(t,e){const n=F(t);try{const i=await HD(n.localStore,e);e.targetChanges.forEach((r,s)=>{const o=n.cc.get(s);o&&(z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?z(o.nc):r.removedDocuments.size>0&&(z(o.nc),o.nc=!1))}),await Yn(n,i,e)}catch(i){await Mi(i)}}function xg(t,e,n){const i=F(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Mf(a)}(i.eventManager,e),r.length&&i.sc.Wo(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Sx(t,e,n){const i=F(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.cc.get(e),s=r&&r.key;if(s){let o=new We(O.comparator);o=o.insert(s,Oe.newNoDocument(s,Q.min()));const a=oe().add(s),c=new Fa(Q.min(),new Map,new Ce(se),o,a);await AI(i,c),i.uc=i.uc.remove(s),i.cc.delete(e),Bf(i)}else await Ts(i.localStore,e,!1).then(()=>Cs(i,e,n)).catch(Mi)}async function Cx(t,e){const n=F(t),i=e.batch.batchId;try{const r=await KD(n.localStore,e);Vf(n,i,null),Uf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Yn(n,r)}catch(r){await Mi(r)}}async function Ax(t,e,n){const i=F(t);try{const r=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(z(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(i.localStore,e);Vf(i,e,n),Uf(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Yn(i,r)}catch(r){await Mi(r)}}async function kx(t,e){const n=F(t);Ui(n.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(s){const o=F(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(i===-1)return void e.resolve();const r=n.lc.get(i)||[];r.push(e),n.lc.set(i,r)}catch(i){const r=Ys(i,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function Uf(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Vf(t,e,n){const i=F(t);let r=i.hc[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.hc[i.currentUser.toKey()]=r}}function Cs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(i=>{t.ac.containsKey(i)||kI(t,i)})}function kI(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(la(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Bf(t))}function Xh(t,e,n){for(const i of n)i instanceof TI?(t.ac.addReference(i.key,e),Dx(t,i)):i instanceof SI?(A("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||kI(t,i.key)):$()}function Dx(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(A("SyncEngine","New document in limbo: "+n),t.oc.add(i),Bf(t))}function Bf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ge.fromString(e)),i=t.fc.next();t.cc.set(i,new _x(n)),t.uc=t.uc.insert(n,i),Ju(t.remoteStore,new wi(jt(Ks(n.path)),i,2,Vt.at))}}async function Yn(t,e,n){const i=F(t),r=[],s=[],o=[];i.ic.isEmpty()||(i.ic.forEach((a,c)=>{o.push(i._c(c,e,n).then(u=>{if((u||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Cf.Ci(c.targetId,u);s.push(l)}}))}),await Promise.all(o),i.sc.Wo(r),await async function(a,c){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>v.forEach(c,h=>v.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>v.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Li(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.qi=u.qi.insert(h,g)}}}(i.localStore,s))}async function xx(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const i=await uI(n.localStore,e);n.currentUser=e,function(r,s){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new T(_.CANCELLED,s))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Yn(n,i.ji)}}function Nx(t,e){const n=F(t),i=n.cc.get(e);if(i&&i.nc)return oe().add(i.key);{let r=oe();const s=n.rc.get(e);if(!s)return r;for(const o of s){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}async function Rx(t,e){const n=F(t),i=await tu(n.localStore,e.query,!0),r=e.view.tc(i);return n.isPrimaryClient&&Xh(n,e.targetId,r.Xu),r}async function Px(t,e){const n=F(t);return fI(n.localStore,e).then(i=>Yn(n,i))}async function Ox(t,e,n,i){const r=F(t),s=await function(o,a){const c=F(o),u=F(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Tn(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):v.resolve(null)))}(r.localStore,e);s!==null?(n==="pending"?await zs(r.remoteStore):n==="acknowledged"||n==="rejected"?(Vf(r,e,i||null),Uf(r,e),function(o,a){F(F(o).mutationQueue).An(a)}(r.localStore,e)):$(),await Yn(r,s)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Mx(t,e){const n=F(t);if($f(n),qf(n),e===!0&&n.dc!==!0){const i=n.sharedClientState.getAllActiveQueryTargets(),r=await Ng(n,i.toArray());n.dc=!0,await Yh(n.remoteStore,!0);for(const s of r)Ju(n.remoteStore,s)}else if(e===!1&&n.dc!==!1){const i=[];let r=Promise.resolve();n.rc.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?i.push(o):r=r.then(()=>(Cs(n,o),Ts(n.localStore,o,!0))),la(n.remoteStore,o)}),await r,await Ng(n,i),function(s){const o=F(s);o.cc.forEach((a,c)=>{la(o.remoteStore,c)}),o.ac.fs(),o.cc=new Map,o.uc=new We(O.comparator)}(n),n.dc=!1,await Yh(n.remoteStore,!1)}}async function Ng(t,e,n){const i=F(t),r=[],s=[];for(const o of e){let a;const c=i.rc.get(o);if(c&&c.length!==0){a=await Es(i.localStore,jt(c[0]));for(const u of c){const l=i.ic.get(u),h=await Rx(i,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await dI(i.localStore,o);a=await Es(i.localStore,u),await Ff(i,DI(u),o,!1,a.resumeToken)}r.push(a)}return i.sc.Wo(s),r}function DI(t){return m_(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Lx(t){const e=F(t);return F(F(e.localStore).persistence).vi()}async function Fx(t,e,n,i){const r=F(t);if(r.dc)return void A("SyncEngine","Ignoring unexpected query state notification.");const s=r.rc.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await fI(r.localStore,y_(s[0])),a=Fa.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ot.EMPTY_BYTE_STRING);await Yn(r,o,a);break}case"rejected":await Ts(r.localStore,e,!0),Cs(r,e,i);break;default:$()}}async function Ux(t,e,n){const i=$f(t);if(i.dc){for(const r of e){if(i.rc.has(r)){A("SyncEngine","Adding an already active target "+r);continue}const s=await dI(i.localStore,r),o=await Es(i.localStore,s);await Ff(i,DI(s),o.targetId,!1,o.resumeToken),Ju(i.remoteStore,o)}for(const r of n)i.rc.has(r)&&await Ts(i.localStore,r,!1).then(()=>{la(i.remoteStore,r),Cs(i,r)}).catch(Mi)}}function $f(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=AI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Sx.bind(null,e),e.sc.Wo=mx.bind(null,e.eventManager),e.sc.wc=gx.bind(null,e.eventManager),e}function qf(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Cx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ax.bind(null,e),e}function Vx(t,e,n){const i=F(t);(async function(r,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=F(h),g=Je(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",w=>p.Ns.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(g)>=0)}(r.localStore,a))return await s.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(EI(a));const c=new vx(a,r.localStore,s.yt);let u=await s.mc();for(;u;){const h=await c.Fu(u);h&&o._updateProgress(h),u=await s.mc()}const l=await c.complete();return await Yn(r,l.Lu,void 0),await function(h,d){const p=F(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Ns.saveBundleMetadata(g,d))}(r.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Bu)}catch(a){return gs("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(i,e,n).then(r=>{i.sharedClientState.notifyBundleLoaded(r)})}class xI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Va(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return cI(this.persistence,new aI,e.initialUser,this.yt)}yc(e){return new oI(Xu.Bs,this.yt)}gc(e){return new mI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class NI extends xI{constructor(e,n,i){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await qf(this.Ac.syncEngine),await zs(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return cI(this.persistence,new aI,e.initialUser,this.yt)}Tc(e,n){const i=this.persistence.referenceDelegate.garbageCollector;return new DD(i,e.asyncQueue,n)}Ec(e,n){const i=new fk(n,this.persistence);return new dk(e.asyncQueue,i)}yc(e){const n=Sf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new Tf(this.synchronizeTabs,n,e.clientId,i,e.asyncQueue,gI(),Tc(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new mI}}class Bx extends NI{constructor(e,n){super(e,n,!1),this.Ac=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ac.syncEngine;this.sharedClientState instanceof zl&&(this.sharedClientState.syncEngine={Fr:Ox.bind(null,n),$r:Fx.bind(null,n),Br:Ux.bind(null,n),vi:Lx.bind(null,n),Mr:Px.bind(null,n)},await this.sharedClientState.start()),await this.persistence.li(async i=>{await Mx(this.Ac.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}gc(e){const n=gI();if(!zl.C(n))throw new T(_.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=Sf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new zl(n,e.asyncQueue,i,e.clientId,e.initialUser)}}class jf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>xg(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=xx.bind(null,this.syncEngine),await Yh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new px}createDatastore(e){const n=Va(e.databaseInfo.databaseId),i=(r=e.databaseInfo,new JD(r));var r;return function(s,o,a,c){return new tx(s,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,r=e.asyncQueue,s=a=>xg(this.syncEngine,a,0),o=Cg.C()?new Cg:new QD,new ix(n,i,r,s,o);var n,i,r,s,o}createSyncEngine(e,n){return function(i,r,s,o,a,c,u){const l=new Ix(i,r,s,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);A("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Gs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e,n){if(!n)throw new T(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RI(t,e,n,i){if(e===!0&&i===!0)throw new T(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rg(t){if(!O.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pg(t){if(O.isDocumentKey(t))throw new T(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Zu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function _e(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Zu(t);throw new T(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function PI(t,e){if(e<=0)throw new T(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;class Mg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new T(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,RI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new T(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ek;switch(n.type){case"gapi":const i=n.client;return new rk(i,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new T(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Og.get(e);n&&(A("ComponentProvider","Removing Datastore"),Og.delete(e),n.terminate())}(this),Promise.resolve()}}function $x(t,e,n,i={}){var r;const s=(t=_e(t,$a))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&gs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let o,a;if(typeof i.mockUserToken=="string")o=i.mockUserToken,a=ut.MOCK_USER;else{o=_S(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new T(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(c)}t._authCredentials=new tk(new Qw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class It{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class Dn extends It{constructor(e,n,i){super(e,n,Ks(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new O(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function OI(t,e,...n){if(t=J(t),Kf("collection","path",e),t instanceof $a){const i=ge.fromString(e,...n);return Pg(i),new Dn(t,null,i)}{if(!(t instanceof Me||t instanceof Dn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return Pg(i),new Dn(t.firestore,null,i)}}function qx(t,e){if(t=_e(t,$a),Kf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(_.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new It(t,null,function(n){return new zn(ge.emptyPath(),n)}(e))}function su(t,e,...n){if(t=J(t),arguments.length===1&&(e=Yw.R()),Kf("doc","path",e),t instanceof $a){const i=ge.fromString(e,...n);return Rg(i),new Me(t,null,new O(i))}{if(!(t instanceof Me||t instanceof Dn))throw new T(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return Rg(i),new Me(t.firestore,t instanceof Dn?t.converter:null,new O(i))}}function MI(t,e){return t=J(t),e=J(e),(t instanceof Me||t instanceof Dn)&&(e instanceof Me||e instanceof Dn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function LI(t,e){return t=J(t),e=J(e),t instanceof It&&e instanceof It&&t.firestore===e.firestore&&Oa(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,n){this.Pc=e,this.yt=n,this.metadata=new lt,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then(i=>{i&&i.Ou()?this.metadata.resolve(i.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.ku)}`))},i=>this.metadata.reject(i))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(e===null)return null;const n=this.vc.decode(e),i=Number(n);isNaN(i)&&this.Dc(`length string (${n}) is not valid number`);const r=await this.Cc(i);return new yx(JSON.parse(r),e.length+i)}xc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Sc(){for(;this.xc()<0&&!await this.Nc(););if(this.buffer.length===0)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const n=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(_.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,r){const s=F(i),o=ca(s.yt)+"/documents",a={documents:r.map(h=>aa(s.yt,h))},c=await s._o("BatchGetDocuments",o,a,r.length),u=new Map;c.forEach(h=>{const d=Hk(s.yt,h);u.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=u.get(h.toString());z(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastWriteError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ws(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=O.fromPath(i);this.mutations.push(new mf(r,this.precondition(r)))}),await async function(n,i){const r=F(n),s=ca(r.yt)+"/documents",o={writes:i.map(a=>ua(r.yt,a))};await r.ao("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw $();n=Q.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new T(_.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Q.min())?Fe.exists(!1):Fe.updateTime(n):Fe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new T(_.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Fe.updateTime(n)}return Fe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.kc=i.maxAttempts,this.xo=new kf(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro(async()=>{const e=new Kx(this.datastore),n=this.Mc(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.Fc(r)}))}).catch(i=>{this.Fc(i)})})}Mc(e){try{const n=this.updateFunction(e);return!Ra(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}$c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!k_(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=ut.UNAUTHENTICATED,this.clientId=Yw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Ys(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function FI(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await uI(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function UI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hf(t);A("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(r=>Ag(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ag(e.remoteStore,s)),t.onlineComponents=e}async function Hf(t){return t.offlineComponents||(A("FirestoreClient","Using default OfflineComponentProvider"),await FI(t,new xI)),t.offlineComponents}async function tl(t){return t.onlineComponents||(A("FirestoreClient","Using default OnlineComponentProvider"),await UI(t,new jf)),t.onlineComponents}function VI(t){return Hf(t).then(e=>e.persistence)}function Wf(t){return Hf(t).then(e=>e.localStore)}function BI(t){return tl(t).then(e=>e.remoteStore)}function Gf(t){return tl(t).then(e=>e.syncEngine)}function Gx(t){return tl(t).then(e=>e.datastore)}async function As(t){const e=await tl(t),n=e.eventManager;return n.onListen=bx.bind(null,e.syncEngine),n.onUnlisten=Ex.bind(null,e.syncEngine),n}function zx(t){return t.asyncQueue.enqueue(async()=>{const e=await VI(t),n=await BI(t);return e.setNetworkEnabled(!0),function(i){const r=F(i);return r._u.delete(0),Ba(r)}(n)})}function Qx(t){return t.asyncQueue.enqueue(async()=>{const e=await VI(t),n=await BI(t);return e.setNetworkEnabled(!1),async function(i){const r=F(i);r._u.add(0),await Gs(r),r.gu.set("Offline")}(n)})}function Yx(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,r,s){try{const o=await function(a,c){const u=F(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(i,r);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new T(_.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ys(o,`Failed to get document '${r} from cache`);s.reject(a)}}(await Wf(t),e,n)),n.promise}function $I(t,e,n={}){const i=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const u=new el({next:h=>{s.enqueueAndForget(()=>Of(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new T(_.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Lf(Ks(o.path),u,{includeMetadataChanges:!0,Nu:!0});return Pf(r,l)}(await As(t),t.asyncQueue,e,n,i)),i.promise}function Xx(t,e){const n=new lt;return t.asyncQueue.enqueueAndForget(async()=>async function(i,r,s){try{const o=await tu(i,r,!0),a=new CI(r,o.Hi),c=a.Wu(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=Ys(o,`Failed to execute query '${r} against cache`);s.reject(a)}}(await Wf(t),e,n)),n.promise}function qI(t,e,n={}){const i=new lt;return t.asyncQueue.enqueueAndForget(async()=>function(r,s,o,a,c){const u=new el({next:h=>{s.enqueueAndForget(()=>Of(r,l)),h.fromCache&&a.source==="server"?c.reject(new T(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Lf(o,u,{includeMetadataChanges:!0,Nu:!0});return Pf(r,l)}(await As(t),t.asyncQueue,e,n,i)),i.promise}function Jx(t,e){const n=new el(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,r){F(i).Ru.add(r),r.next()}(await As(t),n)),()=>{n.bc(),t.asyncQueue.enqueueAndForget(async()=>function(i,r){F(i).Ru.delete(r)}(await As(t),n))}}function Zx(t,e,n,i){const r=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new jx(c,u)}(function(c,u){if(c instanceof Uint8Array)return Lg(c,u);if(c instanceof ArrayBuffer)return Lg(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Va(e));t.asyncQueue.enqueueAndForget(async()=>{Vx(await Gf(t),r,i)})}function eN(t,e){return t.asyncQueue.enqueue(async()=>function(n,i){const r=F(n);return r.persistence.runTransaction("Get named query","readonly",s=>r.Ns.getNamedQuery(s,i))}(await Wf(t),e))}class tN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new kf(this,"async_queue_retry"),this.Wc=()=>{const n=Tc();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new lt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Li(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(i=>{this.Kc=i,this.Gc=!1;const r=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(i);throw Ye("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Gc=!1,i))));return this.Bc=n,n}enqueueAfterDelay(e,n,i){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Rf.createAndSchedule(this,e,n,i,s=>this.Yc(s));return this.Uc.push(r),r}zc(){this.Kc&&$()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Jh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const r of n)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class nN{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,i){this._progressObserver={next:e,error:n,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN=-1;class Ge extends $a{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=new tN,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function pt(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e;const n=t._freezeSettings(),i=function(r,s,o,a){return new pk(r,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Wx(t._authCredentials,t._appCheckCredentials,t._queue,i)}function rN(t,e){HI(t=_e(t,Ge));const n=pt(t),i=t._freezeSettings(),r=new jf;return KI(n,r,new NI(r,i.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function sN(t){HI(t=_e(t,Ge));const e=pt(t),n=t._freezeSettings(),i=new jf;return KI(e,i,new Bx(i,n.cacheSizeBytes))}function KI(t,e,n){const i=new lt;return t.asyncQueue.enqueue(async()=>{try{await FI(t,n),await UI(t,e),i.resolve()}catch(r){const s=r;if(!function(o){return o.name==="FirebaseError"?o.code===_.FAILED_PRECONDITION||o.code===_.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(s))throw s;gs("Error enabling offline persistence. Falling back to persistence disabled: "+s),i.reject(s)}}).then(()=>i.promise)}function oN(t){if(t._initialized&&!t._terminated)throw new T(_.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!un.C())return Promise.resolve();const i=n+"main";await un.delete(i)}(Sf(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function aN(t){return function(e){const n=new lt;return e.asyncQueue.enqueueAndForget(async()=>kx(await Gf(e),n)),n.promise}(pt(t=_e(t,Ge)))}function cN(t){return zx(pt(t=_e(t,Ge)))}function uN(t){return Qx(pt(t=_e(t,Ge)))}function lN(t,e){const n=pt(t=_e(t,Ge)),i=new nN;return Zx(n,t._databaseId,e,i),i}function hN(t,e){return eN(pt(t=_e(t,Ge)),e).then(n=>n?new It(t,null,n.query):null)}function HI(t){if(t._initialized||t._terminated)throw new T(_.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pn(ot.fromBase64String(e))}catch(n){throw new T(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pn(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new T(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new T(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new T(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN=/^__.*__$/;class fN{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hs(e,this.data,n,this.fieldTransforms)}}class WI{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function GI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class il{constructor(e,n,i,r,s,o){this.settings=e,this.databaseId=n,this.yt=i,this.ignoreUndefinedProperties=r,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new il(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:i,oa:!1});return r.ua(e),r}ca(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:i,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ou(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(GI(this.sa)&&dN.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class pN{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=i||Va(e)}da(e,n,i,r=!1){return new il({sa:e,methodName:n,fa:i,path:Xe.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Ur(t){const e=t._freezeSettings(),n=Va(t._databaseId);return new pN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rl(t,e,n,i,r,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,r);Xf("Data must be an object, but it was:",o,i);const a=YI(i,o);let c,u;if(s.merge)c=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Zh(e,h,n);if(!o.contains(d))throw new T(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);JI(l,d)||l.push(d)}c=new Bt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new fN(new yt(a),c,u)}class qa extends Fr{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qa}}function zI(t,e,n){return new il({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class zf extends Fr{_toFieldTransform(e){return new La(e.path,new _s)}isEqual(e){return e instanceof zf}}class mN extends Fr{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=zI(this,e,!0),i=this._a.map(s=>Vr(s,n)),r=new Tr(i);return new La(e.path,r)}isEqual(e){return this===e}}class gN extends Fr{constructor(e,n){super(e),this._a=n}_toFieldTransform(e){const n=zI(this,e,!0),i=this._a.map(s=>Vr(s,n)),r=new Sr(i);return new La(e.path,r)}isEqual(e){return this===e}}class yN extends Fr{constructor(e,n){super(e),this.wa=n}_toFieldTransform(e){const n=new Is(e.yt,I_(e.yt,this.wa));return new La(e.path,n)}isEqual(e){return this===e}}function Qf(t,e,n,i){const r=t.da(1,e,n);Xf("Data must be an object, but it was:",r,i);const s=[],o=yt.empty();Lr(i,(c,u)=>{const l=Jf(e,c,n);u=J(u);const h=r.ca(l);if(u instanceof qa)s.push(l);else{const d=Vr(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new Bt(s);return new WI(o,a,r.fieldTransforms)}function Yf(t,e,n,i,r,s){const o=t.da(1,e,n),a=[Zh(e,i,n)],c=[r];if(s.length%2!=0)throw new T(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Zh(e,s[d])),c.push(s[d+1]);const u=[],l=yt.empty();for(let d=a.length-1;d>=0;--d)if(!JI(u,a[d])){const p=a[d];let g=c[d];g=J(g);const w=o.ca(p);if(g instanceof qa)u.push(p);else{const C=Vr(g,w);C!=null&&(u.push(p),l.set(p,C))}}const h=new Bt(u);return new WI(l,h,o.fieldTransforms)}function QI(t,e,n,i=!1){return Vr(n,t.da(i?4:3,e))}function Vr(t,e){if(XI(t=J(t)))return Xf("Unsupported field value:",e,t),YI(t,e);if(t instanceof Fr)return function(n,i){if(!GI(i.sa))throw i.ha(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,i){const r=[];let s=0;for(const o of n){let a=Vr(o,i.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),s++}return{arrayValue:{values:r}}}(t,e)}return function(n,i){if((n=J(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return I_(i.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ue.fromDate(n);return{timestampValue:bs(i.yt,r)}}if(n instanceof Ue){const r=new Ue(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bs(i.yt,r)}}if(n instanceof nl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pn)return{bytesValue:M_(i.yt,n._byteString)};if(n instanceof Me){const r=i.databaseId,s=n.firestore._databaseId;if(!s.isEqual(r))throw i.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:gf(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i.ha(`Unsupported field value: ${Zu(n)}`)}(t,e)}function YI(t,e){const n={};return i_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(i,r)=>{const s=Vr(r,e.ra(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function XI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof nl||t instanceof Pn||t instanceof Me||t instanceof Fr)}function Xf(t,e,n){if(!XI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Zu(n);throw i==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function Zh(t,e,n){if((e=J(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return Jf(t,e);throw ou("Field path arguments must be of type string or ",t,!1,void 0,n)}const vN=new RegExp("[~\\*/\\[\\]]");function Jf(t,e,n){if(e.search(vN)>=0)throw ou(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ni(...e.split("."))._internalPath}catch{throw ou(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ou(t,e,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new T(_.INVALID_ARGUMENT,a+t+c)}function JI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wN extends ha{data(){return super.data()}}function sl(t,e){return typeof e=="string"?Jf(t,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new T(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zf{}class ja extends Zf{}function si(t,e,...n){let i=[];e instanceof Zf&&i.push(e),i=i.concat(n),function(r){const s=r.filter(a=>a instanceof ep).length,o=r.filter(a=>a instanceof ol).length;if(s>1||s>0&&o>0)throw new T(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class ol extends ja{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new ol(e,n,i)}_apply(e){const n=this._parse(e);return tb(e._query,n),new It(e.firestore,e.converter,$h(e._query,n))}_parse(e){const n=Ur(e.firestore);return function(r,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new T(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Ug(l,u);const d=[];for(const p of l)d.push(Fg(a,r,p));h={arrayValue:{values:d}}}else h=Fg(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Ug(l,u),h=QI(o,s,l,u==="in"||u==="not-in");return de.create(c,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function _N(t,e,n){const i=e,r=sl("where",t);return ol._create(r,i,n)}class ep extends Zf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ep(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:Ee.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,r){let s=i;const o=r.getFlattenedFilters();for(const a of o)tb(s,a),s=$h(s,a)}(e._query,n),new It(e.firestore,e.converter,$h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tp extends ja{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tp(e,n)}_apply(e){const n=function(i,r,s){if(i.startAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new T(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new as(r,s);return function(a,c){if(ff(a)===null){const u=Hu(a);u!==null&&nb(a,u,c.field)}}(i,o),o}(e._query,this._field,this._direction);return new It(e.firestore,e.converter,function(i,r){const s=i.explicitOrderBy.concat([r]);return new zn(i.path,i.collectionGroup,s,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function IN(t,e="asc"){const n=e,i=sl("orderBy",t);return tp._create(i,n)}class al extends ja{constructor(e,n,i){super(),this.type=e,this._limit=n,this._limitType=i}static _create(e,n,i){return new al(e,n,i)}_apply(e){return new It(e.firestore,e.converter,Xc(e._query,this._limit,this._limitType))}}function bN(t){return PI("limit",t),al._create("limit",t,"F")}function EN(t){return PI("limitToLast",t),al._create("limitToLast",t,"L")}class cl extends ja{constructor(e,n,i){super(),this.type=e,this._docOrFields=n,this._inclusive=i}static _create(e,n,i){return new cl(e,n,i)}_apply(e){const n=eb(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(i,r){return new zn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,r,i.endAt)}(e._query,n))}}function TN(...t){return cl._create("startAt",t,!0)}function SN(...t){return cl._create("startAfter",t,!1)}class ul extends ja{constructor(e,n,i){super(),this.type=e,this._docOrFields=n,this._inclusive=i}static _create(e,n,i){return new ul(e,n,i)}_apply(e){const n=eb(e,this.type,this._docOrFields,this._inclusive);return new It(e.firestore,e.converter,function(i,r){return new zn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,r)}(e._query,n))}}function CN(...t){return ul._create("endBefore",t,!1)}function AN(...t){return ul._create("endAt",t,!0)}function eb(t,e,n,i){if(n[0]=J(n[0]),n[0]instanceof ha)return function(r,s,o,a,c){if(!a)throw new T(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of mr(r))if(l.field.isKeyField())u.push(br(s,a.key));else{const h=a.data.field(l.field);if(hf(h))throw new T(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new T(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Di(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=Ur(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new T(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new T(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!pf(s)&&g.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const w=s.path.child(ge.fromString(g));if(!O.isDocumentKey(w))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const C=new O(w);d.push(br(o,C))}else{const w=QI(a,c,g);d.push(w)}}return new Di(d,l)}(t._query,t.firestore._databaseId,r,e,n,i)}}function Fg(t,e,n){if(typeof(n=J(n))=="string"){if(n==="")throw new T(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!pf(e)&&n.indexOf("/")!==-1)throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(ge.fromString(n));if(!O.isDocumentKey(i))throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return br(t,new O(i))}if(n instanceof Me)return br(t,n._key);throw new T(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zu(n)}.`)}function Ug(t,e){if(!Array.isArray(t)||t.length===0)throw new T(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function tb(t,e){if(e.isInequality()){const i=Hu(t),r=e.field;if(i!==null&&!i.isEqual(r))throw new T(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${i.toString()}' and '${r.toString()}'`);const s=ff(t);s!==null&&nb(t,r,s)}const n=function(i,r){for(const s of i)for(const o of s.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nb(t,e,n){if(!n.isEqual(e))throw new T(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class np{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const i={};return Lr(e.fields,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new nl(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=s_(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Ai(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ge.fromString(e);z(H_(i));const r=new Ci(i.get(1),i.get(3)),s=new O(i.popFirst(5));return r.isEqual(n)||Ye(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class kN extends np{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hn extends ha{constructor(e,n,i,r,s,o){super(e,n,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(sl("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Po extends Hn{data(e={}){return super.data(e)}}class Ri{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new cr(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Po(this._firestore,this._userDataWriter,i.key,i,new cr(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new T(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let s=0;return i._snapshot.docChanges.map(o=>{const a=new Po(i._firestore,i._userDataWriter,o.doc.key,o.doc,new cr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Po(i._firestore,i._userDataWriter,o.doc.key,o.doc,new cr(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:DN(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function ib(t,e){return t instanceof Hn&&e instanceof Hn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Ri&&e instanceof Ri&&t._firestore===e._firestore&&LI(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t){t=_e(t,Me);const e=_e(t.firestore,Ge);return $I(pt(e),t._key).then(n=>ip(e,t,n))}class Br extends np{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function NN(t){t=_e(t,Me);const e=_e(t.firestore,Ge),n=pt(e),i=new Br(e);return Yx(n,t._key).then(r=>new Hn(e,i,t._key,r,new cr(r!==null&&r.hasLocalMutations,!0),t.converter))}function RN(t){t=_e(t,Me);const e=_e(t.firestore,Ge);return $I(pt(e),t._key,{source:"server"}).then(n=>ip(e,t,n))}function PN(t){t=_e(t,It);const e=_e(t.firestore,Ge),n=pt(e),i=new Br(e);return ZI(t._query),qI(n,t._query).then(r=>new Ri(e,i,t,r))}function ON(t){t=_e(t,It);const e=_e(t.firestore,Ge),n=pt(e),i=new Br(e);return Xx(n,t._query).then(r=>new Ri(e,i,t,r))}function MN(t){t=_e(t,It);const e=_e(t.firestore,Ge),n=pt(e),i=new Br(e);return qI(n,t._query,{source:"server"}).then(r=>new Ri(e,i,t,r))}function Vg(t,e,n){t=_e(t,Me);const i=_e(t.firestore,Ge),r=ll(t.converter,e,n);return Ka(i,[rl(Ur(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Fe.none())])}function Bg(t,e,n,...i){t=_e(t,Me);const r=_e(t.firestore,Ge),s=Ur(r);let o;return o=typeof(e=J(e))=="string"||e instanceof Ni?Yf(s,"updateDoc",t._key,e,n,i):Qf(s,"updateDoc",t._key,e),Ka(r,[o.toMutation(t._key,Fe.exists(!0))])}function LN(t){return Ka(_e(t.firestore,Ge),[new Ws(t._key,Fe.none())])}function FN(t,e){const n=_e(t.firestore,Ge),i=su(t),r=ll(t.converter,e);return Ka(n,[rl(Ur(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,Fe.exists(!1))]).then(()=>i)}function rb(t,...e){var n,i,r;t=J(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jh(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Jh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof Me)u=_e(t.firestore,Ge),l=Ks(t._key.path),c={next:h=>{e[o]&&e[o](ip(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_e(t,It);u=_e(h.firestore,Ge),l=h._query;const d=new Br(u);c={next:p=>{e[o]&&e[o](new Ri(u,d,h,p))},error:e[o+1],complete:e[o+2]},ZI(t._query)}return function(h,d,p,g){const w=new el(g),C=new Lf(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>Pf(await As(h),C)),()=>{w.bc(),h.asyncQueue.enqueueAndForget(async()=>Of(await As(h),C))}}(pt(u),l,a,c)}function UN(t,e){return Jx(pt(t=_e(t,Ge)),Jh(e)?e:{next:e})}function Ka(t,e){return function(n,i){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>Tx(await Gf(n),i,r)),r.promise}(pt(t),e)}function ip(t,e,n){const i=n.docs.get(e._key),r=new Br(t);return new Hn(t,r,e._key,i,new cr(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ur(e)}set(e,n,i){this._verifyNotCommitted();const r=di(e,this._firestore),s=ll(r.converter,n,i),o=rl(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,Fe.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=di(e,this._firestore);let o;return o=typeof(n=J(n))=="string"||n instanceof Ni?Yf(this._dataReader,"WriteBatch.update",s._key,n,i,r):Qf(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Fe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=di(e,this._firestore);return this._mutations=this._mutations.concat(new Ws(n._key,Fe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function di(t,e){if((t=J(t)).firestore!==e)throw new T(_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ur(e)}get(e){const n=di(e,this._firestore),i=new kN(this._firestore);return this._transaction.lookup([n._key]).then(r=>{if(!r||r.length!==1)return $();const s=r[0];if(s.isFoundDocument())return new ha(this._firestore,i,s.key,s,n.converter);if(s.isNoDocument())return new ha(this._firestore,i,n._key,null,n.converter);throw $()})}set(e,n,i){const r=di(e,this._firestore),s=ll(r.converter,n,i),o=rl(this._dataReader,"Transaction.set",r._key,s,r.converter!==null,i);return this._transaction.set(r._key,o),this}update(e,n,i,...r){const s=di(e,this._firestore);let o;return o=typeof(n=J(n))=="string"||n instanceof Ni?Yf(this._dataReader,"Transaction.update",s._key,n,i,r):Qf(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=di(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=di(e,this._firestore),i=new Br(this._firestore);return super.get(e).then(r=>new Hn(this._firestore,i,n._key,r._document,new cr(!1,!1),n.converter))}}function qN(t,e,n){t=_e(t,Ge);const i=Object.assign(Object.assign({},VN),n);return function(r){if(r.maxAttempts<1)throw new T(_.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(r,s,o){const a=new lt;return r.asyncQueue.enqueueAndForget(async()=>{const c=await Gx(r);new Hx(r.asyncQueue,c,o,s,a).run()}),a.promise}(pt(t),r=>e(new $N(t,r)),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(){return new qa("deleteField")}function KN(){return new zf("serverTimestamp")}function HN(...t){return new mN("arrayUnion",t)}function WN(...t){return new gN("arrayRemove",t)}function GN(t){return new yN("increment",t)}(function(t,e=!0){(function(n){js=n})(Or),Ti(new Nn("firestore",(n,{instanceIdentifier:i,options:r})=>{const s=n.getProvider("app").getImmediate(),o=new Ge(new nk(n.getProvider("auth-internal")),new ok(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new T(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ci(a.options.projectId,c)}(s,i),s);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),An(Fm,"3.8.3",t),An(Fm,"3.8.3","esm2017")})();const zN="@firebase/firestore-compat",QN="0.3.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new T("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(){if(typeof Uint8Array>"u")throw new T("unimplemented","Uint8Arrays are not available in this environment.")}function qg(){if(!mk())throw new T("unimplemented","Blobs are unavailable in Firestore in this environment.")}class da{constructor(e){this._delegate=e}static fromBase64String(e){return qg(),new da(Pn.fromBase64String(e))}static fromUint8Array(e){return $g(),new da(Pn.fromUint8Array(e))}toBase64(){return qg(),this._delegate.toBase64()}toUint8Array(){return $g(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t){return YN(t,["next","error","complete"])}function YN(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{enableIndexedDbPersistence(e,n){return rN(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return sN(e._delegate)}clearIndexedDbPersistence(e){return oN(e._delegate)}}class sb{constructor(e,n,i){this._delegate=n,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ci||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&gs("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,i={}){$x(this._delegate,e,n,i)}enableNetwork(){return cN(this._delegate)}disableNetwork(){return uN(this._delegate)}enablePersistence(e){let n=!1,i=!1;return e&&(n=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,RI("synchronizeTabs",n,"experimentalForceOwningTab",i)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return aN(this._delegate)}onSnapshotsInSync(e){return UN(this._delegate,e)}get app(){if(!this._appCompat)throw new T("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ks(this,OI(this._delegate,e))}catch(n){throw Nt(n,"collection()","Firestore.collection()")}}doc(e){try{return new en(this,su(this._delegate,e))}catch(n){throw Nt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new xt(this,qx(this._delegate,e))}catch(n){throw Nt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return qN(this._delegate,n=>e(new ob(this,n)))}batch(){return pt(this._delegate),new ab(new BN(this._delegate,e=>Ka(this._delegate,e)))}loadBundle(e){return lN(this._delegate,e)}namedQuery(e){return hN(this._delegate,e).then(n=>n?new xt(this,n):null)}}class hl extends np{constructor(e){super(),this.firestore=e}convertBytes(e){return new da(new Pn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return en.forKey(n,this.firestore,null)}}function JN(t){JA(t)}class ob{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new hl(e)}get(e){const n=ur(e);return this._delegate.get(n).then(i=>new fa(this._firestore,new Hn(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,n.converter)))}set(e,n,i){const r=ur(e);return i?(rp("Transaction.set",i),this._delegate.set(r,n,i)):this._delegate.set(r,n),this}update(e,n,i,...r){const s=ur(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,i,...r),this}delete(e){const n=ur(e);return this._delegate.delete(n),this}}class ab{constructor(e){this._delegate=e}set(e,n,i){const r=ur(e);return i?(rp("WriteBatch.set",i),this._delegate.set(r,n,i)):this._delegate.set(r,n),this}update(e,n,i,...r){const s=ur(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,i,...r),this}delete(e){const n=ur(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Dr{constructor(e,n,i){this._firestore=e,this._userDataWriter=n,this._delegate=i}fromFirestore(e,n){const i=new Po(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new pa(this._firestore,i),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const i=Dr.INSTANCES;let r=i.get(e);r||(r=new WeakMap,i.set(e,r));let s=r.get(n);return s||(s=new Dr(e,new hl(e),n),r.set(n,s)),s}}Dr.INSTANCES=new WeakMap;class en{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hl(e)}static forPath(e,n,i){if(e.length%2!==0)throw new T("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new en(n,new Me(n._delegate,i,new O(e)))}static forKey(e,n,i){return new en(n,new Me(n._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new ks(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ks(this.firestore,OI(this._delegate,e))}catch(n){throw Nt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof Me?MI(this._delegate,e):!1}set(e,n){n=rp("DocumentReference.set",n);try{return n?Vg(this._delegate,e,n):Vg(this._delegate,e)}catch(i){throw Nt(i,"setDoc()","DocumentReference.set()")}}update(e,n,...i){try{return arguments.length===1?Bg(this._delegate,e):Bg(this._delegate,e,n,...i)}catch(r){throw Nt(r,"updateDoc()","DocumentReference.update()")}}delete(){return LN(this._delegate)}onSnapshot(...e){const n=cb(e),i=ub(e,r=>new fa(this.firestore,new Hn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return rb(this._delegate,n,i)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=NN(this._delegate):(e==null?void 0:e.source)==="server"?n=RN(this._delegate):n=xN(this._delegate),n.then(i=>new fa(this.firestore,new Hn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new en(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Nt(t,e,n){return t.message=t.message.replace(e,n),t}function cb(t){for(const e of t)if(typeof e=="object"&&!ed(e))return e;return{}}function ub(t,e){var n,i;let r;return ed(t[0])?r=t[0]:ed(t[1])?r=t[1]:typeof t[0]=="function"?r={next:t[0],error:t[1],complete:t[2]}:r={next:t[1],error:t[2],complete:t[3]},{next:s=>{r.next&&r.next(e(s))},error:(n=r.error)===null||n===void 0?void 0:n.bind(r),complete:(i=r.complete)===null||i===void 0?void 0:i.bind(r)}}class fa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new en(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ib(this._delegate,e._delegate)}}class pa extends fa{data(e){const n=this._delegate.data(e);return ZA(n!==void 0),n}}class xt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new hl(e)}where(e,n,i){try{return new xt(this.firestore,si(this._delegate,_N(e,n,i)))}catch(r){throw Nt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new xt(this.firestore,si(this._delegate,IN(e,n)))}catch(i){throw Nt(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new xt(this.firestore,si(this._delegate,bN(e)))}catch(n){throw Nt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new xt(this.firestore,si(this._delegate,EN(e)))}catch(n){throw Nt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new xt(this.firestore,si(this._delegate,TN(...e)))}catch(n){throw Nt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new xt(this.firestore,si(this._delegate,SN(...e)))}catch(n){throw Nt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new xt(this.firestore,si(this._delegate,CN(...e)))}catch(n){throw Nt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new xt(this.firestore,si(this._delegate,AN(...e)))}catch(n){throw Nt(n,"endAt()","Query.endAt()")}}isEqual(e){return LI(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=ON(this._delegate):(e==null?void 0:e.source)==="server"?n=MN(this._delegate):n=PN(this._delegate),n.then(i=>new td(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const n=cb(e),i=ub(e,r=>new td(this.firestore,new Ri(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return rb(this._delegate,n,i)}withConverter(e){return new xt(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ZN{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new pa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class td{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new xt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new pa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new ZN(this._firestore,n))}forEach(e,n){this._delegate.forEach(i=>{e.call(n,new pa(this._firestore,i))})}isEqual(e){return ib(this._delegate,e._delegate)}}class ks extends xt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new en(this.firestore,e):null}doc(e){try{return e===void 0?new en(this.firestore,su(this._delegate)):new en(this.firestore,su(this._delegate,e))}catch(n){throw Nt(n,"doc()","CollectionReference.doc()")}}add(e){return FN(this._delegate,e).then(n=>new en(this.firestore,n))}isEqual(e){return MI(this._delegate,e._delegate)}withConverter(e){return new ks(this.firestore,e?this._delegate.withConverter(Dr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ur(t){return _e(t,Me)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(...e){this._delegate=new Ni(...e)}static documentId(){return new sp(Xe.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof Ni?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._delegate=e}static serverTimestamp(){const e=KN();return e._methodName="FieldValue.serverTimestamp",new rr(e)}static delete(){const e=jN();return e._methodName="FieldValue.delete",new rr(e)}static arrayUnion(...e){const n=HN(...e);return n._methodName="FieldValue.arrayUnion",new rr(n)}static arrayRemove(...e){const n=WN(...e);return n._methodName="FieldValue.arrayRemove",new rr(n)}static increment(e){const n=GN(e);return n._methodName="FieldValue.increment",new rr(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR={Firestore:sb,GeoPoint:nl,Timestamp:Ue,Blob:da,Transaction:ob,WriteBatch:ab,DocumentReference:en,DocumentSnapshot:fa,Query:xt,QueryDocumentSnapshot:pa,QuerySnapshot:td,CollectionReference:ks,FieldPath:sp,FieldValue:rr,setLogLevel:JN,CACHE_SIZE_UNLIMITED:iN};function tR(t,e){t.INTERNAL.registerComponent(new Nn("firestore-compat",n=>{const i=n.getProvider("app-compat").getImmediate(),r=n.getProvider("firestore").getImmediate();return e(i,r)},"PUBLIC").setServiceProps(Object.assign({},eR)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){tR(t,(e,n)=>new sb(e,n,new XN)),t.registerVersion(zN,QN)}nR(Bs);function op(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}const ho={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},zr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function lb(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rR=iR,sR=lb,hb=new Pr("auth","Firebase",lb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new ku("@firebase/auth");function Sc(t,...e){jg.logLevel<=we.ERROR&&jg.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,...e){throw ap(t,...e)}function wt(t,...e){return ap(t,...e)}function db(t,e,n){const i=Object.assign(Object.assign({},sR()),{[e]:n});return new Pr("auth","Firebase",i).create(e,{appName:t.name})}function Xs(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&bt(t,"argument-error"),db(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ap(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return hb.create(t,...e)}function x(t,e,...n){if(!t)throw ap(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sc(e),new Error(e)}function dn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function Yt(t){dn(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}function oR(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cp(){return Hg()==="http:"||Hg()==="https:"}function Hg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cp()||Pv()||"connection"in navigator)?navigator.onLine:!0}function cR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=IS()||Ld()}get(){return aR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Ha(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,i,r={}){return pb(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fb.fetch()(mb(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function pb(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},uR),e);try{const r=new hR(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw bo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw bo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw bo(t,"user-disabled",o);const l=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw db(t,l,u);bt(t,l)}}catch(r){if(r instanceof Pt)throw r;bt(t,"network-request-failed")}}async function Xn(t,e,n,i,r={}){const s=await mt(t,e,n,i,r);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mb(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?up(t.config,r):`${t.config.apiScheme}://${r}`}class hR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(wt(this.auth,"network-request-failed")),lR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=wt(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function fR(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function pR(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mR(t,e=!1){const n=J(t),i=await n.getIdToken(e),r=dl(i);x(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Oo(Ql(r.auth_time)),issuedAtTime:Oo(Ql(r.iat)),expirationTime:Oo(Ql(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ql(t){return Number(t)*1e3}function dl(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Sc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rv(n);return r?JSON.parse(r):(Sc("Failed to decode base64 JWT payload"),null)}catch(r){return Sc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gR(t){const e=dl(t);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Pt&&yR(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function yR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ga(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Wn(t,pR(n,{idToken:i}));x(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?IR(s.providerUserInfo):[],a=_R(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gb(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function wR(t){const e=J(t);await ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _R(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function IR(t){return t.map(e=>{var{providerId:n}=e,i=op(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(t,e){const n=await pb(t,{},async()=>{const i=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=mb(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fb.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gR(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await bR(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new ya;return i&&(x(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(x(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ya,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){x(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gb(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return x(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mR(this,e)}reload(){return wR(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ga(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,dR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,u,l;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:N,emailVerified:G,isAnonymous:K,providerData:ne,stsTokenManager:Y}=n;x(N&&Y,e,"internal-error");const U=ya.fromJSON(this.name,Y);x(typeof N=="string",e,"internal-error"),oi(h,e.name),oi(d,e.name),x(typeof G=="boolean",e,"internal-error"),x(typeof K=="boolean",e,"internal-error"),oi(p,e.name),oi(g,e.name),oi(w,e.name),oi(C,e.name),oi(D,e.name),oi(L,e.name);const ce=new gr({uid:N,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:p,tenantId:w,stsTokenManager:U,createdAt:D,lastLoginAt:L});return ne&&Array.isArray(ne)&&(ce.providerData=ne.map(le=>Object.assign({},le))),C&&(ce._redirectEventId=C),ce}static async _fromIdTokenResponse(e,n,i=!1){const r=new ya;r.updateFromServerResponse(n);const s=new gr({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await ga(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yb.type="NONE";const Ds=yb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e,n){return`firebase:${t}:${e}:${n}`}class us{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=yr(this.userKey,r.apiKey,s),this.fullPersistenceKey=yr("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new us(Yt(Ds),e,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||Yt(Ds);const o=yr(i,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=gr._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new us(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new us(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_b(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ib(e))return"Blackberry";if(bb(e))return"Webos";if(lp(e))return"Safari";if((e.includes("chrome/")||wb(e))&&!e.includes("edge/"))return"Chrome";if(Wa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function vb(t=qe()){return/firefox\//i.test(t)}function lp(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wb(t=qe()){return/crios\//i.test(t)}function _b(t=qe()){return/iemobile/i.test(t)}function Wa(t=qe()){return/android/i.test(t)}function Ib(t=qe()){return/blackberry/i.test(t)}function bb(t=qe()){return/webos/i.test(t)}function Js(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ER(t=qe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function TR(t=qe()){var e;return Js(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SR(){return Ov()&&document.documentMode===10}function Eb(t=qe()){return Js(t)||Wa(t)||bb(t)||Ib(t)||/windows phone/i.test(t)||_b(t)}function CR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t,e=[]){let n;switch(t){case"Browser":n=Wg(qe());break;case"Worker":n=`${Wg(qe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,i){this.app=e,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gg(this),this.idTokenSubscription=new Gg(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await us.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?J(e):null;return n&&x(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pr("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;x(n,this,"argument-error"),this.redirectPersistenceManager=await us.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return x(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return i&&(n["X-Firebase-Client"]=i),n}}function dt(t){return J(t)}class Gg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mv(n=>this.observer=n)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function DR(t,e,n){const i=dt(t);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Sb(e),{host:o,port:a}=xR(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||NR()}function Sb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xR(t){const e=Sb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:zg(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cb(t,e){return mt(t,"POST","/v1/accounts:resetPassword",at(t,e))}async function Ab(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function RR(t,e){return mt(t,"POST","/v1/accounts:update",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}async function fl(t,e){return mt(t,"POST","/v1/accounts:sendOobCode",at(t,e))}async function OR(t,e){return fl(t,e)}async function MR(t,e){return fl(t,e)}async function LR(t,e){return fl(t,e)}async function FR(t,e){return fl(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UR(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function VR(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends Zs{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new va(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new va(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return PR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return UR(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Ab(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return VR(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="http://localhost";class On extends Zs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new On(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=op(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new On(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,qn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qn(e,n)}buildRequest(){const e={requestUri:BR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return mt(t,"POST","/v1/accounts:sendVerificationCode",at(t,e))}async function qR(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,e))}async function jR(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,e));if(n.temporaryProof)throw bo(t,"account-exists-with-different-credential",n);return n}const KR={USER_NOT_FOUND:"user-not-found"};async function HR(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,n),KR)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Zs{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vr({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vr({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return qR(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return jR(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return HR(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new vr({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function GR(t){const e=es(yo(t)).link,n=e?es(yo(e)).deep_link_id:null,i=es(yo(t)).deep_link_id;return(i?es(yo(i)).link:null)||i||n||e||t}class pl{constructor(e){var n,i,r,s,o,a;const c=es(yo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(i=c.oobCode)!==null&&i!==void 0?i:null,h=WR((r=c.mode)!==null&&r!==void 0?r:null);x(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=GR(e);try{return new pl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return va._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=pl.parseLink(n);return x(i,"argument-error"),va._fromEmailAndCode(e,i.code,i.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ls extends eo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return x("providerId"in n&&"signInMethod"in n,"argument-error"),On._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return x(e.idToken||e.accessToken,"argument-error"),On._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ls.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ls.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new ls(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends eo{constructor(){super("facebook.com")}static credential(e){return On._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return On._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return _n.credential(n,i)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends eo{constructor(){super("github.com")}static credential(e){return On._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class xs extends Zs{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return qn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,qn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new xs(i,s)}static _create(e,n){return new xs(e,n)}buildRequest(){return{requestUri:zR,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="saml.";class au extends Jn{constructor(e){x(e.startsWith(QR),"argument-error"),super(e)}static credentialFromResult(e){return au.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return au.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=xs.fromJSON(e);return x(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return xs._create(i,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends eo{constructor(){super("twitter.com")}static credential(e,n){return On._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return bn.credential(n,i)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,e){return Xn(t,"POST","/v1/accounts:signUp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await gr._fromIdTokenResponse(e,i,r),o=Qg(i);return new nn({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Qg(i);return new nn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Qg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t){var e;const n=dt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new nn({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await kb(n,{returnSecureToken:!0}),r=await nn._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu extends Pt{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,cu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new cu(e,n,i,r)}}function Db(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cu._fromErrorAndOperation(t,s,e,i):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e){const n=J(t);await ml(!0,n,e);const{providerUserInfo:i}=await fR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=xb(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function hp(t,e,n=!1){const i=await Wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",i)}async function ml(t,e,n){await ga(e);const i=xb(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";x(i.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Wn(t,Db(i,r,e,t),n);x(s.idToken,i,"internal-error");const o=dl(s.idToken);x(o,i,"internal-error");const{sub:a}=o;return x(t.uid===a,i,"user-mismatch"),nn._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e,n=!1){const i="signIn",r=await Db(t,i,e),s=await nn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function gl(t,e){return Rb(dt(t),e)}async function Pb(t,e){const n=J(t);return await ml(!1,n,e.providerId),hp(n,e)}async function Ob(t,e){return Nb(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JR(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){const n=dt(t),i=await JR(n,{token:e,returnSecureToken:!0}),r=await nn._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?dp._fromServerResponse(e,n):bt(e,"internal-error")}}class dp extends yl{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new dp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e,n){var i;x(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),x(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e,n){const i=J(t),r={requestType:"PASSWORD_RESET",email:e};n&&vl(i,r,n),await MR(i,r)}async function t1(t,e,n){await Cb(J(t),{oobCode:e,newPassword:n})}async function n1(t,e){await RR(J(t),{oobCode:e})}async function Mb(t,e){const n=J(t),i=await Cb(n,{oobCode:e}),r=i.requestType;switch(x(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(i.mfaInfo,n,"internal-error");default:x(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=yl._fromServerResponse(dt(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function i1(t,e){const{data:n}=await Mb(J(t),e);return n.email}async function r1(t,e,n){const i=dt(t),r=await kb(i,{returnSecureToken:!0,email:e,password:n}),s=await nn._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function s1(t,e,n){return gl(J(t),Vi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e,n){const i=J(t),r={requestType:"EMAIL_SIGNIN",email:e};x(n.handleCodeInApp,i,"argument-error"),n&&vl(i,r,n),await LR(i,r)}function a1(t,e){const n=pl.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function c1(t,e,n){const i=J(t),r=Vi.credentialWithLink(e,n||ma());return x(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),gl(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(t,e){return mt(t,"POST","/v1/accounts:createAuthUri",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){const n=cp()?ma():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await u1(J(t),i);return r||[]}async function h1(t,e){const n=J(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&vl(n.auth,r,e);const{email:s}=await OR(n.auth,r);s!==t.email&&await t.reload()}async function d1(t,e,n){const i=J(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&vl(i.auth,s,n);const{email:o}=await FR(i.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e){return mt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=J(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wn(i,f1(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function m1(t,e){return Lb(J(t),e,null)}function g1(t,e){return Lb(J(t),null,e)}async function Lb(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Wn(t,Ab(i,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y1(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t!=null&&t.idToken)){const o=(n=(e=dl(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new hs(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new v1(s,r);case"github.com":return new w1(s,r);case"google.com":return new _1(s,r);case"twitter.com":return new I1(s,r,t.screenName||null);case"custom":case"anonymous":return new hs(s,null);default:return new hs(s,i,r)}}class hs{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class Fb extends hs{constructor(e,n,i,r){super(e,n,i),this.username=r}}class v1 extends hs{constructor(e,n){super(e,"facebook.com",n)}}class w1 extends Fb{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class _1 extends hs{constructor(e,n){super(e,"google.com",n)}}class I1 extends Fb{constructor(e,n,i){super(e,"twitter.com",n,i)}}function b1(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:y1(n)}class lr{constructor(e,n,i){this.type=e,this.credential=n,this.auth=i}static _fromIdtoken(e,n){return new lr("enroll",e,n)}static _fromMfaPendingCredential(e){return new lr("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return lr._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return lr._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=dt(e),r=n.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>yl._fromServerResponse(i,a));x(r.mfaPendingCredential,i,"internal-error");const o=lr._fromMfaPendingCredential(r.mfaPendingCredential);return new fp(o,s,async a=>{const c=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const u=Object.assign(Object.assign({},r),{idToken:c.idToken,refreshToken:c.refreshToken});switch(n.operationType){case"signIn":const l=await nn._fromIdTokenResponse(i,n.operationType,u);return await i._updateCurrentUser(l.user),l;case"reauthenticate":return x(n.user,i,"internal-error"),nn._forOperation(n.user,n.operationType,u);default:bt(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function E1(t,e){var n;const i=J(t),r=e;return x(e.customData.operationType,i,"argument-error"),x((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),fp._fromError(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:start",at(t,e))}function S1(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:finalize",at(t,e))}function C1(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",at(t,e))}class pp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>yl._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new pp(e)}async getSession(){return lr._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const i=e,r=await this.getSession(),s=await Wn(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await Wn(this.user,C1(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const Yl=new WeakMap;function A1(t){const e=J(t);return Yl.has(e)||Yl.set(e,pp._fromUser(e)),Yl.get(e)}const uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uu,"1"),this.storage.removeItem(uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){const t=qe();return lp(t)||Js(t)}const D1=1e3,x1=10;class Vb extends Ub{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=k1()&&CR(),this.fallbackToPolling=Eb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);SR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,x1):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vb.type="LOCAL";const mp=Vb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb extends Ub{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bb.type="SESSION";const xr=Bb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new wl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await N1(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ga("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function P1(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function O1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function M1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function L1(){return gp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b="firebaseLocalStorageDb",F1=1,lu="firebaseLocalStorage",qb="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([lu],e?"readwrite":"readonly").objectStore(lu)}function U1(){const t=indexedDB.deleteDatabase($b);return new za(t).toPromise()}function nd(){const t=indexedDB.open($b,F1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(lu,{keyPath:qb})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(lu)?e(i):(i.close(),await U1(),e(await nd()))})})}async function Yg(t,e,n){const i=_l(t,!0).put({[qb]:e,value:n});return new za(i).toPromise()}async function V1(t,e){const n=_l(t,!1).get(e),i=await new za(n).toPromise();return i===void 0?null:i.value}function Xg(t,e){const n=_l(t,!0).delete(e);return new za(n).toPromise()}const B1=800,$1=3;class jb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>$1)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(L1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O1(),!this.activeServiceWorker)return;this.sender=new R1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||M1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nd();return await Yg(e,uu,"1"),await Xg(e,uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>V1(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=_l(r,!1).getAll();return new za(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jb.type="LOCAL";const wa=jb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:start",at(t,e))}function j1(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:finalize",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t){return(await mt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Kb(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=wt("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",H1().appendChild(i)})}function Hb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=500,G1=6e4,dc=1e12;class z1{constructor(e){this.auth=e,this.counter=dc,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new Q1(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||dc;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||dc;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||dc;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class Q1{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;x(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Y1(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},G1)},W1))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Y1(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=Hb("rcb"),X1=new Ha(3e4,6e4),J1="https://www.google.com/recaptcha/api.js?";class Z1{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return x(eP(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(rt().grecaptcha):new Promise((i,r)=>{const s=rt().setTimeout(()=>{r(wt(e,"network-request-failed"))},X1.get());rt()[Xl]=()=>{rt().clearTimeout(s),delete rt()[Xl];const a=rt().grecaptcha;if(!a){r(wt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,i(a)};const o=`${J1}?${Vs({onload:Xl,render:"explicit",hl:n})}`;Kb(o).catch(()=>{clearTimeout(s),r(wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=rt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function eP(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class tP{async load(e){return new z1(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="recaptcha",nP={theme:"light",type:"image"};let iP=class{constructor(e,n=Object.assign({},nP),i){this.parameters=n,this.type=Wb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(i),this.isInvisible=this.parameters.size==="invisible",x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof e=="string"?document.getElementById(e):e;x(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new tP:new Z1,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=rt()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){x(cp()&&!gp(),this.auth,"internal-error"),await rP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await K1(this.auth);x(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function rP(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vr._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function sP(t,e,n){const i=dt(t),r=await Il(i,e,J(n));return new yp(r,s=>gl(i,s))}async function oP(t,e,n){const i=J(t);await ml(!1,i,"phone");const r=await Il(i.auth,e,J(n));return new yp(r,s=>Pb(i,s))}async function aP(t,e,n){const i=J(t),r=await Il(i.auth,e,J(n));return new yp(r,s=>Ob(i,s))}async function Il(t,e,n){var i;const r=await n.verify();try{x(typeof r=="string",t,"argument-error"),x(n.type===Wb,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return x(o.type==="enroll",t,"internal-error"),(await T1(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{x(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return x(a,t,"missing-multi-factor-info"),(await q1(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await $R(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function cP(t,e){await hp(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr=class Cc{constructor(e){this.providerId=Cc.PROVIDER_ID,this.auth=dt(e)}verifyPhoneNumber(e,n){return Il(this.auth,e,J(n))}static credential(e,n){return vr._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Cc.credentialFromTaggedObject(n)}static credentialFromError(e){return Cc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?vr._fromTokenResponse(n,i):null}};Nr.PROVIDER_ID="phone";Nr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){return e?Yt(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends Zs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uP(t){return Rb(t.auth,new vp(t),t.bypassAuthState)}function lP(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Nb(n,new vp(t),t.bypassAuthState)}async function hP(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),hp(n,new vp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uP;case"linkViaPopup":case"linkViaRedirect":return hP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:bt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new Ha(2e3,1e4);async function fP(t,e,n){const i=dt(t);Xs(t,e,Jn);const r=$r(i,n);return new Un(i,"signInViaPopup",e,r).executeNotNull()}async function pP(t,e,n){const i=J(t);Xs(i.auth,e,Jn);const r=$r(i.auth,n);return new Un(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function mP(t,e,n){const i=J(t);Xs(i.auth,e,Jn);const r=$r(i.auth,n);return new Un(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class Un extends Gb{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,dP.get())};e()}}Un.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="pendingRedirect",Mo=new Map;class yP extends Gb{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const i=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(t,e){const n=Qb(e),i=zb(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function wp(t,e){return zb(t)._set(Qb(e),"true")}function wP(){Mo.clear()}function _p(t,e){Mo.set(t._key(),e)}function zb(t){return Yt(t._redirectPersistence)}function Qb(t){return yr(gP,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e,n){return IP(t,e,n)}async function IP(t,e,n){const i=dt(t);Xs(t,e,Jn),await i._initializationPromise;const r=$r(i,n);return await wp(r,i),r._openRedirect(i,e,"signInViaRedirect")}function bP(t,e,n){return EP(t,e,n)}async function EP(t,e,n){const i=J(t);Xs(i.auth,e,Jn),await i.auth._initializationPromise;const r=$r(i.auth,n);await wp(r,i.auth);const s=await Yb(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function TP(t,e,n){return SP(t,e,n)}async function SP(t,e,n){const i=J(t);Xs(i.auth,e,Jn),await i.auth._initializationPromise;const r=$r(i.auth,n);await ml(!1,i,e.providerId),await wp(r,i.auth);const s=await Yb(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function CP(t,e){return await dt(t)._initializationPromise,bl(t,e,!1)}async function bl(t,e,n=!1){const i=dt(t),r=$r(i,e),o=await new yP(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function Yb(t){const e=Ga(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=10*60*1e3;class Xb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Jb(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Jb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xP=/^https?/;async function NP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zb(t);for(const n of e)try{if(RP(n))return}catch{}bt(t,"unauthorized-domain")}function RP(t){const e=ma(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!xP.test(n))return!1;if(DP.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PP=new Ha(3e4,6e4);function Zg(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OP(t){return new Promise((e,n)=>{var i,r,s;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),n(wt(t,"network-request-failed"))},timeout:PP.get()})}if(!((r=(i=rt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const a=Hb("iframefcb");return rt()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},Kb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function MP(t){return Ac=Ac||OP(t),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=new Ha(5e3,15e3),FP="__/auth/iframe",UP="emulator/auth/iframe",VP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $P(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?up(e,UP):`https://${t.config.authDomain}/${FP}`,i={apiKey:e.apiKey,appName:t.name,v:Or},r=BP.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Vs(i).slice(1)}`}async function qP(t){const e=await MP(t),n=rt().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:$P(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VP,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=rt().setTimeout(()=>{s(o)},LP.get());function c(){rt().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KP=500,HP=600,WP="_blank",GP="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zP(t,e,n,i=KP,r=HP){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jP),{width:i.toString(),height:r.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=wb(u)?WP:n),vb(u)&&(e=e||GP,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(TR(u)&&a!=="_self")return QP(e||"",a),new ey(null);const h=window.open(e||"",a,l);x(h,t,"popup-blocked");try{h.focus()}catch{}return new ey(h)}function QP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="__/auth/handler",XP="emulator/auth/handler";function id(t,e,n,i,r,s){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Or,eventId:r};if(e instanceof Jn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof eo){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${JP(t)}?${Vs(a).slice(1)}`}function JP({config:t}){return t.emulator?up(t,XP):`https://${t.authDomain}/${YP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class ZP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xr,this._completeRedirectFn=bl,this._overrideRedirectResult=_p}async _openPopup(e,n,i,r){var s;dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=id(e,n,i,ma(),r);return zP(e,o,Ga())}async _openRedirect(e,n,i,r){return await this._originValidation(e),P1(id(e,n,i,ma(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(dn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await qP(e),i=new Xb(e);return n.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[Jl];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eb()||lp()||Js()}}const eO=ZP;class tO{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return Sn("unexpected MultiFactorSessionType")}}}class Ip extends tO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ip(e)}_finalizeEnroll(e,n,i){return S1(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return j1(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eE{constructor(){}static assertion(e){return Ip._fromCredential(e)}}eE.FACTOR_ID="phone";var ty="@firebase/auth",ny="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rO(t){Ti(new Nn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((a,c)=>{x(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),x(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tb(t)},l=new kR(a,c,u);return oR(l,n),l})(i,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ti(new Nn("auth-internal",e=>{const n=dt(e.getProvider("auth").getImmediate());return(i=>new nO(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(ty,ny,iO(t)),An(ty,ny,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=5*60;vS("authIdTokenMaxAge");rO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=2e3;async function aO(t,e,n){var i;const{BuildInfo:r}=Rr();dn(e.sessionId,"AuthEvent did not contain a session ID");const s=await dO(e.sessionId),o={};return Js()?o.ibi=r.packageName:Wa()?o.apn=r.packageName:bt(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,id(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function cO(t){const{BuildInfo:e}=Rr(),n={};Js()?n.iosBundleId=e.packageName:Wa()?n.androidPackageName=e.packageName:bt(t,"operation-not-supported-in-this-environment"),await Zb(t,n)}function uO(t){const{cordova:e}=Rr();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,ER()?"_blank":"_system","location=yes"),n(r)})})}async function lO(t,e,n){const{cordova:i}=Rr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=i.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(wt(t,"redirect-cancelled-by-user"))},oO))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Wa()&&document.addEventListener("visibilitychange",l,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{r()}}function hO(t){var e,n,i,r,s,o,a,c,u,l;const h=Rr();x(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x(typeof((s=(r=(i=h==null?void 0:h.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dO(t){const e=fO(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function fO(t){if(dn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=20;class mO extends Xb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function gO(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:wO(),postBody:null,tenantId:t.tenantId,error:wt(t,"no-auth-event")}}function yO(t,e){return rd()._set(sd(t),e)}async function iy(t){const e=await rd()._get(sd(t));return e&&await rd()._remove(sd(t)),e}function vO(t,e){var n,i;const r=IO(e);if(r.includes("/__/auth/callback")){const s=kc(r),o=s.firebaseError?_O(decodeURIComponent(s.firebaseError)):null,a=(i=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],c=a?wt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function wO(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<pO;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function rd(){return Yt(mp)}function sd(t){return yr("authEvent",t.config.apiKey,t.name)}function _O(t){try{return JSON.parse(t)}catch{return null}}function IO(t){const e=kc(t),n=e.link?decodeURIComponent(e.link):void 0,i=kc(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return kc(r).link||r||i||n||t}function kc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return es(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bO=500;class EO{constructor(){this._redirectPersistence=xr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=bl,this._overrideRedirectResult=_p}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new mO(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){bt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,r){hO(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),wP(),await this._originValidation(e);const o=gO(e,i,r);await yO(e,o);const a=await aO(e,o,n),c=await uO(a);return lO(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cO(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=Rr(),o=setTimeout(async()=>{await iy(e),n.onEvent(ry())},bO),a=async l=>{clearTimeout(o);const h=await iy(e);let d=null;h&&(l!=null&&l.url)&&(d=vO(h,l.url)),n.onEvent(d||ry())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const c=r,u=`${s.packageName.toLowerCase()}://`;Rr().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const TO=EO;function ry(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:wt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(t,e){dt(t)._logFramework(e)}var CO="@firebase/auth-compat",AO="0.3.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=1e3;function Lo(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function DO(){return Lo()==="http:"||Lo()==="https:"}function tE(t=qe()){return!!((Lo()==="file:"||Lo()==="ionic:"||Lo()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function xO(){return Ld()||Md()}function NO(){return Ov()&&(document==null?void 0:document.documentMode)===11}function RO(t=qe()){return/Edge\/\d+/.test(t)}function PO(t=qe()){return NO()||RO(t)}function nE(){try{const t=self.localStorage,e=Ga();if(t)return t.setItem(e,"1"),t.removeItem(e),PO()?zo():!0}catch{return bp()&&zo()}return!1}function bp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Zl(){return(DO()||Pv()||tE())&&!xO()&&nE()&&!bp()}function iE(){return tE()&&typeof document<"u"}async function OO(){return iE()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},kO);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function MO(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},fo=x,rE="persistence";function LO(t,e){if(fo(Object.values(Gt).includes(e),t,"invalid-persistence-type"),Ld()){fo(e!==Gt.SESSION,t,"unsupported-persistence-type");return}if(Md()){fo(e===Gt.NONE,t,"unsupported-persistence-type");return}if(bp()){fo(e===Gt.NONE||e===Gt.LOCAL&&zo(),t,"unsupported-persistence-type");return}fo(e===Gt.NONE||nE(),t,"unsupported-persistence-type")}async function od(t){await t._initializationPromise;const e=sE(),n=yr(rE,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function FO(t,e){const n=sE();if(!n)return[];const i=yr(rE,t,e);switch(n.getItem(i)){case Gt.NONE:return[Ds];case Gt.LOCAL:return[wa,xr];case Gt.SESSION:return[xr];default:return[]}}function sE(){var t;try{return((t=MO())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=x;class mi{constructor(){this.browserResolver=Yt(eO),this.cordovaResolver=Yt(TO),this.underlyingResolver=null,this._redirectPersistence=xr,this._completeRedirectFn=bl,this._overrideRedirectResult=_p}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,r)}async _openRedirect(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return iE()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return UO(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await OO();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t){return t.unwrap()}function VO(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(t){return aE(t)}function $O(t,e){var n;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new qO(t,E1(t,e))}else if(i){const r=aE(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function aE(t){const{_tokenResponse:e}=t instanceof Pt?t.customData:t;if(!e)return null;if(!(t instanceof Pt)&&"temporaryProof"in e&&"phoneNumber"in e)return Nr.credentialFromResult(t);const n=e.providerId;if(!n||n===ho.PASSWORD)return null;let i;switch(n){case ho.GOOGLE:i=_n;break;case ho.FACEBOOK:i=wn;break;case ho.GITHUB:i=In;break;case ho.TWITTER:i=bn;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!r&&!a?null:a?n.startsWith("saml.")?xs._create(n,a):On._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:s}):new ls(n).credential({idToken:r,accessToken:s,rawNonce:c})}return t instanceof Pt?i.credentialFromError(t):i.credentialFromResult(t)}function Ut(t,e){return e.catch(n=>{throw n instanceof Pt&&$O(t,n),n}).then(n=>{const i=n.operationType,r=n.user;return{operationType:i,credential:BO(n),additionalUserInfo:b1(n),user:Vn.getOrCreate(r)}})}async function ad(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>Ut(t,n.confirm(i))}}class qO{constructor(e,n){this.resolver=n,this.auth=VO(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(oE(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._delegate=e,this.multiFactor=A1(e)}static getOrCreate(e){return Vn.USER_MAP.has(e)||Vn.USER_MAP.set(e,new Vn(e)),Vn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,Pb(this._delegate,e))}async linkWithPhoneNumber(e,n){return ad(this.auth,oP(this._delegate,e,n))}async linkWithPopup(e){return Ut(this.auth,mP(this._delegate,e,mi))}async linkWithRedirect(e){return await od(dt(this.auth)),TP(this._delegate,e,mi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,Ob(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return ad(this.auth,aP(this._delegate,e,n))}reauthenticateWithPopup(e){return Ut(this.auth,pP(this._delegate,e,mi))}async reauthenticateWithRedirect(e){return await od(dt(this.auth)),bP(this._delegate,e,mi)}sendEmailVerification(e){return h1(this._delegate,e)}async unlink(e){return await XR(this._delegate,e),this}updateEmail(e){return m1(this._delegate,e)}updatePassword(e){return g1(this._delegate,e)}updatePhoneNumber(e){return cP(this._delegate,e)}updateProfile(e){return p1(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return d1(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Vn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=x;class cd{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;po(i,"invalid-api-key",{appName:e.name}),po(i,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?mi:void 0;this._delegate=n.initialize({options:{persistence:jO(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(rR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Vn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){DR(this._delegate,e,n)}applyActionCode(e){return n1(this._delegate,e)}checkActionCode(e){return Mb(this._delegate,e)}confirmPasswordReset(e,n){return t1(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ut(this._delegate,r1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return l1(this._delegate,e)}isSignInWithEmailLink(e){return a1(this._delegate,e)}async getRedirectResult(){po(Zl(),this._delegate,"operation-not-supported-in-this-environment");const e=await CP(this._delegate,mi);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){SO(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:r,error:s,complete:o}=sy(e,n,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,n,i){const{next:r,error:s,complete:o}=sy(e,n,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,n){return o1(this._delegate,e,n)}sendPasswordResetEmail(e,n){return e1(this._delegate,e,n||void 0)}async setPersistence(e){LO(this._delegate,e);let n;switch(e){case Gt.SESSION:n=xr;break;case Gt.LOCAL:n=await Yt(wa)._isAvailable()?wa:mp;break;case Gt.NONE:n=Ds;break;default:return bt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,YR(this._delegate))}signInWithCredential(e){return Ut(this._delegate,gl(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,ZR(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ut(this._delegate,s1(this._delegate,e,n))}signInWithEmailLink(e,n){return Ut(this._delegate,c1(this._delegate,e,n))}signInWithPhoneNumber(e,n){return ad(this._delegate,sP(this._delegate,e,n))}async signInWithPopup(e){return po(Zl(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,fP(this._delegate,e,mi))}async signInWithRedirect(e){return po(Zl(),this._delegate,"operation-not-supported-in-this-environment"),await od(this._delegate),_P(this._delegate,e,mi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return i1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}cd.Persistence=Gt;function sy(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const r=i;return{next:o=>r(o&&Vn.getOrCreate(o)),error:e,complete:n}}function jO(t,e){const n=FO(t,e);if(typeof self<"u"&&!n.includes(wa)&&n.push(wa),typeof window<"u")for(const i of[mp,xr])n.includes(i)||n.push(i);return n.includes(Ds)||n.push(Ds),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.providerId="phone",this._delegate=new Nr(oE(Bs.auth()))}static credential(e,n){return Nr.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Ep.PHONE_SIGN_IN_METHOD=Nr.PHONE_SIGN_IN_METHOD;Ep.PROVIDER_ID=Nr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KO=x;class HO{constructor(e,n,i=Bs.app()){var r;KO((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new iP(e,n,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO="auth-compat";function GO(t){t.INTERNAL.registerComponent(new Nn(WO,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new cd(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:zr.EMAIL_SIGNIN,PASSWORD_RESET:zr.PASSWORD_RESET,RECOVER_EMAIL:zr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:zr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:zr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:zr.VERIFY_EMAIL}},EmailAuthProvider:Vi,FacebookAuthProvider:wn,GithubAuthProvider:In,GoogleAuthProvider:_n,OAuthProvider:ls,SAMLAuthProvider:au,PhoneAuthProvider:Ep,PhoneMultiFactorGenerator:eE,RecaptchaVerifier:HO,TwitterAuthProvider:bn,Auth:cd,AuthCredential:Zs,Error:Pt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(CO,AO)}GO(Bs);const zO={apiKey:"AIzaSyC2kiWghp05dZ3rzeffLECwIKGEkkGfVgE",authDomain:"invoice-app-4a3d3.firebaseapp.com",projectId:"invoice-app-4a3d3",storageBucket:"invoice-app-4a3d3.appspot.com",messagingSenderId:"813904077081",appId:"1:813904077081:web:929058c5f36bd37a39a588"},QO=Bs.initializeApp(zO),ns=QO.firestore(),Qa=cS("store",{state:()=>({invoiceData:[],invoiceModal:null,modalActive:null,invoicesLoaded:null,currentInvoiceArray:null,editInvoice:null}),actions:{invoiceToggle(){this.invoiceModal=!this.invoiceModal},modalToggle(){this.modalActive=!this.modalActive},setCurrentInvoice(t){this.currentInvoiceArray=this.invoiceData.filter(e=>e.invoiceId=t)},editToggle(){this.editInvoice=!this.editInvoice},deleteInvoice(t){this.invoiceData=this.invoiceData.filter(e=>e.invoiceId!==t)},updateStatusToPaid(t){this.invoiceData.forEach(e=>{e.docId===t&&(e.invoicePaid=!0,e.invoicePending=!1)})},updateStatusToPending(t){this.invoiceData.forEach(e=>{e.docId===t&&(e.invoicePaid=!1,e.invoicePending=!0,e.invoiceDraft=!1)})},async getInvoices(){(await ns.collection("invoices").get()).forEach(n=>{if(!this.invoiceData.some(i=>i.docId===n.id)){const i={docId:n.id,invoiceId:n.data().invoiceId,billerStreetAddress:n.data().billerStreetAddress,billerCity:n.data().billerCity,billerZipCode:n.data().billerZipCode,billerCountry:n.data().billerCountry,clientName:n.data().clientName,clientEmail:n.data().clientEmail,clientStreetAddress:n.data().clientStreetAddress,clientCity:n.data().clientCity,clientZipCode:n.data().clientZipCode,clientCountry:n.data().clientCountry,invoiceDateUnix:n.data().invoiceDateUnix,invoiceDate:n.data().invoiceDate,paymentTerms:n.data().paymentTerms,paymentDueDateUnix:n.data().paymentDueDateUnix,paymentDueDate:n.data().paymentDueDate,productDescription:n.data().productDescription,invoiceItemList:n.data().invoiceItemList,invoiceTotal:n.data().invoiceTotal,invoicePending:n.data().invoicePending,invoiceDraft:n.data().invoiceDraft,invoicePaid:n.data().invoicePaid};this.invoiceData.push(i)}}),this.invoicesLoaded=!0},async updateInvoice({docId:t,routeId:e}){this.deleteInvoice(t),await this.getInvoices(),this.invoiceToggle(),this.editToggle(),this.setCurrentInvoice(e)},async deleteInvoicee(t){await ns.collection("invoices").doc(t).delete(),this.deleteInvoice(t)},async updatePaidDB(t){await ns.collection("invoices").doc(t).update({invoicePaid:!0,invoicePending:!1}),this.updateStatusToPaid(t)},async updatePendingDB(t){await ns.collection("invoices").doc(t).update({invoicePaid:!1,invoicePending:!0,invoiceDraft:!1}),this.updateStatusToPending(t)}}}),YO="/invoice-app/assets/file-invoice-dollar-solid-5b7c53d4.png";const Bi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},XO={name:"navigation"},JO=t=>(Fs("data-v-d9957c09"),t=t(),Us(),t),ZO={class:"flex"},eM=JO(()=>y("div",{class:"branding flex"},[y("img",{src:YO,alt:""})],-1)),tM=[eM];function nM(t,e,n,i,r,s){return fe(),Ie("header",ZO,tM)}const iM=Bi(XO,[["render",nM],["__scopeId","data-v-d9957c09"]]);const rM={name:"loading"},sM={class:"loading"},oM=y("span",null,null,-1),aM=[oM];function cM(t,e,n,i,r,s){return fe(),Ie("div",sM,aM)}const uM=Bi(rM,[["render",cM]]);var hr=256,cE=[],oy=256,fc;for(;hr--;)cE[hr]=(hr+256).toString(16).substring(1);function ay(t){var e=0,n=t||11;if(!fc||hr+n>oy*2)for(fc="",hr=0;e<oy;e++)fc+=cE[Math.random()*256|0];return fc.substring(hr,hr+++n)}const lM="/invoice-app/assets/icon-delete-44ba3da5.svg",uE="/invoice-app/assets/icon-plus-9992cbd5.svg";const hM={setup(){return{myStore:Qa()}},name:"invoiceModal",components:{Loading:uM},data(){return{dateOptions:{year:"numeric",month:"short",day:"numeric"},docId:null,loading:null,billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoiceDraft:null,invoiceItemList:[],invoiceTotal:0}},created(){if(this.myStore.editInvoice||(this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)),this.myStore.editInvoice){const t=this.myStore.currentInvoiceArray[0];this.docId=t.docId,this.billerStreetAddress=t.billerStreetAddress,this.billerCity=t.billerCity,this.billerZipCode=t.billerZipCode,this.billerCountry=t.billerCountry,this.clientName=t.clientName,this.clientEmail=t.clientEmail,this.clientStreetAddress=t.clientStreetAddress,this.clientCity=t.clientCity,this.clientZipCode=t.clientZipCode,this.clientCountry=t.clientCountry,this.invoiceDateUnix=t.invoiceDateUnix,this.invoiceDate=t.invoiceDate,this.paymentTerms=t.paymentTerms,this.paymentDueDateUnix=t.paymentDueDateUnix,this.paymentDueDate=t.paymentDueDate,this.productDescription=t.productDescription,this.invoicePending=t.invoicePending,this.invoiceDraft=t.invoiceDraft,this.invoiceItemList=t.invoiceItemList,this.invoiceTotal=t.invoiceTotal}},methods:{checkClick(t){t.target===this.$refs.invoiceWrap&&this.myStore.modalToggle()},closeInvoice(){this.myStore.modalToggle(),this.myStore.editInvoice&&this.myStore.editToggle()},addNewInvoiceItem(){this.invoiceItemList.push({id:ay(),itemName:"",qty:"",price:0,total:0})},deleteInvoiceItem(t){this.invoiceItemList=this.invoiceItemList.filter(e=>e.id!==t)},calInvoiceTotal(){this.invoiceTotal=0,this.invoiceItemList.forEach(t=>{this.invoiceTotal+=t.total})},publishInvoice(){this.invoicePending=!0},saveDraft(){this.invoiceDraft=!0},async uploadInvoice(){if(this.invoiceItemList.length<=0){alert("Please ensure you filled out work items!");return}this.loading=!0,this.calInvoiceTotal(),await ns.collection("invoices").doc().set({invoiceId:ay(6),billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,invoiceDate:this.invoiceDate,invoiceDateUnix:this.invoiceDateUnix,paymentTerms:this.paymentTerms,paymentDueDate:this.paymentDueDate,paymentDueDateUnix:this.paymentDueDateUnix,productDescription:this.productDescription,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal,invoicePending:this.invoicePending,invoiceDraft:this.invoiceDraft,invoicePaid:null}),this.loading=!1,this.myStore.invoiceToggle(),this.myStore.getInvoices()},async updateInvoice(){if(this.invoiceItemList.length<=0){alert("Please ensure you filled out work items!");return}this.loading=!0,this.calInvoiceTotal(),await ns.collection("invoices").doc(this.docId).update({billerStreetAddress:this.billerStreetAddress,billerCity:this.billerCity,billerZipCode:this.billerZipCode,billerCountry:this.billerCountry,clientName:this.clientName,clientEmail:this.clientEmail,clientStreetAddress:this.clientStreetAddress,clientCity:this.clientCity,clientZipCode:this.clientZipCode,clientCountry:this.clientCountry,paymentTerms:this.paymentTerms,paymentDueDate:this.paymentDueDate,paymentDueDateUnix:this.paymentDueDateUnix,productDescription:this.productDescription,invoiceItemList:this.invoiceItemList,invoiceTotal:this.invoiceTotal}),this.loading=!1;const e={docId:this.docId,routeId:this.$route.params.invoiceId};this.myStore.updateInvoice(e)},submitForm(){if(this.myStore.editInvoice){this.updateInvoice();return}this.uploadInvoice()}},watch:{paymentTerms(){const t=new Date;this.paymentDueDateUnix=t.setDate(t.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleDateString("en-us",this.dateOptions)}}},Ze=t=>(Fs("data-v-ffb19676"),t=t(),Us(),t),dM={key:0},fM={key:1},pM={class:"bill-from flex flex-column"},mM=Ze(()=>y("h4",null,"Bill From",-1)),gM={class:"input flex flex-column"},yM=Ze(()=>y("label",{for:"billerStreetAddress"},"Street Address",-1)),vM={class:"location-details flex"},wM={class:"input flex flex-column"},_M=Ze(()=>y("label",{for:"billerCity"},"City",-1)),IM={class:"input flex flex-column"},bM=Ze(()=>y("label",{for:"billerZipCode"},"Zip Code",-1)),EM={class:"input flex flex-column"},TM=Ze(()=>y("label",{for:"billerCountry"},"Country",-1)),SM={class:"bill-to flex flex-column"},CM=Ze(()=>y("h4",null,"Bill To",-1)),AM={class:"input flex flex-column"},kM=Ze(()=>y("label",{for:"clientName"},"Client's Name",-1)),DM={class:"input flex flex-column"},xM=Ze(()=>y("label",{for:"clientEmail"},"Client's Email",-1)),NM={class:"input flex flex-column"},RM=Ze(()=>y("label",{for:"clientStreetAddress"},"Street Address",-1)),PM={class:"location-details flex"},OM={class:"input flex flex-column"},MM=Ze(()=>y("label",{for:"clientCity"},"City",-1)),LM={class:"input flex flex-column"},FM=Ze(()=>y("label",{for:"clientZipCode"},"Zip Code",-1)),UM={class:"input flex flex-column"},VM=Ze(()=>y("label",{for:"clientCountry"},"Country",-1)),BM={class:"invoice-work flex flex-column"},$M={class:"payment flex"},qM={class:"input flex flex-column"},jM=Ze(()=>y("label",{for:"invoiceDate"},"Invoice Date",-1)),KM={class:"input flex flex-column"},HM=Ze(()=>y("label",{for:"paymentDueDate"},"Payment Due",-1)),WM={class:"input flex flex-column"},GM=Ze(()=>y("label",{for:"paymentTerms"},"Payment Terms",-1)),zM=Ze(()=>y("option",{value:"30"},"Net 30 Days",-1)),QM=Ze(()=>y("option",{value:"60"},"Net 60 Days",-1)),YM=[zM,QM],XM={class:"input flex flex-column"},JM=Ze(()=>y("label",{for:"productDescription"},"Product Description",-1)),ZM={class:"work-items"},eL=Ze(()=>y("h3",null,"Item List",-1)),tL={class:"item-list"},nL=Ze(()=>y("tr",{class:"table-heading flex"},[y("th",{class:"item-name"},"Item Name"),y("th",{class:"qty"},"Qty"),y("th",{class:"price"},"Price"),y("th",{class:"total"},"Toal")],-1)),iL={class:"item-name"},rL=["onUpdate:modelValue"],sL={class:"qty"},oL=["onUpdate:modelValue"],aL={class:"price"},cL=["onUpdate:modelValue"],uL={class:"total flex"},lL=["onClick"],hL=Ze(()=>y("img",{src:uE,alt:""},null,-1)),dL={class:"save flex"},fL={class:"left"},pL={class:"right flex"},mL={key:2,type:"sumbit",class:"purple"};function gL(t,e,n,i,r,s){const o=fi("Loading");return fe(),Ie("div",{onClick:e[19]||(e[19]=(...a)=>s.checkClick&&s.checkClick(...a)),ref:"invoiceWrap",class:"invoice-wrap flex flex-column"},[y("form",{onSubmit:e[18]||(e[18]=X0((...a)=>s.submitForm&&s.submitForm(...a),["prevent"])),class:"invoice-content"},[tt(st(o,null,null,512),[[gh,r.loading]]),tt(st(o,null,null,512),[[gh,r.loading]]),i.myStore.editInvoice?(fe(),Ie("h1",fM,"Edit Invoice")):(fe(),Ie("h1",dM,"New Invoice")),y("div",pM,[mM,y("div",gM,[yM,tt(y("input",{required:"",type:"text",id:"billerStreetAddress","onUpdate:modelValue":e[0]||(e[0]=a=>r.billerStreetAddress=a)},null,512),[[Tt,r.billerStreetAddress]])]),y("div",vM,[y("div",wM,[_M,tt(y("input",{required:"",type:"text",id:"billerCity","onUpdate:modelValue":e[1]||(e[1]=a=>r.billerCity=a)},null,512),[[Tt,r.billerCity]])]),y("div",IM,[bM,tt(y("input",{required:"",type:"text",id:"billerZipCode","onUpdate:modelValue":e[2]||(e[2]=a=>r.billerZipCode=a)},null,512),[[Tt,r.billerZipCode]])]),y("div",EM,[TM,tt(y("input",{required:"",type:"text",id:"billerCountry","onUpdate:modelValue":e[3]||(e[3]=a=>r.billerCountry=a)},null,512),[[Tt,r.billerCountry]])])])]),y("div",SM,[CM,y("div",AM,[kM,tt(y("input",{required:"",type:"text",id:"clientName","onUpdate:modelValue":e[4]||(e[4]=a=>r.clientName=a)},null,512),[[Tt,r.clientName]])]),y("div",DM,[xM,tt(y("input",{required:"",type:"text",id:"clientEmail","onUpdate:modelValue":e[5]||(e[5]=a=>r.clientEmail=a)},null,512),[[Tt,r.clientEmail]])]),y("div",NM,[RM,tt(y("input",{required:"",type:"text",id:"clientStreetAddress","onUpdate:modelValue":e[6]||(e[6]=a=>r.clientStreetAddress=a)},null,512),[[Tt,r.clientStreetAddress]])]),y("div",PM,[y("div",OM,[MM,tt(y("input",{required:"",type:"text",id:"clientCity","onUpdate:modelValue":e[7]||(e[7]=a=>r.clientCity=a)},null,512),[[Tt,r.clientCity]])]),y("div",LM,[FM,tt(y("input",{required:"",type:"text",id:"clientZipCode","onUpdate:modelValue":e[8]||(e[8]=a=>r.clientZipCode=a)},null,512),[[Tt,r.clientZipCode]])]),y("div",UM,[VM,tt(y("input",{required:"",type:"text",id:"clientCountry","onUpdate:modelValue":e[9]||(e[9]=a=>r.clientCountry=a)},null,512),[[Tt,r.clientCountry]])])])]),y("div",BM,[y("div",$M,[y("div",qM,[jM,tt(y("input",{disabled:"",type:"text",id:"invoiceDate","onUpdate:modelValue":e[10]||(e[10]=a=>r.invoiceDate=a)},null,512),[[Tt,r.invoiceDate]])]),y("div",KM,[HM,tt(y("input",{disabled:"",type:"text",id:"paymentDueDate","onUpdate:modelValue":e[11]||(e[11]=a=>r.paymentDueDate=a)},null,512),[[Tt,r.paymentDueDate]])])]),y("div",WM,[GM,tt(y("select",{required:"",type:"text",id:"paymentTerms","onUpdate:modelValue":e[12]||(e[12]=a=>r.paymentTerms=a)},YM,512),[[z0,r.paymentTerms]])]),y("div",XM,[JM,tt(y("input",{required:"",type:"text",id:"productDescription","onUpdate:modelValue":e[13]||(e[13]=a=>r.productDescription=a)},null,512),[[Tt,r.productDescription]])]),y("div",ZM,[eL,y("table",tL,[nL,(fe(!0),Ie(Wt,null,kd(r.invoiceItemList,(a,c)=>(fe(),Ie("tr",{class:"table-items flex",key:c},[y("td",iL,[tt(y("input",{type:"text","onUpdate:modelValue":u=>a.itemName=u},null,8,rL),[[Tt,a.itemName]])]),y("td",sL,[tt(y("input",{type:"text","onUpdate:modelValue":u=>a.qty=u},null,8,oL),[[Tt,a.qty]])]),y("td",aL,[tt(y("input",{type:"text","onUpdate:modelValue":u=>a.price=u},null,8,cL),[[Tt,a.price]])]),y("td",uL,"$"+Ne(a.total=a.qty*a.price),1),y("img",{onClick:u=>s.deleteInvoiceItem(a.id),src:lM,alt:""},null,8,lL)]))),128))]),y("div",{onClick:e[14]||(e[14]=(...a)=>s.addNewInvoiceItem&&s.addNewInvoiceItem(...a)),class:"flex button"},[hL,Wo(" Add New Item ")])])]),y("div",dL,[y("div",fL,[y("button",{type:"button",onClick:e[15]||(e[15]=(...a)=>s.closeInvoice&&s.closeInvoice(...a)),class:"red"},"Cancel")]),y("div",pL,[i.myStore.editInvoice?St("",!0):(fe(),Ie("button",{key:0,type:"submit",onClick:e[16]||(e[16]=(...a)=>s.saveDraft&&s.saveDraft(...a)),class:"dark-purple"},"Save Draft")),i.myStore.editInvoice?St("",!0):(fe(),Ie("button",{key:1,type:"submit",onClick:e[17]||(e[17]=(...a)=>s.publishInvoice&&s.publishInvoice(...a)),class:"purple"},"Create Invoice")),i.myStore.editInvoice?(fe(),Ie("button",mL,"Update Invoice")):St("",!0)])])],32)],512)}const yL=Bi(hM,[["render",gL],["__scopeId","data-v-ffb19676"]]);const vL={setup(){return{myStore:Qa()}},name:"modal",methods:{closeModal(){this.myStore.modalToggle()},closeInvoice(){this.myStore.modalToggle(),this.myStore.invoiceToggle(),this.myStore.editInvoice&&this.myStore.editToggle()}}},wL=t=>(Fs("data-v-2bf6cb68"),t=t(),Us(),t),_L={class:"modal flex"},IL={class:"modal-content"},bL=wL(()=>y("p",null,"Are you sure you want to exit? Your change will not be saved!",-1)),EL={class:"actions flex"};function TL(t,e,n,i,r,s){return fe(),Ie("div",_L,[y("div",IL,[bL,y("div",EL,[y("button",{onClick:e[0]||(e[0]=(...o)=>s.closeModal&&s.closeModal(...o)),class:"purple"},"Return"),y("button",{onClick:e[1]||(e[1]=(...o)=>s.closeInvoice&&s.closeInvoice(...o)),class:"red"},"Close")])])])}const SL=Bi(vL,[["render",TL],["__scopeId","data-v-2bf6cb68"]]);const CL={setup(){return{myStore:Qa()}},data(){return{mobile:null}},components:{Navigation:iM,InvoiceModal:yL,Modal:SL},created(){this.myStore.getInvoices(),this.checkScreen(),window.addEventListener("resize",this.checkScreen),console.log(this.myStore.invoiceData)},methods:{checkScreen(){if(window.innerWidth<=750){this.mobile=!0;return}else this.mobile=!1}}},AL={key:0},kL={key:0,class:"app flex flex-column"},DL={class:"app-content flex flex-column"},xL={key:1,class:"mobile-message flex flex-column"},NL=y("h2",null,"Sorry, this app is not supported on Mobile Devices",-1),RL=y("p",null,"To use this app, please use a computer or tablet",-1),PL=[NL,RL];function OL(t,e,n,i,r,s){const o=fi("Navigation"),a=fi("Modal"),c=fi("InvoiceModal"),u=fi("router-view");return i.myStore.invoicesLoaded?(fe(),Ie("div",AL,[r.mobile?(fe(),Ie("div",xL,PL)):(fe(),Ie("div",kL,[st(o),y("div",DL,[i.myStore.modalActive?(fe(),Ho(a,{key:0})):St("",!0),st(Pd,{name:"invoice"},{default:Iu(()=>[i.myStore.invoiceModal?(fe(),Ho(c,{key:0})):St("",!0)]),_:1}),st(u)])]))])):St("",!0)}const ML=Bi(CL,[["render",OL]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zr=typeof window<"u";function LL(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const be=Object.assign;function eh(t,e){const n={};for(const i in e){const r=e[i];n[i]=fn(r)?r.map(t):t(r)}return n}const Fo=()=>{},fn=Array.isArray,FL=/\/$/,UL=t=>t.replace(FL,"");function th(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(i=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=qL(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function VL(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function BL(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ns(e.matched[i],n.matched[r])&&lE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ns(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$L(t[n],e[n]))return!1;return!0}function $L(t,e){return fn(t)?uy(t,e):fn(e)?uy(e,t):t===e}function uy(t,e){return fn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function qL(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let r=n.length-1,s,o;for(s=0;s<i.length;s++)if(o=i[s],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var _a;(function(t){t.pop="pop",t.push="push"})(_a||(_a={}));var Uo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Uo||(Uo={}));function jL(t){if(!t)if(Zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UL(t)}const KL=/^[^#]+#/;function HL(t,e){return t.replace(KL,"#")+e}function WL(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const El=()=>({left:window.pageXOffset,top:window.pageYOffset});function GL(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=WL(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ly(t,e){return(history.state?history.state.position-e:-1)+t}const ud=new Map;function zL(t,e){ud.set(t,e)}function QL(t){const e=ud.get(t);return ud.delete(t),e}let YL=()=>location.protocol+"//"+location.host;function hE(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),cy(c,"")}return cy(n,t)+i+r}function XL(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const p=hE(t,location),g=n.value,w=e.value;let C=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}C=w?d.position-w.position:0}else i(p);r.forEach(D=>{D(n.value,g,{delta:C,type:_a.pop,direction:C?C>0?Uo.forward:Uo.back:Uo.unknown})})};function c(){o=n.value}function u(d){r.push(d);const p=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(be({},d.state,{scroll:El()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function hy(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?El():null}}function JL(t){const{history:e,location:n}=window,i={value:hE(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:YL()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=be({},e.state,hy(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});s(c,l,!0),i.value=c}function a(c,u){const l=be({},r.value,e.state,{forward:c,scroll:El()});s(l.current,l,!0);const h=be({},hy(i.value,c,null),{position:l.position+1},u);s(c,h,!1),i.value=c}return{location:i,state:r,push:a,replace:o}}function ZL(t){t=jL(t);const e=JL(t),n=XL(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=be({location:"",base:t,go:i,createHref:HL.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function eF(t){return typeof t=="string"||t&&typeof t=="object"}function dE(t){return typeof t=="string"||typeof t=="symbol"}const ai={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fE=Symbol("");var dy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dy||(dy={}));function Rs(t,e){return be(new Error,{type:t,[fE]:!0},e)}function Mn(t,e){return t instanceof Error&&fE in t&&(e==null||!!(t.type&e))}const fy="[^/]+?",tF={sensitive:!1,strict:!1,start:!0,end:!0},nF=/[.+*?^${}()[\]/\\]/g;function iF(t,e){const n=be({},tF,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(nF,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:w,optional:C,regexp:D}=d;s.push({name:g,repeatable:w,optional:C});const L=D||fy;if(L!==fy){p+=10;try{new RegExp(`(${L})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${g}" (${L}): `+G.message)}}let N=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(N=C&&u.length<2?`(?:/${N})`:"/"+N),C&&(N+="?"),r+=N,p+=20,C&&(p+=-8),w&&(p+=-20),L===".*"&&(p+=-50)}l.push(p)}i.push(l)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=s[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:w,optional:C}=p,D=g in u?u[g]:"";if(fn(D)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const L=fn(D)?D.join("/"):D;if(!L)if(C)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=L}}return l||"/"}return{re:o,score:i,keys:s,parse:a,stringify:c}}function rF(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sF(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=rF(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(py(i))return 1;if(py(r))return-1}return r.length-i.length}function py(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oF={type:0,value:""},aF=/[a-zA-Z0-9_]/;function cF(t){if(!t)return[[]];if(t==="/")return[[oF]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,c,u="",l="";function h(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:c==="("?n=2:aF.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function uF(t,e,n){const i=iF(cF(t.path),n),r=be(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lF(t,e){const n=[],i=new Map;e=yy({strict:!1,end:!0,sensitive:!1},e);function r(l){return i.get(l)}function s(l,h,d){const p=!d,g=hF(l);g.aliasOf=d&&d.record;const w=yy(e,l),C=[g];if("alias"in l){const N=typeof l.alias=="string"?[l.alias]:l.alias;for(const G of N)C.push(be({},g,{components:d?d.record.components:g.components,path:G,aliasOf:d?d.record:g}))}let D,L;for(const N of C){const{path:G}=N;if(h&&G[0]!=="/"){const K=h.record.path,ne=K[K.length-1]==="/"?"":"/";N.path=h.record.path+(G&&ne+G)}if(D=uF(N,h,w),d?d.alias.push(D):(L=L||D,L!==D&&L.alias.push(D),p&&l.name&&!gy(D)&&o(l.name)),g.children){const K=g.children;for(let ne=0;ne<K.length;ne++)s(K[ne],D,d&&d.children[ne])}d=d||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&c(D)}return L?()=>{o(L)}:Fo}function o(l){if(dE(l)){const h=i.get(l);h&&(i.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&i.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&sF(l,n[h])>=0&&(l.record.path!==n[h].record.path||!pE(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!gy(l)&&i.set(l.record.name,l)}function u(l,h){let d,p={},g,w;if("name"in l&&l.name){if(d=i.get(l.name),!d)throw Rs(1,{location:l});w=d.record.name,p=be(my(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&my(l.params,d.keys.map(L=>L.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(L=>L.re.test(g)),d&&(p=d.parse(g),w=d.record.name);else{if(d=h.name?i.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw Rs(1,{location:l,currentLocation:h});w=d.record.name,p=be({},h.params,l.params),g=d.stringify(p)}const C=[];let D=d;for(;D;)C.unshift(D.record),D=D.parent;return{name:w,path:g,params:p,matched:C,meta:fF(C)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function my(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function hF(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dF(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dF(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function gy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fF(t){return t.reduce((e,n)=>be(e,n.meta),{})}function yy(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function pE(t,e){return e.children.some(n=>n===t||pE(t,n))}const mE=/#/g,pF=/&/g,mF=/\//g,gF=/=/g,yF=/\?/g,gE=/\+/g,vF=/%5B/g,wF=/%5D/g,yE=/%5E/g,_F=/%60/g,vE=/%7B/g,IF=/%7C/g,wE=/%7D/g,bF=/%20/g;function Tp(t){return encodeURI(""+t).replace(IF,"|").replace(vF,"[").replace(wF,"]")}function EF(t){return Tp(t).replace(vE,"{").replace(wE,"}").replace(yE,"^")}function ld(t){return Tp(t).replace(gE,"%2B").replace(bF,"+").replace(mE,"%23").replace(pF,"%26").replace(_F,"`").replace(vE,"{").replace(wE,"}").replace(yE,"^")}function TF(t){return ld(t).replace(gF,"%3D")}function SF(t){return Tp(t).replace(mE,"%23").replace(yF,"%3F")}function CF(t){return t==null?"":SF(t).replace(mF,"%2F")}function hu(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function AF(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(gE," "),o=s.indexOf("="),a=hu(o<0?s:s.slice(0,o)),c=o<0?null:hu(s.slice(o+1));if(a in e){let u=e[a];fn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function vy(t){let e="";for(let n in t){const i=t[n];if(n=TF(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(fn(i)?i.map(s=>s&&ld(s)):[i&&ld(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function kF(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=fn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const DF=Symbol(""),wy=Symbol(""),Sp=Symbol(""),_E=Symbol(""),hd=Symbol("");function mo(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function li(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Rs(4,{from:n,to:e})):h instanceof Error?a(h):eF(h)?a(Rs(2,{from:e,to:h})):(s&&i.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(i&&i.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function nh(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(xF(a)){const u=(a.__vccOpts||a)[e];u&&r.push(li(u,n,i,s,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=LL(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&li(d,n,i,s,o)()}))}}return r}function xF(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _y(t){const e=Cn(Sp),n=Cn(_E),i=zt(()=>e.resolve(ss(t.to))),r=zt(()=>{const{matched:c}=i.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Ns.bind(null,l));if(d>-1)return d;const p=Iy(c[u-2]);return u>1&&Iy(l)===p&&h[h.length-1].path!==p?h.findIndex(Ns.bind(null,c[u-2])):d}),s=zt(()=>r.value>-1&&OF(n.params,i.value.params)),o=zt(()=>r.value>-1&&r.value===n.matched.length-1&&lE(n.params,i.value.params));function a(c={}){return PF(c)?e[ss(t.replace)?"replace":"push"](ss(t.to)).catch(Fo):Promise.resolve()}return{route:i,href:zt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const NF=ov({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_y,setup(t,{slots:e}){const n=Ls(_y(t)),{options:i}=Cn(Sp),r=zt(()=>({[by(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[by(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Rd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),RF=NF;function PF(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OF(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!fn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Iy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const by=(t,e,n)=>t??e??n,MF=ov({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Cn(hd),r=zt(()=>t.route||i.value),s=Cn(wy,0),o=zt(()=>{let u=ss(s);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=zt(()=>r.value.matched[o.value]);gc(wy,zt(()=>o.value+1)),gc(DF,a),gc(hd,r);const c=Td();return Eo(()=>[c.value,a.value,t.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!Ns(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Ey(n.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,C=Rd(d,be({},g,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Ey(n.default,{Component:C,route:u})||C}}});function Ey(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const LF=MF;function FF(t){const e=lF(t.routes,t),n=t.parseQuery||AF,i=t.stringifyQuery||vy,r=t.history,s=mo(),o=mo(),a=mo(),c=fT(ai);let u=ai;Zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=eh.bind(null,E=>""+E),h=eh.bind(null,CF),d=eh.bind(null,hu);function p(E,q){let V,X;return dE(E)?(V=e.getRecordMatcher(E),X=q):X=E,e.addRoute(X,V)}function g(E){const q=e.getRecordMatcher(E);q&&e.removeRoute(q)}function w(){return e.getRoutes().map(E=>E.record)}function C(E){return!!e.getRecordMatcher(E)}function D(E,q){if(q=be({},q||c.value),typeof E=="string"){const f=th(n,E,q.path),m=e.resolve({path:f.path},q),I=r.createHref(f.fullPath);return be(f,m,{params:d(m.params),hash:hu(f.hash),redirectedFrom:void 0,href:I})}let V;if("path"in E)V=be({},E,{path:th(n,E.path,q.path).path});else{const f=be({},E.params);for(const m in f)f[m]==null&&delete f[m];V=be({},E,{params:h(E.params)}),q.params=h(q.params)}const X=e.resolve(V,q),ye=E.hash||"";X.params=l(d(X.params));const $e=VL(i,be({},E,{hash:EF(ye),path:X.path})),ue=r.createHref($e);return be({fullPath:$e,hash:ye,query:i===vy?kF(E.query):E.query||{}},X,{redirectedFrom:void 0,href:ue})}function L(E){return typeof E=="string"?th(n,E,c.value.path):be({},E)}function N(E,q){if(u!==E)return Rs(8,{from:q,to:E})}function G(E){return Y(E)}function K(E){return G(be(L(E),{replace:!0}))}function ne(E){const q=E.matched[E.matched.length-1];if(q&&q.redirect){const{redirect:V}=q;let X=typeof V=="function"?V(E):V;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=L(X):{path:X},X.params={}),be({query:E.query,hash:E.hash,params:"path"in X?{}:E.params},X)}}function Y(E,q){const V=u=D(E),X=c.value,ye=E.state,$e=E.force,ue=E.replace===!0,f=ne(V);if(f)return Y(be(L(f),{state:typeof f=="object"?be({},ye,f.state):ye,force:$e,replace:ue}),q||V);const m=V;m.redirectedFrom=q;let I;return!$e&&BL(i,X,V)&&(I=Rs(16,{to:m,from:X}),$i(X,X,!0,!1)),(I?Promise.resolve(I):ce(m,X)).catch(b=>Mn(b)?Mn(b,2)?b:rn(b):De(b,m,X)).then(b=>{if(b){if(Mn(b,2))return Y(be({replace:ue},L(b.to),{state:typeof b.to=="object"?be({},ye,b.to.state):ye,force:$e}),q||m)}else b=Re(m,X,!0,ue,ye);return le(m,X,b),b})}function U(E,q){const V=N(E,q);return V?Promise.reject(V):Promise.resolve()}function ce(E,q){let V;const[X,ye,$e]=UF(E,q);V=nh(X.reverse(),"beforeRouteLeave",E,q);for(const f of X)f.leaveGuards.forEach(m=>{V.push(li(m,E,q))});const ue=U.bind(null,E,q);return V.push(ue),Qr(V).then(()=>{V=[];for(const f of s.list())V.push(li(f,E,q));return V.push(ue),Qr(V)}).then(()=>{V=nh(ye,"beforeRouteUpdate",E,q);for(const f of ye)f.updateGuards.forEach(m=>{V.push(li(m,E,q))});return V.push(ue),Qr(V)}).then(()=>{V=[];for(const f of E.matched)if(f.beforeEnter&&!q.matched.includes(f))if(fn(f.beforeEnter))for(const m of f.beforeEnter)V.push(li(m,E,q));else V.push(li(f.beforeEnter,E,q));return V.push(ue),Qr(V)}).then(()=>(E.matched.forEach(f=>f.enterCallbacks={}),V=nh($e,"beforeRouteEnter",E,q),V.push(ue),Qr(V))).then(()=>{V=[];for(const f of o.list())V.push(li(f,E,q));return V.push(ue),Qr(V)}).catch(f=>Mn(f,8)?f:Promise.reject(f))}function le(E,q,V){for(const X of a.list())X(E,q,V)}function Re(E,q,V,X,ye){const $e=N(E,q);if($e)return $e;const ue=q===ai,f=Zr?history.state:{};V&&(X||ue?r.replace(E.fullPath,be({scroll:ue&&f&&f.scroll},ye)):r.push(E.fullPath,ye)),c.value=E,$i(E,q,V,ue),rn()}let j;function Ae(){j||(j=r.listen((E,q,V)=>{if(!Ya.listening)return;const X=D(E),ye=ne(X);if(ye){Y(be(ye,{replace:!0}),X).catch(Fo);return}u=X;const $e=c.value;Zr&&zL(ly($e.fullPath,V.delta),El()),ce(X,$e).catch(ue=>Mn(ue,12)?ue:Mn(ue,2)?(Y(ue.to,X).then(f=>{Mn(f,20)&&!V.delta&&V.type===_a.pop&&r.go(-1,!1)}).catch(Fo),Promise.reject()):(V.delta&&r.go(-V.delta,!1),De(ue,X,$e))).then(ue=>{ue=ue||Re(X,$e,!1),ue&&(V.delta&&!Mn(ue,8)?r.go(-V.delta,!1):V.type===_a.pop&&Mn(ue,20)&&r.go(-1,!1)),le(X,$e,ue)}).catch(Fo)}))}let Ve=mo(),ze=mo(),Be;function De(E,q,V){rn(E);const X=ze.list();return X.length?X.forEach(ye=>ye(E,q,V)):console.error(E),Promise.reject(E)}function Te(){return Be&&c.value!==ai?Promise.resolve():new Promise((E,q)=>{Ve.add([E,q])})}function rn(E){return Be||(Be=!E,Ae(),Ve.list().forEach(([q,V])=>E?V(E):q()),Ve.reset()),E}function $i(E,q,V,X){const{scrollBehavior:ye}=t;if(!Zr||!ye)return Promise.resolve();const $e=!V&&QL(ly(E.fullPath,0))||(X||!V)&&history.state&&history.state.scroll||null;return Cd().then(()=>ye(E,q,$e)).then(ue=>ue&&GL(ue)).catch(ue=>De(ue,E,q))}const sn=E=>r.go(E);let Mt;const jr=new Set,Ya={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:C,getRoutes:w,resolve:D,options:t,push:G,replace:K,go:sn,back:()=>sn(-1),forward:()=>sn(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:ze.add,isReady:Te,install(E){const q=this;E.component("RouterLink",RF),E.component("RouterView",LF),E.config.globalProperties.$router=q,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ss(c)}),Zr&&!Mt&&c.value===ai&&(Mt=!0,G(r.location).catch(ye=>{}));const V={};for(const ye in ai)V[ye]=zt(()=>c.value[ye]);E.provide(Sp,q),E.provide(_E,Ls(V)),E.provide(hd,c);const X=E.unmount;jr.add(E),E.unmount=function(){jr.delete(E),jr.size<1&&(u=ai,j&&j(),j=null,c.value=ai,Mt=!1,Be=!1),X()}}};return Ya}function Qr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function UF(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ns(u,a))?i.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ns(u,c))||r.push(c))}return[n,i,r]}const VF="/invoice-app/assets/icon-arrow-right-f36d1adf.svg";const BF={name:"invoice",props:["invoice"]},$F=t=>(Fs("data-v-eb81fa96"),t=t(),Us(),t),qF={class:"left flex"},jF={class:"tracking-number"},KF={class:"due-date"},HF={class:"person"},WF={class:"right flex"},GF={class:"price"},zF={key:0},QF={key:1},YF={key:2},XF=$F(()=>y("div",{class:"icon"},[y("img",{src:VF,alt:""})],-1));function JF(t,e,n,i,r,s){const o=fi("router-link");return fe(),Ho(o,{class:"invoice flex",to:{name:"Invoice",params:{invoiceId:n.invoice.invoiceId}}},{default:Iu(()=>[y("div",qF,[y("span",jF,"#"+Ne(n.invoice.invoiceId),1),y("span",KF,Ne(n.invoice.paymentDueDate),1),y("span",HF,Ne(n.invoice.clientName),1)]),y("div",WF,[y("span",GF,"$"+Ne(n.invoice.invoiceTotal),1),y("div",{class:Ia(["status-button flex",{paid:n.invoice.invoicePaid,draft:n.invoice.invoiceDraft,pending:n.invoice.invoicePending}])},[n.invoice.invoicePaid?(fe(),Ie("span",zF,"Paid")):St("",!0),n.invoice.invoiceDraft?(fe(),Ie("span",QF,"Draft")):St("",!0),n.invoice.invoicePending?(fe(),Ie("span",YF,"Pending")):St("",!0)],2),XF])]),_:1},8,["to"])}const ZF=Bi(BF,[["render",JF],["__scopeId","data-v-eb81fa96"]]),eU="/invoice-app/assets/icon-arrow-down-de87442e.svg",tU="/invoice-app/assets/illustration-empty-d4dc35f2.svg";const nU={setup(){return{myStore:Qa()}},name:"Home",data(){return{filterMenu:null,filterInvoice:null}},components:{Invoice:ZF},methods:{newInvoice(){},toggleFilterMenu(){this.filterMenu=!this.filterMenu},filterInvoices(t){if(t.target.innerText==="Clear Filter"){this.filterInvoice=null;return}this.filterInvoice=t.target.innerText}},computed:{filteredData(){return this.myStore.invoiceData.filter(t=>this.filterInvoice==="Draft"?t.invoiceDraft===!0:this.filterInvoice==="Pending"?t.invoicePending===!0:this.filterInvoice==="Paid"?t.invoicePaid===!0:t)}}},qr=t=>(Fs("data-v-c9fe2d71"),t=t(),Us(),t),iU={class:"home container"},rU={class:"header flex"},sU={class:"left flex flex-column"},oU=qr(()=>y("h1",null,"Invoices",-1)),aU={class:"right flex"},cU={key:0},uU=qr(()=>y("img",{src:eU,alt:""},null,-1)),lU={class:"filter-menu"},hU=qr(()=>y("div",{class:"inner-button"},[y("img",{src:uE,alt:""})],-1)),dU=qr(()=>y("span",null,"New Invoice",-1)),fU=[hU,dU],pU={key:0},mU={key:1,class:"empty flex flex-column"},gU=qr(()=>y("img",{src:tU,alt:""},null,-1)),yU=qr(()=>y("h3",null,"There is nothing here",-1)),vU=qr(()=>y("p",null,"Create a new invoice by clicking the New invoice button and get started",-1)),wU=[gU,yU,vU];function _U(t,e,n,i,r,s){const o=fi("Invoice");return fe(),Ie("div",iU,[y("div",rU,[y("div",sU,[oU,y("span",null,"There are "+Ne(i.myStore.invoiceData.length)+" total invoices",1)]),y("div",aU,[y("div",{onClick:e[4]||(e[4]=(...a)=>s.toggleFilterMenu&&s.toggleFilterMenu(...a)),class:"filter flex"},[y("span",null,[Wo("Filter by status "),r.filterInvoice?(fe(),Ie("span",cU,":"+Ne(r.filterInvoice),1)):St("",!0)]),uU,tt(y("ul",lU,[y("li",{onClick:e[0]||(e[0]=(...a)=>s.filterInvoices&&s.filterInvoices(...a))},"Draft"),y("li",{onClick:e[1]||(e[1]=(...a)=>s.filterInvoices&&s.filterInvoices(...a))},"Pending"),y("li",{onClick:e[2]||(e[2]=(...a)=>s.filterInvoices&&s.filterInvoices(...a))},"Paid"),y("li",{onClick:e[3]||(e[3]=(...a)=>s.filterInvoices&&s.filterInvoices(...a))},"Clear Filter")],512),[[gh,r.filterMenu]])]),y("div",{onClick:e[5]||(e[5]=(...a)=>i.myStore.invoiceToggle&&i.myStore.invoiceToggle(...a)),class:"button flex"},fU)])]),i.myStore.invoiceData.length>0?(fe(),Ie("div",pU,[(fe(!0),Ie(Wt,null,kd(s.filteredData,(a,c)=>(fe(),Ho(o,{invoice:a,key:c},null,8,["invoice"]))),128))])):(fe(),Ie("div",mU,wU))])}const IU=Bi(nU,[["render",_U],["__scopeId","data-v-c9fe2d71"]]),bU="/invoice-app/assets/icon-arrow-left-ce5a96e9.svg";const EU={name:"invoiceview",data(){return{currentInvoice:null,editInvoice:this.myStore.editInvoice}},created(){this.getCurrentInvoice()},setup(){const t=Qa(),{editInvoice:e}=uS(t);return{editInvoice:e,myStore:t}},methods:{getCurrentInvoice(){this.myStore.setCurrentInvoice(this.$route.params),this.currentInvoice=this.myStore.currentInvoiceArray[0]},toggleEditInvoice(){this.myStore.editToggle(),this.myStore.invoiceToggle()},async deleteInvoice(t){await this.myStore.deleteInvoicee(t),this.$router.push({name:"Home"})},updateStatusToPaid(t){this.myStore.updatePaidDB(t)},updateStatusToPending(t){this.myStore.updatePendingDB(t)}},watch:{editInvoice(){this.editInvoice||(this.currentInvoice=this.myStore.currentInvoiceArray[0])}}},Zn=t=>(Fs("data-v-409b031a"),t=t(),Us(),t),TU={key:0,class:"invoice-view container"},SU=Zn(()=>y("img",{src:bU,alt:""},null,-1)),CU={class:"header flex"},AU={class:"left flex"},kU=Zn(()=>y("span",null,"Status",-1)),DU={key:0},xU={key:1},NU={key:2},RU={class:"right flex"},PU={class:"invoice-details flex flex-column"},OU={class:"top flex"},MU={class:"left flex flex-column"},LU=Zn(()=>y("span",null,"#",-1)),FU={class:"right flex flex-column"},UU={class:"middle flex"},VU={class:"payment flex flex-column"},BU=Zn(()=>y("h4",null,"Invoice Date",-1)),$U=Zn(()=>y("h4",null,"Payment Date",-1)),qU={class:"bill flex flex-column"},jU=Zn(()=>y("h4",null,"Bill To",-1)),KU={class:"send-to flex flex-column"},HU=Zn(()=>y("h4",null,"Sent To",-1)),WU={class:"bottom flex flex-column"},GU={class:"billing-items"},zU=Zn(()=>y("div",{class:"heading flex"},[y("p",null,"Item Name"),y("p",null,"QTY"),y("p",null,"Price"),y("p",null,"Total")],-1)),QU={class:"total flex"},YU=Zn(()=>y("p",null,"Amount Due",-1));function XU(t,e,n,i,r,s){const o=fi("router-link");return r.currentInvoice?(fe(),Ie("div",TU,[st(o,{class:"nav-link flex",to:{name:"Home"}},{default:Iu(()=>[SU,Wo(" Go Back ")]),_:1}),y("div",CU,[y("div",AU,[kU,y("div",{class:Ia(["status-button flex",{paid:r.currentInvoice.invoicePaid,draft:r.currentInvoice.invoiceDraft,pending:r.currentInvoice.invoicePending}])},[r.currentInvoice.invoicePaid?(fe(),Ie("span",DU,"Paid")):St("",!0),r.currentInvoice.invoiceDraft?(fe(),Ie("span",xU,"Draft")):St("",!0),r.currentInvoice.invoicePending?(fe(),Ie("span",NU,"Pending")):St("",!0)],2)]),y("div",RU,[y("button",{onClick:e[0]||(e[0]=(...a)=>s.toggleEditInvoice&&s.toggleEditInvoice(...a)),class:"dark-purple"},"Edit"),y("button",{onClick:e[1]||(e[1]=a=>s.deleteInvoice(r.currentInvoice.docId)),class:"red"},"Delete"),r.currentInvoice.invoicePending?(fe(),Ie("button",{key:0,onClick:e[2]||(e[2]=a=>s.updateStatusToPaid(r.currentInvoice.docId)),class:"green"}," Mark as Paid ")):St("",!0),r.currentInvoice.invoiceDraft||r.currentInvoice.invoicePaid?(fe(),Ie("button",{key:1,onClick:e[3]||(e[3]=a=>s.updateStatusToPending(r.currentInvoice.docId)),class:"orange"}," Mark as Pending ")):St("",!0)])]),y("div",PU,[y("div",OU,[y("div",MU,[y("p",null,[LU,Wo(Ne(r.currentInvoice.invoiceId),1)]),y("p",null,Ne(r.currentInvoice.productDescription),1)]),y("div",FU,[y("p",null,Ne(r.currentInvoice.billerStreetAddress),1),y("p",null,Ne(r.currentInvoice.billerCity),1),y("p",null,Ne(r.currentInvoice.billerZipCode),1),y("p",null,Ne(r.currentInvoice.billerCountry),1)])]),y("div",UU,[y("div",VU,[BU,y("p",null,Ne(r.currentInvoice.invoiceDate),1),$U,y("p",null,Ne(r.currentInvoice.paymentDueDate),1)]),y("div",qU,[jU,y("p",null,Ne(r.currentInvoice.clientName),1),y("p",null,Ne(r.currentInvoice.clientStreetAddress),1),y("p",null,Ne(r.currentInvoice.clientCity),1),y("p",null,Ne(r.currentInvoice.clientZipCode),1),y("p",null,Ne(r.currentInvoice.clientCountry),1)]),y("div",KU,[HU,y("p",null,Ne(r.currentInvoice.clientEmail),1)])]),y("div",WU,[y("div",GU,[zU,(fe(!0),Ie(Wt,null,kd(r.currentInvoice.invoiceItemList,(a,c)=>(fe(),Ie("div",{key:c,class:"item flex"},[y("p",null,Ne(a.itemName),1),y("p",null,Ne(a.qty),1),y("p",null,Ne(a.price),1),y("p",null,Ne(a.total),1)]))),128))]),y("div",QU,[YU,y("p",null,Ne(r.currentInvoice.invoiceTotal),1)])])])])):St("",!0)}const JU=Bi(EU,[["render",XU],["__scopeId","data-v-409b031a"]]),ZU=[{path:"/",name:"Home",component:IU},{path:"/invoice/:invoiceId",name:"Invoice",component:JU}],eV=FF({history:ZL("/invoice-app"),routes:ZU}),Cp=eS(ML);Cp.use(iS());Cp.use(eV);Cp.mount("#app");
