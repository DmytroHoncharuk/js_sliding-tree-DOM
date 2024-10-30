document.querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var l=document.createElement("span"),n=e.firstChild.textContent.trim();l.textContent=n,e.firstChild.replaceWith(l),l.addEventListener("click",function(){"none"===t.style.display?t.style.display="block":t.style.display="none"})}});
//# sourceMappingURL=index.7af4c04b.js.map
