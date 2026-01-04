(function(){
  const root = document.getElementById("press-rotator");
  if(!root) return;

  const quoteEl = root.querySelector(".rotator-quote");
  const metaEl  = root.querySelector(".rotator-meta");

  // Edit quotes here. durationMs can differ per quote.
  const slides = [
    { quote: "“Brilliantly Moving”", meta: "Rated Reviewed", durationMs: 4000 },
    { quote: "“The performances are glorious in the intimate space, telling this beautiful, reflective play that deserves a wider audience”", meta: "Fairypowered Productions ★★★★", durationMs: 7000 },
    { quote: "“Devastating, absorbing theatre that refuses easy answers or redemption. It sits with discomfort, honours complexity, and lingers long after leaving. This is essential viewing”", meta: "Everything Theatre ★★★★", durationMs: 8000 },
    { quote: "“From my seat in the front row, I felt completely immersed in the story — as though I were sitting in Kathleen’s family home or waiting beside Vanessa in the adoption clinic”", meta: "Theatre and Tonic ★★★★", durationMs: 8000 },
    { quote: "“A profoundly moving piece of theatre… it achieves moments of quiet, breathtaking power”", meta: "London Theatre 1 ★★★★", durationMs: 7000 },
    { quote: "“Plowman delivers a truly phenomenal performance… breathtaking”", meta: "Everything Theatre ★★★★", durationMs: 7000 }
  ];

  const fadeMs = 420;
  let i = 0;
  let timer = null;

  function setOpacity(op){
    quoteEl.style.transition = `opacity ${fadeMs}ms ease`;
    metaEl.style.transition  = `opacity ${fadeMs}ms ease`;
    quoteEl.style.opacity = op;
    metaEl.style.opacity  = op;
  }

  function showSlide(idx){
    const s = slides[idx];
    quoteEl.textContent = s.quote;
    metaEl.textContent  = s.meta;
  }

  function scheduleNext(){
    const duration = slides[i].durationMs || 5000;

    timer = setTimeout(() => {
      // fade out
      setOpacity(0);

      setTimeout(() => {
        // next
        i = (i + 1) % slides.length;
        showSlide(i);
        // fade in
        setOpacity(1);

        scheduleNext();
      }, fadeMs);

    }, duration);
  }

  // init
  quoteEl.style.opacity = 1;
  metaEl.style.opacity  = 1;
  showSlide(i);
  scheduleNext();
})();
