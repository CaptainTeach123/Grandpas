/*
 * 2101 Fleming Street — shared helpers
 * Small utilities used by every page (escaping, image fallbacks, storage).
 */
window.GB = (function(){
  "use strict";

  function esc(s){
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }
  function has(list, value){ return Array.isArray(list) && list.indexOf(value) !== -1; }
  function cb(label, checked){
    return '<span class="cb' + (checked ? " checked" : "") + '">' +
           '<span class="sq" aria-hidden="true"></span>' + esc(label) + '</span>';
  }
  function fillLine(text){ return '<span class="fill-line">' + esc(text || "") + '</span>'; }
  function noteLines(text, count){
    if (text){
      var filled = esc(text).replace(/\n/g, "<br>");
      return '<div class="fill-line filled-text">' + filled + '</div>' +
             Array(Math.max(count - 1, 0)).fill('<div class="fill-line"></div>').join("");
    }
    return Array(count).fill('<div class="fill-line"></div>').join("");
  }
  /* An <img> that swaps to a "photo to come" hint if the file isn't there yet. */
  function photoImg(src, alt, hint){
    hint = hint || "Photo to come";
    if (!src) return '<span class="photo-hint">' + esc(hint) + '</span>';
    return '<img src="' + esc(src) + '" alt="' + esc(alt || "") + '" loading="lazy" ' +
           'data-hint="' + esc(hint) + '" onerror="GB.imgFallback(this)">';
  }
  /* First failure: swap .jpg <-> .png and try once more. Second: show the hint. */
  function imgFallback(img){
    var src = img.getAttribute("src") || "";
    var swapped = /\.jpe?g$/i.test(src) ? src.replace(/\.jpe?g$/i, ".png")
                : /\.png$/i.test(src) ? src.replace(/\.png$/i, ".jpg") : "";
    if (swapped && !img.dataset.retried){
      img.dataset.retried = "1";
      img.setAttribute("src", swapped);
      return;
    }
    var hint = document.createElement("span");
    hint.className = "photo-hint";
    hint.textContent = img.dataset.hint || "Photo to come";
    img.replaceWith(hint);
  }
  function slug(s){
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
  function money(n){
    if (n == null || n === "" || isNaN(n)) return "";
    return "$" + Number(n).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  /* localStorage wrapped: it can be missing or throw in private windows. */
  function load(key, fallback){
    try{ var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e){ return fallback; }
  }
  function save(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); } catch(e){}
  }
  function param(name){
    try{ return new URLSearchParams(location.search).get(name) || ""; } catch(e){ return ""; }
  }

  /* Cover art: if images/cover.jpg exists it replaces the geometric print
     in the header block; otherwise the print stays. */
  function cover(){
    var header = document.querySelector("header.site");
    if (!header) return;
    var candidates = ["images/cover.jpg", "images/cover.png"];
    (function tryNext(i){
      if (i >= candidates.length) return;
      var img = new Image();
      img.onload = function(){
        header.classList.add("has-cover");
        header.style.setProperty("--cover", 'url("' + candidates[i] + '")');
      };
      img.onerror = function(){ tryNext(i + 1); };
      img.src = candidates[i];
    })(0);
  }
  /* Back-to-top button: appears once the header has scrolled out of view. */
  function toTop(){
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = '<span class="arrow" aria-hidden="true">↑</span><span>Top</span>';
    btn.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.body.appendChild(btn);
    function update(){ btn.classList.toggle("show", window.scrollY > 400); }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }
  function boot(){ cover(); toTop(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  return { esc: esc, has: has, cb: cb, fillLine: fillLine, noteLines: noteLines,
           photoImg: photoImg, imgFallback: imgFallback, slug: slug, money: money,
           load: load, save: save, param: param };
})();
