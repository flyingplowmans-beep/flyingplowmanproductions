/* Shared behaviour for the redesigned pages */

/* Header: solid background once the page is scrolled */
(function(){
  const header = document.getElementById("site-header");
  if(!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();

/* Phone menu */
(function(){
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if(!btn || !nav) return;
  function setOpen(open){
    document.body.classList.toggle("menu-open", open);
    btn.setAttribute("aria-expanded", open);
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  btn.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
  nav.addEventListener("click", e => { if(e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") setOpen(false); });
})();

/* Fade sections in as they scroll into view */
(function(){
  const els = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ els.forEach(el => el.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();
