const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(()=>{timerId=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.2b05b9bc.js.map
