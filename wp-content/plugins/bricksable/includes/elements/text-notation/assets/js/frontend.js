var RoughNotation=function(t){"use strict";const e="http://www.w3.org/2000/svg";class s{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function i(t,e,s,i,n){return{type:"path",ops:u(t,e,s,i,n)}}function n(t,e,s){const n=(t||[]).length;if(n>2){const i=[];for(let e=0;e<n-1;e++)i.push(...u(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&i.push(...u(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:i}}return 2===n?i(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function o(t,e,s,i,o){return function(t,e){return n(t,!0,e)}([[t,e],[t+s,e],[t+s,e+i],[t,e+i]],o)}function r(t,e,s,i,n){return function(t,e,s,i){const[n,o]=g(i.increment,t,e,i.rx,i.ry,1,i.increment*a(.1,a(.4,1,s),s),s);let r=l(n,null,s);if(!s.disableMultiStroke){const[n]=g(i.increment,t,e,i.rx,i.ry,1.5,0,s),o=l(n,null,s);r=r.concat(o)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}(t,e,n,function(t,e,s){const i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),n=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*i),o=2*Math.PI/n;let r=Math.abs(t/2),h=Math.abs(e/2);const a=1-s.curveFitting;return r+=c(r*a,s),h+=c(h*a,s),{increment:o,rx:r,ry:h}}(s,i,n)).opset}function h(t){return t.randomizer||(t.randomizer=new s(t.seed||0)),t.randomizer.next()}function a(t,e,s,i=1){return s.roughness*i*(h(s)*(e-t)+t)}function c(t,e,s=1){return a(-t,t,e,s)}function u(t,e,s,i,n,o=!1){const r=o?n.disableMultiStrokeFill:n.disableMultiStroke,h=f(t,e,s,i,n,!0,!1);if(r)return h;const a=f(t,e,s,i,n,!0,!0);return h.concat(a)}function f(t,e,s,i,n,o,r){const a=Math.pow(t-s,2)+Math.pow(e-i,2),u=Math.sqrt(a);let f=1;f=u<200?1:u>500?.4:-.0016668*u+1.233334;let l=n.maxRandomnessOffset||0;l*l*100>a&&(l=u/10);const g=l/2,d=.2+.2*h(n);let p=n.bowing*n.maxRandomnessOffset*(i-e)/200,_=n.bowing*n.maxRandomnessOffset*(t-s)/200;p=c(p,n,f),_=c(_,n,f);const m=[],w=()=>c(g,n,f),v=()=>c(l,n,f);return o&&(r?m.push({op:"move",data:[t+w(),e+w()]}):m.push({op:"move",data:[t+c(l,n,f),e+c(l,n,f)]})),r?m.push({op:"bcurveTo",data:[p+t+(s-t)*d+w(),_+e+(i-e)*d+w(),p+t+2*(s-t)*d+w(),_+e+2*(i-e)*d+w(),s+w(),i+w()]}):m.push({op:"bcurveTo",data:[p+t+(s-t)*d+v(),_+e+(i-e)*d+v(),p+t+2*(s-t)*d+v(),_+e+2*(i-e)*d+v(),s+v(),i+v()]}),m}function l(t,e,s){const i=t.length,n=[];if(i>3){const o=[],r=1-s.curveTightness;n.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<i;e++){const s=t[e];o[0]=[s[0],s[1]],o[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],o[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],o[3]=[t[e+1][0],t[e+1][1]],n.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;n.push({op:"lineTo",data:[e[0]+c(t,s),e[1]+c(t,s)]})}}else 3===i?(n.push({op:"move",data:[t[1][0],t[1][1]]}),n.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===i&&n.push(...u(t[0][0],t[0][1],t[1][0],t[1][1],s));return n}function g(t,e,s,i,n,o,r,h){const a=[],u=[],f=c(.5,h)-Math.PI/2;u.push([c(o,h)+e+.9*i*Math.cos(f-t),c(o,h)+s+.9*n*Math.sin(f-t)]);for(let r=f;r<2*Math.PI+f-.01;r+=t){const t=[c(o,h)+e+i*Math.cos(r),c(o,h)+s+n*Math.sin(r)];a.push(t),u.push(t)}return u.push([c(o,h)+e+i*Math.cos(f+2*Math.PI+.5*r),c(o,h)+s+n*Math.sin(f+2*Math.PI+.5*r)]),u.push([c(o,h)+e+.98*i*Math.cos(f+r),c(o,h)+s+.98*n*Math.sin(f+r)]),u.push([c(o,h)+e+.9*i*Math.cos(f+.5*r),c(o,h)+s+.9*n*Math.sin(f+.5*r)]),[u,a]}function d(t,e){return{maxRandomnessOffset:2,roughness:"highlight"===t?3:1.5,bowing:1,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,combineNestedSvgPaths:!1,disableMultiStroke:"double"!==t,disableMultiStrokeFill:!1,seed:e}}function p(t,s,h,a,c,u){const f=[];let l=h.strokeWidth||2;const g=function(t){const e=t.padding;if(e||0===e){if("number"==typeof e)return[e,e,e,e];if(Array.isArray(e)){const t=e;if(t.length)switch(t.length){case 4:return[...t];case 1:return[t[0],t[0],t[0],t[0]];case 2:return[...t,...t];case 3:return[...t,t[1]];default:return[t[0],t[1],t[2],t[3]]}}}return[5,5,5,5]}(h),p=void 0===h.animate||!!h.animate,_=h.iterations||2,m=h.rtl?1:0,w=d("single",u);switch(h.type){case"underline":{const t=s.y+s.h+g[2];for(let e=m;e<_+m;e++)e%2?f.push(i(s.x+s.w,t,s.x,t,w)):f.push(i(s.x,t,s.x+s.w,t,w));break}case"strike-through":{const t=s.y+s.h/2;for(let e=m;e<_+m;e++)e%2?f.push(i(s.x+s.w,t,s.x,t,w)):f.push(i(s.x,t,s.x+s.w,t,w));break}case"box":{const t=s.x-g[3],e=s.y-g[0],i=s.w+(g[1]+g[3]),n=s.h+(g[0]+g[2]);for(let s=0;s<_;s++)f.push(o(t,e,i,n,w));break}case"bracket":{const t=Array.isArray(h.brackets)?h.brackets:h.brackets?[h.brackets]:["right"],e=s.x-2*g[3],i=s.x+s.w+2*g[1],o=s.y-2*g[0],r=s.y+s.h+2*g[2];for(const h of t){let t;switch(h){case"bottom":t=[[e,s.y+s.h],[e,r],[i,r],[i,s.y+s.h]];break;case"top":t=[[e,s.y],[e,o],[i,o],[i,s.y]];break;case"left":t=[[s.x,o],[e,o],[e,r],[s.x,r]];break;case"right":t=[[s.x+s.w,o],[i,o],[i,r],[s.x+s.w,r]]}t&&f.push(n(t,!1,w))}break}case"crossed-off":{const t=s.x,e=s.y,n=t+s.w,o=e+s.h;for(let s=m;s<_+m;s++)s%2?f.push(i(n,o,t,e,w)):f.push(i(t,e,n,o,w));for(let s=m;s<_+m;s++)s%2?f.push(i(t,o,n,e,w)):f.push(i(n,e,t,o,w));break}case"circle":{const t=d("double",u),e=s.w+(g[1]+g[3]),i=s.h+(g[0]+g[2]),n=s.x-g[3]+e/2,o=s.y-g[0]+i/2,h=Math.floor(_/2),a=_-2*h;for(let s=0;s<h;s++)f.push(r(n,o,e,i,t));for(let t=0;t<a;t++)f.push(r(n,o,e,i,w));break}case"highlight":{const t=d("highlight",u);l=.95*s.h;const e=s.y+s.h/2;for(let n=m;n<_+m;n++)n%2?f.push(i(s.x+s.w,e,s.x,e,t)):f.push(i(s.x,e,s.x+s.w,e,t));break}}if(f.length){const s=function(t){const e=[];for(const s of t){let t="";for(const i of s.ops){const s=i.data;switch(i.op){case"move":t.trim()&&e.push(t.trim()),t=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}t.trim()&&e.push(t.trim())}return e}(f),i=[],n=[];let o=0;const r=(t,e,s)=>t.setAttribute(e,s);for(const a of s){const s=document.createElementNS(e,"path");if(r(s,"d",a),r(s,"fill","none"),r(s,"stroke",h.color||"currentColor"),r(s,"stroke-width",""+l),p){const t=s.getTotalLength();i.push(t),o+=t}t.appendChild(s),n.push(s)}if(p){let t=0;for(let e=0;e<n.length;e++){const s=n[e],r=i[e],h=o?c*(r/o):0,u=a+t,f=s.style;f.strokeDashoffset=""+r,f.strokeDasharray=""+r,f.animation=`rough-notation-dash ${h}ms ease-out ${u}ms forwards`,t+=h}}}}class _{constructor(t,e){this._state="unattached",this._resizing=!1,this._seed=Math.floor(Math.random()*2**31),this._lastSizes=[],this._animationDelay=0,this._resizeListener=()=>{this._resizing||(this._resizing=!0,setTimeout(()=>{this._resizing=!1,"showing"===this._state&&this.haveRectsChanged()&&this.show()},400))},this._e=t,this._config=JSON.parse(JSON.stringify(e)),this.attach()}get animate(){return this._config.animate}set animate(t){this._config.animate=t}get animationDuration(){return this._config.animationDuration}set animationDuration(t){this._config.animationDuration=t}get iterations(){return this._config.iterations}set iterations(t){this._config.iterations=t}get color(){return this._config.color}set color(t){this._config.color!==t&&(this._config.color=t,this.refresh())}get strokeWidth(){return this._config.strokeWidth}set strokeWidth(t){this._config.strokeWidth!==t&&(this._config.strokeWidth=t,this.refresh())}get padding(){return this._config.padding}set padding(t){this._config.padding!==t&&(this._config.padding=t,this.refresh())}attach(){if("unattached"===this._state&&this._e.parentElement){!function(){if(!window.__rno_kf_s){const t=window.__rno_kf_s=document.createElement("style");t.textContent="@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }",document.head.appendChild(t)}}();const t=this._svg=document.createElementNS(e,"svg");t.setAttribute("class","rough-annotation");const s=t.style;s.position="absolute",s.top="0",s.left="0",s.overflow="visible",s.pointerEvents="none",s.width="100px",s.height="100px";const i="highlight"===this._config.type;if(this._e.insertAdjacentElement(i?"beforebegin":"afterend",t),this._state="not-showing",i){const t=window.getComputedStyle(this._e).position;(!t||"static"===t)&&(this._e.style.position="relative")}this.attachListeners()}}detachListeners(){window.removeEventListener("resize",this._resizeListener),this._ro&&this._ro.unobserve(this._e)}attachListeners(){this.detachListeners(),window.addEventListener("resize",this._resizeListener,{passive:!0}),!this._ro&&"ResizeObserver"in window&&(this._ro=new window.ResizeObserver(t=>{for(const e of t)e.contentRect&&this._resizeListener()})),this._ro&&this._ro.observe(this._e)}haveRectsChanged(){if(this._lastSizes.length){const t=this.rects();if(t.length!==this._lastSizes.length)return!0;for(let e=0;e<t.length;e++)if(!this.isSameRect(t[e],this._lastSizes[e]))return!0}return!1}isSameRect(t,e){const s=(t,e)=>Math.round(t)===Math.round(e);return s(t.x,e.x)&&s(t.y,e.y)&&s(t.w,e.w)&&s(t.h,e.h)}isShowing(){return"not-showing"!==this._state}refresh(){this.isShowing()&&!this.pendingRefresh&&(this.pendingRefresh=Promise.resolve().then(()=>{this.isShowing()&&this.show(),delete this.pendingRefresh}))}show(){switch(this._state){case"unattached":break;case"showing":this.hide(),this._svg&&this.render(this._svg,!0);break;case"not-showing":this.attach(),this._svg&&this.render(this._svg,!1)}}hide(){if(this._svg)for(;this._svg.lastChild;)this._svg.removeChild(this._svg.lastChild);this._state="not-showing"}remove(){this._svg&&this._svg.parentElement&&this._svg.parentElement.removeChild(this._svg),this._svg=void 0,this._state="unattached",this.detachListeners()}render(t,e){let s=this._config;e&&(s=JSON.parse(JSON.stringify(this._config)),s.animate=!1);const i=this.rects();let n=0;i.forEach(t=>n+=t.w);const o=s.animationDuration||800;let r=0;for(let e=0;e<i.length;e++){const h=o*(i[e].w/n);p(t,i[e],s,r+this._animationDelay,h,this._seed),r+=h}this._lastSizes=i,this._state="showing"}rects(){const t=[];if(this._svg)if(this._config.multiline){const e=this._e.getClientRects();for(let s=0;s<e.length;s++)t.push(this.svgRect(this._svg,e[s]))}else t.push(this.svgRect(this._svg,this._e.getBoundingClientRect()));return t}svgRect(t,e){const s=t.getBoundingClientRect(),i=e;return{x:(i.x||i.left)-(s.x||s.left),y:(i.y||i.top)-(s.y||s.top),w:i.width,h:i.height}}}return t.annotate=function(t,e){return new _(t,e)},t.annotationGroup=function(t){let e=0;for(const s of t){const t=s;t._animationDelay=e;e+=0===t.animationDuration?0:t.animationDuration||800}const s=[...t];return{show(){for(const t of s)t.show()},hide(){for(const t of s)t.hide()}}},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
//Text Notation.
function bricksableTextNotation() {
    bricksQuerySelectorAll(document, ".bricks-element-ba-text-notation").forEach((function (e) {
        var t = bricksGetElementId(e),
            d = e.querySelector(".ba-text-notation-wrapper").dataset.baBricksTextNotationOptions,
            i = JSON.parse(d);
        if (i.hasOwnProperty("type")) {
            var n = e.querySelector(".ba-text-notation-inner"),
                a = RoughNotation.annotate(n, i),
                w;
                if (typeof Waypoint === 'undefined') {
                    w = new BricksIntersect({
                        element: e,
                        callback: function (e) {
                            window.BricksabletextNotationData.textNotationInstances[t] && a.hide(),
                                window.BricksabletextNotationData.textNotationInstances[t] = a.show();
                        }
                    });
                } else {
                    w = new Waypoint({
                        element: e,
                        handler: function () {
                            window.BricksabletextNotationData.textNotationInstances[t] && a.hide(),
                                window.BricksabletextNotationData.textNotationInstances[t] = a.show();
                        },
                        triggerOnce: !0,
                        offset: "bottom-in-view"
                    });
                }
                
            if ("ba-text-notation" === e.dataset.elementName) {
                const targetSection = null === e.parentElement.closest('.bricks-section-wrapper') ? e.offsetParent : e.parentElement.closest('.bricks-section-wrapper').lastChild;
                //const targetRow = null === e.parentElement.closest('.bricks-row-wrapper') ? e.offsetParent : e.parentElement.closest('.bricks-row-wrapper').lastChild;
                //const targetCol = null === e.parentElement.closest('.bricks-column-wrapper') ? e.offsetParent : e.parentElement.closest('.bricks-column-wrapper').lastChild;
                const targetNode = e.lastChild;
                const config = {
                    characterData: true, attributes: false, childList: false, subtree: true
                };
                const callback = function (mutationsList, observer) {
                    for (const mutation of mutationsList) {
                        console.log('Bricksable: Text Notation styling was updated.');
                        a.hide();
                        a.show();
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
                observer.observe(targetSection, config);
            }
            w;
        }

    }));
    bricksQuerySelectorAll(document, ".brxe-ba-text-notation").forEach((function (e) {
        var t, r = e.dataset.scriptId;
        try {
            t = JSON.parse(e.querySelector(".ba-text-notation-wrapper").dataset.baBricksTextNotationOptions)
        } catch (e) {
            return !1
        }
        var i = t;

        if (t.hasOwnProperty("type")) {
            var n = e.querySelector(".ba-text-notation-inner"),
                a = RoughNotation.annotate(n, i),
                w;
                if (typeof Waypoint === 'undefined') {
                    w = new BricksIntersect({
                        element: e,
                        callback: function (e) {
                            window.BricksabletextNotationData.textNotationInstances[t] && a.hide(),
                                window.BricksabletextNotationData.textNotationInstances[t] = a.show();
                        }
                    });
                } else {
                    w = new Waypoint({
                        element: e,
                        handler: function () {
                            window.BricksabletextNotationData.textNotationInstances[t] && a.hide(),
                                window.BricksabletextNotationData.textNotationInstances[t] = a.show();
                        },
                        triggerOnce: !0,
                        offset: "bottom-in-view"
                    });
                }
                /*
                if ("ba-text-notation" === e.dataset.elementName) {
                    const targetSection = null === e.parentElement.closest('.bricks-section-wrapper') ? e.offsetParent : e.parentElement.closest('.bricks-section-wrapper').lastChild;*/
            if ( e.classList.contains("brxe-ba-text-notation")) {
                const targetSection = e.parentElement;
                const targetNode = e.lastChild;
                const config = {
                    characterData: true, attributes: false, childList: false, subtree: true
                };
                const callback = function (mutationsList, observer) {
                    for (const mutation of mutationsList) {
                        console.log('Bricksable: Text Notation styling was updated.');
                        a.hide();
                        a.show();
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
                observer.observe(targetSection, config);
            }
            w;
        }
    }));
}
document.addEventListener("DOMContentLoaded", (function (e) {
    if (bricksIsFrontend) {
        document.fonts.ready.then(function () {
       		bricksableTextNotation();
        });
    }
}));