!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.6d01f978.js.map
