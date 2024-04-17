var t=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=0,r=0;t.forEach(function(t){var e=t.textContent.replace(/,/g,"");n+=parseInt(e,10)||0,r++}),e.textContent=n.toLocaleString("en-US"),o.textContent=(n/r).toLocaleString("en-US");
//# sourceMappingURL=index.2b996807.js.map
