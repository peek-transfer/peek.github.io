System.register(["./usePeek-legacy-d9ed9ead.js","./index-legacy-5f25a4a8.js"],(function(e,t){"use strict";var a,o,r,l,n,s,i,c,p,v,u,d,m,f,y,b,h,g,w,x,k,C,$,I,_,S,Y,j,T,P,E,G,R,V,A,B,U,D,L,z,O,F,H,q,M,J=document.createElement("style");return J.textContent=".popover[data-v-ba871690]{position:relative}.popover-overlay[data-v-ba871690]{position:absolute;z-index:1;transition:all ease-in-out .2s var(--539ec4f1)}.popover-overlay.top-left[data-v-ba871690]{bottom:calc(100% + var(--373e2f03));left:0}.popover-overlay.top[data-v-ba871690]{bottom:calc(100% + var(--373e2f03));left:50%;transform:translate(-50%)}.popover-overlay.top-right[data-v-ba871690]{bottom:calc(100% + var(--373e2f03));right:0}.popover-overlay.bottom-left[data-v-ba871690]{top:calc(100% + var(--373e2f03));left:0}.popover-overlay.bottom[data-v-ba871690]{top:calc(100% + var(--373e2f03));left:50%;transform:translate(-50%)}.popover-overlay.bottom-right[data-v-ba871690]{top:calc(100% + var(--373e2f03));right:0}.popover.trigger-hover .popover-overlay[data-v-ba871690]{pointer-events:none;transform:translateY(-10px);opacity:0}.popover.trigger-hover .popover-overlay.bottom[data-v-ba871690],.popover.trigger-hover .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(-10px)}.popover.trigger-hover:hover .popover-overlay[data-v-ba871690]{pointer-events:auto;transition-delay:var(--a16bb7d4);transform:translateY(0);opacity:1}.popover.trigger-hover:hover .popover-overlay.bottom[data-v-ba871690],.popover.trigger-hover:hover .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(0)}.popover.trigger-focus .popover-overlay[data-v-ba871690]{pointer-events:none;transform:translateY(-10px);opacity:0}.popover.trigger-focus .popover-overlay.bottom[data-v-ba871690],.popover.trigger-focus .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(-10px)}.popover.trigger-focus:focus .popover-overlay[data-v-ba871690]{pointer-events:auto;transition-delay:var(--a16bb7d4);transform:translateY(0);opacity:1}.popover.trigger-focus:focus .popover-overlay.bottom[data-v-ba871690],.popover.trigger-focus:focus .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(0)}.popover.trigger-focus-within .popover-overlay[data-v-ba871690]{pointer-events:none;transform:translateY(-10px);opacity:0}.popover.trigger-focus-within .popover-overlay.bottom[data-v-ba871690],.popover.trigger-focus-within .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(-10px)}.popover.trigger-focus-within:focus .popover-overlay[data-v-ba871690],.popover.trigger-focus-within:focus-within .popover-overlay[data-v-ba871690]{pointer-events:auto;transition-delay:var(--a16bb7d4);transform:translateY(0);opacity:1}.popover.trigger-focus-within:focus .popover-overlay.bottom[data-v-ba871690],.popover.trigger-focus-within:focus .popover-overlay.top[data-v-ba871690],.popover.trigger-focus-within:focus-within .popover-overlay.bottom[data-v-ba871690],.popover.trigger-focus-within:focus-within .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(0)}.popover.trigger-manual .manual-hidden.popover-overlay[data-v-ba871690]{pointer-events:none;transform:translateY(-10px);opacity:0}.popover.trigger-manual .manual-hidden.popover-overlay.bottom[data-v-ba871690],.popover.trigger-manual .manual-hidden.popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(-10px)}.popover.trigger-manual .popover-overlay[data-v-ba871690]{pointer-events:auto;transition-delay:var(--a16bb7d4);transform:translateY(0);opacity:1}.popover.trigger-manual .popover-overlay.bottom[data-v-ba871690],.popover.trigger-manual .popover-overlay.top[data-v-ba871690]{transform:translate(-50%) translateY(0)}.primary-input[data-v-8e27a71c]{border-width:2px;--un-border-opacity:1;border-color:rgba(120,113,108,var(--un-border-opacity));border-radius:.375rem;padding:.5rem 1rem;outline:2px solid transparent;outline-offset:2px}.primary-input[data-v-8e27a71c]:focus{--un-border-opacity:1;border-color:rgba(28,25,23,var(--un-border-opacity))}\n",document.head.appendChild(J),{setters:[e=>{a=e._,o=e.a,r=e.b,l=e.r,n=e.P,s=e.c,i=e.u,c=e.s,p=e.d,v=e.i,u=e.e},e=>{d=e.r,m=e.g,f=e.o,y=e.d,b=e.c,h=e.a,g=e.b,w=e.n,x=e.e,k=e.u,C=e.t,$=e.f,I=e.h,_=e.i,S=e.w,Y=e.j,j=e.k,T=e.l,P=e.m,E=e.F,G=e.p,R=e.q,V=e.s,A=e._,B=e.v,U=e.x,D=e.y,L=e.z,z=e.A,O=e.B,F=e.C,H=e.D,q=e.E,M=e.G}],execute:function(){const J=(e,t)=>{const a=d(""),{splitter:o,charGapTime:r,lineGapTime:l,replayGapTime:n}={splitter:e=>e.split(""),charGapTime:500,lineGapTime:1e3,replayGapTime:2e3,...t},{sleep:s,stop:i}=(()=>{let e;return{sleep:t=>new Promise(((a,o)=>{e=o,setTimeout((()=>{a()}),t)})),stop:()=>{e?.()}}})(),c=()=>{(async()=>{for await(const t of e){let e="";for await(const{char:l,index:n}of o(t).map(((e,t)=>({char:e,index:t}))))a.value=`${e}${l}`,await s(r),e=a.value;await s(l)}await s(n),c()})().catch((()=>{}))},p=()=>{i(),a.value=""};return m()&&f((()=>{p()})),{actText:a,stop:p,start:c}},K=y({__name:"Popover",props:{visible:{type:Boolean,default:!1},trigger:{default:"hover"},placement:{default:"bottom"},showDelay:{default:"0.2s"},hideDelay:{default:"0s"},offset:{default:"0px"},overlayClass:null},setup:e=>(k((t=>({"539ec4f1":e.hideDelay,"373e2f03":e.offset,a16bb7d4:e.showDelay}))),(t,a)=>(x(),b("div",{class:w(["popover",`trigger-${e.trigger}`]),tabindex:"0"},[h(t.$slots,"default",{},void 0,!0),g("div",{class:w(["popover-overlay",[e.placement,e.overlayClass,{"manual-hidden":"manual"===e.trigger&&!e.visible}]])},[h(t.$slots,"overlay",{},void 0,!0)],2)],2)))}),N=a(K,[["__scopeId","data-v-ba871690"]]),Q=["value","placeholder"],W={class:"w-full min-h-10 bg-white shadow-xl rounded max-h-30 overflow-y-auto"},X={class:"text-center py-1 text-stone-600 text-sm"},Z=["onClick"],ee=["onClick"],te=[(e=>(R("data-v-8e27a71c"),e=e(),V(),e))((()=>g("div",{class:"i-mdi:close"},null,-1)))],ae=a(y({__name:"MainInput",props:{modelValue:null,history:null},emits:["update:modelValue","remove","select"],setup(e){const t=C("instruction-content").split("++"),{actText:a,start:r,stop:l}=J(t,{splitter:e=>e.split("--")});$((()=>{r()}));const n=d();return(t,r)=>(x(),I(N,{ref_key:"popoverEl",ref:n,trigger:"focus-within",class:"w-full z-1","overlay-class":"w-[calc(100%+8px)]"},_({default:S((()=>[g("input",{value:e.modelValue,onInput:r[0]||(r[0]=e=>t.$emit("update:modelValue",e.target?.value)),class:"primary-input my-1 w-full",type:"text",placeholder:G(a),onFocus:r[1]||(r[1]=(...e)=>G(l)&&G(l)(...e))},null,40,Q)])),_:2},[e.history?.length?{name:"overlay",fn:S((()=>[g("div",W,[g("div",X,Y(t.$t("history-connections")),1),(x(!0),b(E,null,j(e.history,((e,a)=>(x(),b("div",{class:"w-full flex items-center justify-between px-2 py-2 cursor-pointer hover:bg-stone-100 active:bg-stone-200",onClick:a=>{t.$emit("select",e.peerId),n.value?.$el.blur()}},[T(o,{name:e.name,class:"w-10 h-10 text-sm"},null,8,["name"]),g("button",{class:"icon-button",onClick:P((a=>t.$emit("remove",e.peerId)),["stop"])},te,8,ee)],8,Z)))),256))])])),key:"0"}:void 0]),1536))}}),[["__scopeId","data-v-8e27a71c"]]),oe=e=>navigator.clipboard?navigator.clipboard.writeText(e):(e=>{const t=document.createElement("input");return t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),new Promise(((e,a)=>{try{document.execCommand("copy"),e()}catch(o){a()}document.body.removeChild(t)}))})(e),re=["disabled"],le=["disabled"],ne={class:"bg-gray-800 w-full p-4 rounded-t flex flex-col items-center justify-center"},se={class:"text-white text-center text-sm py-2 break-all"},ie={class:"flex flex-col place-center px-4 py-2"},ce={class:"font-bold py-1"},pe=[g("div",{class:"i-mdi:share-variant w-5 h-5"},null,-1)],ve=[g("div",{class:"i-mdi:content-copy w-5 h-5"},null,-1)],ue=[g("div",{class:"i-mdi:email w-5 h-5"},null,-1)],de={class:"text-xs text-center text-stone-600 py-1"},me=y({__name:"ShareButton",props:{peerId:null},emits:["shared"],setup(e,{emit:a}){const o=e,n=d(!1),s=B((()=>!Boolean(o.peerId))),i=d();var c,p;c=i,p=async()=>{await L(),!0===n.value&&(n.value=!1)},$((()=>{if(!c.value)return;const e=c.value,t=t=>{e!==t.target&&t.target?.contains(e)&&p()};window.addEventListener("click",t),f((()=>{window.removeEventListener("click",t)}))}));const v=d(),u=()=>{n.value=!0,r("Share","Open_Share_Panel"),v.value||(v.value=l(4),a("shared",v.value))},m=C("link-to-your-friends-peek"),y=B((()=>((e,t=window.origin)=>{const a=new URLSearchParams;return Object.entries(e).forEach((([e,t])=>{a.append(e,t)})),`${t}?${a.toString()}`})({targetId:o.peerId,ack:v.value}))),h=async()=>{await oe(y.value),z({content:"Copy link success"})},w=()=>{window.open(`mailto:?subject=${encodeURIComponent(m)}&body=${y.value}`)},k=Boolean(navigator.share),_=()=>{navigator.share({title:m,text:m,url:y.value})},j=d(),T=d(!0);return U((()=>[n.value,y.value]),(()=>{if(n.value&&y.value){if(!j.value)return;(async(e,a,o={})=>{(await A((()=>t.import("./browser-legacy-d6874cc7.js").then((e=>e.b))),void 0)).toCanvas(a,e,o,(e=>{throw e}))})(y.value,j.value),T.value=!0}})),(e,t)=>(x(),I(N,{visible:n.value,trigger:"manual",placement:"top",offset:"-100px"},{overlay:S((()=>[g("div",{ref_key:"sharePanel",ref:i,class:"w-70 bg-white rounded-lg shadow-md flex flex-col place-center rounded cursor-pointer"},[g("div",ne,[g("canvas",{ref_key:"codeEl",ref:j,class:"w-[180px] h-[180px]"},null,512),g("div",se,Y(G(y)),1)]),g("div",ie,[g("div",ce,Y(e.$t("share-link-to-friends")),1),g("div",null,[G(k)?(x(),b("button",{key:0,class:"icon-button mx-1",onClick:_},pe)):D("",!0),g("button",{class:"icon-button mx-1",onClick:h},ve),g("button",{class:"icon-button mx-1",onClick:w},ue)]),g("div",de,Y(e.$t("share-link-generated")),1)])],512)])),default:S((()=>[g("button",{disabled:G(s),class:"icon-button w-12 flex place-center",title:"share",onClick:u},[g("button",{class:"i-mdi:ios-share w-6 h-6 disabled:bg-gray",disabled:G(s)},null,8,le)],8,re)])),_:1},8,["visible"]))}}),fe=y({__name:"GuideButton",setup(e){const t=()=>{r("Guide","Show"),O({selections:[C("ok")],content:C("peek-instruction")})};return(e,a)=>(x(),b("div",{class:"text-sm text-stone-600 underline cursor-pointer",onClick:t},Y(e.$t("whats-this")),1))}}),[ye,be]=F("connect_user_history",(()=>[])),he=()=>({info:d(((e=location.href)=>{const t=new URLSearchParams(new URL(e).search);return Object.fromEntries(t.entries())})()),clear:()=>{history.replaceState({},"0",window.origin)}}),ge={class:"w-full h-full flex justify-center"},we={class:"p-4 w-full max-w-[400px] flex flex-col items-center"},xe=g("div",{class:"header-placeholder flex-1 max-h-[10%]"},null,-1),ke={class:"w-full flex-shrink-0 mt-1 flex flex-col items-center justify-center"},Ce={class:"py-1 truncate max-w-[90%]"},$e={class:"font-bold"},Ie={class:"text-light-700 text-sm"},_e={class:"text-light-50 text-center font-bold px-1"},Se={class:"text-light-700 text-sm"},Ye={key:1,class:"text-stone-500 text-sm text-white"},je=["disabled"],Te={class:"pt-4"},Pe={class:"pt-4"},Ee=[g("div",{class:"i-mdi:head-remove-outline w-5 h-5 bg-stone-500"},null,-1)];e("default",y({__name:"Home",setup(e){const{add:t,remove:a,history:l}=(()=>{const e=d(ye()),t=t=>{e.value=e.value.filter((e=>e.peerId!==t)),be(e.value)};return{add:a=>{t(a.peerId),e.value.push(a),be(e.value)},remove:t,history:H(e)}})(),m=B((()=>[...l.value.map((e=>({...e})))].reverse())),f=d(),{openStatus:y,connectStatus:h,info:k,peek:$}=i();c((async(e,a,o)=>{const r=async()=>{await e(),_.replace("/chat"),t({name:o.name,peerId:o.peerId})};if(o.acceptAck&&f.value&&o.acceptAck===f.value)await r();else try{await O({selections:[{label:C("decline"),value:!1},{label:C("accept"),value:!0,entering:async()=>{await r()}}],content:`${o.name} ${C("wants-to-connect-confirm")}`})||a()}catch{}}));const{userInfo:I}=u(),_=M(),S=async e=>{if(!e)return;const{connect:a}=$.connectTo(e,{...I,media:p,acceptAck:E.value?.ack});r("Communication","Start");try{const e=await a;_.replace("/chat"),t({name:e.name,peerId:j.value}),r("Communication","Success")}catch(o){if(v(o))return void z({type:"error",content:C("connect-rejected")});z({type:"error",content:C("connect-failed")})}},j=d(""),P=e=>{j.value=e},{info:E,clear:R}=he(),V=(A=y,D=s.Available,L=n.Spare,new Promise(((e,t)=>{const a=U(A,((o,r)=>{if((void 0===F||F===r)&&o===D)return e(),void a();o===L&&(t(),a())}))})));var A,D,L,F;E.value?.targetId&&(j.value=E.value.targetId,V.then((()=>{S(j.value)})),R());const J=B((()=>y.value!==s.Available||h.value!==n.Spare||0===j.value.length)),K=async()=>{k.value?.peerId&&(await oe(k.value.peerId),z({content:C("copy-id-success")}))};return(e,t)=>(x(),b("div",ge,[g("div",we,[xe,g("div",ke,[T(o,{name:G(I).name,"onUpdate:name":t[0]||(t[0]=e=>G(I).name=e),editable:"",class:"h-20 text-xl"},null,8,["name"]),g("span",Ce,[q("Hello, "),g("span",$e,Y(G(I).name),1)])]),g("div",{class:w(["rounded-md flex flex-col place-center py-2 my-1 w-full min-h-20 cursor-pointer transition-all",[G(k)?.peerId?"bg-green-700":"bg-yellow-500"]])},[G(k)?.peerId?(x(),b("div",{key:0,class:"flex flex-col place-center",onClick:K},[g("div",Ie,Y(e.$t("Your id:")),1),g("div",_e,Y(G(k).peerId),1),g("div",Se,Y(e.$t("click to copy")),1)])):(x(),b("div",Ye,Y(e.$t("loading"))+"...",1))],2),T(ae,{modelValue:j.value,"onUpdate:modelValue":t[1]||(t[1]=e=>j.value=e),history:G(m),onRemove:G(a),onSelect:P},null,8,["modelValue","history","onRemove"]),g("button",{class:"primary-button my-1 w-full",disabled:G(J),onClick:t[2]||(t[2]=e=>(async()=>{S(j.value)})())},Y(G(h)===G(n).Connecting?`${e.$t("connecting")}...`:G(y)===G(s).Initial?`${e.$t("waiting")}...`:e.$t("connect")),9,je),g("div",Te,[T(me,{"peer-id":G(k)?.peerId,onShared:t[3]||(t[3]=e=>f.value=e)},null,8,["peer-id"])]),g("div",Pe,[T(fe)])]),g("button",{class:"absolute bottom-2 right-2 icon-button",title:"reset",onClick:t[4]||(t[4]=e=>(async()=>{try{await O({selections:[{label:C("yes"),value:!0},{label:C("no"),value:!1}],content:C("rest-confirm-message"),modalClose:!0,showClose:!0})&&(r("Reset"),localStorage.clear(),location.reload())}catch{}})())},Ee)]))}}))}}}));
